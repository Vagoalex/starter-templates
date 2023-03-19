import { defineStore } from "pinia";
import storeManager from "@/store/manager";
import { PageModeType } from "@/store/types/pageModeType";
import RootState from "@/store/types/rootState";

const namespace = storeManager.myApp.main.namespace;

export const useRootStore = defineStore(namespace, {
	state: (): RootState => (
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
		increment() {
			this.count++;
		},
		doubleIncrement() {
			this.count *= 2;
		},
		setIsMyAppLoading(value: boolean) {
			this.isMyAppLoading = value;
		},
		resetPageMode() {
			this.pageMode = PageModeType.OK;
		},
		setPageNotFound() {
			this.pageMode = PageModeType.PAGE_NOT_FOUND;
		},
		setPageModeAccessForbidden() {
			this.pageMode = PageModeType.ACCESS_DENIED;
		}
	}
});
