import '../css/NewRoom.css';
import {Button} from "react-bootstrap";
import React, {useRef} from "react";

export function NewRoom(props: { onSelect: (name: string, creator: string) => void, onCancel: () => void}) {
    const roomNameInput = useRef<HTMLInputElement>(null);
    const creatorNameInput = useRef<HTMLInputElement>(null);


    return (
        <div className="login-selector">
            <div className="login-selector-inner">
                <div className="container">
                    <div className="cancel-button-div">
                        {/*<button type="button" className="btn cancel-button" aria-label="Close" onClick={props.onCancel}>*/}
                            <i className="fa fa-chevron-up cancel-button" onClick={props.onCancel} aria-hidden="true"/>
                        {/*</button>*/}
                    </div>
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
