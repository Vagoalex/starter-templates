import { defineStore } from "pinia";
import storeManager from "@/store/manager";
import { PageModeType } from "@/store/types/pageModeType";
import IRootState from "@/store/types/rootState";

const namespace = storeManager.myApp.main.namespace;

export const useRootStore = defineStore(namespace, {
	state: (): IRootState => (
		{
			count: 0,
			pageMode: PageModeType.OK,
			isMyAppLoading: true
		}
	),
	getters: {
		doubleCount: (state) => state.count * 2
	},
	actions: {
		INCREMENT() {
			this.count++;
		},
		DOUBLE_INCREMENT() {
			this.count *= 2;
		},
		SET_IS_MY_APP_LOADING(value: boolean) {
			this.isMyAppLoading = value;
		},
		RESET_PAGE_MODE() {
			this.pageMode = PageModeType.OK;
		},
		SET_PAGE_MODE_NOT_FOUND() {
			this.pageMode = PageModeType.PAGE_NOT_FOUND;
		},
		SET_PAGE_MODE_ACCESS_DENIED() {
			this.pageMode = PageModeType.ACCESS_DENIED;
		}
	}
});
