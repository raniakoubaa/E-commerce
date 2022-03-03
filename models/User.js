const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const userSchema=new Schema({
    fullName: String,
    email: String,
    phone: String,
    address: String,
    password: String,
    registerDate: {
      type: Date,
      default: Date.now,
    },
    
    userRole: {
      type: String,
      default: 'user',
      roles: ['user', 'admin'],
    },
  });
  module.exports=User=mongoose.model("User",userSchema)
