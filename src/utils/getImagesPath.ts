import { getBaseUrl } from "@/utils/getBaseUrl";

export function getImagesPath() {
	const baseUrl = getBaseUrl();
	return `${baseUrl}/img/images`;
}
