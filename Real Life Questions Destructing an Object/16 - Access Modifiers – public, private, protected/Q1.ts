// A banking system restricts account details: some are public (account holder), some protected
// (transaction history), and some private (PIN). Implement a class. (→ public, private,
// protected)

class BankAccount {
    public accountHolder: string;
    protected transactionHistory: number[] = [];
    private pin: number;

    constructor(accountHolder: string, pin: number) {
        this.accountHolder = accountHolder;
        this.pin = pin;
    }

    public deposit(amount: number): void {
        this.transactionHistory.push(amount);
    }

    protected getHistory(): number[] {
        return this.transactionHistory;
    }
}

class SavingAccount extends BankAccount {
    showHistory(): void {
        console.log("History:", this.getHistory());
    }
}

const acc = new SavingAccount("Rahul", 1234);
acc.deposit(1000);
acc.showHistory();
// acc.pin  // ERROR: private
