// A streaming service keeps a constant playlist object; any update should create a fresh playlist
// without mutating old one. Write a program. (→ const immutability)

const playlist = ["Song1", "Song2"];

const newPlaylist = [...playlist, "Song3"];

console.log(playlist);
console.log(newPlaylist);
