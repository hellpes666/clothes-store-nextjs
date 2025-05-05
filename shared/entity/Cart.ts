import { Product } from "./Product";

export type Cart = {
	id: number;
	userId: number;
	products: Product[];
};
