import { TextField } from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Route } from "@/routes/search";
import MemoList from "../home/MemoList";

export function Search() {
	const { keyword } = Route.useSearch();
	const [searchItem, setSearchItem] = useState(keyword);
	const navigate = useNavigate();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchItem(event.target.value);
		navigate({
			to: ".",
			search: { keyword: event.target.value },
		});
	};

	return (
		<main style={{ display: "flex", flexDirection: "column", padding: 16 }}>
			<TextField
				id="outlined-basic"
				label="Search"
				variant="outlined"
				value={searchItem}
				onChange={handleChange}
			/>
			<MemoList search={searchItem} />
		</main>
	);
}
