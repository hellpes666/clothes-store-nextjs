import Link from "next/link";
import { HeaderLinksGroup } from "./HeaderLinksGroup";
import { Avatar } from "@heroui/avatar";
import { CartIcon } from "./CartIcon";

export const Header = () => {
	return (
		<header className="hidden md:flex flex-items justify-between md:py-2">
			<div className="flex items-center gap-3">
				<Link
					href={"/"}
					className="text-xl bg-primary p-3 rounded text-primary-foreground uppercase font-medium mr-3"
				>
					hell store
				</Link>

				<HeaderLinksGroup />
			</div>

			<div className="flex items-center gap-6">
				<CartIcon aria-label="cart" />
				<Avatar
					size="md"
					isBordered
					radius="sm"
					src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
					color="primary"
				/>
			</div>
		</header>
	);
};
