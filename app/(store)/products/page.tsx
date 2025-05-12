import { ItemsGrid } from "@/components/ProductGrid/ItemsGrid";
import { fetchInstance } from "@/shared/api/fetchInstance";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Каталог товаров | RTU MIREA Store",
	description:
		"Просматривайте все доступные категории и товары в учебном онлайн-магазине RTU MIREA. Фильтрация и адаптивный интерфейс.",
};

export default async function Products() {
	const categories = (await fetchInstance<{ categories: string[] }>("GET", "/products/category")).categories;

	return (
		<div className="grid w-full grid-cols-2 gap-12 py-6 lg:grid-cols-4">
			{/* Filter Column (1/5) */}
			<section className="hidden lg:col-span-1 lg:block">
				<h2 className="font-regular mb-2 text-sm opacity-75 2xl:text-2xl">Collections</h2>
				<ul>
					{categories.map((category) => (
						<li className="cursor-pointer text-lg hover:underline 2xl:text-2xl" key={category}>
							{category}
						</li>
					))}
				</ul>
			</section>

			{/* Items Column (4/5) */}
			<section className="col-span-3 w-full">
				{/* Product grid or list */}
				<ItemsGrid isHomePage={false} />
			</section>
		</div>
	);
}
