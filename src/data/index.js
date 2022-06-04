const spicyFoods = [
  { id: 1, name: "Buffalo Wings", cuisine: "American", heatLevel: 3 },
  { id: 2, name: "Mapo Tofu", cuisine: "Sichuan", heatLevel: 6 },
];

let nextId = 3;

const newSpicyFoods = [
  { name: "Green Curry", cuisine: "Thai", heatLevel: 9 },
  { name: "Enchiladas", cuisine: "Mexican", heatLevel: 2 },
  { name: "5 Alarm Chili", cuisine: "American", heatLevel: 5 },
  { name: "Pasta", cuisine: "Italian", heatLevel: 4 },
  { name: "Falafel", cuisine: "Mediterranean", heatLevel: 2},
  { name: "Torta", cuisine: "Mexican", heatLevel: 1},
  { name: "Crepes", cuisine: "French", heatLevel: 3}, 
  { name: "Lasagna", cuisine: "Italian", heatLevel: 5},
  { name: "Orange Chicken", cuisine: "Chinese", heatLevel: 5},
  { name: "Hamburger", cuisine: "American", heatLevel: 3},
  { name: "Pho", cuisine: "Vietnamese", heatLevel: 5},
];

let cuisinesList = [];
cuisinesList = newSpicyFoods.filter(food => !cuisinesList.indexOf(food.cuisine));

// Get one random spicy food from the array
function randomSpicyFood() {
  const index = Math.floor(Math.random() * newSpicyFoods.length);
  const newSpicyFood = { ...newSpicyFoods[index] };
  newSpicyFood.id = nextId;
  nextId++;
  return newSpicyFood;
}

function getNewSpicyFood() {
  return randomSpicyFood();
}

export { spicyFoods, getNewSpicyFood, cuisinesList };
