import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const RecipeList = ({ recipes, onSelect }) => {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="p-4">
      {/* Search Input */}
      <div className="flex items-center space-x-2 mb-4">
        <FaSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search by ingredients or title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>

      {/* Recipe Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="p-4 bg-white rounded-md shadow-md cursor-pointer hover:bg-gray-100 transition"
              onClick={() => onSelect(recipe)}
            >
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <img
                src={recipe.img || "https://via.placeholder.com/150"}
                alt={recipe.title}
                className="w-full h-32 object-cover rounded-md mb-2"
              />
              <p className="text-sm text-gray-600 truncate">
                Ingredients: {recipe.ingredients.join(", ")}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Cuisine: {recipe.cuisine}
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Cooking Time: {recipe.cookingTime} minutes
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-full">
            No recipes match your search.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecipeList;
