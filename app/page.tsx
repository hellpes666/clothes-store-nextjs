import { fetchInstance } from "@/shared/api/fetchInstance";
import { Product } from "@/shared/entity/Product";
import { DevelopedBy } from "@/shared/ui/links/DevelopedBy";


export default async function Home() {
	const previewProducts = await fetchInstance<Product[]>("GET", "/products?limit=6");
	

	return (
		<div className="flex flex-col items-center justify-center gap-36 px-2 text-3xl md:px-4 md:text-5xl xl:px-6 xl:text-6xl">
			<h1 className="flex flex-col items-center justify-center gap-1">
				There is store for <br />
				<strong className="mb-5 bg-gradient-to-r from-[#cfff04] to-[#ff033e] bg-clip-text text-transparent">
					RTU MIREA
				</strong>
				<DevelopedBy />
			</h1>

			<section className="flex w-full flex-col gap-5">
				<h2 className="text-secondary-900">Our products</h2>

				<div className="grid grid-cols-3 gap-4">
  <div className="bg-green-100 p-4 col-span-2">Item 1 (Spans 2 columns)</div>
  <div className="bg-green-100 p-4">Item 2</div>
  <div className="bg-green-100 p-4 row-span-2">Item 3 (Spans 2 rows)</div>
  <div className="bg-green-100 p-4">Item 4</div>
  <div className="bg-green-100 p-4">Item 5</div>
</div>
			</section>
			<div className="h-[200px]" />
		</div>
	);
}
