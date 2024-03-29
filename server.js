const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const path = require("path");
// dotenv config
dotenv.config();

// mongodb connection
connectDB();
// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// CORS middleware
app.use(cors({ origin: "*" }));

// routes
app.use("/api/v1/user", require("./routes/user.route.js"));
app.use("/api/v1/admin", require("./routes/admin.route.js"));
app.use("/api/v1/doctor", require("./routes/doctor.route.js"));

// static files
app.use(express.static(path.join(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/dist/index.html"));
});
// PORT
const port = process.env.PORT || 8080;
// listen
app.listen(port, () => {
  console.log(
    `server is running in ${process.env.NODE_MODE} MODE at port ${port}`.bgCyan
      .white
  );
});
  