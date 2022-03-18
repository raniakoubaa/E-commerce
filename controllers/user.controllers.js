const User = require("../models/User");
const bc=require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("config")
const secret = config.get("secret")
exports.signUp = async (req, res) => {
    const { fullName, email, password, phone, address, registerDate, userRole } = req.body
    try {
        const existUser=await User.findOne({email})
        if(existUser){
            res.status(401).json({msg:"this email exist"})
        }
        const newUser = new User({ fullName, email, password, phone, address, registerDate, userRole })
        /// cryptage password
        const salt=await bc.genSalt(10);
        const hash=await bc.hashSync(password,salt)
        newUser.password=hash
        await newUser.save();
        /// token
        const payload={
            id:newUser._id,
            fullName:newUser.fullName
        }
        const token=jwt.sign(payload,secret)
        res.status(200).send({
            token,user:{
                id:newUser._id,
                email:newUser.email,
                password:newUser.password,
                phone:newUser.phone,
                address:newUser.address,
                role:newUser.role
            }
        })
       
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
exports.login=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const theUser=await User.findOne({email});
        if(!theUser)
        {
         res.status(402).json({msg:"invalid email or password"})
        }
        const isMatch=await bc.compare(password,theUser.password)
        if(!isMatch)
        res.status(403).json({msg:"invalid email or password"})
        /// if login success, 
        const payload={
            id:theUser._id,
            fullName:theUser.fullName,
            email:theUser.email,
            phone:theUser.phone,
            address:theUser.address,
            role:theUser.role
        }
        const token=jwt.sign(payload,secret)
        res.status(203).json({
            token, user:
            {
                id:theUser._id,
            fullName:theUser.fullName,
            email:theUser.email,
            password:theUser.password,
            phone:theUser.phone,
            address:theUser.address,
            role:theUser.role   
            }
        })
      
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
exports.getUser=(req,res)=>{
    res.send(req.user)
}
exports.getAllUsers=async(req,res)=>{
    try {
      const users=await User.find();
      res.send(users)
    } catch (error) {
      res.status(501).json({msg:error.message})
    }
      }
exports.DeleteUser=async(req,res)=>{
        try {
          const user=await User.findByIdAndDelete(req.params.id);
          res.send({ msg: `${user.fullName} was successfuly deleted` })
        } catch (error) {
          res.status(501).json({msg:error.message})
        }
          }