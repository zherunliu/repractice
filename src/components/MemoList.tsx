import List from "@mui/material/List";
import { useEffect, useState } from "react";
import useMemoList from "../hooks/memoList";
import type { TMemoItem } from "../types/MemoItem";
import MemoListItem from "./MemoListItem";

export default function MemoList({ search = "" }) {
	const { memoList } = useMemoList();
	const [filteredMemoList, setFilteredMemoList] = useState<TMemoItem[]>([]);

	useEffect(() => {
		if (search) {
			setFilteredMemoList(
				memoList?.filter(
					(memoItem) =>
						memoItem.title.toLowerCase().includes(search.toLowerCase()) ||
						memoItem.content.toLowerCase().includes(search.toLowerCase()),
				) || [],
			);
		} else {
			setFilteredMemoList(memoList || []);
		}
	}, [search, memoList]);

	return (
		<>
			{filteredMemoList.length === 0 && (
				<span style={{ textAlign: "center", marginTop: "20px", color: "gray" }}>
					There's no memo.
				</span>
			)}
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				{filteredMemoList.map((memoItem) => (
					<MemoListItem key={memoItem.id} memoItem={memoItem} search={search} />
				))}
			</List>
		</>
	);
}
