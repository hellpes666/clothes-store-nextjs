"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { CardInfoLabel } from "@/shared/ui/buyButton/CardInfoLabel";
import { gridVariants, cardVariants } from "@/shared/ui/animate/lib/homePageAnimationVariants";
import { useGetPreviewItems } from "@/shared/hooks/useGetPreviewItems";
import { Alert, Spinner } from "@heroui/react";

export function PreviewProductGrid() {
	const { data, error, isLoading } = useGetPreviewItems();

	if (isLoading) {
		return <Spinner className="flex h-full min-h-[400px] items-center justify-center" />;
	}

	if (error) {
		return (
			<div className="flex h-full items-center justify-center">
				<Alert className="text-red-500">Failed to load products. Please try again later.</Alert>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center gap-10">
			<motion.div
				className={clsx("grid", "grid-cols-2 gap-4 md:grid-cols-3")}
				variants={gridVariants}
				initial="initial"
				animate="animate"
			>
				{data?.products.map((product, i) => {
					const homeGridStyles = clsx({
						"col-span-2": i === 0 || i === 5,
						"row-span-3 md:row-span-2": i === 2,
					});

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
			<Link
				href="products"
				className="rounded border-2 border-white/60 bg-primary-200 p-3 text-xl text-white/60 transition-all duration-300 will-change-auto hover:rounded-2xl hover:border-white hover:text-white"
			>
				Go to the all Products
			</Link>
		</div>
	);
}
