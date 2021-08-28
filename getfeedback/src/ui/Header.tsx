import React from 'react';
import "../css/App.css"
import "../css/Header.css"

export function Header(props: {logo: JSX.Element, title: String, originalPosterName: String}) {
    const {title, originalPosterName} = props;
    return (
        <div className="header">
            <div className="row">
                <div className="column leftColumn">
                    {props.logo}
                </div>
                <div className="column middleColumn">
                    <h1>{title}</h1>
                </div>
                <div className="column rightColumn">
                    <h3>{"Poll started by " + originalPosterName}</h3>
                </div>
            </div>
        </div>
    );
}


