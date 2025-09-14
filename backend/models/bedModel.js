import mongoose from "mongoose";

const bedSchema = new mongoose.Schema({
     ward:{type:String , required:true},
     bedNumber : {type:String , required:true , unique:true},
     isOccupied :{type:Boolean , default:false},
     patientID: {type:String ,default:""},
     patientName: {type:String, default:""},
     gender: {type:String, default:""},
})

const bedModel = mongoose.models.bed || mongoose.model('bed',bedSchema)
export default bedModel;