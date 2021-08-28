import React, {useState} from 'react';
import {Item} from "../model/Item";
import { Card } from 'react-bootstrap';
import "../css/App.css"
import "../css/Tile.css"

export function Tile(props: {index: number, item: Item, onClick: (index: number) => void}) {
    const {index, item, onClick} = props;
    return (
        <Card className="bsCard" onClick={() => {onClick(index)}}>
            <Card.Body>{item.text}</Card.Body>
        </Card>
    );
}


