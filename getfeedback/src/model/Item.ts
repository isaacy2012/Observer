export class Item {
    likes: number
    text: string;

    constructor(text: string) {
        this.text = text;
        this.likes = 0;
    }

    like() {
        this.likes++;
    }

    static empty(): Item {
        return new Item("");
    }

    toString(): String {
        return this.text;
    }

}
