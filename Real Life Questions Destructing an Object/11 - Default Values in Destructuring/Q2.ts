// A travel website receives incomplete destination objects and needs to assign default values
// when missing. Write a program demonstrating this. (→ Default values in destructuring)

type Recipe = {
    name: string;
    mainIngredient?: string;
};

const recipe: Recipe = {
    name: "Pasta",
};

const { name: recipeName, mainIngredient = "Tomato" } = recipe;

console.log(recipeName, mainIngredient);
