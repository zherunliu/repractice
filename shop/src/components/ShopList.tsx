import { useSetAtom } from "jotai";
import { Button } from "primereact/button";
import { DataView as PrimeDataView } from "primereact/dataview";
import { Rating } from "primereact/rating";
import { Tag } from "primereact/tag";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { cartItemCounterAtom } from "../atoms/cart";
import { useCartList } from "../hooks/CartList";
import { ProductService } from "../services/ProductService";
import type { ICartItem, IProduct } from "../types";

export default function ShopList() {
	const [products, setProducts] = useState<IProduct[]>([]);
	const { cartList, setCartList } = useCartList();
	const setCartItemCounter = useSetAtom(cartItemCounterAtom);

	useEffect(() => {
		ProductService.getProducts().then((data: IProduct[]) => setProducts(data));
		setCartItemCounter(cartList?.length || 0);
	}, [cartList, setCartItemCounter]);

	const getSeverity = (product: IProduct) => {
		switch (product.inventoryStatus) {
			case "INSTOCK":
				return "success";

			case "LOWSTOCK":
				return "warning";

			case "OUTOFSTOCK":
				return "danger";

			default:
				return null;
		}
	};

	function addToCart(newCartItem: ICartItem) {
		const newCartList = [...(cartList || []), newCartItem];
		setCartList(newCartList);
		setCartItemCounter(newCartList.length);
		toast.success("new item added to cart");
	}

	const itemTemplate = (product: IProduct) => {
		return (
			<div className="col-12">
				<div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
					<img
						className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round"
						src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
						alt={product.name}
					/>
					<div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
						<div className="flex flex-column align-items-center sm:align-items-start gap-3">
							<div className="text-2xl font-bold text-900">{product.name}</div>
							<Rating value={product.rating} readOnly cancel={false}></Rating>
							<div className="flex align-items-center gap-3">
								<span className="flex align-items-center gap-2">
									<i className="pi pi-tag"></i>
									<span className="font-semibold">{product.category}</span>
								</span>
								<Tag
									value={product.inventoryStatus}
									severity={getSeverity(product)}
								></Tag>
							</div>
						</div>
						<div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
							<span className="text-2xl font-semibold">${product.price}</span>
							<Button
								icon="pi pi-shopping-cart"
								className="p-button-rounded"
								disabled={product.inventoryStatus === "OUTOFSTOCK"}
								onClick={() =>
									addToCart({
										id: product.id,
										name: product.name,
										image: product.image,
										price: product.price,
										category: product.category,
									})
								}
							></Button>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="card">
			<PrimeDataView
				value={products}
				itemTemplate={itemTemplate}
				paginator
				rows={5}
			/>
		</div>
	);
}
