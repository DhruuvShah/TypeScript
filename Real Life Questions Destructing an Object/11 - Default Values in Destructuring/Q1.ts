//  A music site receives incomplete album objects; assign default values when certain fields are
// missing. Write a program. (→ Default values in destructuring)

interface Album {
    title: string;
    artist: string;
    year?: number;
}

const album: Album = {
    title: "The Wall",
    artist: "Pink Floyd",
};

const {
    title,
    artist,
    year = 2024,
} = album;

console.log(title, artist, year);