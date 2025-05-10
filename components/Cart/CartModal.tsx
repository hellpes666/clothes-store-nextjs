"use client";

import Image from "next/image";
import { useCartStore } from "@/shared/store/useCartStore";
import { Button, Chip, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Spinner } from "@heroui/react";
import { Minus, Plus, Trash2 } from "lucide-react";

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
												className="relative flex w-full items-start gap-5 overflow-hidden rounded bg-white p-5"
												key={product.id}
											>
												<Image
													src={product.image}
													alt={product.title}
													width={100}
													height={100}
													className="relative"
												/>
												<div className="h-full w-[1px] bg-content1" />
												<div className="flex flex-col gap-3">
													<h4 className="text-content2">{product.title}</h4>
												</div>

												<div className="absolute right-5 top-5 w-[100px] -translate-y-1/2 translate-x-1/2 rotate-45 transform overflow-hidden rounded bg-default-100 text-center text-sm text-warning">
													{product.discount} %
												</div>

												<div className="absolute bottom-5 right-5 flex items-center gap-5 rounded">
													<Minus className="cursor-pointer rounded-full bg-default-200 p-1 text-white" />
													<Chip color="warning" variant="faded" size="lg">
														{product.discount > 0 ? (
															<>
																<span className="mr-2 text-gray-400 line-through">
																	{product.price} $
																</span>
																<span>
																	{Math.round(
																		product.price * (1 - product.discount / 100),
																	)}{" "}
																	$
																</span>
															</>
														) : (
															<>{product.price} $</>
														)}
													</Chip>
													<Plus className="cursor-pointer rounded-full bg-default-200 p-1 text-white" />
												</div>
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
