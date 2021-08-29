import React, {useEffect, useState} from 'react';
import '../css/App.css';
import '../css/FlexGrid.css'
import {Item} from "../model/Item";
import {Header} from './Header';
import {FlexGrid} from './FlexGrid';
import {AddButton} from './AddButton';
import {InputModal} from './InputModal';
import {DBAddItem, DBgetAll} from "../model/Server";


function App() {
    const [items, setItems] = useState<Map<string, Item>>(new Map());
    const [title, setTitle] = useState<string>("Course Title");
    const [originalPosterName, setOriginalPosterName] = useState<string>("PosterName");
    const [showModal, setShowModal] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [maxLikes, setMaxLikes] = useState(0);

    if (shouldUpdate) {
        fetchFromDB();
        setShouldUpdate(false);
    }

    function fetchFromDB() {
        DBgetAll().then((retItems) => {
            setItems(retItems);
        });
    }


    useEffect(() => {
        fetchFromDB()
    }, []);

    function onClick() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    function addItem(item: Item) {
        DBAddItem(item).then((newItem) => {
                let newItems = items;
                newItems.set(newItem.id!!, newItem);
                setItems(newItems);
                setShouldUpdate(true);
            }
        ).catch(() => {
            alert("Sorry, item couldn't be added to the database. Please refresh and try again.")
        })
    }

    function likeItem(id: string) {
        let newItems = items;
        newItems.get(id)!!.like();
        setItems(newItems);
        setMaxLikes(Math.max(...Array.from(newItems.values()).map(item => item.likes)));
    }

    return (
        <div className="App">
            <Header logo={<p>Observe</p>} title={title} originalPosterName={originalPosterName}/>
            <AddButton onClick={onClick}/>
            <FlexGrid maxLikes={maxLikes} messages={Array.from(items.values())} onClick={likeItem}/>
            <InputModal show={showModal} onClickPositive={addItem} handleClose={closeModal}/>
        </div>
    );
}

export default App;
