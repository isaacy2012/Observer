import React from 'react';
import {Item} from "../model/Item";
import "../css/App.css"
import "../css/FlexGrid.css"
import Masonry from "react-masonry-css"
import {Tile} from './Tile';

const breakpointColumns = {
    default: 3,
    1000: 2,
    700: 1
};

export function FlexGrid(props: { maxLikes: number, messages: Item[], onClick: (index: string) => void, onUnlike: (index: string) => void }) {

    return (
        <Masonry breakpointCols={breakpointColumns} className="grid"
                 columnClassName="my-masonry-grid_column">
            {props.messages.map((item) => <Tile maxLikes={props.maxLikes} key={item.id} item={item}
                                                onLike={props.onClick} onUnlike={props.onUnlike}/>)}
        </Masonry>

    );
}
