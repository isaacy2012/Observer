import React, {useEffect, useState} from 'react';
import './App.css';
import {TileList} from './TileList';
import {Item} from "./Item";


function App() {
    const [items, setItems] = useState([Item.empty()])

    function updateText(i: number, newText: string) {
        setItems(items => {
            const newItems = [...items];
            newItems[i] = new Item(newText,false);
            return newItems;
        })
    }


    useEffect(() => {
        // If no items are inputs
        if (items.filter(x => x.input).length === 0) {
            // Add a new item to the list
            setItems(items => {
                const newItems = [...items];
                newItems.push(Item.empty())
                return newItems;
            })
        }
    }, [items])


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
