import { AnimateTemplate } from "@/shared/ui/animate/AnimateTemplate";
import { DevelopedBy } from "@/shared/ui/links/DevelopedBy";
import { animationOnAxis } from "@/shared/ui/animate/lib/animationOnAxis";
import { PreviewProductGrid } from "@/components/ProductGrid/PreviewProducts";

export default async function Home() {
	return (
		<div className="flex w-full flex-col items-center justify-center gap-24 px-2 text-3xl md:px-4 md:text-5xl xl:px-6 xl:text-6xl">
			<h1 className="flex w-full flex-col items-start justify-start gap-1">
				<AnimateTemplate options={animationOnAxis(0.2, -10)}>
					There is store for
					<br />
					<strong className="mb-5 bg-gradient-to-r from-[#cfff04] to-[#ff033e] bg-clip-text text-transparent">
						RTU MIREA
					</strong>
				</AnimateTemplate>
				<AnimateTemplate options={animationOnAxis(0.6, 0, 10)}>
					<DevelopedBy />
				</AnimateTemplate>
			</h1>

			<section className="flex w-full flex-col gap-5">
				<PreviewProductGrid />
			</section>
		</div>
	);
}
