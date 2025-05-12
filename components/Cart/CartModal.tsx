"use client";

import Image from "next/image";
import { createCartStore } from "@/shared/store/CartStore";
import { Button, Chip, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, Spinner } from "@heroui/react";
import { Minus, Plus } from "lucide-react";

export const CartModal = () => {
	const useStore = createCartStore();

	const {
		isCartOpen,
		closeCart,
		cartItems,
		isLoading,
		totalBill,
		totalDeliveryCost,
		removeItem,
		increaseItemCount,
		decreaseItemCount,
	} = useStore;

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
									{cartItems.map((item) => (
										<div
											className="relative flex w-full items-start gap-5 overflow-hidden rounded bg-white p-5"
											key={item.product.id}
										>
											<Image
												src={item.product.image}
												alt={item.product.title}
												width={100}
												height={100}
												className="relative select-none"
												draggable={false}
											/>
											<div className="h-full w-[1px] bg-content1" />
											<div className="flex h-full flex-col justify-between gap-3">
												<h4 className="select-all text-content2">{item.product.title}</h4>
												<span className="text-content-2 inline-block min-w-[2.5em] max-w-[3em] select-none rounded-full bg-default-200 px-2 py-1 text-center">
													<b>{item.count}</b>
												</span>
											</div>

											<div
												className="absolute right-5 top-5 w-[100px] -translate-y-1/2 translate-x-1/2 rotate-45 transform select-none overflow-hidden rounded bg-default-100 text-center text-sm text-warning"
												aria-label="product discount"
											>
												{item.product.discount} %
											</div>

											<div
												className="absolute -bottom-9 left-1 h-10 w-[100px] -translate-x-1/2 -translate-y-1/2 rotate-45 transform cursor-pointer overflow-hidden rounded bg-warning-50 text-center text-[8px] text-warning"
												aria-label="product discount select-none"
												onClick={() => removeItem(item.product.id)}
											>
												DELETE
											</div>

											<div className="absolute bottom-5 right-5 flex items-center gap-5 rounded">
												<Minus
													className="cursor-pointer rounded-full bg-default-200 p-1 text-white"
													onClick={() => decreaseItemCount(item.product.id)}
												/>
												<Chip
													color="warning"
													variant="faded"
													size="lg"
													className="select-none"
													style={{ fontVariantNumeric: "tabular-nums" }}
													aria-label={`${item.product.title} costs ${item.count * item.product.price} $`}
												>
													{item.product.discount > 0 ? (
														<>
															<span className="mr-2 text-gray-400 line-through">
																{item.count * item.product.price} $
															</span>
															<span>
																{Math.round(
																	item.count *
																		item.product.price *
																		(1 - item.product.discount / 100),
																)}{" "}
																$
															</span>
														</>
													) : (
														<>{Math.round(item.count * item.product.price)} $</>
													)}
												</Chip>
												<Plus
													className="cursor-pointer rounded-full bg-default-200 p-1 text-white"
													onClick={() => increaseItemCount(item.product.id)}
												/>
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
								<span className="text-secondary-900">{totalBill} $</span>
								<br />
								<span className="text-secondary-800">Approximetly delivery cost</span>:{" "}
								<span className="text-secondary-900">{totalDeliveryCost} $</span>
							</h3>

							<Button
								as="a"
								href="/checkouts"
								color={cartItems.length === 0 ? "default" : "primary"}
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
