// מחלקת מנויים
export class User {
    #firstname;
    #lastname;
    address;
    phone;
    email;
    password;
    mybook=[];
    constructor(firstname, lastname, address, phone, email, password) {
        this.#firstname = firstname;
        this.#lastname = lastname;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.password = password;
    }
    fullname() {
        return `${this.#firstname} ${this.#lastname}`;
    }
}