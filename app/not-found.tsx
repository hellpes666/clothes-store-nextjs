import Link from "next/link";

export default async function NotFound() {
	return (
		<div className="flex h-full items-center justify-center">
			<div className="max-w-4xl rounded bg-default-100 p-16 text-lg leading-relaxed md:text-xl">
				<h2 className="text-3xl font-bold">Page Not Found</h2>
				<p className="mb-4">Could not find requested resource</p>
				<Link href="/" className="text-primary underline">
					Return Home
				</Link>
			</div>
		</div>
	);
}
