const express = require("express");
const Contact = require("../models/contact");
const router = express.Router();

// Save contact message
router.post("/send", async (req, res) => {
    try {
        const newMessage = new Contact(req.body);
        await newMessage.save();
        res.json({ success: true, message: "Message saved successfully!" });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// Fetch all messages (admin panel)
router.get("/all", async (req, res) => {
    try {
        const messages = await Contact.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;



router.get("/admin/messages", async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Error fetching messages" });
  }
});

