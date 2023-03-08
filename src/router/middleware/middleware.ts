import { IMiddleware } from "@/types/core/middleware";
import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default class Middleware {
	items: IMiddleware[];
	to: RouteLocationNormalized;
	from: RouteLocationNormalized;
	next: NavigationGuardNext;

	constructor(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
		this.to = to;
		this.from = from;
		this.next = next;
		this.items = [];
	}

	useMiddleware<T extends IMiddleware>(type: { new(): T; }) {
		this.items.push(new type());
	}

	async run() {
		for (const item of this.items) {
			let result = await item.invoke(this.to, this.from);

			if(result)
				return this.next(result);
		}

		return this.next();
	}
}
