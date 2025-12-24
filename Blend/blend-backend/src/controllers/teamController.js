import TeamMember from "../models/TeamMember.js";
import fs from "fs";
import path from "path";

// Add a new member
export const addMember = async (req, res) => {
  try {
    const { name, role, bio, socials } = req.body;

    if (!name || !role || !bio || !req.file) {
      return res.status(400).json({ success: false, message: "Please fill all required fields and upload a photo" });
    }

    const member = new TeamMember({
      name,
      role,
      bio,
      photo: `/uploads/${req.file.filename}`,
      socials: socials ? JSON.parse(socials) : {},
    });

    const saved = await member.save();
    res.status(201).json({ success: true, data: saved });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Get all members
export const getMembers = async (req, res) => {
  try {
    const members = await TeamMember.find();
    res.json({ success: true, data: members });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Update member
export const updateMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, bio, socials } = req.body;

    const member = await TeamMember.findById(id);
    if (!member) return res.status(404).json({ success: false, message: "Member not found" });

    member.name = name || member.name;
    member.role = role || member.role;
    member.bio = bio || member.bio;
    member.socials = socials ? JSON.parse(socials) : member.socials;

    if (req.file) {
      // Delete old image
      const oldImage = path.join("uploads", path.basename(member.photo));
      if (fs.existsSync(oldImage)) fs.unlinkSync(oldImage);

      member.photo = `/uploads/${req.file.filename}`;
    }

    const updated = await member.save();
    res.json({ success: true, data: updated });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// Delete member
export const deleteMember = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await TeamMember.findById(id);
    if (!member) return res.status(404).json({ success: false, message: "Member not found" });

    // Delete photo
    const filePath = path.join("uploads", path.basename(member.photo));
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    await member.remove();
    res.json({ success: true, message: "Member deleted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};