import React, {useEffect, useRef, useState} from "react";
import {UUIDContext} from "./App";
import {Button} from "react-bootstrap";
import '../css/PinScreen.css';
import '../css/Header.css'

export function PinScreen(props: { onSelect: (pin: number) => void }) {
    const pinInput = useRef<HTMLInputElement>(null);
    let uuid = React.useContext(UUIDContext);

    return (
        <div className="pin-container">
            <div className="header-no-color">
                <div className="row">
                    <div className="column leftColumn">
                        {<p>Observe</p>}
                    </div>
                </div>
            </div>

            <div className="pin-selector">
                <div className="pin-selector-inner">
                    <h2>Enter your room code below:</h2>
                    <input
                        type="tel" ref={pinInput} placeholder="0123456789" maxLength={10}/>
                    <div>
                        <Button onClick={() => {
                            if (pinInput.current != null) {
                                let num = parseInt(pinInput.current.value);
                                if (!isNaN(num)) {
                                    props.onSelect(num);
                                }
                            }
                        }}>
                            Go to Room
                        </Button>
                    </div>
                    <div>
                        <Button onClick={() => {
                            props.onSelect(3)
                        }}>
                            New Room
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
