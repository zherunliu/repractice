import { Button, TextField } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import useMemoList from "../hooks/memoList";
import { Route } from "../routes/memo.$memoId";

export function Edit() {
	const { memoId } = Route.useParams();
	const { memoList, setMemoList } = useMemoList();
	const memoItem = memoList?.find((memoItem) => memoItem.id === Number(memoId));
	const [title, setTitle] = useState(memoItem?.title || "");
	const [content, setContent] = useState(memoItem?.content || "");
	const navigate = useNavigate();

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		memoList?.map((memoItem) => {
			if (memoItem.id === Number(memoId)) {
				memoItem.title = title;
				memoItem.content = content;
			}
			return memoItem;
		});
		setMemoList(memoList);
		toast.success("Memo edited successfully");
		navigate({ to: "/" });
	};

	return (
		<form
			onSubmit={handleSubmit}
			style={{ display: "flex", flexDirection: "column", gap: 16, padding: 16 }}
		>
			<TextField
				id="outlined-basic"
				label="Title"
				variant="outlined"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<TextField
				id="outlined-multiline-static"
				label="Content"
				multiline
				value={content}
				onChange={(e) => setContent(e.target.value)}
				rows={4}
			/>
			<Button type="submit" variant="contained">
				Edit
			</Button>
		</form>
	);
}
