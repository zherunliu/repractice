import { useLocalStorage } from "react-use";
import type { ICartItem } from "../types";

export function useCartList() {
	const [cartList, setCartList] = useLocalStorage<ICartItem[]>("cart-list", []);
	return { cartList, setCartList };
}
