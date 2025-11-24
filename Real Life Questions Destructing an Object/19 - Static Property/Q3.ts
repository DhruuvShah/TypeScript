// A banking app uses a shared bank name across all accounts. Implement a class that stores
// bank name using a static property. (→ Static property class)

class BankAccount {
    static bankName = "State Bank of India";

    constructor(public accountNo: number, public holder: string) { }

    display() {
        console.log(`${BankAccount.bankName} - ${this.holder} (${this.accountNo})`);
    }
}

const b1 = new BankAccount(101, "Amit");
b1.display();
