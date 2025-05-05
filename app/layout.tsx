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
			<body className={clsx(" dark min-h-screen bg-background font-sans antialiased", outfitFont.className)}>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen px-2 md:px-4 xl:px-6 py-2 md:py-4 xl:py-6">
						<Header />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
