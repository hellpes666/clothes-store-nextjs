import { create } from "zustand";
import { persist } from "zustand/middleware";
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

export const useCartStore = create<CartState>()(
	persist(
		(set, get) => ({
			isCartOpen: false,
			isLoading: false,
			cartItems: [],

			openCart: () => set({ isCartOpen: true }),
			closeCart: () => set({ isCartOpen: false }),

			addItem: (product) => {
				set({ isLoading: true });
				const { cartItems } = get();
				const exists = cartItems.find((item) => item.id === product.id);

				if (!exists) {
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
		}),
		{
			name: "cart-storage",
			partialize: (state) => ({
				cartItems: state.cartItems,
			}),
		},
	),
);
