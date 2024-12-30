import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { BookImage, Container } from "@/components/shared";
import { Title } from "../../../components/shared/title";

export default async function BookPage({ params }: { params: { id: string } }) {
	const book = await prisma.book.findFirst({
		where: { id: Number(params.id) },
		include: {
			authors: true,
		},
	});

	if (!book) {
		return notFound();
	}

	return (
		<Container className="flex flex-col my-10">
			<div className="flex flex-1">
				<BookImage imageUrl={book.imageUrl} />

				<div className="w-[490px] bg-[#f7f6f5] pl-20 p-7 ">
					<Title text={book.name} className="font-extrabold mb-[60px]" />

					<p className="font-bold text-3xl mb-5">Авторы</p>
					{book.authors.map((author) => (
						<p className="text-gray-500 text-3xl" key={author.id}>
							{author.name}
						</p>
					))}
				</div>
			</div>
		</Container>
	);
}
