import React, {useEffect, useState} from 'react';
import '../css/App.css';
import '../css/FlexGrid.css'
import {Item} from "../model/Item";
import {Header} from './Header';
import {FlexGrid} from './FlexGrid';
import {AddButton} from './AddButton';
import {InputModal} from './InputModal';
import {DBAddItem, DBgetAll, DBUpdateItem} from "../model/Server";
import {v4 as uuidv4} from "uuid";
import Cookies from "js-cookie";


export const UUIDContext = React.createContext(makeOrGetUUID())

function makeOrGetUUID(): string {
    let str_uuid = "uuid";
    let uuid_null = Cookies.get(str_uuid);
    if (uuid_null === null || uuid_null === undefined) {
        let new_uuid = uuidv4();
        console.log("notnull? " + new_uuid);
        Cookies.set(str_uuid, new_uuid);
        return new_uuid;
    }
    console.log("wasnull? " + uuid_null);
    return uuid_null;
}


function App() {
    const [items, setItems] = useState<Map<string, Item>>(new Map());
    const [title, setTitle] = useState<string>("Course Title");
    const [originalPosterName, setOriginalPosterName] = useState<string>("PosterName");
    const [showModal, setShowModal] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [maxLikes, setMaxLikes] = useState(0);
    let uuid = React.useContext(UUIDContext);


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
        let item = items.get(id);
        if (item == null) {
            return;
        }
        item.like(uuid);
        // items.set(id, item);
        console.log(item);
        DBUpdateItem(item).then((_) => {
            setShouldUpdate(true);
        })
    }

    function unlikeItem(id: string) {
        let item = items.get(id);
        if (item == null) {
            return;
        }
        item.unlike(uuid);
        // items.set(id, item);
        console.log(item);
        DBUpdateItem(item).then((_) => {
            setShouldUpdate(true);
        })
    }

    return (
        <UUIDContext.Provider value={makeOrGetUUID()}>
            <div className="App">
                <Header logo={<p>Observe</p>} title={title}
                        originalPosterName={originalPosterName}/>
                <AddButton onClick={onClick}/>
                <FlexGrid maxLikes={maxLikes} messages={Array.from(items.values())}
                          onClick={likeItem} onUnlike={unlikeItem}/>
                <InputModal show={showModal} onClickPositive={addItem} handleClose={closeModal}/>
            </div>
        </UUIDContext.Provider>
    );
}

export default App;
