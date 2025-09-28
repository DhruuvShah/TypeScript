// Write a program to Create a BankAccount class with static properties for bank name. 

class BankAccout {
    static bankName: string = "World Bank";
    accountHolderName: string;
    accountBalance: number;

    constructor(accountHolderName: string, accountBalance: number) {
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }

    display(): void {
        console.log(`Bank Name: ${BankAccout.bankName}`);
        console.log(`Account Holder Name: ${this.accountHolderName}`);
        console.log(`Balance: ${this.accountBalance}`);
    }
}

let acc1 = new BankAccout("Dhruv", 9999999999999);
acc1.display();