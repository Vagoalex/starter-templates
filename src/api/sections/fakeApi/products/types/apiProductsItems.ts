import ApiProduct from "@/api/sections/fakeApi/products/types/apiProduct";

export default class ApiProductsParameters {
	constructor(
		public limit: number = 0,
		public products: ApiProduct[] = [],
		public skip: number = 0,
		public total: number = 0
	)
	{
	}
}
