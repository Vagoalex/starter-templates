import ApiProduct from "@/api/sections/fakeApi/products/types/apiProduct";

export default class ApiProductsParameters {
	limit: number;
	products: ApiProduct[];
	skip: number;
	total: number;

	constructor(
		limit: number = 0,
		products: ApiProduct[] = [],
		skip: number = 0,
		total: number = 0
	)
	{
		this.limit = limit;
		this.products = products;
		this.skip = skip;
		this.total = total;
	}
}
