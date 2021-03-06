import React, {useState} from 'react';
import {Item} from "../model/Item";
import {Card} from 'react-bootstrap';
import {StyleSheet, css} from "aphrodite";
import "../css/App.css"
import "../css/LikeModule.css"
import {LikeModule} from "./LikeModule";
import {UUIDContext} from './App';

/**
 * Convert hsl to hex (adapted from https://stackoverflow.com/questions/36721830/convert-hsl-to-rgb-and-hex)
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

/**
 * Get the hex color from likes
 * @param hue The hue
 * @param maxLikes The maximum number of likes of any item in this room
 * @param thisLikes The number of likes of this item
 */
function getHexColorFromLikes(hue: number, maxLikes: number, thisLikes: number): string {
    let calcMaxLikes = maxLikes >= 10 ? maxLikes : 10;
    if (thisLikes === 0) {
        return (hslToHex(hue, 0, 95));
    } else if (thisLikes <= calcMaxLikes) {
        return (hslToHex(hue, thisLikes / calcMaxLikes * 53, 95 - 18 * (thisLikes / calcMaxLikes)));
    } else {
        return (hslToHex(hue, 53, 95 - 18));
    }
}

/**
 * Create the style for the card
 * @param maxLikes The maximum number of likes of any item in this room
 * @param thisLikes The number of likes of this item
 */
const styles = (maxLikes: number, thisLikes: number) => {
    return StyleSheet.create({
        card: {
            backgroundColor: getHexColorFromLikes(115, maxLikes, thisLikes),
            textAlign: "left",
            borderRadius: "10px",
            marginTop: "30px",
            marginRight: "15px",
            marginLeft: "15px",
            padding: "20px",
            border: "none",
        },
    })
}

export function Tile(props: { maxLikes: number, item: Item, onLike: (index: string) => void, onUnlike: (index: string) => void }) {
    const {maxLikes, item, onLike, onUnlike} = props;
    const [shouldUpdate, setShouldUpdate] = useState(false);
    let uuid = React.useContext(UUIDContext);

    if (shouldUpdate) {
        setShouldUpdate(false);
    }

    return (
        <Card className={css(styles(maxLikes, item.getNLikes()).card)}>
            <Card.Body>{item.text}</Card.Body>
            <LikeModule isLiked={item.hasAlreadyLiked(uuid)} likes={item.getNLikes()}
                        onLike={() => {
                            if (item.id !== null) {
                                onLike(item.id);
                            } else {
                                alert("Error syncing with database. Please refresh and try again.");
                            }
                            setShouldUpdate(true);
                        }}
                        onUnlike={() => {
                            if (item.id !== null) {
                                onUnlike(item.id);
                            } else {
                                alert("Error syncing with database. Please refresh and try again.");
                            }
                        }
                        }/>
        </Card>
    );
}
