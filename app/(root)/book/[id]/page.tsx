import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { BookImage, Container } from "@/components/shared";
import { Title } from "@/components/shared/title";
import { Button } from "@/components/ui";

export default async function BookPage({
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
	const authorsString = book.authors.map((author) => author.name).join(", ");

	return (
		<Container className="flex flex-col my-10">
			<div className="flex flex-1">
				<BookImage imageUrl={book.imageUrl} />

				<div className="flex flex-col w-[490px] bg-[#f7f6f5] pl-[30px] p-7 justify-center">
					<Title text={book.name} className="font-extrabold" />

					<p className="text-gray-500 mb-10 font-bold">{authorsString}</p>
					<p className="text-gray-600 mb-10">{book.description}</p>
					<Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
						Добавить в корзину за {book.price} ₽
					</Button>
				</div>
			</div>
		</Container>
	);
}
