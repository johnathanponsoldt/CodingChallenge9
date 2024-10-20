// Task 1: Create a Book Class

class Book {
    constructor(title, author, ISBN, isAvailable = true) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this._isAvailable = isAvailable;
    }
    getdetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }
    get isAvailable() {
        return this._isAvailable;
    }
    set isAvailable(status) {
        this._isAvailable = status;
    }
}
