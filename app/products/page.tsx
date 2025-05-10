import { ItemsGrid } from "@/components/ProductGrid/ItemsGrid";
import { ProductGrid } from "@/components/ProductGrid/ProductGrid";
import { fetchInstance } from "@/shared/api/fetchInstance";

export default async function Products() {
	const categories = (await fetchInstance<{ categories: string[] }>("GET", "/products/category")).categories;

	return (
		<div className="grid w-full grid-cols-4 gap-12 py-6">
			{/* Filter Column (1/5) */}
			<section className="col-span-1">
				<h2 className="font-regular mb-2 text-sm opacity-75">Collections</h2>
				<ul>
					{categories.map((category) => (
						<li className="cursor-pointer text-lg hover:underline" key={category}>
							{category}
						</li>
					))}
				</ul>
			</section>

			{/* Items Column (4/5) */}
			<section className="col-span-3">
				{/* Product grid or list */}
				<ItemsGrid isHomePage={false} />
			</section>
		</div>
	);
}
