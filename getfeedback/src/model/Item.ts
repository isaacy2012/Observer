export class Item {
    id: string | null;
    likes: string[];
    text: string;

    constructor(text: string, id: string | null = null, likes: string[] = []) {
        this.id = id;
        this.text = text;
        this.likes = likes;
    }

    like(uuid: string) {
        this.likes.push(uuid);
    }

    unlike(uuid: string) {
        this.likes = this.likes.filter(function(val, index, arr) {
            return val !== uuid;
        });
    }

    getNLikes() {
        return this.likes.length;
    }

    hasAlreadyLiked(uuid: string): boolean {
        return this.likes.includes(uuid);
    }

    toString(): String {
        return this.text;
    }

}
