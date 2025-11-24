// A program receives user data in unknown format; inside a class method, use type assertion to
// treat it as a specific type. Demonstrate with an example. (→ Type assertion in class)

class UserProcessor {
    process(data: unknown): void {
        const user = data as { name: string; age: number };
        console.log(`User -> Name: ${user.name}, Age: ${user.age}`);
    }
}

const up = new UserProcessor();
up.process({ name: "Dhruv", age: 20 } as unknown);
