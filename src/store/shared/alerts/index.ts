import { defineStore } from "pinia";
import { v4 as generateId } from "uuid";
import storeManager from "@/store/manager";
import Alert from "@/store/shared/alerts/types/alert";
import IAlertsState from "@/store/shared/alerts/types/alertState";

const namespace = storeManager.alerts.namespace;
export const useAlertsStore = defineStore(namespace, {
	state: (): IAlertsState => ({
		errorAlerts: [],
		infoAlerts: []
	}),
	getters: {},
	actions: {
		ADD_ERROR_ALERT(value: string) {
			const id = generateId();
			this.errorAlerts.push(new Alert({ text: value, timeout: 7000, id }));
		},
		REMOVE_ERROR_ALERT(id: string) {
			this.errorAlerts = this.errorAlerts.filter(x => x.id !== id);
		},
		ADD_INFO_ALERT(value: string) {
			const id = generateId();
			this.infoAlerts.push(new Alert({ text: value, timeout: 7000, id }));
		},
		REMOVE_INFO_ALERT(id: string) {
			this.infoAlerts = this.infoAlerts.filter(x => x.id !== id);
		}
	}
});

