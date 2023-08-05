const express = require("express");
const controller = require("../controller/Cmain.js");
const router = express.Router();

router.get("/", controller.main); //GET /
router.get("/comments", controller.comments); // GET /comments
router.get("/comment/:id", controller.comment); //GET/comment/:id

module.exports = router;

//경로를 controller와 연결해 설정 가능
