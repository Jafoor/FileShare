const Profile = require("../models/profile");
const bcrypt = require("bcryptjs");

module.exports.Generate = async (req, res, next) => {
  try {
    const {address,
        email,
        phoneNumber,
        user,
        socialMedia,
        generalInfo,
        profession} = req.body;
        console.log(req.body);
    
    const profile = await Profile.create({
        user,
        email,
        phoneNumber,
        address,
        socialMedia,
        generalInfo,
        profession});

    return res.json({ status: true, profile });
  } catch (ex) {
    next(ex);
  }
};

module.exports.GetProfile = async (req, res, next) => {
  try{
    const { user } = req.query;

    const profile = await Profile.findOne({ user });

    return res.status(200).json(profile)

  }catch(err){
    next(err);
  }
}

module.exports.UpdateProfile = async (req, res, next) => {
  try{
    const { id, address,
      email,
      phoneNumber,
      user,
      socialMedia,
      generalInfo,
      profession } = req.body;
    console.log(`body`);
    console.log(req.body);

    const profile = await Profile.updateOne({ _id:id}, {address,
      email,
      phoneNumber,
      user,
      socialMedia,
      generalInfo,
      profession})
      console.log(profile);
      return res.status(200).json(profile)
  }catch(err){
    next(err);
  }
}