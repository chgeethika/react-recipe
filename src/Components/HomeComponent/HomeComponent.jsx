import React, { useState, useEffect } from 'react';
import './HomeComponent.css';
import FilterRecipeComponent from '../FilterRecipeComponent/FilterRecipeComponent';
import SearchComponent from '../SearchComponent/SearchComponent';
import FavoriteComponent from '../FavoriteComponent/FavoriteComponent';

const HomeComponent = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch('/recipes.json')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRecipes(data);
          setFilteredRecipes(data);
        } else {
          console.error('Invalid data format: expected an array');
        }
      })
      .catch(error => console.error('Error fetching the JSON:', error));
  }, []);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredRecipes(recipes);
      return;
    }

    const filtered = recipes.filter(recipe => 
      recipe.title && recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRecipes(filtered);
  };

  const handleFilter = (filterCriteria) => {
    if (filterCriteria === "") {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe => 
        recipe.category === filterCriteria
      );
      setFilteredRecipes(filtered);
    }
  };

  const handleFavorite = (recipe) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.some(fav => fav.id === recipe.id)) {
        return prevFavorites;
      }
      return [...prevFavorites, recipe];
    });
  };

  return (
    <div className="home-container">
      <SearchComponent onSearch={handleSearch} />
      <FilterRecipeComponent onFilter={handleFilter} />
      <FavoriteComponent favorites={favorites} />
      <div className="recipe-list">
        {filteredRecipes.map(recipe => (
          <div key={recipe.id} className="recipe-item">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <div className="recipe-info">
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <p><strong>Category:</strong> {recipe.category}</p>
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
              <button className="favorite-button" onClick={() => handleFavorite(recipe)}>Add to Favorites</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
