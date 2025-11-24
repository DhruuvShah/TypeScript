// A travel website receives incomplete destination objects and needs to assign default values
// when missing. Write a program demonstrating this. (→ Default values in destructuring)

type Destination = {
    city: string;
    country?: string;
};

const destination: Destination = {
    city: "Jaipur",
};

const { city: destCity, country = "India" } = destination;

console.log(destCity, country);
