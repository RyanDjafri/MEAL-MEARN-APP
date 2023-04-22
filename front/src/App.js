import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./Card";

function App() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [meals, setMeals] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  useEffect(() => {
    axios.get(apiUrl + inputSearch).then((res) => setMeals(res.data.meals));
  }, [inputSearch]);
  return (
    <div className="app-container">
      <h1>React Cooking App</h1>
      <input
        placeholder="Tapez le nom d'un aliment (en anglais)"
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="meals-container">
        {meals && meals.map((meal) => {
         return  <Card key={meal.idMeal} meal={meal} />;
        })}
      </div>
    </div>
  );
}

export default App;
