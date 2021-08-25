import React, {useState} from 'react';
import './App.css';
import {TileList} from './TileList';


class Item {
    text: string
    input: boolean

    constructor(text: string, input: boolean) {
        this.text = text
        this.input = input
    }

    static empty(): Item {
        return new Item("", false)
    }

}

function App() {
    const [items, setItems] = useState([Item.empty()])

    function updateText(i: number, newText: string) {
        setItems(items => {
            return items.map((x, index) => index === i ? {newText}:{x});
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
