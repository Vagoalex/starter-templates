import ApiProduct from "@/api/sections/fakeApi/products/types/apiProduct";
import ApiProductsItems from "@/api/sections/fakeApi/products/types/apiProductsItems";
import ApiProductsParameters from "@/api/sections/fakeApi/products/types/apiProductsItems";

export default class ProductsState {
	products: ApiProductsParameters;
	isProductsLoading: boolean;

	constructor(
		products: ApiProductsParameters,
		isProductsLoading: false
	)
	{
		this.products = products;
		this.isProductsLoading = isProductsLoading;
	}

}
