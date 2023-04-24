import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="meal-card">
      <h2 className="meal-name">{meal.strMeal}</h2>
      <a id="add-cart">
        <img src={meal.strMealThumb} alt={"photo de " + meal.strMeal} />
      </a>
    </div>
  );
};

export default Card;
