import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
	state: () => (
		{
			count: 0,
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
		}
	}
});
