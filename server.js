const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 New message received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  res.send(`<h2>Thank you, ${name}! Your message was received.</h2>`);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
