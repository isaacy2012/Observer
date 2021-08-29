export class Item {
    id: string | null;
    likes: number
    text: string;

    constructor(text: string, id: string | null = null, likes: number = 0) {
        this.id = id;
        this.text = text;
        this.likes = likes;
    }

    like() {
        this.likes++;
    }

    toString(): String {
        return this.text;
    }

}
