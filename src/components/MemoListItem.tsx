import { Divider, ListItem, ListItemText } from "@mui/material";
import type { ReactElement } from "react";
import type { TMemoItem } from "../types/MemoItem";

function highlightText(text: string, search: string) {
	if (!search) {
		return text;
	}

	const lowerText = text.toLowerCase();
	const lowerSearch = search.toLowerCase();
	const parts: Array<string | ReactElement> = [];
	let startIndex = 0;
	let matchIndex = lowerText.indexOf(lowerSearch);

	while (matchIndex !== -1) {
		if (matchIndex > startIndex) {
			parts.push(text.slice(startIndex, matchIndex));
		}

		parts.push(
			<span
				key={`${matchIndex}-${startIndex}`}
				style={{ backgroundColor: "#fff29d", fontWeight: 600 }}
			>
				{text.slice(matchIndex, matchIndex + search.length)}
			</span>,
		);

		startIndex = matchIndex + search.length;
		matchIndex = lowerText.indexOf(lowerSearch, startIndex);
	}

	if (startIndex < text.length) {
		parts.push(text.slice(startIndex));
	}

	return parts.length > 0 ? parts : text;
}

function MemoListItem({
	memoItem,
	search = "",
}: {
	memoItem: TMemoItem;
	search?: string;
}) {
	return (
		<>
			<ListItem alignItems="flex-start">
				<ListItemText
					primary={highlightText(memoItem.title, search)}
					secondary={highlightText(memoItem.content, search)}
				/>
			</ListItem>
			<Divider component="li" />
		</>
	);
}

export default MemoListItem;
