import Header from "./Header";
import InputArea from "./InputArea";
import Ingredients from "./Ingredients";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/ingredients")
      .then((res) => {
        setIngredients(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function addIngredients(inputText) {
    const newIngredient = {
      name: inputText[0],
      amount: inputText[1],
    };

    axios
      .post("http://localhost:5000/ingredients/add", newIngredient)
      .then((res) => console.log(res.data));

    window.location = "/kitchen-app/";
  }

  function deleteItem(id) {
    axios
      .delete("http://localhost:5000/ingredients/" + id)
      .then((res) => console.log(res));

    window.location = "/kitchen-app/";
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
          {ingredients?.map((ingredient, index) => {
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
