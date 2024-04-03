import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { NavLink, useParams } from "react-router-dom";
import "../styles/recipiedetailspage.css";
import axios from "axios";

function RecipeDetailsPage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetchRecipe();
  }, [id]);

  const fetchRecipe = async () => {
    try {
      const { data } = await toast.promise(
        axios.get(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_APIKEY}`
        ),
        {
          pending: "Fetching...",
          success: "Success",
          error: "Sorry! there is an issue",
          loading: "Loading...",
        }
      );

      setRecipe(data);
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <NavLink to={"/"}>
        <button className="buttonG">Home</button>
      </NavLink>
      <div className="recipe-details">
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
        <h3>Ingredients:</h3>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
      </div>
    </div>
  );
}

export default RecipeDetailsPage;
