import { prisma } from "@/prisma/prisma-client";
import { NextResponse } from "next/server";

export async function GET() {
	const authors = await prisma.author.findMany();

	return NextResponse.json(authors);
}
