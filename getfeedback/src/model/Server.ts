import {Item} from "./Item";

//Fetch all items from database by get requesting the server
export async function DBgetAll() {
    const items: Item[] = [];
    const response = await fetch('http://localhost:9000/get-items');
    await response.json().then(data => {
        for(let i = 0; i<data.length; i++) {
            const {text}=data[i];
            items.push(new Item(text))
        }
    });
    return items;
}

//Add an item to the database by sending a post request and returning the id of item added to db
export async function DBaddItem(data: Item) {
    const response = await fetch('http://localhost:9000/add-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    let _id;
    await response.json().then(data => _id = data._id);
    return _id;
}