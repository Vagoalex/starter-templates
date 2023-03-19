import { StoreManagerNamespaceType } from "@/store/manager/types/StoreManagerNamespaceType";

class StoreManager {
	base = {
		namespace: StoreManagerNamespaceType.BASE
	};
	alerts = {
		namespace: StoreManagerNamespaceType.ALERTS
	}

	myApp = {
		main: {
			namespace: StoreManagerNamespaceType.MAIN,
		},
		modules: {
			fakeApi: {
				products: {
					namespace: StoreManagerNamespaceType.FAKE_API_PRODUCTS
				}
			}
		}
	};

}

const storeManager = new StoreManager();

export default storeManager;
