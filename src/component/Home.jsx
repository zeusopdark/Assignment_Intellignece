import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetchRecipes();
  }, [count]);

  const fetchRecipes = async () => {
    try {
      const { data } = await toast.promise(
        axios.get(
          `https://api.spoonacular.com/recipes/random?number=10&apiKey=${process.env.REACT_APP_APIKEY}`
        ),
        {
          pending: "Fetching...",
          success: "Success",
          error: "Sorry! there is an issue",
          loading: "Loading...",
        }
      );
      setRecipes(data.recipes);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const truncateText = (text, maxLines) => {
    const lines = text.split("\n");
    if (lines.length > maxLines) {
      return lines.slice(0, maxLines).join("\n");
    }
    return text;
  };

  return (
    <div className="main">
      <h1>Home</h1>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <div className="data">
              <div>
                <NavLink className="link" to={`/recipe/${recipe.id}`}>
                  {recipe.title}
                </NavLink>
              </div>
              <div>
                <img src={recipe.image} alt="Network Error" />
              </div>
            </div>

            <div
              style={{
                padding: "2rem 0rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              dangerouslySetInnerHTML={{
                __html: truncateText(recipe.summary, 3),
              }}
            />
            <NavLink to={`/recipe/${recipe.id}`}>
              <button class="button">Full Recipe...</button>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="pagination">
        <button
          className="button"
          onClick={() => {
            setCount((count) => count - 1);
          }}
          disabled={count === 1}
        >
          Prev
        </button>
        <h4>{`Page Count->${count}`}</h4>
        <button
          className="button"
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
