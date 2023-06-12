import { NextResponse } from "next/server";
import dbConnect from "@/database/_dbconnect";
import User from "@/models/User";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  if (body?.email && body?.password) {
    const u = await User.findOne({ email: body?.email });
    if (u) {
      return NextResponse.json(
        {
          success: false,
          message: "User already exits",
        },
        { status: 400 }
      );
    }
    const hashPassword = await bcrypt.hash(body?.password, 12);
    const cu = await User.create({
      name: body?.name,
      email: body?.email,
      password: hashPassword,
    });
    if (cu) {
      let email = `We have sent you this email in response to your request to reset your password on Codeswear.com

      To reset your password, please follow the link below:
      ${process.env.NEXT_PUBLIC_HOST}/verifyemail?token=${cu?._id}

      We recommend that you keep your password secure and not share it with anyone.If you feel your password has been compromised, you can change it by going to your My Account Page and update your password `;
      // --------------------------------
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD_EMAIL,
        },
      });
      var mailOptions = {
        from: process.env.EMAIL,
        to: cu?.email,
        subject: "Verify User",
        text: email,
      };

        transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent ");
        }
      });

    }
    return NextResponse.json(
      {
        success: true,
        message: "Account has been created successfully. Verify email",
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the email and password",
      },
      { status: 500 }
    );
  }
}
