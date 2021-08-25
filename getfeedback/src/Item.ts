export class Item {
    text: string;
    private _ownerId: string
    input: boolean;

    constructor(text: string, input: boolean, ownerId: string) {
        this.text = text;
        this.input = input;
        this._ownerId = ownerId
    }

    static empty(): Item {
        return new Item("", true,"");
    }

    toString(): String {
        return this.text + ", " + this.input
    }

    set ownerId(value: string) {
        this._ownerId = value;
    }
}
