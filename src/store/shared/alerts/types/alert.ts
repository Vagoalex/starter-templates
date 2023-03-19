export default class Alert {
	text: string;
	timeout: number;
	id: string;

	constructor({ text, timeout = 4000, id = text }: { text: string, timeout?: number, id?: string; }) {
		this.text = text;
		this.timeout = timeout;
		this.id = id;
	}
}
