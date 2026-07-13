import { createRootRoute, Outlet } from "@tanstack/react-router";
import BottomNav from "../components/BottomNav";
import NavBar from "../components/NavBar";

const RootLayout = () => (
	<>
		<NavBar />
		<main style={{ marginTop: 64, marginBottom: 56 }}></main>
		<Outlet />
		<BottomNav />
	</>
);

export const Route = createRootRoute({ component: RootLayout });
