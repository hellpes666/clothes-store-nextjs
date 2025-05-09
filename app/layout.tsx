import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Outfit } from "next/font/google";
import Providers from "./(providers)/HeroUiProviders";
import { Header } from "@/components/Header/Header";
import { CartModal } from "@/components/Cart/CartModal";
import { QueryProvider } from "./(providers)/QueryProviders";

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
			<body className={clsx("bg-background font-sans antialiased dark", outfitFont.className)}>
				<QueryProvider>
					<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
						<div className="relative flex min-h-screen flex-col px-2 py-2 md:px-4 md:py-4 xl:px-6 xl:py-6">
							<Header />
							<CartModal />
							<main className="flex-grow px-36 pb-24 pt-16">{children}</main>
						</div>
					</Providers>
				</QueryProvider>
			</body>
		</html>
	);
}
