"use client";

import { Dialog } from "@/components/ui";
import React from "react";
import { cn } from "@/lib/utils";
import { DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { ChooseBook } from "../choose-book";
import { IBook } from "@/@types/prisma";

interface Props {
	book: IBook;
	className?: string;
}

export const ChooseBookModal: React.FC<Props> = ({ book, className }) => {
	const router = useRouter();

	const authors = book.authors.map((author) => ({
		id: String(author.id),
		name: author.name,
	}));

	return (
		<Dialog open={Boolean(book)} onOpenChange={() => router.back()}>
			<DialogContent
				className={cn(
					"p-0 w-[1080px] max-w-[1080px] min-h-[500px] bg-white overflow-hidden",
					className
				)}
			>
				<ChooseBook
					imageUrl={book.imageUrl}
					name={book.name}
					authors={authors}
					description={book.description}
					price={book.price}
				/>
			</DialogContent>
		</Dialog>
	);
};
