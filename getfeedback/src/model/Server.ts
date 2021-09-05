import {Item} from "./Item";
import {Room} from "./Room";


//Fetch all items from database by get requesting the server
export async function DBgetAll(roomId: string): Promise<Map<string, Item>> {
    const items: Map<string, Item> = new Map();
    const response = await fetch('http://localhost:9000/get-items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: roomId })
    });
    await response.json().then(data => {
        for (let i = 0; i < data.length; i++) {
            const { text, _id, likes, room } = data[i];
            items.set(_id, new Item(room, text, _id, likes))
        }
    });
    return items;
}

//Add an item to the database by sending a post request and returning the id of item added to db
export async function DBAddItem(roomId: string, text: string): Promise<Item> {
    const response = await fetch('http://localhost:9000/add-item', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ roomId, text })
    });
    let id = "";
    await response.json().then(response => id = response._id);
    return new Item(roomId, text, id);
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
export async function DBAddRoom(name: string, creator: string): Promise<Room> {
    const response = await fetch('http://localhost:9000/add-room', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, creator })
    });
    return response.json()
        .then(data => {
            const { name, pin, creator, _id } = data;
            return new Room(name, pin, creator, _id);
        });

}

//Update an item in database by sending a post request and returning true if successful otherwise false
export async function DBGetRoom(pin: number): Promise<Room> {
    const response = await fetch('http://localhost:9000/get-room', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pin: pin })
    });
    return response.json()
        .then(data => {
            const { name, pin, creator, _id } = data;
            return new Room(name, pin, creator, _id);
        }).catch(() => {
            return Promise.reject();
        });
}


