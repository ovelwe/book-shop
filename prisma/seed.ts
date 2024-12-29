import { authors, books, categories } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: "User",
				email: "user@test.ru",
				password: hashSync("1111111", 10),
				verified: new Date(),
				role: "USER",
			},
			{
				fullName: "Admin",
				email: "admin@test.ru",
				password: hashSync("1111111", 10),
				verified: new Date(),
				role: "ADMIN",
			},
		],
	});

	await prisma.category.createMany({
		data: categories,
	});

	await prisma.author.createMany({
		data: authors,
	});

	for (const book of books) {
		const { authorIds, ...bookData } = book;

		await prisma.book.create({
			data: {
				...bookData,
				authors: {
					connect: authorIds.map((id) => ({ id })),
				},
			},
		});
	}
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Author" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Book" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE`;
}

async function main() {
	try {
		await down();
		await up();
	} catch (e) {
		console.error(e);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
