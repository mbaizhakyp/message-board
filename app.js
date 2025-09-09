const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

// Set up EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use("/", indexRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
