import React from 'react';
import {Tile} from "./Tile";
import {Item} from "./Item";

export function TileList(props: { items: Item[], updateText: (index: number, newText: string) => void }) {
    return (
        <ul>{
            props.items.map((x, i) => {
                return <Tile text ={x} updateText={newText => props.updateText(i, newText)}/>
            })
        }</ul>
    );
}


