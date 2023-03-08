export default class HttpNotFoundException extends Error {
	private property: string;

	constructor(name: string) {
		super(`HttpNotFoundException: name:${name}`);
		this.name = "HttpNotFoundException";
		this.property = name;
	}
}
