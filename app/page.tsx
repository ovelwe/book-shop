import { Container, Title, TopBar, Filters } from "../components/shared/index";
import { ProductCard } from "../components/shared/product-card";
import { ProductsGroupList } from "../components/shared/products-group-list";

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все книги" size="lg" className="font-extrabold" />
			</Container>
			<TopBar />
			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					<div className="w-[250px]">
						<Filters />
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList
								title="Романы"
								items={[
									{
										id: 1,
										name: "Сырный Цыпленок",
										imageUrl:
											"https://content.img-gorod.ru/pim/products/images/36/28/018f5cba-155b-7131-af0f-af3bb4bd3628.jpg?width=200&height=280&fit=bounds",
										price: 5200,
									},
									{
										id: 2,
										name: "Азбука СВО",
										imageUrl:
											"https://pdmnews.ru/wp-content/uploads/2023/04/enoeno.jpg",
										price: 1488,
									},
									{
										id: 3,
										name: "Цитатник Стэтхэма",
										imageUrl:
											"https://ir-7.ozone.ru/s3/multimedia-1-6/wc1000/7148100390.jpg",
										price: 666,
									},
									{
										id: 4,
										name: "Цитатник Стэтхэма",
										imageUrl:
											"https://ir-7.ozone.ru/s3/multimedia-1-6/wc1000/7148100390.jpg",
										price: 666,
									},
									{
										id: 5,
										name: "Цитатник Стэтхэма",
										imageUrl:
											"https://ir-7.ozone.ru/s3/multimedia-1-6/wc1000/7148100390.jpg",
										price: 666,
									},
									{
										id: 6,
										name: "Цитатник Стэтхэма",
										imageUrl:
											"https://ir-7.ozone.ru/s3/multimedia-1-6/wc1000/7148100390.jpg",
										price: 666,
									},
								]}
								categoryId={1}
							/>

							<ProductsGroupList
								title="Триллеры"
								items={[
									{
										id: 1,
										name: "Сырный Цыпленок",
										imageUrl:
											"https://content.img-gorod.ru/pim/products/images/36/28/018f5cba-155b-7131-af0f-af3bb4bd3628.jpg?width=200&height=280&fit=bounds",
										price: 5200,
									},
									{
										id: 2,
										name: "Азбука СВО",
										imageUrl:
											"https://pdmnews.ru/wp-content/uploads/2023/04/enoeno.jpg",
										price: 1488,
									},
									{
										id: 3,
										name: "Цитатник Стэтхэма",
										imageUrl:
											"https://ir-7.ozone.ru/s3/multimedia-1-6/wc1000/7148100390.jpg",
										price: 666,
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
