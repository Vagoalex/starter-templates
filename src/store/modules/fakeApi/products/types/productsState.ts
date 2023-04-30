import ApiProductsParameters from "@/api/sections/fakeApi/products/types/apiProductsItems";

interface IProductsState {
	products: ApiProductsParameters;
	isProductsLoading: boolean;
}
export default IProductsState
