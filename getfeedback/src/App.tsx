import React, {useState} from 'react';
import './App.css';
import {TileList} from './TileList';
import {Item} from "./Item";


function App() {
    const [items, setItems] = useState([Item.empty()])

    function updateText(i: number, newText: string) {
        setItems(items => {
            const newItems = [...items];
            newItems[i] = new Item(newText,true);
            return newItems;
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome to COURSE NAME
                </p>
                <p>
                    By Isaac Young and George Powell
                </p>
                <TileList items={items} updateText={updateText}/>
            </header>
        </div>
    );
}

export default App;
