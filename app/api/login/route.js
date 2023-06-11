import { NextRequest,NextResponse } from "next/server";
import dbConnect from "@/database/_dbconnect";
import User from "@/models/User";

dbConnect()
export async function GET() {
    const u = await User.create({name:"Kailash"})
    return NextResponse.json({ name: 'Anuj Singh' });
  }
