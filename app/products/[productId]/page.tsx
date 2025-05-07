import { fetchInstance } from "@/shared/api/fetchInstance";
import { type Product } from "@/shared/entity/Product";
import { CartButton } from "@/shared/ui/buyButton/CartButton";

import Image from "next/image";

export default async function ProductInfo({ params }: { params: Promise<{ productId: string }> }) {
	const { productId } = await params;
	const productData = (await fetchInstance<{ product: Product }>("GET", `/products/${productId}`)).product;
	console.log(productData);
	return (
		<div className="flex w-full flex-col gap-6 rounded border bg-white p-6 md:flex-row">
			{/* Левая часть: большая зона с изображением */}
			<div className="flex w-full flex-[3] items-center justify-center">
				<Image
					src={productData.image}
					width={450}
					height={450}
					alt={productData.title}
					className="object-contain"
				/>
			</div>

			{/* Правая часть: информация о товаре */}
			<section className="flex w-full flex-[2] flex-col justify-start gap-4">
				<h2 className="text-2xl font-semibold text-secondary-200">{productData.title}</h2>
				<hr />

				<p className="text-base text-gray-700">{productData.description}</p>
				<hr />

				<div className="flex flex-wrap gap-2 text-sm text-gray-600">
					<span>
						<strong>Brand:</strong> {productData.brand}
					</span>
					<span>
						<strong>Model:</strong> {productData.model}
					</span>
					<span>
						<strong>Color:</strong> {productData.color}
					</span>
					<span>
						<strong>Category:</strong> {productData.category}
					</span>
				</div>
				<hr />

				<div className="mt-4 flex items-center gap-4 text-xl">
					{productData.discount ? (
						<>
							<span className="text-gray-400 line-through">${productData.price}</span>
							<span className="font-bold text-red-600">
								${(productData.price * (1 - productData.discount / 100)).toFixed(2)}
							</span>
							<span className="text-sm text-green-600">-{productData.discount}%</span>
						</>
					) : (
						<span className="font-bold text-black">${productData.price}</span>
					)}
				</div>
				<CartButton product={productData} />
			</section>
		</div>
	);
}
