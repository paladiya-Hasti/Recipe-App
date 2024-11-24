// import React from 'react'

// const RecipeCard = () => {
//   return (
//     <div>RecipeCard</div>
//   )
// }

// export default RecipeCard

import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


const RecipeCard = () => {
  const [recipes, setRecipes] = useState([
   
    {
      id: 1,
      name: 'Spaghetti Bolognese',
      image: 'https://i.pinimg.com/736x/1f/ff/73/1fff734db2eb1e20036142414269f5b3.jpg',
      description: 'A classic Italian pasta dish with a rich tomato sauce.',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onions', 'garlic'],
    },
    {
      id: 2,
      name: 'Chicken Curry',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A spicy and flavorful chicken curry.',
      ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'tomatoes'],
    }, {
      id: 1,
      name: 'Spaghetti Bolognese',
      image: 'https://images.pexels.com/photos/1893556/pexels-photo-1893556.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A classic Italian pasta dish with a rich tomato sauce.',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onions', 'garlic'],
    },
    {
      id: 2,
      name: 'Chicken Curry',
      image: 'https://avatars.mds.yandex.net/i?id=b5c53ecb0e5e864f038765f3d44702f314234ee9-10897519-images-thumbs&n=13',
      description: 'A spicy and flavorful chicken curry.',
      ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'tomatoes'],
    }, {
      id: 1,
      name: 'Spaghetti Bolognese',
      image: 'https://avatars.mds.yandex.net/i?id=194031e71dc61b441a4d89f1d5c8bab9ae73049596c134d6-13019720-images-thumbs&n=13',
      description: 'A classic Italian pasta dish with a rich tomato sauce.',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onions', 'garlic'],
    },
    {
      id: 2,
      name: 'Chicken Curry',
      image: 'https://avatars.mds.yandex.net/i?id=7363d3f273456e275b794804f5ee236f7d29c755-9872829-images-thumbs&n=13',
      description: 'A spicy and flavorful chicken curry.',
      ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'tomatoes'],
    }, {
      id: 1,
      name: 'Spaghetti Bolognese',
      image: 'https://avatars.mds.yandex.net/i?id=7c6b28160dfe71ef643b01ef303003e6940f9feb-12164831-images-thumbs&n=13',
      description: 'A classic Italian pasta dish with a rich tomato sauce.',
      ingredients: ['spaghetti', 'ground beef', 'tomato sauce', 'onions', 'garlic'],
    },
    {
      id: 2,
      name: 'Chicken Curry',
      image: 'https://avatars.mds.yandex.net/i?id=c1e62bc92c671e4e705158a4d43d981522286843-10848716-images-thumbs&n=13',
      description: 'A spicy and flavorful chicken curry.',
      ingredients: ['chicken', 'curry powder', 'coconut milk', 'onions', 'tomatoes'],
    },
  
  ]);
console.log(recipes);


  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]); // Append the new recipe to the existing list
  };

  const handleDeleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id)); // Remove the recipe by ID
  };

  return (
    <div>
      <div className="container mx-auto mt-8 scroll-pl-6 ">
  <h2 className="text-2xl font-bold mb-6 text-center">Recipe List</h2>
  {recipes.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow"
        >
          <h3 className="text-xl font-semibold mb-2">{recipe.name}</h3>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <p className="text-sm text-gray-600 mb-2">
            <strong>Description:</strong> {recipe.description}
          </p>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Ingredients:</strong> {recipe.ingredients.join(', ')}
          </p>
          <button
            onClick={() => handleDeleteRecipe(recipe.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-gray-500">
      No recipes available. Add some using the form above.
    </p>
  )}
</div>

    </div>
  
  )
}

export default RecipeCard