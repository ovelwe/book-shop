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
	{
		name: "Современная Проза",
	},
];

export const authors = [
	{
		name: "Элизабет Гилберт",
	},
	{
		name: "Ник Вуйчич",
	},
	{
		name: "Джаннетт Уоллс",
	},
	{
		name: "Дженнифер Уорф",
	},
	{
		name: "Мршавко Штапич",
	},
	{
		name: "Грегори Робертс",
	},
	{
		name: "Франческа Джанноне",
	},
	{
		name: "Грэм Робертс",
	},
	{
		name: "Иван Путилин",
	},
	{
		name: "Шон Байтелл",
	},
	{
		name: "Дэн Миллмэн",
	},
	{
		name: "Лиза Си",
	},
	{
		name: "Адриана Трижиани",
	},
	{
		name: "Тэнло Вэйчжи",
	},
	{
		name: "Кэтрин Стокетт",
	},
	{
		name: "Маркус Зусак",
	},
	{
		name: "Кристин Ханна",
	},
	{
		name: "Гарсиа Маркес Г.",
	},
	{
		name: "Кортасар Х.",
	},
].map((obj, index) => ({ id: index + 1, ...obj }));

export const books = [
	{
		name: "Шантарам",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/36/28/018f5cba-155b-7131-af0f-af3bb4bd3628.jpg?width=200&height=280&fit=bounds",
		price: 1200,
		categoryId: 1,
		authorIds: [8, 6],
	},
	{
		name: "Почтальонша",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/d6/9c/0193221c-3250-7527-9a2f-5dbcb7f7d69c.jpg?width=200&height=280&fit=bounds",
		price: 1500,
		categoryId: 8,
		authorIds: [7],
	},
	{
		name: "Добро не оставляйте на потом",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/80/72/01925450-e6f4-7bd6-a197-1742bcb88072.jpg?width=200&height=280&fit=bounds",
		price: 800,
		categoryId: 1,
		authorIds: [13],
	},
	{
		name: "Светлый пепел луны. Книга 1",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/b0/c7/019366f4-102d-78f1-b925-9e85c57cb0c7.jpg?width=200&height=280&fit=bounds",
		price: 850,
		categoryId: 1,
		authorIds: [14],
	},
	{
		name: "Смерть заберет с собой осень",
		imageUrl:
			"https://content.img-gorod.ru/pim/products/images/98/21/019342c7-b6be-7f3d-ace7-bc0ee07d9821.jpg?width=200&height=280&fit=bounds",
		price: 480,
		categoryId: 1,
		authorIds: [15],
	},
	{
		name: "Прислуга",
		imageUrl:
			"https://s1.livelib.ru/boocover/1001569364/200x305/bdff/boocover.jpg",
		price: 550,
		categoryId: 8,
		authorIds: [16],
	},
	{
		name: "Книжный вор",
		imageUrl:
			"https://s1.livelib.ru/boocover/1010774984/200x305/deea/boocover.jpg",
		price: 700,
		categoryId: 8,
		authorIds: [17],
	},
	{
		name: "Соловей",
		imageUrl:
			"https://s1.livelib.ru/boocover/1001514718/200x305/9b7b/boocover.jpg",
		price: 1900,
		categoryId: 8,
		authorIds: [17],
	},
	{
		name: "Сто лет одиночества",
		imageUrl: "https://content.img-gorod.ru//content/uf/39/065/39065.png",
		price: 2850,
		categoryId: 5,
		authorIds: [18],
	},
	{
		name: "Игра в классики",
		imageUrl: "https://content.img-gorod.ru//content/uf/39/067/39067.png",
		price: 1550,
		categoryId: 5,
		authorIds: [19],
	},
];
