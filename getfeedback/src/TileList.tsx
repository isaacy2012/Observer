import React from 'react';
import {Tile} from "./Tile";
import {Item} from "./Item";

export function TileList(props: { items: Item[], updateText: (index: number, newText: string, input: boolean) => void }) {
    return (
        <ul>{
            props.items.map((x, i) => {
                return <Tile item={x} updateText={(text,input) => props.updateText(i, text,input)}/>
            })
        }</ul>
    );
}


