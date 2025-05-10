import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Product } from "@/shared/entity/Product";
import { cardVariants } from "@/shared/ui/animate/lib/homePageAnimationVariants";
import { CardInfoLabel } from "@/shared/ui/buyButton/CardInfoLabel";

//TODO разобраться почему стили не применяются

/**Возвращает стили для начальной страницы, в виде кастомной сетки */
function HomeGridStyles(index: number) {
	const homeGridStyles = clsx({
		"col-span-2": index === 0 || index === 5,
		"row-span-3 md:row-span-2": index === 2,
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
			className="flex h-full w-full flex-col items-center justify-between"
			key={product.id}
		>
			<motion.div
				variants={cardVariants}
				className={clsx(
					"group relative flex h-full w-full max-w-full flex-col justify-between rounded bg-white p-4 will-change-auto",
					homeGrid.isHomeGrid && HomeGridStyles(homeGrid.currentIndex),
				)}
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
