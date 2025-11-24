// Write a program to demonstrate type assertion in a class method

class DataHandler {
    handle(input: unknown): void {
        const str = input as string;    // convert unknown → string
        console.log("String length:", str.length);
    }
}

const dh = new DataHandler();
dh.handle("Hello World");
