import {  NextResponse } from "next/server";
import dbConnect from "@/database/_dbconnect";
import User from "@/models/User";
import bcrypt from 'bcrypt';

export async function POST(req) {
  dbConnect();
  const body = await req.json();
  if (body?.email && body?.password) {
    const u = await User.findOne({ email: body?.email });
    if (u) {
      return NextResponse.json({
        success: false,
        message: "User already exits",
      },{status:400});
    }
    const hashPassword = await bcrypt.hash(body?.password,12);
    await User.create({name:body?.name,email:body?.email,password:hashPassword})
    return NextResponse.json({
      success: true,
      message: "Account has been created successfully",
    },{status:200});
  } else {
    return NextResponse.json({
      success: false,
      message: "Please check the email and password",
    },{status:500});
  }
}
