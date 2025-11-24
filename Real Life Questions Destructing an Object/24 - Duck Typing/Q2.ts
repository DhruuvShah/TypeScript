// A warehouse system treats inventory items the same way if they share similar structure (id,
// name). Demonstrate duck typing.. (→ Duck typing)

interface Item {
    id: number;
    name: string;
}

function printItem(i: Item) {
    console.log(`ID: ${i.id}, Name: ${i.name}`);
}

const box = { id: 1, name: "Box" };
const tape = { id: 2, name: "Tape", qty: 10 };

printItem(box);
printItem(tape);
