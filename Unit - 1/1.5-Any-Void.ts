//  Demonstrate the use of `any` and `void` types in functions.

function logMessage(message: any): void{
    console.log("Message:",message);
}
logMessage("Hello TypeScript!");
logMessage(12345);