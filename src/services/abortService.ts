export default class AbortService {
	private _abortController: AbortController;

	constructor() {
	}

	getSignal(): AbortSignal {
		return this._abortController.signal;
	}

	abort() {
		this._abortController.abort();
	}

	initialize() {
		this._abortController = new AbortController();
	}
}
