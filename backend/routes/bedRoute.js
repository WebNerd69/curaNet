import express from "express"

import { addBed , removeBed , getAllBeds , assignPatient ,dischargePatient} from "../controler/bedController.js"
import adminVarifier from "../middleware/adminVarifier.js";
import receptionistVarifier from "../middleware/receptionistVarifier.js";
import doctorVarifier from "../middleware/doctorVarifier.js";

const bedRouter = express.Router();

bedRouter.delete("/remove",adminVarifier, removeBed);

bedRouter.get("/", getAllBeds);

bedRouter.post("/add",adminVarifier, addBed);
bedRouter.post("/assign-patient",receptionistVarifier, assignPatient);
bedRouter.post("/discharge-patient",doctorVarifier, dischargePatient);

export default bedRouter;
