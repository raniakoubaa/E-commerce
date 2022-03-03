const roleCheck = (roles)=>(req,res,next)=>{
    !roles.includes(req.user.userRole)
    ?res.status(401).json("Not Othorised User")
    :next()
    }
    module.exports = roleCheck;