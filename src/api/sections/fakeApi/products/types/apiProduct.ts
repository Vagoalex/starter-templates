export default class ApiProduct {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[];

	constructor(
		id: number = 0,
		title: string = "",
		description: string = "",
		price: number = 0,
		discountPercentage: number = 0,
		rating: number = 0,
		stock: number = 0,
		brand: string = "",
		category: string = "",
		thumbnail: string = "",
		images: string[] = []
	)
	{
		this.id = id;
		this.title = title;
		this.description = description;
		this.price = price;
		this.discountPercentage = discountPercentage;
		this.rating = rating;
		this.stock = stock;
		this.brand = brand;
		this.category = category;
		this.thumbnail = thumbnail;
		this.images = images;
	}
}
