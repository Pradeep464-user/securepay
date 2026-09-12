const express = require("express");
const connectDB = require("./config/db");

const app = express();
const PORT = 5000;

connectDB();

app.get("/api/test", (req, res) => {
    res.json({ message: "SecurePay backend is working!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:5000`);
});