import React from "react";
import { HeaderNavLink } from "./HeaderNavLink";

const HEADER_NAV: { link: string; title: string }[] = [
	{ link: "/products", title: "Products" },
	{ link: "/about-me", title: "About Me" },
	{ link: "/guarantee", title: "Guarantee" },
];

export const HeaderLinksGroup = () => {
	return (
		<nav className="flex items-center gap-3 text-lg">
			{HEADER_NAV.map((navItem) => (
				<HeaderNavLink key={navItem.link} link={navItem.link} title={navItem.title} />
			))}
		</nav>
	);
};
