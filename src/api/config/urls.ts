const fakeApiUrl = import.meta.env.VITE_FAKE_API_URL;

export const urlTemplateParts = {
	id: "{id}",
	subId: "{subId}",
	thirdId: "{thirdId}"
};

const urls = {
	fakeApi: {
		products: {
			getAllProducts: `${fakeApiUrl}/products`,
			getSingleProductByNumber: `${fakeApiUrl}/products/${urlTemplateParts.id}`,
			updateSingleProductByNumber: `${fakeApiUrl}/products/${urlTemplateParts.id}`,
			deleteSingleProductByNumber: `${fakeApiUrl}/products/${urlTemplateParts.id}`
		}
	}
};

export default urls;
