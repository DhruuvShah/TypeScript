// Write a program to extend an interface and create a new type with additional fields

interface Base {
    id: number;
}

interface Extended extends Base {
    description: string;
}

const obj: Extended = {
    id: 10,
    description: "Extended interface example"
};

console.log(obj);
