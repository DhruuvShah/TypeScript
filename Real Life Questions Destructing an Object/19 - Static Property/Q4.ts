// Write a program to Create a BankAccount class with static properties for bank name

class Account {
    static bankName = "HDFC Bank";

    constructor(public number: number, public name: string) { }

    show() {
        console.log(`Bank: ${Account.bankName}, Account: ${this.number}, Name: ${this.name}`);
    }
}

const acc = new Account(999, "Rohan");
acc.show();
