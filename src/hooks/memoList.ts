import { useLocalStorage } from "react-use";
import type { TMemoItem } from "../types/MemoItem";

export default function useMemoList() {
	const [memoList, setMemoList] = useLocalStorage<TMemoItem[]>("memo-list", []);
	return { memoList, setMemoList };
}
