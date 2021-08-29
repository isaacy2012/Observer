import {Item} from "../model/Item";
import React, {useState} from "react";
import {Card} from "react-bootstrap";
import {css} from "aphrodite";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faHeartBroken} from "@fortawesome/free-solid-svg-icons";

export function LikeModule(props: { isLiked: boolean, likes: number, onClick: () => void }) {
    const {likes, onClick} = props;
    const [liked, setLiked] = useState(props.isLiked);

    return (
            <div className="like-button">
                <div className="side-by-side">
                    <p className="likes-text noselect">{likes}</p>
                    {liked ? (
                        <FontAwesomeIcon icon={faHeart} onClick={() => {
                            if (liked) {
                                onClick();
                                setLiked(false);
                            }
                        }}/>
                    ) : (
                        <FontAwesomeIcon icon={faHeartBroken} onClick={() => {
                            if (!liked) {
                                onClick();
                                setLiked(true);
                            }
                        }} />
                    )}
                </div>
            </div>
    );
}
