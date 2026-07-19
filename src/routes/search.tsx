import { createFileRoute } from "@tanstack/react-router";
import { Search } from "../components/Search";

export type TSearch = {
	keyword: string;
};

export const Route = createFileRoute("/search")({
	component: Search,

	validateSearch: (search) => {
		return { keyword: (search.keyword as string) || "" };
	},
});
