import {  NextResponse } from "next/server";
import dbConnect from "@/database/_dbconnect";
import Product from "@/models/Product";

export async function POST(req) {
  await dbConnect();
    const food = await Product.find();
    return NextResponse.json({
      success: true,
      message: "Food items",
      product:food
    },{status:200});
}
