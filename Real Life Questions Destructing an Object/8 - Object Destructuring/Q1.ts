// A mobile wallet stores a user object; extract fields like balance, name, and KYC status.
// Write a program. (→ Object destructuring)

const wallet = {
  userName: "Riya",
  balance: 1500,
  kycDone: true,
};

const { balance, userName, kycDone } = wallet;

console.log(userName, balance, kycDone);
