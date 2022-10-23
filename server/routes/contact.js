const { Generate } = require("../controllers/profile");
  
const router = require("express").Router();

router.post("/create", Generate);

module.exports = router;
  