import React, {useState} from 'react';
import {Item} from "./Item";

export function Tile(props: {str: string, updateText: (a:Item) => void}) {
    const [toRender,setRender] = useState(false)
    return (
        toRender?
            <li>
            <input id="textInput" type="text" onKeyPress={event => {
                if (event.key === 'Enter') {
                    const text: string = (document.getElementById("textInput") as HTMLInputElement).value;
                    props.updateText(new Item(text,false))
                    setRender(toRender => false)
                }
            }} autoFocus/>
            </li>
        :
        <li onClick= { () => setRender(toRender => true)} >Tile: {props.str}</li>
    );
}


