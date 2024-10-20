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

// Task 2: Create a Section Class

class Section {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable).length; 
    }
    listbooks() {
        return this.books.map(book => {
            const status = book.isAvailable ? 'Available' : 'Borrowed';
            return `${book.title} - ${status}`;
     })
    }
    
}

// Task 3: Create a Patron Class

class Patron {
    constructor(name) {
        this.name = name;
        this.borrowedBooks = [];
    }
    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false;
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}"`);
 } else {
    console.log(`"${book.title}" is already borrowed`);
 }
    }
    returnBook(book){
        const index = this.borrowedBooks.indexOf(book);

    }
}
