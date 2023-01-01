import { Render } from "./render.js";

export class Screendisplay {
    constructor() {
        this.#changescreen();
        this.#screencontrol();
        this.#changebook();
        this.#showlistborrow();
    }
    #changescreen() {
        let screenmng = document.getElementById('menger');
        let screengnrl = document.getElementById('genral');
        document.getElementById("mengerscreen").style.display = "none";
        document.getElementById("genralscreen").style.display = "flex";
        screenmng.addEventListener("click", () => {
            document.getElementById("mengerscreen").style.display = "flex";
            document.getElementById("genralscreen").style.display = "none";
        });
        screengnrl.addEventListener("click", () => {
            document.getElementById("mengerscreen").style.display = "none";
            document.getElementById("genralscreen").style.display = "flex";
            // let newrender=new Render;
        });
    }
    #screencontrol() {
        let newuserbtn = document.getElementById("newuserbtn");
        let newbookbtn = document.getElementById("newbookbtn");
        document.getElementById("aduser").style.display = "none";
        document.getElementById("adbook").style.display = "none";
        newuserbtn.addEventListener("click", () => {
            document.getElementById("aduser").style.display = "flex";
            document.getElementById("adbook").style.display = "none";
            document.getElementById("reportarea").style.display = "none";
        });
        newbookbtn.addEventListener("click", () => {
            document.getElementById("aduser").style.display = "none";
            document.getElementById("adbook").style.display = "flex";
            document.getElementById("reportarea").style.display = "none";
        });
    }
    #changebook() {
        let typeBook = document.getElementById('typeBook');
        document.getElementById("addEbook").style.display = "none";
        typeBook.addEventListener("change", () => {
            if (typeBook.selectedIndex == "0") {
                document.getElementById("printed").style.display = "flex";
                document.getElementById("addEbook").style.display = "none";
            } else {
                document.getElementById("printed").style.display = "none";
                document.getElementById("addEbook").style.display = "block";
            }
        });
    }
    clearinput(formID) {
        document.getElementById(formID).reset();
    }
    #showlistborrow() {
        document.getElementById("myborrowing").style.display = "none";
        let showborrow = document.getElementById('mylistbook');
        showborrow.addEventListener("click", () => {
            document.getElementById("booksArea").style.width = "70%";
            document.getElementById("myborrowing").style.display = "flex";
        });
    }
}