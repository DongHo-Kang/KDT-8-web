const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

//router
router.get("/", controller.main);
//전체 목록 보기
//GET /comments
router.get("/comments", controller.comm);
//상세 보기
//GET /comment/:index
router.get("/comment/:index", controller.comment);

module.exports = router;
