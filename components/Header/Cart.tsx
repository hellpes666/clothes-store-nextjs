"use client";

import { useCartStore } from "@/shared/hooks/useCartStore";
import { ShoppingBasket } from "lucide-react";

export const Cart = () => {
	const { openCart } = useCartStore();
	return <ShoppingBasket aria-label="cart" className="cursor-pointer" onClick={openCart} />;
};
