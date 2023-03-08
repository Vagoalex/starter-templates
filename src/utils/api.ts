import { isArray, isObject } from "lodash";

export const processApiPayload = (payload: any) => {
	for (let property in payload) {
		if(payload.hasOwnProperty(property)) {
			let value = payload[property];
			if(value === "") {
				delete payload[property];
			} else if(isObject(value)) {
				processApiPayload(value);
			} else if(isArray(value)) {
				value.forEach((el) => {
					if(isObject(el)) {
						processApiPayload(el);
					}
				});
			}
		}
	}
};

