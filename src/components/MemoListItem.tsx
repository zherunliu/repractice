import { Divider, ListItem, ListItemText } from "@mui/material";
import type { TMemoItem } from "../types/MemoItem";

function MemoListItem({ memoItem }: { memoItem: TMemoItem }) {
	return (
		<>
			<ListItem alignItems="flex-start">
				<ListItemText primary={memoItem.title} secondary={memoItem.content} />
			</ListItem>
			<Divider component="li" />
		</>
	);
}

export default MemoListItem;
