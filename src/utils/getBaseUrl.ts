import { DEVELOPMENT_APP_MODE } from "@/constants/appMode";

export function getBaseUrl() {
	return import.meta.env.MODE === DEVELOPMENT_APP_MODE ? import.meta.env.VITE_BASE_DEVELOPMENT_URL : import.meta.env.BASE_URL;
}
