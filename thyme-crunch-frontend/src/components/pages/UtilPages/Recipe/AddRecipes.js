import React, { useState } from "react";
import "./AddRecipes.css";
import Navbar from "../../../navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../../buttons/ButtonComponent";

export default function AddRecipes() {
  const [recipesName, setRecipesName] = useState("");
  const [mealType, setMealType] = useState("");
  const [firstIngredient, setFirstIngredient] = useState("");
  const [secondIngredient, setSecondIngredient] = useState("");
  const [thirdIngredient, setThirdIngredient] = useState("");
  const [fourthIngredient, setFourthIngredient] = useState("");
  const [fifthIngredient, setFifthIngredient] = useState("");

  const navigate = useNavigate();

  function submitAddRecipe() {
    const a = recipesName;
    const b = mealType;
    const c = firstIngredient;
    const d = secondIngredient;
    const e = thirdIngredient;
    const f = fourthIngredient;
    const g = fifthIngredient;

    axios.post(
        `http://3.14.3.79:9090/api/v1/recipes/users/add/${a}/${b}/${c}/${d}/${e}/${f}/${g}`
      )
      .then((response) => {
        if (response.data === "ok") {
          navigate("/recipes");
        }
      })
      .catch((err) => {
        console.log("Error occured", err);
      });
  }

  return (
    <>
      <Navbar />
      <div className="main22">
        <div className="sub-main22">
 
            <div>
              <h1 id="add-title">Add Recipe Page</h1>
              <div className="form" id="div-add-recipe">

                  <p>Recipe Name</p>
                  <input
                    type="text"
                    placeholder="Enter recipe name"
                    className="addRecipeInput"
                    onChange={(e) => setRecipesName(e.target.value)}
                  />
               
                  <p>Meal Type</p>
                  <input
                    type="text"
                    placeholder="Enter meal type"
                    className="addRecipeInput"
                    onChange={(e) => setMealType(e.target.value)}
                  />
                  
                  <p>First Ingredient</p>
                  <input
                    type="text"
                    placeholder="Enter first ingredient"
                    className="addRecipeInput"
                    onChange={(e) => setFirstIngredient(e.target.value)}
                  />
                  
                  <p>Second Ingredient</p>
                  <input
                    type="text"
                    placeholder="Enter second ingredient"
                    className="addRecipeInput"
                    onChange={(e) => setSecondIngredient(e.target.value)}
                  />
                  
                  <p>Third Ingredient</p>
                  <input
                    type="text"
                    placeholder="Enter third ingredient"
                    className="addRecipeInput"
                    onChange={(e) => setThirdIngredient(e.target.value)}
                  />
                  
                  <p>Fourth Ingredient</p>
                  <input
                    type="text"
                    placeholder="Enter fourth ingredient"
                    className="addRecipeInput"
                    onChange={(e) => setFourthIngredient(e.target.value)}
                  />
                  
                  <p>Fifth Ingredient</p>
                  <input
                    type="text"
                    placeholder="Enter fifth ingredient"
                    className="addRecipeInput"
                    onChange={(e) => setFifthIngredient(e.target.value)}
                  />
                
              </div>
                <ButtonComponent
                  id="button2"
                  onClick={submitAddRecipe}
                  placeholder="Add Recipe"
                  />

            </div>
          </div>
      </div>
    </>
  );
}
