const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const messageSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Add a First name"],
    },

    lastName: {
      type: String,
      required: [true, "Add your Last name"],
    },
    emailAddress: {
      type: String,
      required: [true, " Add your Email address"],
    },
    subject: {
      type: String,
      required: [true, "Add a Subject"],
    },
    message: {
      type: String,
      required: [true, "Add a Message"],
    },
    read: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
