import userModel from '../models/userModel.js';

// Create new user
export const createNewUser = async (req, res) => {
     try {
          const newUser = new userModel(req.body);
          const savedUser = await newUser.save();
          res.status(201).json(savedUser);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
};

// Update user
export const updateUser = async (req, res) => {
     try {
          const updatedUser = await userModel.findByIdAndUpdate(
               req.params.id,
               { $set: req.body },
               { new: true }
          );
          if (!updatedUser) {
               return res.status(404).json({ message: "User not found" });
          }
          res.status(200).json(updatedUser);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
};

// Get user by ID
export const getUserById = async (req, res) => {
     try {
          const user = await userModel.findById(req.params.id);
          if (!user) {
               return res.status(404).json({ message: "User not found" });
          }
          res.status(200).json(user);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
};
// Get user by email
export const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email)

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Add appointment to user
export const addAppointment = async (req, res) => {
     try {
          const user = await userModel.findByIdAndUpdate(
               req.params.id,
               { $push: { appointments: req.body.appointmentId } },
               { new: true }
          );
          if (!user) {
               return res.status(404).json({ message: "User not found" });
          }
          res.status(200).json(user);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
};

// Add billing to user
export const addBilling = async (req, res) => {
     try {
          const user = await userModel.findByIdAndUpdate(
               req.params.id,
               { $push: { billings: req.body.billingId } },
               { new: true }
          );
          if (!user) {
               return res.status(404).json({ message: "User not found" });
          }
          res.status(200).json(user);
     } catch (error) {
          res.status(400).json({ message: error.message });
     }
};

// // Update user profile
// export const updateUserProfile = async (req, res) => {
//      try {
//           const updatedUser = await userModel.findByIdAndUpdate(
//                req.params.id,
//                { 
//                     $set: {
//                          name: req.body.name,
//                          email: req.body.email,
//                          phone: req.body.phone,
//                          address: req.body.address
//                     }
//                },
//                { new: true }
//           );
//           if (!updatedUser) {
//                return res.status(404).json({ 
//                     success: false,
//                     message: "User not found"
//                });
//           }
//           res.status(200).json({
//                success: true,
//                message: "Profile updated successfully",
//                data: updatedUser
//           });
//      } catch (error) {
//           res.status(400).json({ 
//                success: false,
//                message: error.message
//           });
//      }
// };