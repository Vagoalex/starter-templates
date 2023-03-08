export default class AccessForbiddenException extends Error {
	private property: string;

	constructor(value: string) {
		super(`AccessForbiddenException: method:${value}`);
		this.name = "AccessForbiddenException";
		this.property = value;
	}
}
