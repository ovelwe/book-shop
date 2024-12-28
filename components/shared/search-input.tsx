"use client";

import { cn } from "@/lib/utils";
import { Api } from "@/services/api-client";
import { Book } from "@prisma/client";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { use, useState } from "react";
import { useClickAway, useDebounce } from "react-use";

interface Props {
	className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
	const [searchQuery, setSearchQuery] = React.useState("");
	const [focused, setFocused] = React.useState(false);
	const [books, setBooks] = React.useState<Book[]>([]);
	const ref = React.useRef(null);

	useClickAway(ref, () => {
		setFocused(false);
	});

	useDebounce(
		() => {
			Api.books.search(searchQuery).then((items) => {
				setBooks(items);
			});
		},
		150,
		[searchQuery]
	);

	const onClickItem = () => {
		setFocused(false);
		setSearchQuery("");
		setBooks([]);
	};

	return (
		<>
			{focused && (
				<div className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30" />
			)}

			<div
				ref={ref}
				className={cn(
					"flex rounded-2xl flex-1 justify-between relative h-11 z-30",
					className
				)}
			>
				<Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
				<input
					className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
					type="text"
					placeholder="Найти книгу..."
					onFocus={() => setFocused(true)}
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>

				{books.length > 0 && (
					<div
						className={cn(
							"absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30",
							focused && "visible opacity-100 top-12"
						)}
					>
						{books.map((book) => (
							<Link
								onClick={onClickItem}
								key={book.id}
								href={`/book/${book.id}`}
								className="flex px-3 py-2 hover:bg-primary/10 items-center gap-3"
							>
								<img
									className="rounded-sm h-11 w-9 "
									src={book.imageUrl}
									width={32}
									height={32}
									alt={book.name}
								/>
								<span>{book.name}</span>
							</Link>
						))}
					</div>
				)}
			</div>
		</>
	);
};
