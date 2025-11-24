// Write a program to use public, private, and protected access modifiers in a class

class DemoAccess {
    public title: string;
    protected internalCode: number;
    private secretKey: string;

    constructor(title: string, internalCode: number, secretKey: string) {
        this.title = title;
        this.internalCode = internalCode;
        this.secretKey = secretKey;
    }

    public showTitle(): void {
        console.log("Title:", this.title);
    }

    protected showInternalCode(): void {
        console.log("Internal Code:", this.internalCode);
    }

    private showSecretKey(): void {
        console.log("Secret Key:", this.secretKey);
    }
}

class DemoSub extends DemoAccess {
    revealProtected(): void {
        this.showInternalCode(); // allowed
    }
}

const obj = new DemoSub("Access Demo", 12345, "SECRET123");

obj.showTitle();
obj.revealProtected();

// obj.secretKey      ❌ private
// obj.internalCode   ❌ protected
