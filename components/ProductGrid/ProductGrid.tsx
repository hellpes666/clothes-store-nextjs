"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { CardInfoLabel } from "@/shared/ui/buyButton/CardInfoLabel";
import { gridVariants, cardVariants } from "@/shared/ui/animate/lib/homePageAnimationVariants";
import { type Product } from "@/shared/entity/Product";

export function ProductGrid({ products, homeGrid }: { products: Product[]; homeGrid?: string }) {
	return (
		<motion.div
			className={clsx("grid", homeGrid ? "grid-cols-2 gap-4 md:grid-cols-3" : "w-full grid-cols-3 gap-12")}
			variants={gridVariants}
			initial="initial"
			animate="animate"
		>
			{products.map((product, i) => {
				const homeGridStyles =
					homeGrid && (i === 0 || i === 2 || i === 5)
						? clsx({
								"col-span-2": i === 0 || i === 5,
								"row-span-3 md:row-span-2": i === 2,
							})
						: "";

				return (
					<motion.div
						key={product.id}
						variants={cardVariants}
						className={clsx(
							"group relative flex h-full w-full max-w-full flex-col justify-between rounded bg-white p-4 will-change-auto",
							homeGridStyles,
						)}
					>
						<Link
							href={`products/${product.id}`}
							className="flex h-full w-full flex-col items-center justify-between"
						>
							<div className="flex flex-grow items-center justify-center">
								<Image
									loading="lazy"
									src={product.image}
									alt={product.title}
									width={250}
									height={250}
									className="opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
								/>
							</div>
						</Link>
						<CardInfoLabel {...product} cn="w-full max-w-[350px] mx-auto mt-4" />
					</motion.div>
				);
			})}
		</motion.div>
	);
}
