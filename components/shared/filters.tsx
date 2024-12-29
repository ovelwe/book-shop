"use client";

import React, { Suspense } from "react";
import { Title, CheckboxFiltersGroup } from "./index";
import { Input } from "@/components/ui/input";
import { RangeSlider } from "../ui";
import { useAuthors, useFilters, useQueryFilters } from "@/hooks";

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { authors, loading } = useAuthors();
	const filters = useFilters();

	useQueryFilters(filters);

	const items = authors.map((item) => ({
		value: String(item.id),
		text: item.name,
	}));

	const updatePrices = (prices: number[]) => {
		filters.setPrices("priceFrom", prices[0]);
		filters.setPrices("priceTo", prices[1]);
	};

	return (
		<Suspense>
			<div className={className}>
				<Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

				<CheckboxFiltersGroup
					className="filters"
					name="filters"
					items={[
						{ text: "Со скидкой", value: "1" },
						{ text: "Новинки", value: "2" },
						{ text: "В наличии", value: "3" },
					]}
					onClickCheckbox={filters.setFilters}
					selectedIds={filters.filters}
				/>

				<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
					<p className="font-bold mb-3">Цена от и до:</p>
					<div className="flex gap-3 mb-5">
						<Input
							type="number"
							placeholder="0"
							min={0}
							max={5000}
							value={String(filters.prices.priceFrom)}
							onChange={(e) =>
								filters.setPrices("priceFrom", Number(e.target.value))
							}
						/>
						<Input
							type="number"
							min={100}
							max={5000}
							placeholder="5000"
							value={String(filters.prices.priceTo)}
							onChange={(e) =>
								filters.setPrices("priceTo", Number(e.target.value))
							}
						/>
					</div>
					<RangeSlider
						min={0}
						max={5000}
						step={10}
						value={[
							filters.prices.priceFrom || 0,
							filters.prices.priceTo || 5000,
						]}
						onValueChange={updatePrices}
					/>
				</div>

				<CheckboxFiltersGroup
					className="mt-5"
					name="authors"
					title="Авторы"
					limit={6}
					defaultItems={items.slice(0, 6)}
					items={items}
					isLoading={loading}
					onClickCheckbox={filters.setSelectedAuthors}
					selectedIds={filters.selectedAuthors}
				/>
			</div>
		</Suspense>
	);
};
