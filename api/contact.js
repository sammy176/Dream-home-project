export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    console.log("📩 New message received:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    res.status(200).json({ success: true, message: "Message received!" });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
