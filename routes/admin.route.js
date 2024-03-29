const express = require("express");
const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController
} = require("../controllers/admin.controller");
const verifyJWT = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/getAllUsers", verifyJWT, getAllUsersController);
router.get("/getAllDoctors", verifyJWT, getAllDoctorsController);
router.post("/changeAccountStatus", verifyJWT, changeAccountStatusController);

module.exports = router;
