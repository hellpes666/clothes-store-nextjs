"use client";

import { createCartStore } from "@/shared/store/CartStore";
import { ShoppingBasket } from "lucide-react";

export const Cart = () => {
	const { openCart } = createCartStore();
	return <ShoppingBasket aria-label="cart" className="cursor-pointer" onClick={openCart} />;
};
