export class Report {
    constructor() {
        this.btnsdisplay();
        
    }
    btnsdisplay() {
        let bookslistbtn = document.getElementById('reportbookbtn');
        let userslistbtn = document.getElementById('reportuserbtn');
        let borrowlistbtn = document.getElementById('reportborrowbtn');

        bookslistbtn.addEventListener('click', this.bookslist);
        userslistbtn.addEventListener('click', this.userslist);
        borrowlistbtn.addEventListener('click', this.borrowlist);
    }
    // הצגת רשימת מנויים
    async userslist() {
        document.getElementById("aduser").style.display = "none";
        document.getElementById("adbook").style.display = "none";
        document.getElementById("reportarea").style.display = "flex";
        let userslist = document.getElementById('reportarea');
        userslist.innerHTML = '';
        let newTitle = document.createElement('h2');
        let Titlecontent = document.createTextNode('רשימת מנויים');
        newTitle.appendChild(Titlecontent);
        userslist.appendChild(newTitle);
        let users = await fetch("https://6397860286d04c76339806ee.mockapi.io/lib/v1/users").then((response) => response.json());
        users.forEach((user, index) => {
            let newDiv = document.createElement('div');
            let newText = document.createTextNode(`${index + 1}. ${user.fname} ${user.lname}, כתובת: ${user.address}.`);
            let deluser = document.createElement("button");
            deluser.setAttribute("id", `${user.id}`);
            deluser.innerText = "מחק";
            newDiv.setAttribute('class', 'useroflist');
            deluser.addEventListener('click', async (e) => {
                let users = await fetch("https://6397860286d04c76339806ee.mockapi.io/lib/v1/users").then((response) => response.json());
                users.forEach(async (deluser) => {
                    if (user.id == deluser.id) {
                        let rtrnuser =await fetch(`https://6397860286d04c76339806ee.mockapi.io/lib/v1/users/${user.id}`,
                            { method: 'DELETE' })
                            .then((response) => response.json())
                            let newreport=new Report;
                            newreport.userslist();
                    }
                })
            });
            newDiv.appendChild(newText);
            newDiv.appendChild(deluser);
            userslist.appendChild(newDiv);
        });
    }
    // הצגת רשימת ספרים
    async bookslist() {
        document.getElementById("aduser").style.display = "none";
        document.getElementById("adbook").style.display = "none";
        document.getElementById("reportarea").style.display = "flex";
        let bookslist = document.getElementById('reportarea');
        bookslist.innerHTML = '';
        let newTitle = document.createElement('h2');
        let Titlecontent = document.createTextNode('רשימת ספרים');
        newTitle.appendChild(Titlecontent);
        bookslist.appendChild(newTitle);
        let books = await fetch("https://6397860286d04c76339806ee.mockapi.io/lib/v1/books").then((response) => response.json());
        books.forEach((book, index) => {
            let newDiv = document.createElement('div');
            let newText = document.createTextNode(`${index + 1}. הספר: ${book.title}, מחבר: ${book.author}, ז'אנר: ${book.genre}.`);
            let delBook = document.createElement("button");
            delBook.setAttribute("id", `${book.title}`);
            delBook.innerText = "מחק";
            newDiv.setAttribute('class', 'bookoflist');
            newDiv.appendChild(newText);
            newDiv.appendChild(delBook);
            bookslist.appendChild(newDiv);
            delBook.addEventListener('click', async (e) => {
                let books = await fetch("https://6397860286d04c76339806ee.mockapi.io/lib/v1/books").then((response) => response.json());
                books.forEach(async (delbook) => {
                    if (book.id == delbook.id) {
                        let rtrnbook =await fetch(`https://6397860286d04c76339806ee.mockapi.io/lib/v1/books/${book.id}`,
                            { method: 'DELETE' })
                            .then((response) => response.json());
                            let newreport=new Report;
                            newreport.bookslist();
                        }
                })
            });
        });
    }
    // הצגת רשימת השאלות
    async borrowlist() {
        document.getElementById("aduser").style.display = "none";
        document.getElementById("adbook").style.display = "none";
        document.getElementById("reportarea").style.display = "flex";
        let borrowlist = document.getElementById('reportarea');
        borrowlist.innerHTML = '';
        let newTitle = document.createElement('h2');
        let Titlecontent = document.createTextNode('רשימת מנויים והשאלות');
        newTitle.appendChild(Titlecontent);
        borrowlist.appendChild(newTitle);
        let users = await fetch("https://6397860286d04c76339806ee.mockapi.io/lib/v1/users").then((response) => response.json());
        users.forEach (async(user, index) =>  {
            let userborrowDiv = document.createElement('div');
            let newUserDiv = document.createElement('div');
            let newUserText = document.createTextNode(`${index + 1}. ${user.fname} ${user.lname} השאיל את הספרים:`);
            let borrowbooksDiv = document.createElement('div');
            let borrowing = await fetch(`https://6397860286d04c76339806ee.mockapi.io/lib/v1/users/${user.id}/userbooks`).then((response) => response.json());
            borrowing.forEach((borrow, index) =>{
                let newBookDiv = document.createElement('div');
                let newBookText = document.createTextNode(`${index + 1}. ${borrow.title}, מאת: ${borrow.author}.`);
                newBookDiv.setAttribute('class', 'bookofborrow');
                newBookDiv.appendChild(newBookText);
                borrowbooksDiv.appendChild(newBookDiv);
            });
            userborrowDiv.setAttribute('class', 'userbookborrow');
            borrowbooksDiv.setAttribute('class', 'booksborrow');
            newUserDiv.setAttribute('class', 'userborrow');
            newUserDiv.appendChild(newUserText);
            userborrowDiv.appendChild(newUserDiv);
            userborrowDiv.appendChild(borrowbooksDiv);
            borrowlist.appendChild(userborrowDiv);
        });
    }
}