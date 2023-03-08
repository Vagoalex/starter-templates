import BaseController from "@/api/shared/baseController";
import AbortService from "@/services/abortService";
import urls from "@/api/config/urls";
import ApiProductsParameters from "@/api/sections/fakeApi/products/types/apiProductsItems";

export class ProductsController extends BaseController {
	constructor(abortService: AbortService) {
		super(abortService);
	}

	getAllProducts = async (): Promise<ApiProductsParameters> => {
		return await this.client.get<ApiProductsParameters>(urls.fakeApi.products.getAllProducts);
	};
}
