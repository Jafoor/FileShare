const Profile = require("../models/profile");
const bcrypt = require("bcryptjs");

module.exports.Generate = async (req, res, next) => {
  try {
    const {address,
        email,
        pgoneNumber,
        user,
        socialMedia} = req.body;
        console.log(req.body);
    
    const profile = await Profile.create({
        user,
        email,
        pgoneNumber,
        address,
        socialMedia});

    return res.json({ status: true, profile });
  } catch (ex) {
    next(ex);
  }
};