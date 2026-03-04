const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "admin") {
    return res.status(200).json({
      message: "Login successful",
      username: username,
    });
  }

  return res.status(401).json({
    message: "Invalid credentials",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
