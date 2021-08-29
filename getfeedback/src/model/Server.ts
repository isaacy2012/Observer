import {Item} from "./Item";

export async function getAll() {
    const response = await fetch('http://localhost:9000/get-items');
    return await response.json();
}

/**
async function addItem(data:Item){
    const response = await fetch('http://localhost:9000/add-item'{
        method: 'POST',
        body:
    })
}
 */
