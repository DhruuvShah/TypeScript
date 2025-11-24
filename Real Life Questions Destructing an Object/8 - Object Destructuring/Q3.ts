// A user profile object contains details such as name, age, and city. Write a program that
// extracts these values using a clean, structured approach. (→ Object destructuring)

const userProfile = {
    name: "Neha",
    age: 23,
    city: "Pune",
};

const { name: userName2, age: userAge2, city: userCity2 } = userProfile;

console.log(userName2, userAge2, userCity2);
