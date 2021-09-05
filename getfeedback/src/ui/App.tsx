import React, {useEffect, useState} from 'react';
import '../css/App.css';
import '../css/FlexGrid.css'
import {v4 as uuidv4} from "uuid";
import Cookies from "js-cookie";
import { RoomScreen } from './RoomScreen';
import {LoginScreen} from "./LoginScreen";
import {DBGetRoom} from "../model/Server";
import {Room} from "../model/Room";


export const UUIDContext = React.createContext(makeOrGetUUID())

function makeOrGetUUID(): string {
    let str_uuid = "uuid";
    let uuid_null = Cookies.get(str_uuid);
    if (uuid_null === null || uuid_null === undefined) {
        let new_uuid = uuidv4();
        Cookies.set(str_uuid, new_uuid);
        return new_uuid;
    }
    return uuid_null;
}


function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [room, setRoom] = useState<Room | null>(null);

    function onSelect(pin: number, fail: () => void) {
        DBGetRoom(pin).then((newRoom) => {
            setRoom(newRoom);
            setLoggedIn(true);
        }).catch(() => {
            fail();
        })
    }

    return (
        <UUIDContext.Provider value={makeOrGetUUID()}>
            {loggedIn && room !== null ?
                <RoomScreen room={room}/>
                :
                <LoginScreen onSelect={onSelect}/>
            }
        </UUIDContext.Provider>
    );
}

export default App;
