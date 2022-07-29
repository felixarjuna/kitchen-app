const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config({ path: "./config.env" });

// Defining PORT and Start app
const PORT = process.env.port || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Connect to Database URI
const URI = process.env.ATLAS_URI;
mongoose.connect(URI);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established succesfully!");
});

// Add Routes
app.use(require("./routes/ingredients"));

const ingredientsRouter = require("./routes/ingredients");

app.use("/ingredients", ingredientsRouter);

app.listen(PORT, () => {
  // perform a database connection when server starts
  console.log(`Server is running on port: ${PORT}`);
});
