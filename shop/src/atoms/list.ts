import { atom } from "jotai";
import { ProductService } from "../services/ProductService";

export const productsAtom = atom(ProductService.getProductsData());

export const searchTextAtom = atom("");

export const filteredProductsAtom = atom((get) => {
	const products = get(productsAtom);
	const searchText = get(searchTextAtom).trim().toLowerCase();

	if (!searchText) return products;

	return products.filter((product) =>
		product.name.toLowerCase().includes(searchText),
	);
});
