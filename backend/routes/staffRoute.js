import express from "express"

import {createStaff , updatePay , updateProfile , getAllStaff , fireStaff , assignStaff , getStaffByEmail} from "../controler/staffController.js"
import adminVarifier from "../middleware/adminVarifier.js"

const staffRouter = express.Router()

staffRouter.get("/", getAllStaff)
staffRouter.post("/get-staff-by-email",getStaffByEmail)

staffRouter.put("/update-profile/:staffId", updateProfile)

staffRouter.patch("/update-pay",adminVarifier, updatePay)

staffRouter.post("/create-staff",adminVarifier, createStaff)
staffRouter.post("/assign",adminVarifier, assignStaff)

staffRouter.delete("/fire/:staffId",adminVarifier, fireStaff)

export default staffRouter