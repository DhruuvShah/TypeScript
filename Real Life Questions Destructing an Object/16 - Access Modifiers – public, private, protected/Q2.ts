// A security system restricts access levels: username is public, security logs are protected, and
// passwords are private. Write a class demonstrating this. (→ public, private, protected)

class SecuritySystem {
    public username: string;            // everyone can access
    protected securityLogs: string[];   // only class + subclasses
    private password: string;           // only inside this class

    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
        this.securityLogs = [];
    }

    public login(): void {
        this.securityLogs.push(`User ${this.username} logged in`);
        console.log(`${this.username} logged in`);
    }

    protected showLogs(): void {
        console.log("Security Logs:", this.securityLogs);
    }

    private revealPassword(): void {
        console.log("Password:", this.password);
    }
}

class AdminPanel extends SecuritySystem {
    showAdminLogs(): void {
        this.showLogs(); // allowed (protected)
    }
}

const user = new AdminPanel("Dhruv", "12345");
user.login();
user.showAdminLogs();

// user.password      ❌ ERROR (private)
// user.securityLogs  ❌ ERROR (protected)
