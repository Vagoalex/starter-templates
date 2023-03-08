export default class ServerUnavailableException extends Error {
	constructor(url: string) {
		super(`ServerUnavailableException. Url:${url}`);
	}
}
