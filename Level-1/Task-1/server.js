const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.post("/register", (req, res) => {
    const { name, email, course } = req.body;
    res.render("result", {
        name,
        email,
        course
    });
});
app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
    });