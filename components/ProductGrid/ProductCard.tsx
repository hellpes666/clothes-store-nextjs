import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/shared/entity/Product";
import { cardVariants } from "@/shared/ui/animate/lib/homePageAnimationVariants";
import { CardInfoLabel } from "@/shared/ui/buyButton/CardInfoLabel";

/**Возвращает стили для начальной страницы, в виде кастомной сетки */
function HomeGridStyles(index: number) {
	const homeGridStyles = clsx({
		"col-span-2": index === 0,
		"col-span-2 md:col-span-3 xl:col-span-2": index === 5,
		"row-span-auto  md:row-span-1 xl:row-span-3": index === 2,
	});

	return homeGridStyles;
}

export const ProductCard = ({
	homeGrid,
	product,
}: {
	homeGrid: { isHomeGrid: boolean; currentIndex: number };
	product: Product;
}) => {
	return (
		<Link
			href={`products/${product.id}`}
			className={clsx(
				"group flex h-full w-full flex-col items-center justify-between",
				homeGrid.isHomeGrid && HomeGridStyles(homeGrid.currentIndex),
			)}
			key={product.id}
		>
			<motion.div
				variants={cardVariants}
				className="relative flex h-full w-full max-w-full flex-col justify-between rounded bg-white p-4 will-change-auto"
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
				<CardInfoLabel {...product} cn="w-full max-w-[350px] mx-auto mt-4" />
			</motion.div>
		</Link>
	);
};
