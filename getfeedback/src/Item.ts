export class Item {
    text: string
    input: boolean

    constructor(text: string, input: boolean) {
        this.text = text
        this.input = input
    }

    static empty(): Item {
        return new Item("", false)
    }

}