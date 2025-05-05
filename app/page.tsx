import { DevelopedBy } from "@/shared/ui/links/DevelopedBy";

export default function Home() {
	return (
		<section className="flex flex-col items-center justify-center px-2 text-3xl md:px-4 md:text-5xl xl:px-6 xl:text-6xl">
			There is store for{" "}
			<strong className="mb-5 bg-gradient-to-r from-[#cfff04] to-[#ff033e] bg-clip-text text-transparent">
				RTU MIREA
			</strong>
			<DevelopedBy />
		</section>
	);
}
