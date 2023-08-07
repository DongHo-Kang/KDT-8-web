const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

router.get("/", controller.main);

router.get("/visitor", controller.getVisitors);

router.post("/register", controller.register);

router.get("/getData/:id", controller.getData);

router.post("/editFin", controller.editFin);

module.exports = router;
