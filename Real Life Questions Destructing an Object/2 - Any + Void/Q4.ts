//  Demonstrate the use of any and void types in functions

function logger(value: any): void {
    console.log("Logging:", value);
}

logger("Hello");
logger(123);
logger(true);

