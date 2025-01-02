import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui";
import { User } from "lucide-react";
import Link from "next/link";
import { CartButton, SearchInput } from "./index";

interface Props {
	className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
	return (
		<header className={cn("border-b border-gray-100", className)}>
			<Container className="flex items-center justify-between py-8">
				<Link href="/">
					<div className="flex items-center gap-4">
						<Image src="/logo.svg" width={35} height={35} alt="Logo" />
						<div>
							<h1 className="text-2xl uppercase font-black">Book Shop</h1>
							<p className="text-sm text-[#7E6343] leading-3">
								книги уже ждут тебя
							</p>
						</div>
					</div>
				</Link>

				<div className="mx-10 flex-1 ">
					<SearchInput />
				</div>

				<div className="flex items-center gap-3">
					<Button variant="outline" className="flex items-center gap-1">
						<User size={16} />
						Войти
					</Button>

					<div>
						<CartButton />
					</div>
				</div>
			</Container>
		</header>
	);
};
