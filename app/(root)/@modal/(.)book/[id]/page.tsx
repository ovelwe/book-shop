import { ChooseBookModal } from "@/components/shared";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { authors } from "../../../../../prisma/constants";

export default async function BookModalPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;

	const book = await prisma.book.findFirst({
		where: { id: Number(id) },
		include: {
			authors: true,
		},
	});

	if (!book) {
		return notFound();
	}

	return <ChooseBookModal book={book} />;
}
