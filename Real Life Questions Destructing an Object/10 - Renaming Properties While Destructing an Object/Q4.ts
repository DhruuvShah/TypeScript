// Write a program to use Rename Properties While destructuring an object

const matchStats = {
    totalRunsScored: 120,
    totalOversPlayed: 20,
};

const {
    totalRunsScored: runs,
    totalOversPlayed: overs,
} = matchStats;

console.log(runs, overs);
