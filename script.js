
const recipes = [
  { id: 1, name: "Spaghetti Bolognese", ingredients: ["Spaghetti", "Tomato", "Beef"], instructions: "Cook pasta, prepare sauce, mix together." },
  { id: 2, name: "Chicken Curry", ingredients: ["Chicken", "Curry Powder", "Onion"], instructions: "Cook chicken, add spices, simmer with onion." },
  { id: 3, name: "Vegetable Stir Fry", ingredients: ["Broccoli", "Carrot", "Soy Sauce"], instructions: "Stir fry veggies, add soy sauce." }
];


function searchRecipes() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const filtered = recipes.filter(r => r.name.toLowerCase().includes(query));

  if (filtered.length === 0) {
    resultsDiv.innerHTML = "<p>No recipes found.</p>";
    return;
  }

  filtered.forEach(r => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <h3>${r.name}</h3>
      <p><strong>Ingredients:</strong> ${r.ingredients.join(", ")}</p>
      <a href="recipe.html?id=${r.id}" class="btn">View Details</a>
    `;
    resultsDiv.appendChild(card);
  });
}


function loadRecipeDetails() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));
  const recipe = recipes.find(r => r.id === id);

  const detailsDiv = document.getElementById("recipeDetails");
  if (!recipe) {
    detailsDiv.innerHTML = "<p>Recipe not found.</p>";
    return;
  }

  detailsDiv.innerHTML = `
    <h2>${recipe.name}</h2>
    <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
    <p><strong>Instructions:</strong> ${recipe.instructions}</p>
  `;
}


if (window.location.pathname.includes("recipe.html")) {
  loadRecipeDetails();
}