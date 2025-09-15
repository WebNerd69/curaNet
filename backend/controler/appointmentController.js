import appointmentModel from '../models/appointmentModel.js';
import userModel from '../models/userModel.js';

export const createappointment = async (req, res) => {
     try {
          // const { userId , doctorId , dateTime , caseType} = req.body;
          console.log(req.body)
          const appointment = new appointmentModel(req.body);
          const savedappointment = await appointment.save();

          // Add appointment ID to user's appointments array
          await userModel.findByIdAndUpdate(
               req.body.userId,
               { $push: { appointments:{aptId: savedappointment._id , doctorName: req.body.doctorName , dateTime : req.body.dateTime } } }
          );

          res.status(201).json({
               success: true,
               data: savedappointment,
               message: "Appointment added successfully"
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          });
     }
};

export const rescheduleappointment = async (req, res) => {
     try {
          const { _id } = req.params;
          const { newDateTime } = req.body;

          const updatedappointment = await appointmentModel.findByIdAndUpdate(
               _id,
               { 
                    dateTime: newDateTime,
                    status: 'rescheduled',

               },
               { new: true }
          );

          if (!updatedappointment) {
               return res.status(404).json({
                    success: false,
                    message: 'appointment not found'
               });
          }

          res.status(200).json({
               success: true,
               data: updatedappointment,
               message : "Appointment Scheduled successfully"
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          });
     }
};

export const cancelappointment = async (req, res) => {
     try {
          const { _id } = req.params;

          const canceledappointment = await appointmentModel.findByIdAndUpdate(
               _id,
               { status: 'cancelled' },
               { new: true }
          );

          if (!canceledappointment) {
               return res.status(404).json({
                    success: false,
                    message: 'appointmentModel not found'
               });
          }

          res.status(200).json({
               success: true,
               data: canceledappointment,
               message: "Appointment cancelled successfully"
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          });
     }
};

export const getAllAppointments = async (req, res) => {
     try {
          const appointments = await appointmentModel.find();
          res.status(200).json({
               success: true,
               data: appointments
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          });
     }
};


export const getAppointmentFromUserId = async (req, res) => {
     try {
          const { userId } = req.params;
          const appointments = await appointmentModel.find({ userId: userId });
          
          res.status(200).json({
               success: true,
               data: appointments
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          });
     }
};

export const getAppointmentFromDoctorId = async (req, res) => {
     try {
          const { doctorId } = req.params;
          const appointments = await appointmentModel.find({ doctorId: doctorId });
          
          res.status(200).json({
               success: true,
               data: appointments
          });
     } catch (error) {
          res.status(400).json({
               success: false,
               message: error.message
          });
     }
};