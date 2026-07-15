import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";
import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";

const RootLayout = () => (
	<>
		<NavBar />
		<main style={{ marginTop: 64, marginBottom: 56 }}></main>
		<Outlet />
		<BottomNav />
		<Toaster position="top-center" richColors />
	</>
);

export const Route = createRootRoute({ component: RootLayout });
