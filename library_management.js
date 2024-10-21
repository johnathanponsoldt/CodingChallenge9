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

// Task 4: Create a VIPPatron Class that Inherits from Patron

class VIPPatron extends Patron {
    constructor(name, priority = true) {
        super(name);
        this.priority = priority;
    }
    borrowBook(book) {
        if (this.priority) {
            if (book.isAvailable) {
                book.isAvailable = false;
                this.borrowedBooks.push(book);
                console.log(`VIP ${this.name} borrowed "${book.title}"`);
            }
        }
    }
}

// Task 5: Handle Books Borrowing and Returning

calculateTotalBooksAvailable() 

// Task 6: Create and Manage Sections and Patrons

const fiction = new Section("fiction");
const science = new Section("Science");   // Created two new sections

const book1 = new Book("Dracula", "Bram Stoker", "2435641789");
const book2 = new Book("Silent Spring", "Rachel Carson", "3467800123");

fiction.addBook(book1);
science.addBook(book2);

const regularPatron = new Patron("Giannis Antekoumpo");

regularPatron.borrowBook(book1);
vipPatron.borrowBook(book1);
regularPatron.returnBook(book1);
fiction.listbooks();