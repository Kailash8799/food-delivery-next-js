import connectDb from "@/database/_db";
import User from "@/models/User";

const handler = async(req,res)=>{
    if(req.method === "GET"){
        await User.create({name:"Kailash"})
        return res.json({success:true})
    }
    else{
        return res.json({error:true})
    }
}
export default connectDb(handler)