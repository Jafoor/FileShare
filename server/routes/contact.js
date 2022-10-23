const { Generate, GetProfile, UpdateProfile } = require("../controllers/profile");
  
const router = require("express").Router();

router.post("/create", Generate);
router.get("/", GetProfile);
router.patch("/update", UpdateProfile);

module.exports = router;
  