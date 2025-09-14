import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
     name: {type : String , required: true},
     email : {type: String , required:true , unique:true     },
     phone : {type: String , required:true , unique:true     },
     role :{type: String , required:true},
     specialization : {type:String},
     salary : {type :Number},
     gender :{type:String},
     shift : {type :String},
     status:{type:String , default:"inactive"},
     appointments :{type :Array , default:[]}

},{minimize:false})

staffSchema.pre('save', async function(next){
     if(this.role === "doctor"){
          this.salary = 70000;
     }else if(this.role === "admin"){
          this.salary = 40000;
     }else if(this.role === "receptionist"){
          this.salary = 25000;
     }else if(this.role === "janitor"){
          this.salary = 10000;
     }
     next();
})

const staffModel = mongoose.models.staffData || mongoose.model('staffData', staffSchema , 'staffData');
export default staffModel;