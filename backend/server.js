require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();
const PORT = 5000;

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api/test", (req, res) => {
    res.json({ message: "SecurePay backend is working!" });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});