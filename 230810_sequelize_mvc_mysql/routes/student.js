const express = require("express");
const router = express.Router();
const controller = require("../controller/Cstudent");

router.get("/", controller.index);

module.exports = router;
