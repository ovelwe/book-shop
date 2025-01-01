import type { Metadata } from "next";
import { Header } from "../../components/shared/header";
import React from "react";

export const metadata: Metadata = {
	title: "Book Shop | Главная",
};

export default function HomeLayout({
	children,
	modal,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<main className="min-h-screen">
			<Header />
			{children}
			{modal}
		</main>
	);
}
