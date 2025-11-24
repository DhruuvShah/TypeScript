// Write a program to use Rename Properties While destructuring an object

const movie = {
    movie_title: "Inception",
    movie_year: 2010
};

const { movie_title: title, movie_year: year } = movie;

console.log(title, year);
