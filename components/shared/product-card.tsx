import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Title } from "./title";
import { CountButton } from "./count-button";
import Link from "next/link";

interface Props {
	id: number;
	name: string;
	price: number;
	count?: number;
	imageUrl: string;
	className?: string;
}

export const ProductCard: React.FC<Props> = ({
	name,
	price,
	count,
	id,
	imageUrl,
	className,
}) => {
	return (
		<div className={cn(className)}>
			<Link href={`/product/${id}`}>
				<div className="flex justify-center p-6 rounded-lg h-[260px]">
					<img className="w-[140px] h-[230px]" src={imageUrl} alt="Logo" />
				</div>

				<Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
				<p className="text-sm text-gray-400">Авторы книги</p>

				<div className="flex justify-between items-center mt-4">
					<span className="text-[20px]">
						<b>{price} ₽</b>
					</span>

					{count ? (
						<CountButton value={count} size="lg" />
					) : (
						<Button variant="secondary">
							<Plus className="w-5 h-5 mr-1" />
							Добавить
						</Button>
					)}
				</div>
			</Link>
		</div>
	);
};
