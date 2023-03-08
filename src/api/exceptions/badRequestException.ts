export default class BadRequestException extends Error {
	title: string;

	constructor(title: string, detail: string) {
		super(detail);

		this.title = title;
	}
}
