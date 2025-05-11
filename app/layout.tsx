import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Outfit } from "next/font/google";
import Providers from "./(providers)/HeroUiProviders";
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
					<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>{children}</Providers>
				</QueryProvider>
			</body>
		</html>
	);
}
