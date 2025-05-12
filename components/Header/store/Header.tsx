import Link from "next/link";
import { HeaderLinksGroup } from "./HeaderLinksGroup";
import { Cart } from "./Cart";

export const Header = () => {
	return (
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
	);
};
