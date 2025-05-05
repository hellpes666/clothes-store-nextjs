import React from "react";
import { HeaderNavLink } from "./HeaderNavLink";

export const HeaderLinksGroup = () => {
	return (
		<nav className="flex items-center gap-3 text-lg">
			<HeaderNavLink link="/products" title="all" />
			<HeaderNavLink link="/about-us" title="about us" />
			<HeaderNavLink link="/guarantee" title="guarantee" />
		</nav>
	);
};
