"use client";

import Image from "next/image";
import { useCartStore } from "@/shared/store/useCartStore";
import {
	Button,
	Chip,
	Divider,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	Spinner,
} from "@heroui/react";

export const CartModal = () => {
	const { isCartOpen, closeCart, cartItems, isLoading } = useCartStore();
	const totalCost = cartItems
		.map((item) => item.price * (1 - item.discount / 100))
		.reduce((curValue, initValue) => initValue + curValue, 0);

	return (
		<Drawer isOpen={isCartOpen} onClose={closeCart} size="3xl">
			<DrawerContent>
				{(onClose) => (
					<>
						<DrawerHeader className="flex flex-col gap-1 text-2xl font-bold text-secondary-900">
							Your cart
						</DrawerHeader>
						<hr />

						<DrawerBody>
							{isLoading ? (
								<Spinner className="flex h-full items-center justify-center" />
							) : cartItems.length === 0 ? (
								<div className="flex h-full items-center justify-center">
									<p className="text-secondary-800">
										Your cart is empty. <br />
										Add some items to get started!
									</p>
								</div>
							) : (
								<section className="mt-5 flex flex-col items-start gap-3">
									{cartItems.map((product) => (
										<div
											className="relative flex w-full items-start gap-5 rounded bg-white p-5"
											key={product.id}
										>
											<Image src={product.image} alt={product.title} width={100} height={100} />
											<div className="h-full w-[1px] bg-content1" />
											<div className="flex flex-col gap-3">
												<h4 className="text-content2">{product.title}</h4>
											</div>
											<Chip color="warning" variant="faded" className="absolute bottom-5 right-5">
												{product.price} $
											</Chip>
										</div>
									))}
								</section>
							)}
						</DrawerBody>
						<hr />
						<DrawerFooter className="flex items-center justify-between">
							<h3>
								<span className="text-secondary-800">Total:</span>{" "}
								<span className="text-secondary-900">{totalCost ?? 0} $</span>
								<br />
								<span className="text-secondary-800">Approximetly delivery cost</span>:{" "}
								<span className="text-secondary-900">
									{totalCost === 0 || totalCost > 5000 ? 0 : Math.floor(totalCost * 0.05)} $
								</span>
							</h3>

							<Button
								color={cartItems.length === 0 ? "default" : "primary"}
								onPress={() => console.log(cartItems)}
								disabled={cartItems.length === 0}
							>
								Buy
							</Button>
						</DrawerFooter>
					</>
				)}
			</DrawerContent>
		</Drawer>
	);
};
