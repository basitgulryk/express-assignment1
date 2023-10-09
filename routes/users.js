var express = require("express");
const {
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
} = require("../controller/resource/resourceController");
var router = express.Router();
/* GET users listing. */
router.get("/", getCourses);
router.post("/addCourse", addCourse);
router.put("/updateCourse/:id", updateCourse);
router.delete("/deleteCourse/:id", deleteCourse);
module.exports = router;
