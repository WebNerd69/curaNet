import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
     userId :{type:String, required:true},
     userName :{type:String, required:true},
     doctorName :{type:String, required:true},
     doctorId :{type:String, required:true},
     dateTime : {type:String , required:true},
     status :{type:String, default:"scheduled"},
     case : {type: String, default: "general"},
     gender:{type:String },
     age:{type:Number },
     phone:{type:String },
})

const appointmentModel = mongoose.models.appointment || mongoose.model('appointment',appointmentSchema);
export default appointmentModel;