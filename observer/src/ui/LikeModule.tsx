import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faHeartBroken} from "@fortawesome/free-solid-svg-icons";

export function LikeModule(props: { isLiked: boolean, likes: number, onLike: () => void, onUnlike: () => void }) {
    const {isLiked, likes, onLike, onUnlike} = props;

    return (
        <div className="like-button">
            <div className="side-by-side">
                <p className="likes-text noselect">{likes}</p>
                {isLiked ? (
                    <FontAwesomeIcon icon={faHeart} onClick={() => {
                        if (isLiked) {
                            onUnlike();
                        }
                    }}/>
                ) : (
                    <FontAwesomeIcon icon={faHeartBroken} onClick={() => {
                        if (!isLiked) {
                            onLike();
                        }
                    }}/>
                )}
            </div>
        </div>
    );
}
