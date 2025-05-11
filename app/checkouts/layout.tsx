export default function CheckoutsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="h-screen w-screen overflow-hidden bg-default-100 px-2 sm:px-8 md:px-20 lg:px-40 xl:px-[22vw]">
			{children}
		</div>
	);
}
