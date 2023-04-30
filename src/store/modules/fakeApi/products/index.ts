import { defineStore } from "pinia";
import { ProductsController } from "@/api/sections/fakeApi/products";
import ApiProductsParameters from "@/api/sections/fakeApi/products/types/apiProductsItems";
import storeManager from "@/store/manager";
import AlertHelper from "@/store/shared/alerts/helpers/alertHelper";
import IProductsState from "@/store/modules/fakeApi/products/types/productsState";

const productsController = new ProductsController();

const namespace = storeManager.myApp.modules.fakeApi.products.namespace;

export const useFakeApiProductsStore = defineStore(namespace, {
	state: (): IProductsState => (
		{
			products: new ApiProductsParameters(),
			isProductsLoading: false
		}
	),
	getters: {
		getProducts: ({ products }) => products.products || []
	},
	actions: {
		async FETCH_PRODUCTS() {
			this.SET_IS_PRODUCTS_LOADING(true);

			try {
				const products = await productsController.getAllProducts();

				this.SET_PRODUCTS(products);
			} catch (err: any) {
				console.error(err);
				AlertHelper.handleGeneralRequestErrors(err)
			} finally {
				this.SET_IS_PRODUCTS_LOADING(false);
			}
		},
		SET_PRODUCTS(value: ApiProductsParameters) {
			this.products = value;
		},
		SET_IS_PRODUCTS_LOADING(value: boolean) {
			this.isProductsLoading = value;
		}
	}
});
