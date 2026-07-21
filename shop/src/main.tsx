import { PrimeReactProvider } from "primereact/api";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import App from "./App.tsx";
import "primeicons/primeicons.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<PrimeReactProvider>
			<App />
		</PrimeReactProvider>
	</StrictMode>,
);
