export default class OfflineException extends Error {
	constructor(url: string) {
		super(`OfflineException. Url:${url}`);
	}
}
