import bedModel from '../models/bedModel.js';
import userModel from '../models/userModel.js';

// Add new bed
export async function addBed(req, res) {
     try {
          const { bedNumber, ward} = req.body;
          const newBed = new bedModel({
               bedNumber,
               ward
          });
          const savedBed = await newBed.save();
          res.status(200).json({savedBed , message:"Bed added successfully" , success:true
          });
     } catch (error) {
          res.status(500).json({ message: error.message , success:false });
     }
}

// Remove bed
export async function removeBed(req, res) {
     try {
          const { ward , bednumber } = req.headers;
          const deletedBed = await bedModel.findOneAndDelete({ ward, bedNumber:bednumber });
          if (!deletedBed) {
               return res.status(404).json({ message: 'Bed not found' });
          }
          res.status(200).json({ message: 'Bed removed successfully' , success:true});
     } catch (error) {
          res.status(500).json({ message: error.message , success:false});
     }
}

// Assign patient to bed
export async function assignPatient(req, res) {
     try {
          const { patientID , bedNumber , ward } = req.body;

          const bed = await bedModel.findOne({bedNumber , ward});
          if (!bed) {
               return res.status(404).json({ message: 'Bed not found' ,success:false});
          }

          if (bed.isOccupied) {
               return res.status(400).json({ message: 'Bed is not available' ,success:false});
          }

          const user = await userModel.findById(patientID);
          if (!user) {
               return res.status(404).json({ message: 'User not found' ,success:false});
          }
          user.bedNumber = bed.ward + "-" + bed.bedNumber;
          await user.save();
          bed.patientID = patientID;
          bed.isOccupied = true;
          bed.patientName = user.name;
          bed.gender = user.gender;
          await bed.save();

          res.status(200).json({ message: 'Patient assigned to bed successfully', bed ,success:true});
     } catch (error) {
          res.status(500).json({ message: error.message ,success:false});
     }
}

// Get all beds
export async function getAllBeds(req, res) {
     try {
          const beds = await bedModel.find();
          res.status(200).json(beds);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
}

// discharge patient from bed
export async function dischargePatient(req, res) {
     try {
          const { patientID } = req.body;
          console.log(patientID)
          const user = await userModel.findOne({_id: patientID});
          if (!user) {
               return res.status(404).json({ message: 'Patient not found' });
          }

          const bed = await bedModel.findOne({ patientID });
          if (!bed) {
               return res.status(404).json({ message: 'Bed not found for this patient' });
          }
          bed.patientID = "";
          bed.patientName="";
          bed.gender ="";
          bed.isOccupied = false;
          await bed.save();

          user.bedNumber = null;
          await user.save();

          res.status(200).json({ message: 'Patient discharged successfully' });
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
}