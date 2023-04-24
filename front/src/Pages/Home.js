import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Card from "../Card";
import { UidContext } from "../components/AppContext";
import Cart from "../Pages/Cart";

function Home() {
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const [meals, setMeals] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const uid = useContext(UidContext);

  useEffect(() => {
    axios.get(apiUrl + inputSearch).then((res) => setMeals(res.data.meals));
  }, [inputSearch]);
  return (
    <div className="app-container">
      <div className="app-input">
        <h1>React Cooking App</h1>
        <input
          placeholder="Choose some food"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <br />
        <>
          {uid ? (
            <>
              <a href="/register">Sign Up</a>
              <a href="/login">Sign In</a>
            </>
          ) : (
            <>
              <Cart />
            </>
          )}
        </>
      </div>
      <div className="meals-container">
        {meals &&
          meals.map((meal) => {
            return <Card key={meal.idMeal} meal={meal} />;
          })}
      </div>
    </div>
  );
}

export default Home;
