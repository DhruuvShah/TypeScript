// An online payment system extends a basic User interface to create a VerifiedUser interface
// adding KYC details. Write a program. (→ Extending interface)

interface BasicUser {
    id: number;
    name: string;
}

interface VerifiedUser extends BasicUser {
    kycStatus: string;
    kycId: string;
}

const v1: VerifiedUser = {
    id: 101,
    name: "Rohan",
    kycStatus: "Verified",
    kycId: "KYC99887"
};

console.log(v1);
