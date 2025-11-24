// A social media app merges post lists received from two servers. Write a program using spread
// operator. (→ Spread with arrays)

const server1Posts = ["Post1", "Post2"];
const server2Posts = ["Post3", "Post4"];

const mergedPosts = [...server1Posts, ...server2Posts];

console.log(mergedPosts);
