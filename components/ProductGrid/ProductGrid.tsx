"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { BuyButton } from "@/shared/ui/buyButton/BuyButton";
import { gridVariants, cardVariants } from "@/shared/ui/animate/lib/homePageAnimationVariants";
import { type Product } from "@/shared/entity/Product";

export function ProductGrid({ products }: { products: Product[] }) {
	return (
		<motion.div
			className="grid grid-cols-2 gap-4 md:grid-cols-3"
			variants={gridVariants}
			initial="initial"
			animate="animate"
		>
			{products.map((product, i) => (
				<motion.span
					key={product.id}
					variants={cardVariants}
					className={clsx(
						"group relative flex h-full w-full max-w-full flex-col justify-between rounded bg-white p-4 will-change-auto",
						{
							"col-span-2": i === 0 || i === 5,
							"row-span-3 md:row-span-2": i === 2,
						},
					)}
				>
					<Link
						href={`products/${product.id}`}
						className="flex h-full w-full max-w-full flex-col items-center justify-between"
					>
						<div className="flex flex-grow items-center justify-center">
							<Image
								loading="lazy"
								src={product.image}
								alt={product.description}
								width={250}
								height={250}
								className="m-5 mx-auto my-10 opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
							/>
						</div>
					</Link>
					<BuyButton {...product} cn="w-full max-w-[350px]" />
				</motion.span>
			))}
		</motion.div>
	);
}
