import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
     name : {type : String, required:true},
     email : {type : String, required:true , unique:true},
     gender : {type:String},
     age: {type : Number},
     bloodGroup: {type:String},
     phone : {type : String},
     emergencyContact : {type : String},
     address : {type : String},
     appointments :{type :Array , default:[]},
     billings :{type :Array , default:[]},
     reports :{type: Array , default:[]},
     bedNumber :{type:String,default:""}

},{minimize:false})

const userModel = mongoose.models.user || mongoose.model('user', userSchema)
export default userModel