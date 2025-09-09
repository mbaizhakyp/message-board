const express = require("express");
const router = express.Router();

// Sample messages array
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

// Index route - display messages
router.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Messageboard",
    messages: messages,
  });
});

// New message form route
router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

// Handle form submission
router.post("/new", (req, res) => {
  const messageText = req.body.messageText;
  const messageUser = req.body.messageUser;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

// Individual message route
router.get("/message/:id", (req, res) => {
  const messageId = parseInt(req.params.id);
  const message = messages[messageId];

  if (message) {
    res.render("message", {
      title: "Message Details",
      message: message,
      messageId: messageId,
    });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = router;
