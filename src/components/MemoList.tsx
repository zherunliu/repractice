import List from "@mui/material/List";
import useMemoList from "../hooks/memoList";
import MemoListItem from "./MemoListItem";

export default function MemoList() {
	const { memoList } = useMemoList();

	return (
		<>
			{memoList?.length === 0 && (
				<h2 style={{ textAlign: "center" }}>
					There's no memo, try to add one.
				</h2>
			)}
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				{memoList?.map((memoItem) => (
					<MemoListItem key={memoItem.id} memoItem={memoItem} />
				))}
			</List>
		</>
	);
}
