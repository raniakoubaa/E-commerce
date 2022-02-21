const express=require("express")
const app=express()
const connectDB=require("./config/connectDB")
const user=require("./routes/routeUser")
app.use(express.json())
app.use("/user",user)
connectDB()
const PORT=process.env.PORT||5000;
app.listen(PORT,err=>err?console.log(err):console.log(`server is running in port ${PORT}`))
