// מחלקת ספרים אלקטרונים
export class Ebook {
    title;
    author;
    genre;
    pages;
    photo;
    type;
    borrow;
    constructor(title, author, genre, pages, photo,type) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.pages = pages;
        this.photo = photo;
        this.type= type;
        this.borrow = true;
    }
}