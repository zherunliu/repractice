import { useAtom } from "jotai";
import { Dialog } from "primereact/dialog";
import { visibleAtom } from "../atoms/visible";
import CartList from "./CartList";

export default function CartDialog() {
	const [visible, setVisible] = useAtom(visibleAtom);
	return (
		<Dialog
			visible={visible}
			style={{ width: "50vw" }}
			onHide={() => setVisible(false)}
			breakpoints={{ "960px": "75vw", "640px": "100vw" }}
		>
			<CartList />
		</Dialog>
	);
}
