import List from "@mui/material/List";
import type { TMemoItem } from "../types/MemoItem";
import MemoListItem from "./MemoListItem";

export default function MemoList() {
	const mockMemoList: TMemoItem[] = [
		{
			id: 1,
			title: "Memo 1",
			content: "This is the content for memo 1",
		},
		{ id: 2, title: "Memo 2", content: "This is the content for memo 2" },
		{ id: 3, title: "Memo 3", content: "This is the content for memo 3" },
		{ id: 4, title: "Memo 4", content: "This is the content for memo 4" },
		{ id: 5, title: "Memo 5", content: "This is the content for memo 5" },
	];
	return (
		<List sx={{ width: "100%", bgcolor: "background.paper" }}>
			{mockMemoList.map((memoItem) => (
				<MemoListItem key={memoItem.id} memoItem={memoItem} />
			))}
		</List>
	);
}
