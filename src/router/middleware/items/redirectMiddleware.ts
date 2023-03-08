import { RouteLocationNormalized } from "vue-router";
import { RouteNames } from "@/router/routeNames";
import { IMiddleware } from "@/types/core/middleware";

export default class RedirectMiddleware implements IMiddleware {
	constructor() {

	}

	async invoke(to: RouteLocationNormalized, from: RouteLocationNormalized) {
		try {
			if(to.name === RouteNames.ROOT) {
				return { name: RouteNames.HOME };
			}
		} catch (e) {
			console.error(e);
		}
	}
}
