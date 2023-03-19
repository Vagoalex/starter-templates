import OfflineException from "@/api/exceptions/offlineException";
import alertService, { AlertKeys } from "@/store/shared/alerts/services/alertService";
import ServerUnavailableException from "@/api/exceptions/serverUnavailableException";
import RequestCancelledException from "@/api/exceptions/requestCancelledException";
import BadRequestException from "@/api/exceptions/badRequestException";

export default class AlertHelper {
	static handleGeneralRequestErrors(error: Error) {
		switch (error.constructor) {
			case OfflineException:
				alertService.addError(AlertKeys.OFFLINE_REQUEST_ERROR);
				break;
			case ServerUnavailableException:
				alertService.addError(AlertKeys.SERVER_UNAVAILABLE_ERROR);
				break;
			case BadRequestException:
				alertService.addCustomError(error.message);
				break;
			case RequestCancelledException:
				break;
			default:
				alertService.addError(AlertKeys.REQUEST_UNKNOWN_ERROR);
				break;
		}
	}
}
