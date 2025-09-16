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
               return res.status(404).json({success:false ,  message: "User not found" });
          }
          res.status(200).json({success:true , updatedUser});
     } catch (error) {
          res.status(400).json({ success:false , message: error.message });
     }
};

// Get user by ID
export const getUserById = async (req, res) => {
     try {
          const user = await userModel.findById(req.params.id);
          if (!user) {
               return res.status(404).json({ success:false , message: "User not found" });
          }
          res.status(200).json({success:true , user});
     } catch (error) {
          res.status(400).json({success:false, message: error.message });
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

export const checkOrCreateUser = async (req, res) => {
  try {
    const { email, name} = req.body;

    let user = await userModel.findOne({ email });

    if (!user) {
      // First time login
      user = new userModel({ email, name});
      await user.save();
      return res.status(201).json({success:true, message: "New user created", user });
    }

    // Returning user
    return res.status(200).json({success:true, message: "User exists", user });
  } catch (err) {
    res.status(500).json({success:false, message: err.message });
  }
};

export const getAllUsers = async(req,res)=>{
     try {
          let users = await userModel.find({})
          if(!users){
               res.status(404).json({message:"users not found" , success:false})
          }
          res.status(200).json({success:true,users})
     } catch (error) {
          res.status(500).json({success:false , message:error.message})
     }
}