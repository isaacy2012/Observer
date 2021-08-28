export class Item {
    title: string;
    text: string;

    constructor(title: string, text: string) {
        this.title = title;
        this.text = text;
    }

    static empty(): Item {
        return new Item("", "");
    }

    toString(): String {
        return this.text;
    }

}
