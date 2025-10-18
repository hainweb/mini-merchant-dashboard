const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const statsRoutes = require("./routes/statsRoutes");
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Backend running");
});

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/stats", statsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
