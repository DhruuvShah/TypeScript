// Write a program to use object destructuring to extract properties from an object

const movie = {
    title: "Inception",
    year: 2010,
    rating: 8.8,
};

const { title, year, rating } = movie;

console.log(title, year, rating);
