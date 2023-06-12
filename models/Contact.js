import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name:{type: String, default:""},
    email:{type: String, required: true},
    id:{type: String},
    message:{type: String, required: true},
    responce:{type: String,default:""},
    seanbydev:{type:Boolean,default:false},
},{timeseries:true})

export default mongoose.models.Contact || mongoose.model("Contact",ContactSchema)