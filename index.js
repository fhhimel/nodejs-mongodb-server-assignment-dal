require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/config");

const PORT = process.env.PORT || 5000;

const users_routes = require("./routes/users");

app.get("/", (req, res) => {
  res.send("Server is on...");
});

app.use("/api/users", users_routes);

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
