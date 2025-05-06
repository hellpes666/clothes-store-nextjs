"use client";
import { Button } from "@heroui/react";

export const CartButton = () => {
	return (
		<Button
			className="w-full bg-primary text-xl font-medium text-white transition-all duration-300 ease-in-out hover:border hover:border-white hover:bg-primary/90 active:scale-95 active:border-white md:w-auto"
			color="primary"
		>
			Add to the cart
		</Button>
	);
};
