"use client";

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import Link from "next/link";
import React from "react";

interface Props {
	className?: string;
}

const cats = [
	{ id: 1, name: "Романы" },
	{ id: 2, name: "Триллеры" },
	{ id: 3, name: "Детективы" },
	{ id: 4, name: "Фэнтези" },
	{ id: 5, name: "Реализм" },
	{ id: 6, name: "Комиксы" },
	{ id: 7, name: "Психология" },
];

export const Categories: React.FC<Props> = ({ className }) => {
	const categoryActiveId = useCategoryStore((state) => state.activeId);
	return (
		<div
			className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
		>
			{cats.map(({ name, id }, i) => (
				<Link
					key={i}
					className={cn(
						"flex items-center font-bold h-11 rounded-2xl px-5",
						categoryActiveId === id &&
							"bg-white shadow-md shadow-gray-200 text-primary"
					)}
					href={`/#${name}`}
				>
					{name}
				</Link>
			))}
		</div>
	);
};
