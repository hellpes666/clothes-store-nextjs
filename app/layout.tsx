import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Outfit } from "next/font/google";

import { Providers } from "./providers";
import { Header } from "@/components/Header/Header";

const outfitFont = Outfit({
	subsets: ["latin"],
	display: "auto",
});

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html suppressHydrationWarning lang="en">
			<head />
			<body className={clsx("min-h-screen bg-background font-sans antialiased dark", outfitFont.className)}>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex h-screen flex-col px-2 py-2 md:px-4 md:py-4 xl:px-6 xl:py-6">
						<Header />
						<main className="mx-auto flex-grow pb-24 pt-16">{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
