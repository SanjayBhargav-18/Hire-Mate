import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/sync", async (req, res) => {
  try {
    const { clerkId, email, name } = req.body;

    let user = await User.findOne({ clerkId });

    if (!user) {
      user = await User.create({ clerkId, email, name });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;