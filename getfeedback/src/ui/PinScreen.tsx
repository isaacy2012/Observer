import {Button} from "react-bootstrap";
import React, {useRef} from "react";

import '../css/PinScreen.css';


export function PinScreen(props: {onSelect: (num: number) => void, onNewRoom: () => void}) {
    const pinInput = useRef<HTMLInputElement>(null);

    return (
        <div className="login-selector">
            <div className="login-selector-inner">
                <h2>Enter your room code below:</h2>
                <input ref={pinInput} className="room-code-input" placeholder="0123456789" maxLength={10}/>
                <div>
                    <Button variant="success" className="pin-button go-button"
                            onClick={() => {
                                if (pinInput.current != null) {
                                    let num = parseInt(pinInput.current.value);
                                    if (!isNaN(num)) {
                                        props.onSelect(num);
                                    }
                                }
                            }}>
                        ENTER
                    </Button>
                </div>
                <p className="new-room-text">Or, start a new room</p>
                <div>
                    <Button className="pin-button" variant="outline-secondary"
                            onClick={props.onNewRoom}>
                        NEW ROOM
                    </Button>
                </div>
            </div>
        </div>
    );
}
