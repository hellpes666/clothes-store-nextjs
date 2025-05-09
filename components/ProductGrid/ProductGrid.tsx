"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { CardInfoLabel } from "@/shared/ui/buyButton/CardInfoLabel";
import { gridVariants, cardVariants } from "@/shared/ui/animate/lib/homePageAnimationVariants";
import { useInfiniteScrollGetItems } from "@/shared/hooks/useInfiniteScrollGetItems";
import { Alert, Spinner } from "@heroui/react";

export function ProductGrid() {
	const { cursor, isLoading, error, data } = useInfiniteScrollGetItems();

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

	const products = data?.pages.flatMap((page) => page.products) ?? [];

	return (
		<div className="flex flex-col items-center justify-center">
			<motion.div
				className={clsx("grid", "w-full grid-cols-3 gap-12")}
				variants={gridVariants}
				initial="initial"
				animate="animate"
			>
				{products.map((product, i) => (
					<motion.div
						key={product.id}
						variants={cardVariants}
						className={clsx(
							"group relative flex h-full w-full max-w-full flex-col justify-between rounded bg-white p-4 will-change-auto",
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
				))}
			</motion.div>
			{cursor}
		</div>
	);
}
