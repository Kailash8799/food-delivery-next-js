import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{type: String, default:""},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    verified:{type:Boolean,default:false},
    token:{type:String}
},{timestamps:true})

export default mongoose.models.User || mongoose.model("User",UserSchema)