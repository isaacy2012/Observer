import React from 'react';
import "../css/App.css"
import "../css/Header.css"

export function Header(props: { logo: JSX.Element, roomPin: number, title: String, originalPosterName: String }) {
    return (
        <div className="header">
            <div className="row">
                <div className="column leftColumn">
                    {props.logo}
                    <h3 className="pin-text">{"PIN: " + props.roomPin}</h3>
                </div>
                <div className="column middleColumn">
                    <h1>{props.title}</h1>
                </div>
                <div className="column rightColumn">
                    <h3>{"Poll started by " + props.originalPosterName}</h3>
                </div>
            </div>
        </div>
    );
}


