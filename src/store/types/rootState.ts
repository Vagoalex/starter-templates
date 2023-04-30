import { PageModeType } from "@/store/types/pageModeType";

interface IRootState {
	count: number;
	pageMode: PageModeType;
	isMyAppLoading: boolean;
}
export default IRootState
