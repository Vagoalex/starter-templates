import { defineStore } from "pinia";
import storeManager from "@/store/manager";
import HttpNotFoundException from "@/api/exceptions/httpNotFoundException";
import AccessForbiddenException from "@/api/exceptions/accessForbiddenException";
import { useRootStore } from "@/store";

const namespace = storeManager.base.namespace;
export const useBaseStore = defineStore(namespace, {
	state: () => ({}),
	getters: {},
	actions: {
		INITIALIZE_BASE() {
		},
		SET_REQUEST() {
			const rootStore = useRootStore();
			try {

			} catch (error: any) {
				console.error(error);

				switch (error.constructor) {
					case HttpNotFoundException:
						// 	AlertHelper.handleGeneralRequestErrors(error);
						break;
					case AccessForbiddenException:
						// 	AlertHelper.handleGeneralRequestErrors(error);
						break;
					// default:
					// 	AlertHelper.handleGeneralRequestErrors(error);
					// 	break;
				}
			}
		}
	}
});
