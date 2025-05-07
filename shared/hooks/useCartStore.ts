import { create } from "zustand";
import { type Product } from "../entity/Product";

type CartState = {
	isCartOpen: boolean;
	openCart: () => void;
	closeCart: () => void;

	cartItems: Product[];
	isLoading: boolean;
	addItem: (product: Product) => void;
	removeItem: (id: number) => void;
};

const initState = {
	isCartOpen: false,
	isLoading: false,
	cartItems: [],
};

export const useCartStore = create<CartState>((set, get) => ({
	...initState,
	openCart: () => set({ isCartOpen: true }),
	closeCart: () => set({ isCartOpen: false }),
	addItem: (product) => {
		set({ isLoading: true });
		const { cartItems } = get();
		const isProductAlreadyExist = cartItems.find((item) => item.id === product.id);

		if (!isProductAlreadyExist) {
			set({ cartItems: [...cartItems, product] });
		}
		set({ isLoading: false });
	},
	removeItem: (id) => {
		set({ isLoading: true });
		const { cartItems } = get();

		set({ cartItems: cartItems.filter((item) => item.id !== id) });
		set({ isLoading: false });
	},
}));
