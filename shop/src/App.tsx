import { Toaster } from "sonner";
import CartDialog from "./components/CartDialog";
import Navbar from "./components/Navbar";
import ShopList from "./components/ShopList";

export default function App() {
	return (
		<>
			<Navbar />
			<ShopList />
			<CartDialog />
			<Toaster position="top-center" richColors />
		</>
	);
}
