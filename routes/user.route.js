const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentsConttroller,
} = require("../controllers/user.controller");
const express = require("express");
const verifyJWT = require("../middlewares/auth.middleware");

// router object
const router = express.Router();

// routes
router.post("/login", loginController);
router.post("/register", registerController);
router.post("/getUserData", verifyJWT, authController);
router.post("/apply-doctor", verifyJWT, applyDoctorController);
router.post("/get-all-notification", verifyJWT, getAllNotificationController);
router.post(
  "/delete-all-notification",
  verifyJWT,
  deleteAllNotificationController
);
router.get("/getAllDoctors", verifyJWT, getAllDoctorsController);
router.post("/book-appointment", verifyJWT, bookAppointmentController);
router.post("/booking-availability", verifyJWT, bookingAvailabilityController);
router.get("/user-appointments",verifyJWT,userAppointmentsConttroller)
module.exports = router;
