import Header from "./Header";
import InputArea from "./InputArea";
import Ingredients from "./Ingredients";
import Footer from "./Footer";
import { useState } from "react";

function App() {
  const [ingredients, setIngredients] = useState([]);

  function addIngredients(inputText) {
    setIngredients((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setIngredients((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="background-image">
      <Header />
      <InputArea addItem={addIngredients} />
      <div className="ingredients-list">
        <table className="fixed">
          <col width="85%" />
          <col width="15%" />
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
          {ingredients.map((ingredient, index) => {
            return (
              <Ingredients
                key={index}
                id={index}
                itemName={ingredient}
                deleteItem={deleteItem}
              />
            );
          })}
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default App;
