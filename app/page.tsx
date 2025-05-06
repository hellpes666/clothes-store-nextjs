import { fetchInstance } from "@/shared/api/fetchInstance";
import { Product } from "@/shared/entity/Product";
import { BuyButton } from "@/shared/ui/buyButton.tsx/BuyButton";
import { DevelopedBy } from "@/shared/ui/links/DevelopedBy";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const previewProducts = await fetchInstance<Product[]>("GET", "/products?limit=6");

	return (
		<div className="flex w-full flex-col items-center justify-center gap-24 px-2 text-3xl md:px-4 md:text-5xl xl:px-6 xl:text-6xl">
			<h1 className="justify-srart flex w-full flex-col items-start gap-1">
				There is store for <br />
				<strong className="mb-5 bg-gradient-to-r from-[#cfff04] to-[#ff033e] bg-clip-text text-transparent">
					RTU MIREA
				</strong>
				<DevelopedBy />
			</h1>

			<section className="flex w-full flex-col gap-5">
				<div className="grig-cols-2 grid gap-4 md:grid-cols-3">
					{/* Item 1 (Spans 2 columns) */}
					<Link
						href={`products/${previewProducts[0].id.toString()}`}
						className="group relative col-span-2 flex w-full max-w-full flex-col items-start justify-between rounded bg-white p-4 will-change-auto"
						key={previewProducts[0].id}
					>
						<Image
							src={previewProducts[0].image}
							alt={previewProducts[0].description}
							width={250}
							height={250}
							className="m-10 mx-auto opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
						/>
						<BuyButton {...previewProducts[0]} cn="" />
					</Link>
					{/* Item 2 */}
					<Link
						href={`products/${previewProducts[1].id.toString()}`}
						className="group relative flex h-full w-full max-w-full flex-col justify-between rounded bg-white p-4 will-change-auto"
						key={previewProducts[1].id}
					>
						<div className="flex flex-grow items-center justify-center">
							<Image
								src={previewProducts[1].image}
								alt={previewProducts[1].description}
								width={200}
								height={200}
								className="m-5 opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
							/>
						</div>
						<BuyButton {...previewProducts[1]} cn="w-full" />
					</Link>

					{/* Item 3  */}
					<Link
						href={`products/${previewProducts[2].id.toString()}`}
						className="group relative row-span-3 flex h-full w-full max-w-full flex-col justify-between rounded bg-white p-4 will-change-auto md:row-span-2"
						key={previewProducts[2].id}
					>
						<div className="flex flex-grow items-center justify-center">
							<Image
								src={previewProducts[2].image}
								alt={previewProducts[2].description}
								width={200}
								height={200}
								className="m-5 mx-auto opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
							/>
						</div>
						<BuyButton {...previewProducts[2]} cn="w-full" />
					</Link>
					{/* Item 4 */}
					<Link
						href={`products/${previewProducts[3].id.toString()}`}
						className="group relative flex h-full w-full max-w-full flex-col justify-between rounded bg-white p-4 will-change-auto"
						key={previewProducts[3].id}
					>
						<div className="flex flex-grow items-center justify-center">
							<Image
								src={previewProducts[3].image}
								alt={previewProducts[3].description}
								width={200}
								height={200}
								className="m-5 mx-auto opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
							/>
						</div>
						<BuyButton {...previewProducts[3]} cn="w-full" />
					</Link>
					<Link
						href={`products/${previewProducts[3].id.toString()}`}
						className="group relative flex h-full w-full max-w-full flex-col justify-between rounded bg-white p-4 will-change-auto"
						key={previewProducts[4].id}
					>
						<div className="flex flex-grow items-center justify-center">
							<Image
								src={previewProducts[4].image}
								alt={previewProducts[4].description}
								width={200}
								height={200}
								className="m-5 mx-auto opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
							/>
						</div>
						<BuyButton {...previewProducts[4]} cn="w-full" />
					</Link>
					<Link
						href={`products/${previewProducts[5].id.toString()}`}
						className="group relative col-span-2 flex w-full max-w-full flex-col items-start justify-between rounded bg-white p-4 will-change-auto"
						key={previewProducts[5].id}
					>
						<Image
							src={previewProducts[5].image}
							alt={previewProducts[5].description}
							width={250}
							height={250}
							className="m-10 mx-auto opacity-85 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100"
						/>
						<BuyButton {...previewProducts[5]} cn="" />
					</Link>
				</div>
			</section>
		</div>
	);
}
