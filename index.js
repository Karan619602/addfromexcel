const express = require("express");
const app = express();
const connectdatabase=require('./config/database.js')
const {config}=require('dotenv')
const fileUpload=require('express-fileupload')
const cors=require('cors')

app.use(cors())
config({path:'./config/.env'})

connectdatabase();

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : __dirname + "/uploads/"
}))

const readXlsxFile = require("read-excel-file/node");
const Data=require('./modal/data.js')
app.post("/upload/excel/data", async  (req,res,next)=>{
  
console.log(req.files);
  if(!req.files){
    return ;
  }
    readXlsxFile(req.files.excel.tempFilePath, {Data }).then(async (rows) => {
        const arr = [];
        rows.forEach((row, idx) => {
          if (idx != 0) {
            arr.push({
              Name               : row[0],
              Email              : row[1],
              Mobile_No          : row[2],
              DOB                : row[3],
              Work_Experience    : row[4],
              Resume_Title       : row[5],
              Current_Location   : row[6],
              Postal_Address     : row[7],
              Current_Employer   : row[8],
              Current_Designation: row[9],

            });
          }
        });
        await Data.insertMany(arr);
    });

   res.status(201).json({
       success:true
   })


  
   
       
    

})


app.listen(4000,err=>{
    console.log(`server running on port 4000`);
})