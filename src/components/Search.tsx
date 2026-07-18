import { TextField } from "@mui/material";
import { useState } from "react";
import MemoList from "./MemoList";
export function Search() {
	const [searchItem, setSearchItem] = useState("");

	return (
		<main style={{ display: "flex", flexDirection: "column", padding: 16 }}>
			<TextField
				id="outlined-basic"
				label="Search"
				variant="outlined"
				value={searchItem}
				onChange={(e) => setSearchItem(e.target.value)}
			/>
			<MemoList search={searchItem} />
		</main>
	);
}
