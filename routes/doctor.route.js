const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController
} = require("../controllers/doctor.controller");
const verifyJWT = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/getDoctorInfo", verifyJWT, getDoctorInfoController);
router.post("/updateProfile", verifyJWT, updateProfileController);

router.post("/getDoctorById", verifyJWT, getDoctorByIdController);
router.get("/doctor-appointments", verifyJWT, doctorAppointmentsController);
router.post("/update-status",verifyJWT,updateStatusController);
module.exports = router;
