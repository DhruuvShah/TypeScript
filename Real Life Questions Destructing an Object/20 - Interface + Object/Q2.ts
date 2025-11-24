// A library app stores book info using an interface. Initialize one object.. (→ Interface + object)

interface Book {
    title: string;
    author: string;
    pages: number;
}

const book1: Book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464
};

console.log(book1);
