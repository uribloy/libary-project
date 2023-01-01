import { Ebook } from "/EbookClass.js"

// הרחבה של מחלקת ספרים אלקטרונים למודפסים
export class Pbook extends Ebook {
    quantity;
    constructor(title, author, genre, pages, photo,type,borrow, quantity) {
        super(title, author, genre, pages, photo,type,borrow)
        this.borrow = borrow;
        this.quantity = quantity;
    }
}