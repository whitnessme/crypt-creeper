const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../utils/auth");
const { User } = require("../db/models/user");

router.use("/api", apiRouter);
router.get("/hello/world", function (req, res) {
  res.cookie("XSRF-TOKEN", req.csrfToken());
  res.send("Hello World!");
});


module.exports = router;
