const mongoose = require("mongoose");
const dotenv=require('dotenv')

const connectdatabase =()=>{
   mongoose.connect(process.env.CONNECTION_URL,{
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }).then( (con)=>{
console.log(`connect to database : ${con.connection.host}`);
    })
}

module.exports =connectdatabase;