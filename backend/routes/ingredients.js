const router = require("express").Router();
let Ingredient = require("../models/ingredient-model");

// GET All Ingredients
router.route("/").get((req, res) => {
  Ingredient.find()
    .then((ingredients) => res.json(ingredients))
    .catch((err) => res.status(400).json("Err: " + err));
});

// POST New Ingredient
router.route("/add").post((req, res) => {
  const ingredientName = req.body.name;
  const ingredientAmount = req.body.amount;

  const newIngredient = new Ingredient({
    name: ingredientName,
    amount: ingredientAmount,
  });

  newIngredient
    .save()
    .then(() => res.json("Ingredient added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// GET Specific Ingredient
router.route("/item/:id").get((req, res) => {
  Ingredient.findById(req.params.id)
    .then((ingredient) => res.json(ingredient))
    .catch((err) => res.status(400).json("Error: " + err));
});

// DELETE Specific Ingredient
router.route("/:id").delete((req, res) => {
  Ingredient.findByIdAndDelete(req.params.id)
    .then(() => res.json("Ingredient Deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// UPDATE Specific Ingredient
router.route("/update/:id").post((req, res) => {
  Ingredient.findById(req.params.id).then((ingredient) => {
    ingredient.name = req.body.name;
    ingredient.amount = req.body.amount;

    ingredient
      .save()
      .then(() => res.json("Ingredient updated!"))
      .catch((err) => res.status(400).json("Error: " + err));
  });
});

module.exports = router;
