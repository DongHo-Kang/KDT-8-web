const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

//GET localhost:8000/user
router.get("/", controller.index);

//GET localhost:8000/signup
router.get("/signup", controller.signup);

//POST localhost:8000/signup
router.post("/signup", controller.post_signup);

router.get("/signin", controller.signin);
router.post("/signin", controller.post_signin);

router.post("/profile", controller.post_profile);
// router.update("/profile/edit");
// router.delete("/profile/delete");

module.exports = router;
