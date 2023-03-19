import ApiProductsParameters from "@/api/sections/fakeApi/products/types/apiProductsItems";

export default class ProductsState {
	constructor(
		public products: ApiProductsParameters = new ApiProductsParameters(),
		public isProductsLoading: boolean = false
	)
	{
	}

}
