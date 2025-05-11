import { Header } from "@/components/Header/store/Header";
import { CartModal } from "@/components/Cart/CartModal";

export default function StoreLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex min-h-screen flex-col px-2 py-2 md:px-4 md:py-4 xl:px-6 xl:py-6">
			<Header />
			<CartModal />

			<main className="h-full flex-grow px-2 pb-16 pt-8 sm:px-6 md:px-12 md:pb-20 md:pt-12 lg:px-24 xl:px-36 xl:pb-24 xl:pt-16">
				{children}
			</main>
		</div>
	);
}
