const User = require("../models/user");

const getAllAdmins = async (req, res) => {
  const admin = await User.find({ role: "admin" });

  res.status(200).json({ data: admin });
};

const insertAdmin = async (req, res) => {
  const admin = new User(req.body);
  try {
    if (req.body.password === req.body.confirmPassword) {
      await admin.save();
      res.status(200).json({ message: "successful" });
    } else {
      res.status(400).json({ message: "password does not match" });
    }
  } catch (error) {
    res.status(400).json({ message: "not successful" });
  }
};
const updateAdmin = async (req, res) => {
  try {
    const admin = await User.findById(req.params.id);
    Object.assign(admin, req.body);
    admin.save();
    res.send("updated");
  } catch (error) {
    res.status(400).json({ message: "not successful" });
  }
};

const getAllUsers = async (req, res) => {
  const data = await User.find({ role: "user" });

  res.status(200).json(data);
};

const insertUser = async (req, res) => {
  const user = new User(req.body);

  try {
    if (req.body.password === req.body.confirmPassword) {
      await user.save();
      res.status(200).json({ message: "successful" });
    } else {
      res.status(400).json({ message: "password does not match" });
    }
  } catch (error) {
    res.status(400).json({ message: "not successful" });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    Object.assign(user, req.body);
    user.save();
    res.send("updated");
  } catch (error) {
    res.status(400).json({ message: "not successful" });
  }
};

module.exports = {
  getAllAdmins,
  insertAdmin,
  updateAdmin,
  getAllUsers,
  insertUser,
  updateUser,
};
