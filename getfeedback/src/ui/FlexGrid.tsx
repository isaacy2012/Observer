import React, {Component, useState} from 'react';
import {Item} from "../model/Item";
import "../css/App.css"
import "../css/FlexGrid.css"
import Masonry from "react-masonry-css"
import {Tile} from './Tile';

export function FlexGrid(props: { maxLikes: number, messages: Item[], onClick: (index: string) => void }) {

    return (
        <Masonry breakpointCols={3} className="grid"
                 columnClassName="my-masonry-grid_column">
            {props.messages.map((item) => <Tile maxLikes={props.maxLikes} key={item.id} item={item} onClick={props.onClick}/>)}
        </Masonry>

);
}


