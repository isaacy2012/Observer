import React, {useEffect, useState} from 'react';
import '../css/App.css';
import '../css/Grid.css'
import {Item} from "../model/Item";
import {Header} from './Header';
import {FlexGrid} from './FlexGrid';
import { AddButton } from './AddButton';

function callApi() {
    fetch("http://localhost:9000/testAPI")
        .then(res => console.log(res.text()))
}

function App() {
    const [items, setItems] = useState([
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
        new Item("Test Title", "Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
    ])
    const [title, setTitle] = useState("Course Title")
    const [originalPosterName, setOriginalPosterName] = useState("PosterName")

    function onClick() {
        console.log("onclick");
    }

    function cardOnClick(index: number) {
        console.log("card click: " + index.toString());
    }

    return (
        <div className="App">
            <Header logo={<p>Observe</p>} title={title} originalPosterName={originalPosterName}/>
            <AddButton onClick={onClick}/>
            <FlexGrid messages={items} onClick={cardOnClick}/>
        </div>
    );
}

export default App;
