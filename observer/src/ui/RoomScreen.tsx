import React, {useEffect, useRef, useState} from "react";
import {Item} from "../model/Item";
import {DBAddItem, DBGetAll, DBUpdateItem} from "../model/Server";
import {Header} from "./Header";
import {AddButton} from "./AddButton";
import {FlexGrid} from "./FlexGrid";
import {InputModal} from "./InputModal";
import {UUIDContext} from "./App";
import {Room} from "../model/Room";
import Logo from "./Logo";
import "../css/RoomScreen.css";
import {Button} from "react-bootstrap";

export function RoomScreen(props: {room: Room}) {
    const {room} = props;
    const [items, setItems] = useState<Map<string, Item>>(new Map());
    const [showModal, setShowModal] = useState(false);
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [maxLikes, setMaxLikes] = useState(0);
    const [fileDownloadUrl, setFileDownloadUrl] = useState<string>("");
    const dofileDownload = useRef<HTMLAnchorElement>(null);
    let uuid = React.useContext(UUIDContext);

    if (shouldUpdate) {
        setShouldUpdate(false);
        fetchFromDB();
    }

    function fetchFromDB() {
        DBGetAll(room.id).then((retItems) => {
            setItems(retItems);

            // get the return items and find the max likes
            let values = Array.from(retItems.values());
            values.sort((a, b) => {
                return a.getNLikes() - b.getNLikes();
            })
            if (values.length > 0) {
                setMaxLikes(values[0].getNLikes());
            }
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

    function download() {
        const output = JSON.stringify(Array.from(items.values()).map(item => {
            return {text: item.text, likes: item.getNLikes()}
        }));
        const blob = new Blob([output]);
        const fileDownloadUrl = URL.createObjectURL(blob);
        setFileDownloadUrl(fileDownloadUrl);
    }

    useEffect(() => {
        if (dofileDownload.current !== null && fileDownloadUrl !== "") {
            dofileDownload.current.click();
            URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
        }
        setFileDownloadUrl("");
    }, [fileDownloadUrl])

    return (
    <div className="App">
        <Header logo={<Logo/>} roomPin={room.pin} title={room.name}
                originalPosterName={room.creator}/>

        {room.pin !== 0 ?
            <AddButton onClick={onClick}/>
            :
            <AddButton onClick={() => alert("Sorry, you can't post to the demo room.")}/>
        }
        <Button className="download-button" onClick={download} variant="secondary">
            EXPORT
        </Button>
        <a className="hidden" download="Observer_export.txt" href={fileDownloadUrl} ref={dofileDownload}>Downloader</a>
        <FlexGrid maxLikes={maxLikes} messages={Array.from(items.values()).reverse()}
                  onClick={likeItem} onUnlike={unlikeItem}/>
        <InputModal show={showModal} onClickPositive={addItem} handleClose={closeModal}/>
    </div>
    );
}
