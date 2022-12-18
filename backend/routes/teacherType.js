let express = require("express");
let router = express.Router();

let { getData, createData } = require("../controllers/TeacherTypeController");

router.get("/", getData);
router.post("/", createData);

module.exports = router;
