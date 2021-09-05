export class Room {
    name: string;
    id: string;
    pin: number;
    creator: string;

    constructor(name: string, id: string, pin: number, creator: string) {
        this.id = id;
        this.name = name;
        this.pin = pin;
        this.creator = creator;
    }
}
