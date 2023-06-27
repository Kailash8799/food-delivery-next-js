import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    slug:{type: String, required: true},
    itemname:{type: String, required: true},
    image:{type: String, required: true},
    price:{type: String, required: true},
    desc:{type: String,default:""},
},{timestamps:true})

export default mongoose.models.Product || mongoose.model("Product",ProductSchema)