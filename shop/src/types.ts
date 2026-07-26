export interface IProduct {
	id: string;
	code: string;
	name: string;
	description: string;
	image: string;
	price: number;
	category: string;
	quantity: number;
	inventoryStatus: string;
	rating: number;
}

export interface ICartItem {
	id: string;
	name: string;
	image: string;
	price: number;
	category: string;
}
