"use client";
import { Product } from "@/shared/entity/Product";
import { useCartStore } from "@/shared/hooks/useCartStore";
import { Button } from "@heroui/react";

export const CartButton = ({ product }: { product: Product }) => {
	const { addItem } = useCartStore();

	return (
		<Button
			className="w-full bg-primary text-xl font-medium text-white transition-all duration-300 ease-in-out hover:border hover:border-white hover:bg-primary/90 active:scale-95 active:border-white md:w-auto"
			color="primary"
			onClick={() => addItem(product)}
		>
			Add to the cart
		</Button>
	);
};
