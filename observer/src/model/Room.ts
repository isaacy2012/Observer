export class Room {
    name: string;
    pin: number;
    creator: string;
    id: string;

    constructor(name: string, pin: number, creator: string, id: string) {
        this.name = name;
        this.pin = pin;
        this.creator = creator;
        this.id = id;
    }
}
