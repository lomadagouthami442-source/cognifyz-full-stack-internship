const express = require("express");
const app = express();
const PORT = 3000;
// Temporary server-side storage
const students = [];
// EJS
app.set("view engine", "ejs");
// Read form data
app.use(express.urlencoded({ extended: true }));
// Show registration page
app.get("/", (req, res) => {
    res.render("index", { error: null });
});
// Receive registration form
app.post("/register", (req, res) => {
    const { name, email, phone, course, college } = req.body;
    // Server-side validation
    if (!name || !email || !phone || !course || !college) {
        return res.send("Error: All fields are required.");
    }
    if (name.length < 3) {
        return res.send("Error: Name must contain at least 3 characters.");
    }
    if (!email.includes("@")) {
        return res.send("Error: Please enter a valid email.");
    }
    if (phone.length !== 10) {
        return res.send("Error: Phone number must contain 10 digits.");
    }
    // Store student temporarily
    students.push({
        name,
        email,
        phone,
        course,
        college
    });
    // Display submitted details
    res.send(`
        <h1>Registration Successful!</h1>
        <h2>Student Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>College:</strong> ${college}</p>
        <br>
        <a href="/">Register Another Student</a>
    `);
});
// Start server
app.listen(PORT, () => {
    console.log('Server running at http://localhost:${PORT}');
});