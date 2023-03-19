import httpService from "@/api/client/httpService";
import { getHeaders } from "@/api/config/headers";
import axios from "axios";
import RequestCancelledException from "@/api/exceptions/requestCancelledException";
import HttpNotFoundException from "@/api/exceptions/httpNotFoundException";
import BadRequestException from "@/api/exceptions/badRequestException";
import AccessForbiddenException from "@/api/exceptions/accessForbiddenException";
import ServerUnavailableException from "@/api/exceptions/serverUnavailableException";
import OfflineException from "@/api/exceptions/offlineException";
import { processApiPayload } from "@/utils/api";

const classifyError = (error: any, { url }: { url: string }) => {
	if(axios.isCancel(error)) {
		return new RequestCancelledException();
	}

	if(error.response) {
		const data: any = error.response.data;

		console.warn(error.response, data)

		if(error.response.status === 400)
			return new BadRequestException(data.title, data.detail);

		if(error.response.status === 404)
			return new HttpNotFoundException(error.response.config.url);

		if(error.response.status === 403)
			return new AccessForbiddenException(error.response.config.url);

		console.error("Error!", error.response.data);
		return error;
	} else {
		if(navigator.onLine) {
			return new ServerUnavailableException(url);
		} else {
			return new OfflineException(url);
		}
	}
};

export class Client {
	constructor() {
	}

	async get<T>(url: string, options?: object): Promise<T> {
		try {
			const dateBeforeRequest = Date.now();
			console.log(`Request from '${url}'`);

			let { data } = await httpService.get(`${url}`, {
				headers: getHeaders(),
				...options
			});
			console.log(`Response from '${url}'`, `time: ${Date.now() - dateBeforeRequest}ms`, data);

			return data;
		} catch (error) {
			throw classifyError(error, { url });
		}
	}

	async put<T>(url: string, payload: any, config?: any): Promise<T> {
		if(payload)
			processApiPayload(payload);

		try {
			console.log(`Request from '${url}'`, payload);

			let { data } = await httpService.put(url, payload, {
				headers: getHeaders(),
				...config
			});

			console.log(`Response from '${url}'`, data);

			return data;
		} catch (error) {
			throw classifyError(error, { url });
		}
	}

	async post<T>(url: string, payload: any, config?: object): Promise<T> {
		if(payload)
			processApiPayload(payload);

		try {
			console.log(`Request from '${url}'`, payload);

			let { data } = await httpService.post(url, payload, {
				...config
			});

			console.log(`Response from '${url}'`, data);

			return data;
		} catch (error) {
			throw classifyError(error, { url });
		}
	}

	async delete(url: string): Promise<any> {
		try {
			console.log(`Request from '${url}'`);

			let { data } = await httpService.delete(url, {
				headers: getHeaders()
			});

			console.log(`Response from '${url}'`, data);

			return data;
		} catch (error) {
			throw classifyError(error, { url });
		}
	}
}
