require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/config");

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is on...");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
