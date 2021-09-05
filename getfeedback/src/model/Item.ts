export class Item {
    roomId: string;
    id: string;
    likes: string[];
    text: string;

    constructor(roomId: string, text: string, id: string, likes: string[] = []) {
        this.roomId = roomId;
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
