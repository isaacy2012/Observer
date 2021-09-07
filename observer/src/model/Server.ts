import {Item} from "./Item";
import {Room} from "./Room";
const ip: string = "room.powellnz.com";

/**
 * Fetch all items from database by get requesting the server
 * @param roomId the id of the room to get all items from
 * @return items the items from the room
 */
export async function DBGetAll(roomId: string): Promise<Map<string, Item>> {
    const items: Map<string, Item> = new Map();
    const response = await fetch(`https://${ip}:9000/get-items`, {
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

/**
 * Add an item to the database
 * @param roomId the id of the room in which the item is from
 * @param text the text of the item
 * @return item the newly created Item object
 */
export async function DBAddItem(roomId: string, text: string): Promise<Item> {
    const response = await fetch(`https://${ip}:9000/add-item`, {
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

/**
 * Update an item in the database
 * @param itemToAdd the item being updated
 * @return itemToAdd the item provided
 */
export async function DBUpdateItem(itemToAdd: Item): Promise<Item> {
    await fetch(`https://${ip}:9000/update-item`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemToAdd)
    });
    return itemToAdd;
}

/**
 * add a room to the database
 * @param name the name of the room
 * @param creator the room's creator
 * @return room the newly created room object
 */
export async function DBAddRoom(name: string, creator: string): Promise<Room> {
    const response = await fetch(`https://${ip}:9000/add-room`, {
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

/**
 * Gets a room from the database
 * @param pin the pin number of the room to get
 * @return the new room object if the room exists in the datbaase otherwise Promise.reject
 */
export async function DBGetRoom(pin: number): Promise<Room> {
    const response = await fetch(`https://${ip}:9000/get-room`, {
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


