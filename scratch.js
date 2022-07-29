const axios = require("axios");
const { useState } = require("react");

function App() {
  const [ingredients, setIngredients] = useState([]);

  function initialLoad() {
    axios.get("http://localhost:5000/ingredients").then((res) => {
      if (res.data.length > 0) {
        const ingredientsData = res.data;
        ingredientsData.forEach((ingredient) => {
          const newIngredient = [ingredient.name, ingredient.amount];
          setIngredients((prevValue) => {
            [...prevValue, newIngredient];
          });
        });
      }
    });
  }

  console.log(ingredients);
}

App();
console.log(ingredients);
