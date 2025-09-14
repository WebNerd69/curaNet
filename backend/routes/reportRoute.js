import express from "express";

import {createReport , getAllReports , getUserReports} from "../controler/reportController.js"
import doctorVarifier from "../middleware/doctorVarifier.js";

const reportRouter = express.Router();

reportRouter.post("/create-report",doctorVarifier, createReport);
reportRouter.get("/get-all-reports", getAllReports);
reportRouter.get("/get-user-reports/:userId", getUserReports);

export default reportRouter;
