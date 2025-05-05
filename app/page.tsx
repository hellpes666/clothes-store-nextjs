import { fetchInstance } from "@/lib/fetchInstance";

export default function Home({ products, error }) {
	if (error) {
		return <div>{error}</div>;
	}

	return (
		<section className="px-2 md:px-4 xl:px-6 grid grid-cols-2 grid-rows-2">
			{Array.isArray(products) && products.map((product) => <div key={product.id}>{product.title}</div>)}
		</section>
	);
}

export async function getServerSideProps() {
	try {
		const products = await fetchInstance("GET", "/products");
		return { props: { products } };
	} catch (error) {
		console.error("Ошибка при загрузке продуктов:", error);
		return { props: { products: [], error: "Ошибка при загрузке продуктов" } };
	}
}
