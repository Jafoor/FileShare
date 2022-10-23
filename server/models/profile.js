const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const profileSchema = new mongoose.Schema({
  user : {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  
  generalInfo: [
    {
        id : {
          type: String, default: uuidv4()
        },
        fullName: String,
        bio: String,
        birthday: String
      }
  ],
  address: [
    {
        id : {
          type: String, default: uuidv4()
        },
        addressTitle: String,
        address: String
      }
  ],
  profession: [
    {
        id : {
          type: String, default: uuidv4()
        },
        institution: String,
        position: String
      }
  ],
  email: [
    {
        id : {
            type: String, default: uuidv4()
          },
        emailTitle : String,
        emailAddress: String
    }
  ],
  phoneNumber: [
    {
        id : {
            type: String, default: uuidv4()
          },
        numberTitle : String,
        number: String
    }
  ],
  socialMedia: [
    {
      id : {
        type: String, default: uuidv4()
      },
      socialwebsite: String,
      socialwebsitelink: String
    }
  ],
});

module.exports = mongoose.model("Profiles", profileSchema);
