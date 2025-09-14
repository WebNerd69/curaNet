import express from "express";

import {generateBill , updatePaymentStatus , getBillById , getBillByUserId} from "../controler/billingController.js"
import receptionistVarifier from "../middleware/receptionistVarifier.js";

const billingRouter = express.Router();

billingRouter.post("/generate-bill",receptionistVarifier, generateBill);
billingRouter.post("/update-payment-status",receptionistVarifier, updatePaymentStatus);

billingRouter.get("/get-bill/:id", getBillById);
billingRouter.get("/get-bills/:userId", getBillByUserId);

export default billingRouter;