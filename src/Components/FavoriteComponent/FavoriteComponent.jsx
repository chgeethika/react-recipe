import React from 'react';
import './FavoriteComponent.css';

const FavoriteComponent = ({ favorites }) => {
  return (
    <div className="favorites-container">
      <h2>Favorites</h2>
      <div className="favorite-list">
        {favorites.length > 0 ? (
          favorites.map(recipe => (
            <div key={recipe.id} className="favorite-item">
              <img src={recipe.image} alt={recipe.title} className="favorite-image" />
              <div className="favorite-info">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No favorite recipes yet.</p>
        )}
      </div>
    </div>
  );
};

export default FavoriteComponent;
