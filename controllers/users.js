const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const data = await User.find(req.query);
  res.status(200).json({ data });
};

module.exports = { getAllUsers };
