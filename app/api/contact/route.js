import {  NextResponse } from "next/server";
import dbConnect from "@/database/_dbconnect";
import Contact from "@/models/Contact";

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  if (body?.email && body?.message) {
    await Contact.create({name:body?.name,email:body?.email,message:body?.message})
    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    },{status:200});
  } else {
    return NextResponse.json({
      success: false,
      message: "Please fill information again!",
    },{status:500});
  }
}
