import { createWebHistory, createRouter } from "vue-router";
import MyMainLayout from "@/views/layouts/MyMainLayout.vue";
import MyHome from "@/views/home/MyHome.vue";
import { RouteNames } from "@/router/routeNames";
import { configureMiddleware } from "@/router/middleware";
import MyInternalServerError from "@/views/errors/MyInternalServerError.vue";
import MyAccessDeniedError from "@/views/errors/MyAccessDeniedError.vue";
import MyPageNotFoundError from "@/views/errors/MyPageNotFoundError.vue";

const routes = [
	{
		path: "/",
		component: MyMainLayout,
		name: RouteNames.ROOT,
		children: [
			{
				path: "/home",
				component: MyHome,
				name: RouteNames.HOME
			},
			{
				path: "/internal-server-error",
				meta: { public: true },
				component: MyInternalServerError,
				name: RouteNames.ERROR_INTERNAL_SERVER_ERROR
			},
			{
				path: "/access-denied",
				meta: { public: true },
				component: MyAccessDeniedError,
				name: RouteNames.ERROR_ACCESS_DENIED
			},
			{
				path: "/:pathMatch(.*)",
				meta: { public: true },
				component: MyPageNotFoundError,
				name: RouteNames.ERROR_PAGE_NOT_FOUND
			}
		]
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

configureMiddleware(router);

export default router;
