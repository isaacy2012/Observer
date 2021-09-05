import {Item} from "./Item";
import {Room} from "./Room";


//Fetch all items from database by get requesting the server
export async function DBgetAll(room: Room): Promise<Map<string, Item>> {
    const items: Map<string, Item> = new Map();
    const response = await fetch('http://localhost:9000/get-items',{
        method: 'POST',
            headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(room)
    });
    await response.json().then(data => {
        for(let i = 0; i<data.length; i++) {
            const {text, _id, likes, room}=data[i];
            items.set(_id, new Item(text, _id, likes, room))
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
    await response.json().then(response => itemToAdd.id = response._id);
    return itemToAdd;
}

//Update an item in database by sending a post request and returning true if successful otherwise false
export async function DBUpdateItem(itemToAdd: Item): Promise<Item> {
    await fetch('http://localhost:9000/update-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemToAdd)
    });
    return itemToAdd;
}

//Get a room from DB
export async function DBAddRoom(roomToAdd: Room): Promise<Room> {
    const response = await fetch('http://localhost:9000/add-room', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(roomToAdd)
    });
    await response.json().then(response => roomToAdd.id = response._id);
    return roomToAdd;
}

//Update an item in database by sending a post request and returning true if successful otherwise false
export async function DBGetRoom(pin: String): Promise<Room> {
    const response = await fetch('http://localhost:9000/get-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pin)
    });
    return response.json()
        .then(data => {
            const {_id, name, pin, maker} = data;
          return new Room(name, _id, pin, maker);
        });
}


