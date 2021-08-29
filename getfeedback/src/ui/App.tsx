import React, {useEffect, useState} from 'react';
import '../css/App.css';
import '../css/FlexGrid.css'
import {Item} from "../model/Item";
import {Header} from './Header';
import {FlexGrid} from './FlexGrid';
import {AddButton} from './AddButton';
import {InputModal} from './InputModal';
import {getAll} from '../model/Server';


function App() {
    const [items, setItems] = useState([
        new Item("Test message the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog the quick brown fox jumps over the lazy dog"),
    ])
    const [title, setTitle] = useState("Course Title")
    const [originalPosterName, setOriginalPosterName] = useState("PosterName")
    const [showModal, setShowModal] = useState(false)

    function onClick() {
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    function addItem(item: Item) {
        setItems(
            [...items, item]
        )
    }

    useEffect( () => console.log(getAll()));

    function cardOnClick(index: number) {
        let newItems = items;
        newItems[index].like();
        console.log("likes: " + newItems[index].likes);
        setItems(newItems)
    }

    return (
        <div className="App">
            <Header logo={<p>Observe</p>} title={title} originalPosterName={originalPosterName}/>
            <AddButton onClick={onClick}/>
            <FlexGrid messages={items} onClick={cardOnClick}/>
            <InputModal show={showModal} onClickPositive={addItem} handleClose={closeModal}/>
        </div>
    );
}

export default App;
