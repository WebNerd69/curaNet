import reportModel from '../models/reportModel.js';
import userModel from '../models/userModel.js';

// Create new report and add to user's reports array
export const createReport = async (req, res) => {
     try {
          const { userId } = req.body;
          const report = new reportModel(req.body);
          const savedReport = await report.save();

          // Add report to user's reports array
          await userModel.findByIdAndUpdate(
               userId,
               { $push: { reports: {reportId: savedReport._id , createdAt : new Date()} } },
               { new: true }
          );

          res.status(201).json({
               success: true,
               data: savedReport
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               error: error.message
          });
     }
};

// Get all reports
export const getAllReports = async (req, res) => {
     try {
          const reports = await reportModel.find()
               .populate('userId', 'name email')
               .sort({ createdAt: -1 });

          res.status(200).json({
               success: true,
               count: reports.length,
               data: reports
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               error: error.message
          });
     }
};

// Get reports by user ID
export const getUserReports = async (req, res) => {
     try {
          const reports = await reportModel.find({ userId: req.params.userId })
               .populate('userId', 'name email')
               .sort({ createdAt: -1 });

          res.status(200).json({
               success: true,
               count: reports.length,
               reports
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               error: error.message
          });
     }
};

// get report by id

export const getReportById = async (req,res)=>{
     try {
          const {_id} = req.params
          const report = await reportModel.findById(_id)
          if (!report) {
            res.json({success:false , message:"no reports"})    
          }
          res.status(200).json({success:true , report})
     } catch (error) {
          res.status(500).json({success:false , message:error.message})
     }
}