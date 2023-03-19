export default class ApiProduct {
	constructor(
		public id: number = 0,
		public title: string = "",
		public description: string = "",
		public price: number = 0,
		public discountPercentage: number = 0,
		public rating: number = 0,
		public stock: number = 0,
		public brand: string = "",
		public category: string = "",
		public thumbnail: string = "",
		public images: string[] = []
	)
	{
	}
}
