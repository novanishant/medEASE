const Doctor = require("../models/doctor.model");
const User = require("../models/user.model");
const getAllUsersController = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({
      success: true,
      data: users,
      message: "users data list",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While fetching users data",
    });
  }
};
const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await Doctor.find({});
    res.status(200).send({
      success: true,
      data: doctors,
      message: "doctors data list",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While fetching doctors data",
    });
  }
};

// doctor account status
const changeAccountStatusController = async (req, res) => {
  try {
    const { doctorId, status } = req.body;
    const doctors = await Doctor.findByIdAndUpdate(doctorId, { status });
    const user = await User.findOne({ _id: doctors.userId });
    const notification = user.notification;
    notification.push({
      type: "doctor-account-request-updated",
      message: `Your doctor account request has ${status}`,
      onclickPath: "/notification",
    });
    user.isDoctor = status === "approved" ? true : false;
    await user.save();
    res.status(200).send({
      success: true,
      data: doctors,
      message: "Account status updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in account status",
    });
  }
};
module.exports = {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountStatusController,
};
