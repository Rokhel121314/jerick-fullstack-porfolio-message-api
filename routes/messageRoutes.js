const express = require("express");
const {
  submitMessage,
  viewMessages,
  viewSingleMessage,
} = require("../controllers/messageControllers");

const Message = require("../models/messageModels");

const router = express.Router();

// creating a message
router.post("/api/messages", submitMessage);

// view all message
router.get("/api/messages", viewMessages);

// view a single message
router.get("/api/messages/:id", viewSingleMessage);

module.exports = router;
