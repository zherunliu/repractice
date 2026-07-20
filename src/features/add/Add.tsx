import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { toast } from "sonner";
import useMemoList from "@/hooks/memoList";

export function Add() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const { memoList, setMemoList } = useMemoList();

	const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		const newMemo = {
			id: Date.now(),
			title,
			content,
		};
		setMemoList([...(memoList || []), newMemo]);
		toast.success("Memo added successfully");
		setTitle("");
		setContent("");
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
				Add
			</Button>
		</form>
	);
}
