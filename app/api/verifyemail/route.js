import { NextResponse } from "next/server";
import dbConnect from "@/database/_dbconnect";
import User from "@/models/User";
import jwt from "jsonwebtoken";

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  try {
    if (body?.token && body?.secret === process.env.NEXT_PUBLIC_SECRET) {
      let decode_token = jwt.verify(body?.token, process.env.JWT_SECRET);
      const u = await User.findOne({
        _id: decode_token?.userid,
        email: decode_token?.email,
      });
      if (u) {
        if (u?.verified) {
          return NextResponse.json(
            {
              success: true,
              message: "Email already verified",
            },
            { status: 200 }
          );
        }
        await User.updateOne(
          { _id: decode_token?.userid, email: decode_token?.email },
          { verified: true }
        );
        return NextResponse.json(
          {
            success: true,
            message: "Email verified",
          },
          { status: 200 }
        );
      }
      return NextResponse.json(
        {
          success: false,
          message: "Token is not valid",
        },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Some error accured",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Some error accured",
      },
      { status: 500 }
    );
  }
}
