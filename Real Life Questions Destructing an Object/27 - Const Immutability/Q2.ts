// Rename long property names (teamPoints, matchPlayed) while extracting from an object.
// Write a program. (→ Renaming properties)

const stats = {
    teamPoints: 55,
    matchPlayed: 12
};

const { teamPoints: points, matchPlayed: games } = stats;

console.log(points, games);
