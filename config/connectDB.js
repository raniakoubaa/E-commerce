const mongoose=require("mongoose");
const config=require("config");
const db=config.get("db");
const connectDB= async()=>{
    try{
        await mongoose.connect(db);
        console.log("data base is succeful connected")
    }
    catch(error){
        console.log(error.message)
    }
}
module.exports=connectDB