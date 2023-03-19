import { Client } from "@/api/client/client";

export default class BaseController {
	client: Client;

	constructor() {
		this.client = new Client();
	}
}
