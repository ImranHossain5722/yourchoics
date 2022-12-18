import User from "../../models/User"
import connectDb from "../../middleware/mongoose";


const  handler = async (req,res)=>{

    if(req.method=="POST"){
        const {name,email}=(req.body)
        let u = new User({name,email,password:" "})
        await u.save()
        
        res.status(200).json({success: "success"})
    }
    
    else{
        res.status(400).json({error: "this method is not allowed"})
    }
    
}

export default connectDb (handler)
   