import Link from "next/link";
import { Avatar } from "@heroui/avatar";
import { ShoppingBasket } from "lucide-react";
import { HeaderLinksGroup } from "./HeaderLinksGroup";

export const Header = () =>  {
	return (
		<header className="flex-items hidden justify-between md:flex md:py-2">
			<div className="flex items-center gap-3">
				<Link
					href={"/"}
					className="mr-3 rounded bg-primary p-3 text-xl font-medium uppercase text-primary-foreground"
				>
					hell store
				</Link>

				<HeaderLinksGroup />
			</div>

			<div className="flex items-center gap-6">
				<ShoppingBasket aria-label="cart" />
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
