const express=require("express")
const { signUp, login, getUser, getAllUsers, DeleteUser } = require("../controllers/user.controllers");
const auth = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");
const { signUpRules, validator } = require("../middleware/validator")
router=express.Router()
router.post("/signUp",signUpRules(),validator,signUp);
router.post("/login",login)
router.get("/get",auth,getUser)
router.get("/users",getAllUsers)
router.delete("/deleteUser/:id",auth,roleCheck(['admin']),DeleteUser)
module.exports=router;