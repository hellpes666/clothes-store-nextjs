"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { gridVariants } from "@/shared/ui/animate/lib/homePageAnimationVariants";
import { useInfiniteScrollGetItems } from "@/shared/hooks/useInfiniteScrollGetItems";
import { Alert, Spinner } from "@heroui/react";
import { ProductCard } from "./ProductCard";
import { useGetPreviewItems } from "@/shared/hooks/useGetPreviewItems";
import { Product } from "@/shared/entity/Product";
import Link from "next/link";

export function ItemsGrid({ isHomePage }: { isHomePage: boolean }) {
	const homePageData = useGetPreviewItems();
	const infiniteScrollData = useInfiniteScrollGetItems();

	const isLoading = isHomePage ? homePageData.isLoading : infiniteScrollData.isLoading;
	const error = isHomePage ? homePageData.error : infiniteScrollData.error;

	let products: Product[] = [];

	if (isHomePage) {
		products = homePageData.data?.products ?? [];
	} else {
		products = infiniteScrollData.data?.pages.flatMap((page) => page.products) ?? [];
	}

	const cursor = isHomePage ? null : infiniteScrollData.cursor;

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
		<div className="flex flex-col items-center justify-center">
			<motion.div
				className={clsx(
					"grid w-full",
					isHomePage ? "grid-cols-2 gap-4 md:grid-cols-3" : "w-full grid-cols-2 gap-12 xl:grid-cols-3",
				)}
				variants={gridVariants}
				initial="initial"
				animate="animate"
			>
				{products.map((product, i) => (
					<ProductCard
						homeGrid={{ isHomeGrid: isHomePage, currentIndex: i }}
						product={product}
						key={product.id}
					/>
				))}
			</motion.div>

			{isHomePage ? (
				<Link href="products" className="hover-btn mt-5">
					Go to the all Products
				</Link>
			) : (
				cursor
			)}
		</div>
	);
}
