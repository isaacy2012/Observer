import '../css/NewRoom.css';
import {Button} from "react-bootstrap";
import React, {useRef} from "react";

export function NewRoom(props: { onSelect: (name: string, creator: string) => void }) {
    const roomNameInput = useRef<HTMLInputElement>(null);
    const creatorNameInput = useRef<HTMLInputElement>(null);


    return (
        <div className="login-selector">
            <div className="login-selector-inner">
                <div className="container">
                    <h2>Welcome to <input ref={roomNameInput} placeholder="Room Name"/></h2>
                    <h3 className="h3-separate">Created by <input ref={creatorNameInput} placeholder="Your Name"/></h3>
                </div>
                <Button variant="success" className="pin-button go-button"
                        onClick={() => {
                            if (roomNameInput.current !== null
                                && creatorNameInput.current !== null
                                && roomNameInput.current.value.trim().length > 0
                                && creatorNameInput.current.value.trim().length > 0
                            ) {
                                props.onSelect(roomNameInput.current.value, creatorNameInput.current.value);
                            }
                        }}>
                    CREATE ROOM
                </Button>
            </div>
        </div>
    );


}
