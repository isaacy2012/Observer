import {Item} from "./Item";


//Fetch all items from database by get requesting the server
export async function DBgetAll() {
    const items: Item[] = [];
    const response = await fetch('http://localhost:9000/get-items');
    await response.json().then(data => {
        for(let i = 0; i<data.length; i++) {
            const {text,_id,likes}=data[i];
            items.push(new Item(text,_id,likes))
        }
    });
    return items;
}

//Add an item to the database by sending a post request and returning the id of item added to db
export async function DBAddItem(itemToAdd: Item): Promise<Item> {
    const response = await fetch('http://localhost:9000/add-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemToAdd)
    });
    await response.json().then(response => itemToAdd._id = response._id);
    return itemToAdd;
}
