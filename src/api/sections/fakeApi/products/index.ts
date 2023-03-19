import BaseController from "@/api/shared/baseController";
import urls from "@/api/config/urls";
import ApiProductsParameters from "@/api/sections/fakeApi/products/types/apiProductsItems";

export class ProductsController extends BaseController {
	constructor() {
		super();
	}

	getAllProducts = async (): Promise<ApiProductsParameters> => {
		return await this.client.get<ApiProductsParameters>(urls.fakeApi.products.getAllProducts);
	};
}
