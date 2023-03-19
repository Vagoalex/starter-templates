import { useAlertsStore } from "@/store/shared/alerts";

export enum AlertKeys {
	OFFLINE_REQUEST_ERROR,
	SERVER_UNAVAILABLE_ERROR,
	REQUEST_UNKNOWN_ERROR,

}

const alertTextMap = {
	[AlertKeys.REQUEST_UNKNOWN_ERROR]: "Возникла непредвиденная ошибка.",
	[AlertKeys.SERVER_UNAVAILABLE_ERROR]: "Сервис временно недоступен. Повторите попытку позже.",
	[AlertKeys.OFFLINE_REQUEST_ERROR]: "Отсутствует интернет-соединение. Проверьте подключение и повторите попытку."
};


class AlertService {
	addError(key: AlertKeys) {
		const alertsStore = useAlertsStore();
		alertsStore.addErrorAlert(alertTextMap[key]);
	}

	addInfo(key: AlertKeys) {
		const alertsStore = useAlertsStore();
		alertsStore.addInfoAlert(alertTextMap[key]);
	}

	addCustomError(text: string) {
		const alertsStore = useAlertsStore();
		alertsStore.addErrorAlert(text);
	}

	addCustomInfo(text: string) {
		const alertsStore = useAlertsStore();
		alertsStore.addInfoAlert(text);
	}
}

export default new AlertService();
