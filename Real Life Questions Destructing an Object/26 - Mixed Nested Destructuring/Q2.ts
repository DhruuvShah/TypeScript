// A sports management system stores team data in both arrays and objects. Extract nested
// details using mixed destructuring. (→ Nested/mixed destructuring)

const team = {
    teamName: "Warriors",
    players: [
        { name: "Rohit", role: "Batsman" },
        { name: "Virat", role: "Captain" }
    ]
};

const {
    teamName,
    players: [{ name: p1 }, { role: p2 }]
} = team;

console.log(teamName, p1, p2);
