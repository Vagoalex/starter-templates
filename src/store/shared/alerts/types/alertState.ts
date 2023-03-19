import Alert from "@/store/shared/alerts/types/alert";

export default class AlertsState {
	errorAlerts: Alert[];
	infoAlerts: Alert[];

	constructor({ errorAlerts, infoAlerts }: { errorAlerts: Alert[], infoAlerts: Alert[] }) {
		this.errorAlerts = errorAlerts;
		this.infoAlerts = infoAlerts;
	}
}
