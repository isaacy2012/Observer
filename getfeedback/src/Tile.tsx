import React, {useState} from 'react';
import {Item} from "./Item";

export function Tile(props: {item: Item, updateText: (newText:string, input:boolean) => void}) {
    const {item, updateText} = props;
    return (
        item.input?
            <li>
            <input id="textInput" type="text" onKeyPress={event => {
                if (event.key === 'Enter') {
                    const text: string = (document.getElementById("textInput") as HTMLInputElement).value;
                    updateText(text,false);
                }
            }} autoFocus/>
            </li>
        :
        <li onClick={e => updateText(item.text,true)}>Tile: {props.item.text}</li>
    );
}


