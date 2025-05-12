"use client";

import Image from "next/image";
import { createCartStore } from "@/shared/store/CartStore";
import { Chip } from "@heroui/react";

//TODO SEKELETON
export const FormItemsPreview = () => {
	const useStore = createCartStore();
	const { cartItems, totalAmountWithoutDelivery, totalBill, totalDeliveryCost } = useStore;

	return (
		<div className="flex max-h-[99%] flex-col gap-16 overflow-auto">
			{cartItems.map((item) => (
				<div className="group flex w-full items-center justify-between" key={item.product.id}>
					<div className="flex items-center gap-5">
						<Image
							src={item.product.image}
							width={75}
							className="select-none rounded"
							draggable={false}
							height={75}
							alt={item.product.title}
						/>
						<div className="flex flex-col items-start gap-1">
							<h2 className="select-all text-warning-500">
								{item.product.title.split(" ").slice(0, 3).join(" ")}
							</h2>
							<p className="select-none text-warning-200">x{item.count}</p>
						</div>
					</div>

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
									{Math.round(item.count * item.product.price * (1 - item.product.discount / 100))} $
								</span>
							</>
						) : (
							<>{Math.round(item.count * item.product.price)} $</>
						)}
					</Chip>
				</div>
			))}
			<div className="flex w-full flex-col gap-3">
				<hr />
				<div className="flex items-center justify-between">
					<h3>Subtotal</h3>
					<p>{totalAmountWithoutDelivery} $</p>
				</div>

				<div className="flex items-center justify-between">
					<h3>Delivery</h3>
					<p>{totalDeliveryCost === 0 ? "FREE" : `${totalDeliveryCost} $`} </p>
				</div>
				<div className="mt-3 flex items-center justify-between text-xl font-bold">
					<h3>TOTAL</h3>
					<p>{totalBill} $</p>
				</div>
			</div>
		</div>
	);
};
