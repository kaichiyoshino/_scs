import { NextResponse } from "next/server";
import prisma from "../../../lib/prismaClinet";

export async function GET(req: Request) {
  const picData = await prisma.picture.findMany({
    take: 10,
  });
  return NextResponse.json(picData);
}
