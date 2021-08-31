import React, {useEffect, useState} from 'react';
import {Item} from "../model/Item";
import {Card} from 'react-bootstrap';
import {StyleSheet, css} from "aphrodite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeart, faHeartBroken} from "@fortawesome/free-solid-svg-icons";
import "../css/App.css"
import "../css/LikeModule.css"
import {LikeModule} from "./LikeModule";

/**
 * @param h hue
 * @param s saturation
 * @param l luma
 */
function hslToHex(h: number, s: number, l: number) {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}

function getHexColorFromLikes(hue: number, maxLikes: number, thisLikes: number): string {
    if (thisLikes == 0) {
        return (hslToHex(hue, 0, 95));
    } else if (thisLikes <= maxLikes) {
        return (hslToHex(hue, thisLikes/maxLikes*53, 95-18*(thisLikes/maxLikes)));
    } else {
        return (hslToHex(hue, 53, 95-18));
    }
}

const styles = (maxLikes: number, likes: number) => {
    return StyleSheet.create({
        card: {
            backgroundColor: getHexColorFromLikes(115, maxLikes, likes),
            textAlign: "left",
            borderRadius: "10px",
            margin: "20px",
            padding: "20px",
            border: "none",
        },
    })
}

export function Tile(props: { maxLikes: number, item: Item, onClick: (index: string) => void }) {
    const {maxLikes, item, onClick} = props;
    const [shouldUpdate, setShouldUpdate] = useState(false);
    const [liked, setLiked] = useState(false);

    if (shouldUpdate) {
        setShouldUpdate(false);
    }

    return (
        <Card className={css(styles(maxLikes, item.likes).card)}>
            <Card.Body>{item.text}</Card.Body>
            <LikeModule isLiked={false} likes={item.likes} onClick={() => {
                if (item.id !== null) {
                    onClick(item.id);
                } else {
                    alert("Error syncing with database. Please refresh and try again.");
                }
                setShouldUpdate(true);
            }}/>
        </Card>
    );
}


