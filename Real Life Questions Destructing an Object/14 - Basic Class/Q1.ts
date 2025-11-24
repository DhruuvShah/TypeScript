// Create a class representing a Book with attributes (title, author) and a method to show
// details. (→ Basic Person/Book class)

class Book {
    title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    showDetails(): void {
        console.log(`Book: ${this.title} by ${this.author}`);
    }
}

const b1 = new Book("TS Basics", "Dhruv");
b1.showDetails();
