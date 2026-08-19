const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res) => {
  res.render("index", { student: null });
});
app.post("/register", (req, res) => {
  const { name, email, course } = req.body;
  res.render("index", {
    student: {
      name,
      email,
      course
    }
  });
});
app.listen(PORT, () => {
  console.log('Server running at http://localhost:${PORT}');
});
