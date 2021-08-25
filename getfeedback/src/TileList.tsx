import React from 'react';
import {Tile} from "./Tile";

export function TileList(props: { items: string[] }) {
    return (
        <ul>{
            props.items.map(x => {
                return <Tile str={x} upDateText={x => x}/>
            })
        }</ul>
    );
}


