const express = require("express");
const router = express.Router();
const controller = require("../controller/index");

//router
router.get("/", controller.main);
//회원 리스트 모두 조회
//GET /comments
router.get("/lists", controller.listsAll);

//회원 정보 추가
//GET /add
router.post("/lists", controller.addlists);
//POST /add

module.exports = router;
