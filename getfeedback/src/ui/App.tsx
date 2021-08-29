import React, {useState} from 'react';
import '../css/App.css';
import '../css/FlexGrid.css'
import {Item} from "../model/Item";
import {Header} from './Header';
import {FlexGrid} from './FlexGrid';
import {AddButton} from './AddButton';
import {InputModal} from './InputModal';
import {DBAddItem} from "../model/Server";


function App() {
    const [items, setItems] = useState<Item[]>([])
    const [title, setTitle] = useState<string>("Course Title")
    const [originalPosterName, setOriginalPosterName] = useState<string>("PosterName")
    const [showModal, setShowModal] = useState<boolean>(false)

    function onClick() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    function addItem(item: Item) {
        DBAddItem(item).then((newItem) => {
                setItems(
                    [...items, newItem]
                )
            }
        ).catch(() => {
            alert("Sorry, item couldn't be added to the database. Please refresh and try again.")
        })
    }

    function cardOnClick(index: number) {
        let newItems = items;
        newItems[index].like();
        console.log("likes: " + newItems[index].likes);
        setItems(newItems)
    }

    return (
        <div className="App">
            <Header logo={<p>Observe</p>} title={title} originalPosterName={originalPosterName}/>
            <AddButton onClick={onClick}/>
            <FlexGrid messages={items} onClick={cardOnClick}/>
            <InputModal show={showModal} onClickPositive={addItem} handleClose={closeModal}/>
        </div>
    );
}

export default App;
