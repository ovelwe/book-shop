"use client";

import React from "react";
import { useSet } from "react-use";

import { FilterCheckbox, FilterCheckboxProps } from "./filter-checkbox";
import { Input } from "../ui/input";
import { Skeleton } from "../ui";

type Item = FilterCheckboxProps;

interface Props {
	title?: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	isLoading?: boolean;
	className?: string;
	onChange?: (values: string[]) => void;
	onClickCheckbox?: (id: string) => void;
	selectedIds?: Set<string>;
	defaultValue?: string[];
	name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit = 5,
	searchInputPlaceholder = "Поиск...",
	className,
	onChange,
	isLoading,
	onClickCheckbox,
	selectedIds,
	defaultValue,
	name,
}) => {
	const [showAll, setShowAll] = React.useState(false);
	const [selected, { add, toggle }] = useSet<string>(new Set([]));
	const [searchValue, setSearchValue] = React.useState("");

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const onCheckChange = (value: string) => {
		toggle(value);
	};

	const list = showAll
		? items.filter((item) =>
				item.text.toLowerCase().includes(searchValue.toLowerCase())
		  )
		: (defaultItems || items).slice(0, limit);

	React.useEffect(() => {
		if (defaultValue) {
			defaultValue.forEach(add);
		}
	}, [defaultValue?.length]);

	React.useEffect(() => {
		onChange?.(Array.from(selected));
	}, [selected]);

	if (isLoading) {
		return (
			<div className={className}>
				<p className="font-bold mb-3">{title}</p>

				{...Array(limit)
					.fill(0)
					.map((_, index) => (
						<Skeleton key={index} className="h-6 mb-4 rounded-[8px]"></Skeleton>
					))}

				<Skeleton className="w-28 h-6 mb-4 rounded-[8px]"></Skeleton>
			</div>
		);
	}

	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>

			{showAll && (
				<div className="mb-5">
					<Input
						onChange={onChangeSearchInput}
						placeholder={searchInputPlaceholder}
						className="bg-gray-50 border-none"
					/>
				</div>
			)}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, index) => (
					<FilterCheckbox
						onCheckedChange={() => onClickCheckbox?.(item.value)}
						checked={selectedIds?.has(item.value)}
						key={index}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
						name={name}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
					<button
						onClick={() => setShowAll(!showAll)}
						className="text-primary mt-3"
					>
						{showAll ? "Скрыть" : "+ Показать все"}
					</button>
				</div>
			)}
		</div>
	);
};
