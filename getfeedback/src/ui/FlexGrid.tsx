import React, {Component, useState} from 'react';
import {Item} from "../model/Item";
import "../css/App.css"
import "../css/Grid.css"
import Masonry from "react-masonry-css"
import {Tile} from './Tile';

export function FlexGrid(props: { messages: Item[], onClick: (index: number) => void }) {
    const {messages, onClick} = props;

    return (
        <Masonry breakpointCols={3} className="grid"
                 columnClassName="my-masonry-grid_column">
            {messages.map((x, i) => <Tile key={i} index={i} item={x} onClick={onClick}/>)}
        </Masonry>

);
}


