import staffModel from "../models/staffModel.js";
import jwt from "jsonwebtoken";

// Create new staff
export const createStaff = async (req, res) => {
  try {
    const staff = new staffModel(req.body);
    const savedStaff = await staff.save();
    res.status(201).json({ savedStaff, message: "Staff created successfully" , success:true});
  } catch (error) {
    res.status(400).json({ message: error.message , success:false });
  }
};
// update profile
export const updateProfile = async (req, res) => {
  try {
    const { staffId } = req.params;
    const updatedStaff = await staffModel.findByIdAndUpdate(staffId, req.body, {
      new: true,
    });

    if (!updatedStaff) {
      return res.status(404).json({ message: "Staff not found" });
    }

    res
      .status(200)
      .json({ updatedStaff, message: "Profile updated successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update staff pay
export const updatePay = async (req, res) => {
  try {
    const { staffIds, salary } = req.body;
    console.log(staffIds)
    const updatePromises = staffIds.map((staffId) =>
      staffModel.findByIdAndUpdate(staffId, { salary }, { new: true })
    );

    const updatedStaff = await Promise.all(updatePromises);
    res
      .status(200)
      .json({ updatedStaff, message: "Salaries updated successfully" , success:true });
  } catch (error) {
    res.status(400).json({ message: error.message , success:false });
  }
};

// Get all staff
export const getAllStaff = async (req, res) => {
  try {
    const staff = await staffModel.find();
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fire staff (set status to inactive)
export const fireStaff = async (req, res) => {
  try {
    const { staffId } = req.params;
    const updatedStaff = await staffModel.findByIdAndDelete(
      staffId
    );
    res.status(200).json({success:true,updatedStaff});
  } catch (error) {
    res.status(400).json({ message: error.message ,success:false});
  }
};

// Assign staff shifts
export const assignStaff = async (req, res) => {
  try {
    const { staffIds, shiftDateTime } = req.body;
    const updatePromises = staffIds.map((staffId) =>
      staffModel.findByIdAndUpdate(
        staffId,
        { shift: shiftDateTime },
        { new: true }
      )
    );

    const updatedStaff = await Promise.all(updatePromises);
    res
      .status(200)
      .json({ updatedStaff, message: "Shifts assigned successfully" , success:true });
  } catch (error) {
    res.status(400).json({ message: error.message , success:false});
  }
};

// get staff by email

export const getStaffByEmail = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();
    console.log(email)
    const staff = await staffModel.findOne({email});
    console.log(staff)
    if (!staff) {
      return res
        .status(404)
        .json({ message: "Staff not found , user unregistered" , success:false });
    } else {
      const payload = { id: staff._id, role: staff.role, email: staff.email }
      const token = jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );
      res.status(200).json({ staff, token , success:true });
    }
  } catch (err) {
    res.status(500).json({ message: err.message , success:false });
  }
};
