import { defineStore } from "pinia";
import ProductsState from "@/store/modules/fakeApi/products/types/productsState";
import { ProductsController } from "@/api/sections/fakeApi/products";
import AbortService from "@/services/abortService";
import ApiProduct from "@/api/sections/fakeApi/products/types/apiProduct";
import ApiProductsParameters from "@/api/sections/fakeApi/products/types/apiProductsItems";

const abortService = new AbortService();
const productsController = new ProductsController(abortService);

export const useFakeApiProductsStore = defineStore("fake-api_products", {
	state: (): ProductsState => (
		{
			products: new ApiProductsParameters(),
			isProductsLoading: false
		}
	),
	getters: {
		getProducts: ({ products }) => products.products || []
	},
	actions: {
		async fetchProducts() {
			this.setIsProductsLoading(true);

			try {
				const products = await productsController.getAllProducts();
				console.warn(products);

				this.setProducts(products);
			} catch (err) {
				console.error(err);
			} finally {
				this.setIsProductsLoading(false);
			}
		},
		setProducts(value: ApiProductsParameters) {
			this.products = value;
		},
		setIsProductsLoading(value: boolean) {
			this.isProductsLoading = value;
		}
	}
});
