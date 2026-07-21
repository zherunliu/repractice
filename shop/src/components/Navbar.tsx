import { PrimeReactContext } from "primereact/api";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Menubar } from "primereact/menubar";
import { useContext, useState } from "react";

export default function Navbar() {
	const [isDark, setIsDark] = useState(false);
	const { changeTheme } = useContext(PrimeReactContext);

	const LIGHT_THEME = "lara-light-pink";
	const DARK_THEME = "lara-dark-pink";

	function toggleTheme() {
		const currentTheme = isDark ? LIGHT_THEME : DARK_THEME;
		const newTheme = isDark ? DARK_THEME : LIGHT_THEME;
		changeTheme?.(currentTheme, newTheme, "theme-link", () =>
			setIsDark(!isDark),
		);
	}

	const start = (
		<Button
			type="button"
			label="Cart"
			icon="pi pi-shopping-cart"
			text
			badge="2"
			badgeClassName="p-badge-danger"
		/>
	);
	const end = (
		<div className="flex justify-content-between">
			<InputText placeholder="Search" type="text" className="w-full mr-2" />
			<Button
				icon={`pi pi-${isDark ? "sun" : "moon"}`}
				text
				aria-label="theme"
				onClick={toggleTheme}
			/>
		</div>
	);

	return (
		<div className="card">
			<Menubar start={start} end={end} />
		</div>
	);
}
