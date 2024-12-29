import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useSet } from "react-use";

interface QueryFilters extends PriceProps {
	authors?: string;
	filters?: string;
}

interface PriceProps {
	priceFrom?: number;
	priceTo?: number;
}

export interface Filters {
	selectedAuthors: Set<string>;
	filters: Set<string>;
	prices: PriceProps;
}

interface ReturnProps extends Filters {
	setPrices: (name: keyof PriceProps, value: number) => void;
	setFilters: (value: string) => void;
	setSelectedAuthors: (value: string) => void;
}

export const useFilters = (): ReturnProps => {
	const searchParams = useSearchParams() as unknown as Map<
		keyof QueryFilters,
		string
	>;

	const [selectedAuthors, { toggle: toggleAuthors }] = useSet(
		new Set<string>(searchParams.get("authors")?.split(","))
	);

	/* Фильтр новинки и т.д. (не придумал как назвать) */
	const [filters, { toggle: toggleFilters }] = useSet(
		new Set<string>(
			searchParams.has("filters") ? searchParams.get("filters")?.split(",") : []
		)
	);

	const [prices, setPrices] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get("priceFrom")) || undefined,
		priceTo: Number(searchParams.get("priceTo")) || undefined,
	});

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrices((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return {
		filters,
		selectedAuthors,
		prices,
		setPrices: updatePrice,
		setFilters: toggleFilters,
		setSelectedAuthors: toggleAuthors,
	};
};
