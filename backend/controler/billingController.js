import userModel from '../models/userModel.js'; // Note the .js extension
import billingModel from '../models/billingModel.js';

// Generate bill and associate it with user
const generateBill = async (req, res) => {
     try {
          const { userId, doctorId , tests , userName , doctorName } = req.body;

          // Find user by userId
          const user = await userModel.findById(userId);
          if (!user) {
               return res.status(404).json({ message: 'User not found' });
          }

          let totalBill = 500
          for (const key in tests) {
               if (!Object.hasOwn(tests, key)) continue;
               
               totalBill += tests[key];
               console.log(key , tests[key])
          }
          console.log(totalBill)

          // Create new billing
          const newBill = new billingModel({
               userId,
               doctorId,
               tests,
               userName,
               doctorName,
               totalBill
          });

          // Save the bill
          const savedBill = await newBill.save();
          // Push billing to user's bills array
          user.billings.push({billId:savedBill._id , totalBill});
          await user.save();

          res.status(201).json({
               success: true,
               data: savedBill,
               message:"Bill generated"

          });
     } catch (error) {
          res.status(500).json({
               success: false,
               message: 'Error generating bill',
               error: error.message
          });
     }
};

// Update payment status
const updatePaymentStatus = async (req, res) => {
     try {
          const { _id, paymentStatus } = req.body;

          const updatedBill = await billingModel.findByIdAndUpdate(
               _id,
               { paymentStatus },
               { new: true }
          );

          if (!updatedBill) {
               return res.status(404).json({ message: 'Bill not found' });
          }

          res.status(200).json({
               success: true,
               data: updatedBill,
               message:"Payment status updated"
          });
     } catch (error) {
          res.status(500).json({
               success: false,
               message: 'Error updating payment status',
               error: error.message
          });
     }
};
// Get bill by ID
const getBillById = async (req, res) => {
     try {
          const _id = req.params.id
          const bill = await billingModel.findById(_id);
          if (!bill) {
               return res.status(404).json({ message: 'Bill not found' });
          }
          res.status(200).json({
               success: true,
               data: bill
          });
     } catch (error) {
          res.status(500).json({
               success: false,
               message: 'Error fetching bill',
               error: error.message
          });
     }
};

// Get bills by user ID
const getBillByUserId = async (req, res) => {
     try {
          const bills = await billingModel.find({ userId: req.params.userId });
          res.status(200).json({
               success: true,
               data: bills
          });
     } catch (error) {
          res.status(500).json({
               success: false,
               message: 'Error fetching bills',
               error: error.message
          });
     }
};

export { generateBill, updatePaymentStatus , getBillById, getBillByUserId };