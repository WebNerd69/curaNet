import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import connectDB from "../config/mongodb.js";

import userRouter from "../routes/userRoutes.js";
import staffRouter from "../routes/staffRoute.js";
import appointmentRouter from "../routes/appointmentRoute.js";
import reportRouter from "../routes/reportRoute.js";
import billingRouter from "../routes/billingRoute.js"
import bedRouter from "../routes/bedRoute.js"

// configuring env variable
dotenv.config();

// setting up express server
const port = process.env.PORT || 3000;
const app = express();

// middleware
app.use(express.json());
app.use(cors())

// connecting to db
connectDB();


// api endpoints
app.use("/api/user" , userRouter);
app.use("/api/staff" , staffRouter);
app.use("/api/appointment" , appointmentRouter);
app.use("/api/report",reportRouter);
app.use("/api/billing",billingRouter);
app.use("/api/bed",bedRouter)

app.get('/', (req, res) => {
     res.send('Chal raha hai bhaiiiiiiii');
});

app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}/`);
});