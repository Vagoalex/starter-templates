import { Client } from "@/api/client/client";
import AbortService from "@/services/abortService";

export default class BaseController {
	client: Client;

	constructor(abortService: AbortService) {
		this.client = new Client(abortService);
	}
}
