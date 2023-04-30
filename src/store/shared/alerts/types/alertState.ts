import Alert from "@/store/shared/alerts/types/alert";

interface IAlertsState {
	errorAlerts: Alert[];
	infoAlerts: Alert[];
}

export default IAlertsState;
