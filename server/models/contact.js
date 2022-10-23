const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  user : {
    type: mongoose.Schema.Types.ObjectId, ref: 'User'
  },
  savedcontacts: [{
    id : {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
      },
    name: String,
    avatarImage: {
        type: String,
        default: "",
      },
  }]
  
});

module.exports = mongoose.model("Contacts", contactSchema);
