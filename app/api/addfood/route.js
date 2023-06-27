import { NextResponse } from "next/server";
import dbConnect from "@/database/_dbconnect";
import Product from "@/models/Product";

export async function POST(req) {
  await dbConnect();
  const body = await req.json();
  if (body?.slug && body?.itemname && body?.image && body?.price) {
    const u = await Product.findOne({ slug: body?.slug });
    if (u) {
      return NextResponse.json(
        {
          success: false,
          message: "Slug is already in use. try different slug",
        },
        { status: 400 }
      );
    }
    await Product.create({
      slug: body?.slug,
      itemname: body?.itemname,
      image: body?.image,
      desc: body?.desc,
      price: body?.price,
    });
    return NextResponse.json(
      {
        success: true,
        message: "Product has been added successfully",
      },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      {
        success: false,
        message: "Please feel all information",
      },
      { status: 500 }
    );
  }
}
