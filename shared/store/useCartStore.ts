import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Product } from "../entity/Product";

type CartState = {
	isCartOpen: boolean;
	openCart: () => void;
	closeCart: () => void;

	cartItems: { count: number; product: Product }[];
	isLoading: boolean;
	addItem: (product: Product) => void;
	removeItem: (id: number) => void;
	increaseItemCount: (id: number) => void;
	decreaseItemCount: (id: number) => void;
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
				const exists = cartItems.find((item) => item.product.id === product.id);

				if (exists) {
					set({
						cartItems: cartItems.map((item) =>
							item.product.id === product.id ? { ...item, count: item.count + 1 } : item,
						),
					});
				} else {
					set({ cartItems: [...cartItems, { product, count: 1 }] });
				}
				set({ isLoading: false });
			},

			removeItem: (id) => {
				set({ isLoading: true });
				const { cartItems } = get();

				set({ cartItems: cartItems.filter((item) => item.product.id !== id) });
				set({ isLoading: false });
			},

			increaseItemCount: (id) => {
				const { cartItems } = get();
				set({
					cartItems: cartItems.map((item) =>
						item.product.id === id ? { ...item, count: item.count + 1 } : item,
					),
				});
			},

			decreaseItemCount: (id) => {
				const { cartItems } = get();
				set({
					cartItems: cartItems.map((item) =>
						item.product.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item,
					),
				});
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
