import express from "express";

import {createappointment , rescheduleappointment ,cancelappointment ,getAllAppointments ,getAppointmentFromDoctorId, getAppointmentFromUserId} from "../controler/appointmentController.js"

const appointmentRouter = express.Router();

appointmentRouter.post("/create", createappointment);

appointmentRouter.put("/reschedule/:_id", rescheduleappointment);
appointmentRouter.put("/cancel/:_id", cancelappointment);

appointmentRouter.get("/all", getAllAppointments);
appointmentRouter.get("/user/:userId", getAppointmentFromUserId);
appointmentRouter.get("/doctor/:doctorId", getAppointmentFromDoctorId);

export default appointmentRouter;