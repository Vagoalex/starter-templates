import { defineStore } from "pinia";
import ProductsState from "@/store/modules/fakeApi/products/types/productsState";
import { ProductsController } from "@/api/sections/fakeApi/products";
import ApiProductsParameters from "@/api/sections/fakeApi/products/types/apiProductsItems";
import storeManager from "@/store/manager";
import AlertHelper from "@/store/shared/alerts/helpers/alertHelper";

const productsController = new ProductsController();

const namespace = storeManager.myApp.modules.fakeApi.products.namespace;

export const useFakeApiProductsStore = defineStore(namespace, {
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
			} catch (err: any) {
				console.error(err);
				AlertHelper.handleGeneralRequestErrors(err)
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
