import React from 'react';
import {Tile} from "./Tile";

export function TileList(props: { items: string[], updateText: (index: number, newText: string) => void }) {
    return (
        <ul>{
            props.items.map((x, i) => {
                return <Tile str={x} updateText={newText => props.updateText(i, newText)}/>
            })
        }</ul>
    );
}


