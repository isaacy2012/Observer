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


    /**
     * Like this item
     * @param uuid the uuid of the liker
     */
    like(uuid: string) {
        this.likes.push(uuid);
    }

    /**
     * Unlike this item
     * @param uuid the uuid of the unliker
     */
    unlike(uuid: string) {
        this.likes = this.likes.filter(function(val, index, arr) {
            return val !== uuid;
        });
    }

    /**
     * Get the number of likes this item has
     */
    getNLikes() {
        return this.likes.length;
    }

    /**
     * Check if this person has already liked this item
     * @param uuid
     */
    hasAlreadyLiked(uuid: string): boolean {
        return this.likes.includes(uuid);
    }

    toString(): String {
        return this.text;
    }

}
