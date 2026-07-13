import { Button, TextField } from "@mui/material";
import { useState } from "react";

export function Add() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	return (
		<form
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
			<Button variant="contained">Add</Button>
		</form>
	);
}
