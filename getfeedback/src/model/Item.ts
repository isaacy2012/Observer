export class Item {
    text: string;

    constructor(text: string) {
        this.text = text;
    }

    static empty(): Item {
        return new Item("");
    }

    toString(): String {
        return this.text;
    }

}
