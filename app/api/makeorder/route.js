import { NextResponse } from "next/server";
import dbConnect from "@/database/_dbconnect";
import Order from "@/models/Order";

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  try {
    if (body?.email) {
      await Order.create({
        email: body?.email,
        name: body?.name,
        phone: body?.phone,
        orderId: "1234543234566543",
        products: body?.newItem,
        address: body?.address,
        amount: 10,
      });
      return NextResponse.json(
        {
          success: true,
          message: "Ordered successfully",
        },
        { status: 200 }
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
