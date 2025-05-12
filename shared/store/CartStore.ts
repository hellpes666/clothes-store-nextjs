import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type Product } from "../entity/Product";

const DELIVERY_FREE_THRESHOLD = 5000;
const DELIVERY_RATE = 0.1;

export type CartState = {
	isCartOpen: boolean;
	cartItems: { count: number; product: Product }[];
	isLoading: boolean;
	totalAmountWithoutDelivery: number;
	totalDeliveryCost: number;
	totalBill: number;
};

export type CartActions = {
	openCart: () => void;
	closeCart: () => void;
	addItem: (product: Product) => void;
	removeItem: (id: number) => void;
	increaseItemCount: (id: number) => void;
	decreaseItemCount: (id: number) => void;
};

export type CartStore = CartState & CartActions;

export const defaultInitState: CartState = {
	isCartOpen: false,
	isLoading: false,
	cartItems: [],
	totalAmountWithoutDelivery: 0,
	totalDeliveryCost: 0,
	totalBill: 0,
};

export const createCartStore = create<CartStore>()(
	persist(
		(set, get) => ({
			...defaultInitState,

			openCart: () => {
				const { totalBill } = get();
				set({ isCartOpen: true });
				console.log(totalBill);
			},

			closeCart: () => set({ isCartOpen: false }),

			addItem: (product) => {
				set({ isLoading: true });
				const { cartItems } = get();
				const existingItem = cartItems.find((item) => item.product.id === product.id);

				const updatedCart = existingItem
					? cartItems.map((item) =>
							item.product.id === product.id ? { ...item, count: item.count + 1 } : item,
						)
					: [...cartItems, { product, count: 1 }];

				const totals = calculateTotals(updatedCart);
				set({ cartItems: updatedCart, ...totals, isLoading: false });
			},

			removeItem: (id) => {
				set({ isLoading: true });
				const updatedCart = get().cartItems.filter((item) => item.product.id !== id);
				const totals = calculateTotals(updatedCart);
				set({ cartItems: updatedCart, ...totals, isLoading: false });
			},

			increaseItemCount: (id) => {
				const updatedCart = get().cartItems.map((item) =>
					item.product.id === id ? { ...item, count: item.count + 1 } : item,
				);
				const totals = calculateTotals(updatedCart);
				set({ cartItems: updatedCart, ...totals });
			},

			decreaseItemCount: (id) => {
				const updatedCart = get()
					.cartItems.map((item) =>
						item.product.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item,
					)
					.filter((item) => item.count > 0);
				const totals = calculateTotals(updatedCart);
				set({ cartItems: updatedCart, ...totals });
			},
		}),
		{
			name: "cart-storage",
		},
	),
);

function calculateTotals(cartItems: CartState["cartItems"]) {
	const totalAmountWithoutDelivery = cartItems.reduce((acc, item) => {
		if (!item.product || isNaN(item.product.price)) return acc;
		const discountFactor = item.product.discount ? 1 - item.product.discount / 100 : 1;
		return acc + item.product.price * discountFactor * item.count;
	}, 0);

	const totalDeliveryCost =
		totalAmountWithoutDelivery >= DELIVERY_FREE_THRESHOLD ? 0 : totalAmountWithoutDelivery * DELIVERY_RATE;

	return {
		totalAmountWithoutDelivery: Math.round(totalAmountWithoutDelivery),
		totalDeliveryCost: Math.round(totalDeliveryCost),
		totalBill: Math.round(totalAmountWithoutDelivery + totalDeliveryCost),
	};
}
