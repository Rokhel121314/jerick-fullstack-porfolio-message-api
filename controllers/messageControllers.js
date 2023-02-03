const Message = require("../models/messageModels");

// CREATE A MESSAGE

const submitMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// READ ALL MESSAGES

const viewMessages = async (req, res) => {
  try {
    const message = await Message.find();
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// READ SINGLE MESSAGES

const viewSingleMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findById(id);
    if (!message) {
      return res.status(404).json(`No message with id: ${id}`);
    }
    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  submitMessage,
  viewMessages,
  viewSingleMessage,
};
