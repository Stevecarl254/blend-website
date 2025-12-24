import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import Team from "../models/TeamMember.js";

const router = express.Router();

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = "./uploads/team";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// GET all team members
router.get("/", async (req, res) => {
  try {
    const members = await Team.find({});
    res.json({ success: true, data: members });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// ADD new member
router.post("/", upload.single("photo"), async (req, res) => {
  try {
    const { name, role, bio, socials } = req.body;
    if (!name || !role || !bio || !req.file)
      return res.status(400).json({ success: false, message: "Please fill all required fields" });

    const newMember = new Team({
      name,
      role,
      bio,
      photo: `/uploads/team/${req.file.filename}`,
      socials: socials ? JSON.parse(socials) : {},
    });

    await newMember.save();
    res.json({ success: true, data: newMember });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// UPDATE member
router.put("/:id", upload.single("photo"), async (req, res) => {
  try {
    const { name, role, bio, socials } = req.body;
    const member = await Team.findById(req.params.id);
    if (!member) return res.status(404).json({ success: false, message: "Member not found" });

    member.name = name || member.name;
    member.role = role || member.role;
    member.bio = bio || member.bio;
    member.socials = socials ? JSON.parse(socials) : member.socials;
    if (req.file) member.photo = `/uploads/team/${req.file.filename}`;

    await member.save();
    res.json({ success: true, data: member });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// DELETE member
router.delete("/:id", async (req, res) => {
  try {
    const member = await Team.findById(req.params.id);
    if (!member) return res.status(404).json({ success: false, message: "Member not found" });

    // Delete image
    if (member.photo) {
      const imgPath = `.${member.photo}`;
      if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
    }

    await member.remove();
    res.json({ success: true, message: "Member deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;