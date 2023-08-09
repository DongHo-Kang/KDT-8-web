const express = require("express");
const router = express.Router();
const controller = require("../controller/CVisitor");

//방명록 전체 보이기
//localhost:8000/visitor
router.get("/", controller.getVisitors);

//방명록 하나 조회
//localhost:8000/visitor/get
router.get("/get", controller.getVisitor);

//방명록 하나 추가
router.post("/write", controller.postVisitor);

//방명록 하나 수정
router.patch("/edit", controller.patchVisitor);

//방명록 하나 삭제
router.delete("/delete", controller.deleteVisitor);

module.exports = router; //외부로 라우터를 보낸다.
