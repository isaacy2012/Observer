export class Item {
    id: string | null;
    likes: number
    text: string;
    roomId: string;

    constructor(text: string, id: string | null = null, likes: number = 0, roomId: string) {
        this.id = id;
        this.text = text;
        this.likes = likes;
        this.roomId = roomId;
    }

    like() {
        this.likes++;
    }

    toString(): String {
        return this.text;
    }

}
