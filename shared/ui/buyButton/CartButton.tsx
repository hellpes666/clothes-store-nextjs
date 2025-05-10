"use client";

import { Product } from "@/shared/entity/Product";
import { useCartStore } from "@/shared/store/useCartStore";
import { Button } from "@heroui/react";

export const CartButton = ({ product }: { product: Product }) => {
	const { addItem } = useCartStore();

	return (
		<Button
			className="w-full text-xl font-medium text-white transition-all duration-300 ease-in-out active:scale-95 md:w-auto"
			color="default"
			onClick={() => addItem(product)}
		>
			Add to the cart
		</Button>
	);
};
