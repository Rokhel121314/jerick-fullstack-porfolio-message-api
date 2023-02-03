const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/connectDB");
const messageRoutes = require("./routes/messageRoutes");
const Message = require("./models/messageModels");

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://jerick-fullstack-portfolio.onrender.com/",
    ],
    credentials: true,
  })
);
app.use(messageRoutes);

const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();

app.get("/", (req, res) => {
  res.send("test db");
});
