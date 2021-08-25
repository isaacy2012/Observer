import React, {useState} from 'react';
import {Item} from "./Item";

export function Tile(props: {item: Item, updateText: (newText:string) => void}) {
    return (
        props.item.input?
            <li>
            <input id="textInput" type="text" onKeyPress={event => {
                if (event.key === 'Enter') {
                    const text: string = (document.getElementById("textInput") as HTMLInputElement).value;
                    props.updateText(text);
                }
            }} autoFocus/>
            </li>
        :
        <li>Tile: {props.item.text}</li>
    );
}


