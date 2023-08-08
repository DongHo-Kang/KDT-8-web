const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

//회원가입 페이지 렌더링
router.get("/signup", controller.getSignUp);

//회원가입 처리(POST 요청)
router.post("/signup", controller.postSignUp);

//로그인 페이지 렌더링
router.get("/signin", controller.getSignIn);

//로그인 처리(POST 요청)
router.post("/signin", controller.postSignIn);

//프로필 페이지 렌더링
router.get(`/profile/:id`, controller.getProfile);

//프로필 업데이트
router.post(`/profile/:id`, controller.postUpdate);

//프로필 삭제
router.post(`/profile/:id`, controller.postDelete);

module.exports = router; //외부로 라우터를 보낸다.
