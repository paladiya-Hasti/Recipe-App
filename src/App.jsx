

import React, { useState } from 'react';
import RecipeList from './componet/RecipeList';
import RecipeDetail from './componet/RecipeDetail';
import RecipeForm from './componet/RecipeForm';
import Navbar from './componet/Navbar';
import Footer from './componet/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componet/Header';

const App = () => {
 



  const [recipes, setRecipes] = useState([]);
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, { id: Date.now(), ...newRecipe }]);
    setIsFormOpen(false);
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(recipes.map((r) => (r.id === updatedRecipe.id ? updatedRecipe : r)));
    setCurrentRecipe(null);
    setIsFormOpen(false);
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((r) => r.id !== id));
    setCurrentRecipe(null);
  };

  const openForm = (recipe = null) => {
    setCurrentRecipe(recipe);
    setIsFormOpen(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar/>
   <Header/>
  

      <h1 className="text-3xl font-bold text-center mb-6">Recipe Management</h1>
      {!isFormOpen ? (
        <>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4"
            onClick={() => openForm()}
          >
            Add Recipe
          </button>
          {currentRecipe ? (
            <RecipeDetail
              recipe={currentRecipe}
              onEdit={openForm}
              onDelete={deleteRecipe}
            />
          ) : (
            <RecipeList recipes={recipes} onSelect={setCurrentRecipe} />
          )}
        </>
      ) : (
        <RecipeForm
          recipe={currentRecipe}
          onAdd={addRecipe}
          onUpdate={updateRecipe}
          onClose={() => setIsFormOpen(false)}
        />
      )}
      <Footer/>
    </div>
  );
};

export default App;
