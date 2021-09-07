import React, {useEffect, useRef} from "react";
import '../css/App.css'
import '../css/LoginScreen.css';
import '../css/Header.css'
import { NewRoom } from "./NewRoom";
import {PinScreen} from "./PinScreen";
import {DBAddRoom} from "../model/Server";
import Logo from "./Logo";

export function LoginScreen(props: { onSelect: (pin: number, fail: () => void) => void}) {
    const first = useRef<HTMLDivElement>(null);
    const second = useRef<HTMLDivElement>(null);

    return (
        <div className="login-noscroll">
            <div className="header-no-color">
                <div className="row">
                    <div className="column leftColumn">
                        {<Logo/>}
                    </div>
                </div>
            </div>
            <div ref={first} className="login-container">
                <PinScreen onSelect={props.onSelect} onNewRoom={() => {
                    // Scroll to new room screen
                    if (second.current != null) {
                        second.current.scrollIntoView({behavior: "smooth"});
                    }
                }}/>
            </div>
            <div ref={second} className="login-container">
                <NewRoom onSelect={(name: string, creator: string) => {
                    DBAddRoom(name, creator).then((newRoom) => {
                        props.onSelect(newRoom.pin, () => {});
                    });
                }} onCancel={() => {
                    // Scroll back to first screen
                    if (first.current != null) {
                        first.current.scrollIntoView({behavior: "smooth"});
                    }
                }
                }/>
            </div>
        </div>
    );
}
