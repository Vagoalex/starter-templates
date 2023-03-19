import { defineStore } from "pinia";
import { v4 as generateId } from "uuid";
import storeManager from "@/store/manager";
import Alert from "@/store/shared/alerts/types/alert";
import AlertsState from "@/store/shared/alerts/types/alertState";

const namespace = storeManager.alerts.namespace;
export const useAlertsStore = defineStore(namespace, {
	state: (): AlertsState => ({
		errorAlerts: [],
		infoAlerts: []
	}),
	getters: {},
	actions: {
		addErrorAlert(value: string) {
			const id = generateId();
			this.errorAlerts.push(new Alert({ text: value, timeout: 7000, id }));
		},
		removeErrorAlert(id: string) {
			this.errorAlerts = this.errorAlerts.filter(x => x.id !== id);
		},
		addInfoAlert(value: string) {
			const id = generateId();
			this.infoAlerts.push(new Alert({ text: value, timeout: 7000, id }));
		},
		removeInfoAlert(id: string) {
			this.infoAlerts = this.infoAlerts.filter(x => x.id !== id);
		}
	}
});

