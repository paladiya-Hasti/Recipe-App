import React from 'react';

const RecipeDetail = ({ recipe, onEdit, onDelete }) => {
  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold">{recipe.title}</h2>
      <p className="mt-2 text-gray-600">Cuisine: {recipe.cuisine}</p>
      <p className="mt-2 text-gray-600">Cooking Time: {recipe.cookingTime} minutes</p>
      <h3 className="mt-4 font-semibold">Ingredients:</h3>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((ing, idx) => (
          <li key={idx}>{ing}</li>
        ))}
      </ul>
      <h3 className="mt-4 font-semibold">Instructions:</h3>
      <p className="mt-2">{recipe.instructions}</p>
      <div className="mt-4 flex space-x-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => onEdit(recipe)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => onDelete(recipe.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
