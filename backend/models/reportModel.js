import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
     userId : {type:String , required:true},
     userName : {type:String , required:true},
     doctorId : {type:String , required:true},
     doctorName : {type:String , required:true},
     report : {type :String , required:true},
     prescription : {type :String , required:true},
     tests : {type :String},
     date : {type:Date , default:Date.now}

})

const reportModel = mongoose.models.report || mongoose.model('report',reportSchema);
export default reportModel;
