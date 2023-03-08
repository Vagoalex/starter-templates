import { NavigationGuardNext, RouteLocationNormalized, Router } from "vue-router";
import Middleware from "@/router/middleware/middleware";
import RedirectMiddleware from "@/router/middleware/items/redirectMiddleware";
import { useMainStore } from "@/store/main";

export const configureMiddleware = (router: Router) => {
	router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
		const mainStore = useMainStore();
		const middleware = new Middleware(to, from, next);
		const publicRoute = to.matched.some(record => record.meta.public);

		if(!publicRoute) {
			middleware.useMiddleware(RedirectMiddleware);
		}

		await middleware.run();

		//TODO: убрать timeout, как придет время

		setTimeout(() => {
			mainStore.setIsMyAppLoading(false);
		}, 700);
	});
};
