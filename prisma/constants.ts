export const categories = [
	{
		name: "Романы",
	},
	{
		name: "Триллеры",
	},
	{
		name: "Детективы",
	},
	{
		name: "Фэнтези",
	},
	{
		name: "Реализм",
	},
	{
		name: "Комиксы",
	},
	{
		name: "Психология",
	},
];

export const authors = [
	{
		fullName: "Ванек",
		lastName: "Красильников",
	},
	{
		fullName: "Андрей",
		lastName: "Радомский",
	},
	{
		fullName: "Григорий",
		lastName: "Сабанчуков",
	},
	{
		fullName: "Вячеславик",
		lastName: "Теплоухин",
	},
].map((obj, index) => ({ id: index + 1, ...obj }));

export const books = [
	{
		name: "Сырный Цыпленок",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/36/28/018f5cba-155b-7131-af0f-af3bb4bd3628.jpg?width=200&height=280&fit=bounds",
		price: 5200,
		categoryId: 1,
	},
	{
		name: "Почтальонша",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/d6/9c/0193221c-3250-7527-9a2f-5dbcb7f7d69c.jpg?width=200&height=280&fit=bounds",
		price: 1488,
		categoryId: 2,
	},
	{
		name: "Добро не оставляйте на потом",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/80/72/01925450-e6f4-7bd6-a197-1742bcb88072.jpg?width=200&height=280&fit=bounds",
		price: 919,
		categoryId: 3,
	},
];
