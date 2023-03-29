const express = require("express");
const router = express.Router();

const {
  getbootcamps,
  getbootcamp,
  createbootcamp,
  updatebootcamp,
  deletebootcamp,
} = require("../controller/bootcamps");

router.route("/").get(getbootcamps).post(createbootcamp);

router.route('/:id').get(getbootcamp).put(updatebootcamp).delete(deletebootcamp);

module.exports = router;
