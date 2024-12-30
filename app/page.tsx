import { Suspense } from "react";
import { Container, Title, TopBar, Filters } from "../components/shared/index";
import { ProductsGroupList } from "../components/shared/products-group-list";
import { categories, authors, books } from "../prisma/constants";
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {
	const categories = await prisma.category.findMany({
		include: {
			books: {
				include: {
					authors: true,
				},
			},
		},
	});

	return (
		<>
			<Container className="mt-10">
				<Title text="Все книги" size="lg" className="font-extrabold" />
			</Container>
			<TopBar
				categories={categories.filter((category) => category.books.length > 0)}
			/>
			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					<div className="w-[250px]">
						<Suspense>
							<Filters />
						</Suspense>
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							{categories.map(
								(category) =>
									category.books.length > 0 && (
										<ProductsGroupList
											key={category.id}
											categoryId={category.id}
											title={category.name}
											items={category.books}
										/>
									)
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
