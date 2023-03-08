import { RouteLocationNormalized, RouteLocationRaw } from "vue-router";

export interface IMiddleware {
	invoke: (to: RouteLocationNormalized, from: RouteLocationNormalized) => Promise<void | RouteLocationRaw>;
}
