// Add a constructor to initialize Book details and create an object. (→ Constructor in class)

class BookWithConstructor {
    constructor(public title: string, public author: string) { }

    show(): void {
        console.log(`${this.title} by ${this.author}`);
    }
}

const bookObj = new BookWithConstructor("Algorithms", "CLRS");
bookObj.show();
