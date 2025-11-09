import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// Handle file paths in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

// Contact form route
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 New message received:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);
  res.send(`<h2>Thank you, ${name}! Your message was received.</h2>`);
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

