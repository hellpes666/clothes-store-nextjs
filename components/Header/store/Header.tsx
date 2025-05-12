import Link from "next/link";
import { HeaderLinksGroup } from "./HeaderLinksGroup";
import { Cart } from "./Cart";
import { Menu } from "lucide-react";

export const Header = () => {
	return (
		<>
			<header className="flex-items group hidden justify-between md:flex md:py-2">
				<div className="flex items-center gap-3">
					<Link
						href={"/"}
						className="ransition-colors mr-3 rounded bg-primary p-3 text-xl font-medium uppercase text-primary-foreground duration-500 group-hover:text-white"
					>
						hell store
					</Link>

					<HeaderLinksGroup />
				</div>

				<Cart />
			</header>

			<header className="sticky top-0 z-50 flex w-full items-center justify-between rounded bg-content3 shadow md:hidden">
				<div className="p-2">
					<Link
						href="/"
						className="flex justify-start rounded bg-content4 px-3 py-1 text-lg text-warning-500"
					>
						H
					</Link>
				</div>
				{/*TODO LINK SELECT  */}
				<nav className="flex justify-end p-4">
					<Menu />
				</nav>
			</header>
		</>
	);
};
