const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const dataSchema = new Schema({
  Name: String,
  Email: String,
  Mobile_No: Number,
  DOB:String,
  Work_Experience:String,
  Resume_Title:String,
  Current_Location:String,
  Postal_Address:String,
  Current_Employer:String,
  Current_Designation:String,


});
module.exports = mongoose.model("Data", dataSchema);