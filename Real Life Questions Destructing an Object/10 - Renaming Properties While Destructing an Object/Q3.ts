//  A student database stores user objects with long property names. Write a program to extract
// and rename properties for easier usage in the system. (→ Rename properties while
// destructuring)

const studentInfo = {
    registration_number_long: "ABC123",
    full_name_long: "Mehul Shah",
};

const {
    registration_number_long: regNo,
    full_name_long: fullName,
} = studentInfo;

console.log(regNo, fullName);
