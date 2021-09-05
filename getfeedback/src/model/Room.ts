export class Room {
    name: string;
    id: string | null;
    pin: string;
    creator: string;

    constructor(name: string, id: string | null = null, pin: string, creator: string) {
        this.id = id;
        this.name = name;
        this.pin = pin;
        this.creator = creator;
    }
}