import { PageModeType } from "@/store/types/pageModeType";

export default class RootState {
	constructor(
		public count: number = 0,
		public pageMode: PageModeType,
		public isMyAppLoading: boolean = true
	) {
	}
}
