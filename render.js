import { Upbook } from "./script.js";
import { Pushbook } from "./script.js";

export class Render {
    constructor() {
      this.render();
    }
    async render() {
      let libarybooks = document.getElementById("booksArea");
      libarybooks.innerHTML = "";
      let books = await fetch("https://6397860286d04c76339806ee.mockapi.io/lib/v1/books").then((response) => response.json());
      books.forEach(async (book) => {
        let bookfild = document.createElement("div");
        bookfild.setAttribute("class", "book");
        bookfild.setAttribute("id", `${book.Id}`);
        let bookphoto = document.createElement("img");
        bookphoto.setAttribute("class", "bookImage");
        bookphoto.setAttribute("src", book.photo);
        let bookTitle = document.createElement("h3");
        bookTitle.innerHTML = book.title;
        let bookauthor = document.createElement("p");
        bookauthor.innerHTML = book.author;
        let bookpage = document.createElement("p");
        bookpage.innerHTML = `${book.pages} עמודים`;
        let bookgenre = document.createElement("p");
        bookgenre.innerHTML = `ז'אנר: ${book.genre}`;
        let bookbtn = document.createElement("button");
        bookbtn.setAttribute("class", "btnaddbook")
        bookbtn.setAttribute("id", `btn${book.Id}`);
        bookbtn.innerText = "הוסף";
        bookbtn.addEventListener("click",async () => {
          if  (book.type == "printed") {
            if (book.borrow == "false") {
              alert("מצטערים, ספר זה זמין לקריאה במקום בלבד");
            } else if (book.quantity == 0) {
              alert("מצטערים, הספר לא זמין להשאלה כרגע");
            }
          } else {
             if  (book.type == "ebook")  {
                let newpush=new Pushbook;
                await newpush.pushTomybook(book);
            }
          }
          if (book.type == "printed" && book.quantity > 0 && book.borrow == "true") {
            let newpush=new Pushbook;
            await newpush.pushTomybook(book);
            let newupdate = new Upbook;
            await newupdate.updatebook(book);
          }
        });
        bookfild.appendChild(bookphoto);
        bookfild.appendChild(bookTitle);
        bookfild.appendChild(bookauthor);
        bookfild.appendChild(bookpage);
        bookfild.appendChild(bookgenre);
        bookfild.appendChild(bookbtn);
        libarybooks.appendChild(bookfild);
      });
    }
}