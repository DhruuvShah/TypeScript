// Inside a class, customer input comes as unknown; treat it as a specific type using type
// assertion. Write a program. (→ Type assertion)

class InputHandler {
    handle(input: unknown): void {
        const asString = input as string; // assertion
        console.log("Length of input string:", asString.length);
    }
}

const handler = new InputHandler();
handler.handle("Hello World");
// handler.handle(123); // will compile but may break at runtime
