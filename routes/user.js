const controller = require("../controller/book.controller");
const express = require("express");
const router = express.Router();
router.get("/users", controller.getusers);
module.exports = router;
