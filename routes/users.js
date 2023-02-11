const express = require("express");
const router = express.Router();

const {
  getAllAdmins,
  insertAdmin,
  updateAdmin,
  getAllUsers,
  insertUser,
  updateUser,
} = require("../controllers/users");

router.route("/admin").get(getAllAdmins);
router.route("/admin").post(insertAdmin);
router.route("/admin/:id").patch(updateAdmin);

router.route("/user").get(getAllUsers);
router.route("/user").post(insertUser);
router.route("/user/:id").patch(updateUser);

module.exports = router;
