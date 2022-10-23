const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');

const profileSchema = new mongoose.Schema({
  user : {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  address: [
    {
        id : {
          type: String, default: uuidv4()
        },
        addressTitle: String,
        address: String
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
