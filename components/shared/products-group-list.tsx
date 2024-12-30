"use client";

import React from "react";
import { Title } from "./title";
import { ProductCard } from "./index";
import { useIntersection } from "react-use";
import { useCategoryStore } from "../../store/category";

interface Props {
	title: string;
	items: any[];
	categoryId: number;
	className?: string;
	listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	className,
	categoryId,
}) => {
	const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
	const intersectionRef = React.useRef(null);

	// @ts-ignore
	const intersection = useIntersection(intersectionRef, {
		threshold: [0.4],
	});

	React.useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [categoryId, intersection?.isIntersecting, title]);

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5" />
			<div className="grid grid-cols-3 gap-[50px]">
				{items.map((item, i) => (
					<ProductCard
						key={item.id}
						id={item.id}
						name={item.name}
						imageUrl={item.imageUrl}
						price={item.price}
					/>
				))}
			</div>
		</div>
	);
};
