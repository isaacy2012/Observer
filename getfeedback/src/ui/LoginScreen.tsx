import React, {useEffect, useRef, useState} from "react";
import {UUIDContext} from "./App";
import {Button} from "react-bootstrap";
import '../css/App.css'
import '../css/LoginScreen.css';
import '../css/Header.css'
import { NewRoom } from "./NewRoom";
import {PinScreen} from "./PinScreen";
import {DBAddRoom} from "../model/Server";

export function LoginScreen(props: { onSelect: (pin: number, fail: () => void) => void}) {
    const second = useRef<HTMLDivElement>(null);

    return (
        <div className="login-noscroll">
            <div className="header-no-color">
                <div className="row">
                    <div className="column leftColumn">
                        {<p>Observe</p>}
                    </div>
                </div>
            </div>
            <div className="login-container">
                <PinScreen onSelect={props.onSelect} onNewRoom={() => {
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
                }}/>
            </div>
        </div>
    );
}
