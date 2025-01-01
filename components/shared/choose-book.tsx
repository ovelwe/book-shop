import React from "react";
import { cn } from "@/lib/utils";
import { BookImage } from "./bookImage";
import { Button } from "../ui/button";
import { DialogTitle } from "@radix-ui/react-dialog";

interface Props {
	imageUrl: string;
	name: string;
	authors: { id: string; name: string }[];
	onClickAdd?: VoidFunction;
	className?: string;
}

export const ChooseBook: React.FC<Props> = ({
	className,
	name,
	imageUrl,
	authors,
	onClickAdd,
}) => {
	const totalPrice = 350;

	const authorsString = authors.map((author) => author.name).join(", ");

	return (
		<div className={cn(className, "flex flex-1")}>
			<div className="flex items-center justify-center flex-1 relative w-full">
				<img
					src={imageUrl}
					alt={name}
					className="relative left-2 top-2 transition-all z-10 duration-300 w-[300px] h-[400px] shadow-xl"
				/>
			</div>

			<div className="flex flex-col w-[490px] bg-[#f7f6f5] p-7 justify-center">
				<DialogTitle className="font-extrabold mb-1">{name}</DialogTitle>

				<p className="text-gray-400 mb-10">{authorsString}</p>

				<Button className="h-[55px] px-10 text-base rounded-[18px] w-full">
					Добавить в корзину за {totalPrice} ₽
				</Button>
			</div>
		</div>
	);
};
