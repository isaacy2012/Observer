import React, {useState} from 'react';
import '../css/App.css';
import '../css/FlexGrid.css'
import {v4 as uuidv4} from "uuid";
import Cookies from "js-cookie";
import {RoomScreen} from './RoomScreen';
import {LoginScreen} from "./LoginScreen";
import {DBGetRoom} from "../model/Server";
import {Room} from "../model/Room";
import {
    BrowserRouter as Router,
    Link,
    useHistory,
    useLocation
} from "react-router-dom";

/**
 * getQuery from location for id string
 */
function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export const UUIDContext = React.createContext(makeOrGetUUID())

/**
 * Make or generate UUID if there isn't one in the cookies
 */
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

export default function AppRouter() {
    return (
        <Router>
            <App/>
        </Router>
    )
}

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [room, setRoom] = useState<Room | null>(null);
    const history = useHistory();

    /**
     * When a room pin is selected
     * @param pin the pin number of the requested room
     * @param fail the function to run on failure
     */
    function onSelect(pin: number, fail: () => void) {
        DBGetRoom(pin).then((newRoom) => {
            // set query string
            let params = new URLSearchParams();
            params.append("id", String(pin));
            history.push({search: params.toString()});

            // set room
            setRoom(newRoom);
            setLoggedIn(true);
        }).catch(() => {
            fail();
        })
    }

    /**
     * If there is a query string, log in
     */
    let queryString = useQuery().get("id");
    if (queryString && !loggedIn) {
        console.log("room: " + queryString)
        onSelect(parseInt(queryString), () => {
            // set query string
            let params = new URLSearchParams();
            history.push({search: params.toString()});
            window.location.reload();
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

