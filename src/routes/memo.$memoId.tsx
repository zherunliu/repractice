import { createFileRoute } from "@tanstack/react-router";
import { Edit } from "@/features/edit/Edit";

export const Route = createFileRoute("/memo/$memoId")({
	component: Edit,
});
