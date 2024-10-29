import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/App_Context";
import { Link, useLocation } from "react-router-dom";
import "./Home.css"; // Importing CSS for styling

// Functional component to fetch and display a recipe by its ID
const FetchRecipeById = ({ id }) => {
  const location = useLocation();
  const { getRecipeById } = useContext(AppContext);
  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    const fetchRecipe = async (id) => {
      const result = await getRecipeById(id);
      setRecipe(result.data.recipe);
    };

    fetchRecipe(id);
  }, [id]);

  return (
    <div className="text-center">
      <div className="recipe-container">
        <img src={recipe.imgurl} className="recipe-image" alt={recipe.title} />
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-instructions">{recipe.ist}</div>
        <div className="recipe-ingredients">
          <h4>
            {recipe.ing1} - {recipe.qty1}
          </h4>
          <h4>
            {recipe.ing2} - {recipe.qty2}
          </h4>
          <h4>
            {recipe.ing3} - {recipe.qty3}
          </h4>
          <h4>
            {recipe.ing4} - {recipe.qty4}
          </h4>
        </div>
      </div>
      {location.pathname !== "/saved" && (
        <Link to={"/"} className="btn btn-warning my-5">
          Back to Home
        </Link>
      )}
    </div>
  );
};

export default FetchRecipeById;
