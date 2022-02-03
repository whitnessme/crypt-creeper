const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const asyncHandler = require("express-async-handler");
const { setTokenCookie } = require("../utils/auth");
const { User } = require("../db/models/user");

router.use("/api", apiRouter);



module.exports = router;
