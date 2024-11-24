


import React, { useState, useEffect } from 'react';

const RecipeForm =({ recipe, onAdd, onUpdate, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    img: '',
    ingredients: '',
    instructions: '',
    cuisine: '',
    cookingTime: '',
  });

  useEffect(() => {
    if (recipe) {
      setFormData({
        ...recipe,
        ingredients: recipe.ingredients.join(', '),
      });
    }
  }, [recipe]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, img: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ...formData,
      ingredients: formData.ingredients.split(',').map((i) => i.trim()),
    };
    recipe ? onUpdate({ ...recipe, ...data }) : onAdd(data);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-bold mb-4">{recipe ? 'Edit Recipe' : 'Add Recipe'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="file"
          name="img"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border rounded-md"
        />
        {formData.img && (
          <img
            src={formData.img}
            alt="Preview"
            className="w-full h-32 object-cover rounded-md"
          />
        )}
        <input
          type="text"
          name="ingredients"
          placeholder="Ingredients (comma-separated)"
          value={formData.ingredients}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <textarea
          name="instructions"
          placeholder="Instructions"
          value={formData.instructions}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine Type"
          value={formData.cuisine}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="number"
          name="cookingTime"
          placeholder="Cooking Time (minutes)"
          value={formData.cookingTime}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded-md"
          >
            {recipe ? 'Update' : 'Add'}
          </button>
          <button
            type="button"
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecipeForm;
