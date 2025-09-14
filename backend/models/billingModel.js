import mongoose from "mongoose";

const billingSchema = new mongoose.Schema({
     userId: {type : String , required: true},
     doctorId: {type : String , required: true},
     userName: {type :String , required:true},
     doctorName: {type :String , required:true},
     date: {type: Date , default: Date.now},
     tests :{type : Object , default: {}},
     basicFee : {type: Number , default:500},
     totalBill : {type: Number},
     paymentStatus : {type :String , default:"pending"}

})

const billingModel = mongoose.models.billing || mongoose.model('billing',billingSchema);
export default billingModel;
