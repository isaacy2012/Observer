import React, {useEffect, useState} from "react";
import {Item} from "../model/Item";
import {DBAddItem, DBgetAll, DBUpdateItem} from "../model/Server";
import {Header} from "./Header";
import {AddButton} from "./AddButton";
import {FlexGrid} from "./FlexGrid";
import {InputModal} from "./InputModal";
import {UUIDContext} from "./App";
import {Room} from "../model/Room";

export function RoomScreen(props: {room: Room}) {
    const {room} = props;
    const [items, setItems] = useState<Map<string, Item>>(new Map());
    const [showModal, setShowModal] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [maxLikes, setMaxLikes] = useState(0);
    let uuid = React.useContext(UUIDContext);

    if (shouldUpdate) {
        fetchFromDB();
        setShouldUpdate(false);
    }

    function fetchFromDB() {
        DBgetAll(room).then((retItems) => {
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

    function addItem(name: string) {
        DBAddItem(room.id, name).then((newItem) => {
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
    <div className="App">
        <Header logo={<p>Observe</p>} title={room.name}
                originalPosterName={room.creator}/>
        <AddButton onClick={onClick}/>
        <FlexGrid maxLikes={maxLikes} messages={Array.from(items.values())}
                  onClick={likeItem} onUnlike={unlikeItem}/>
        <InputModal show={showModal} onClickPositive={addItem} handleClose={closeModal}/>
    </div>
    );
}
