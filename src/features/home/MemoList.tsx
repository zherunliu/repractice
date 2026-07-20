import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import useMemoList from "@/hooks/memoList";
import type { TMemoItem } from "@/types/MemoItem";
import MemoListItem from "./MemoListItem";

export default function MemoList({ search = "" }) {
	const { memoList, setMemoList } = useMemoList();
	const [filteredMemoList, setFilteredMemoList] = useState<TMemoItem[]>([]);

	function handleDeleteMemoItem(deleteId: number) {
		const updatedMemoList =
			memoList?.filter((memoItem) => memoItem.id !== deleteId) || [];
		setMemoList(updatedMemoList);
		toast.success("Delete memo successfully");
	}

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
		<Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
			{filteredMemoList.length === 0 && (
				<Box
					sx={{
						mt: 2,
						width: "100%",
						textAlign: "center",
						color: "text.secondary",
					}}
				>
					There's no memo.
				</Box>
			)}
			<List sx={{ width: "100%", bgcolor: "background.paper" }}>
				{filteredMemoList.map((memoItem) => (
					<MemoListItem
						key={memoItem.id}
						memoItem={memoItem}
						search={search}
						onDelete={handleDeleteMemoItem}
					/>
				))}
			</List>
		</Box>
	);
}
