"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

/**Ссылки в header, с анимацией при наведении
 * @param link - передается в формате '/link'
 * @param title - содержиоме ссылки
 */
export const HeaderNavLink = ({ link, title }: { link: string; title: string }) => {
	const pathname = usePathname();
	const isActive = pathname === link;

	return (
		<Link
			href={link}
			className={clsx(
				"text-foreground/75",
				isActive && "font-bold underline",
				"transition-colors duration-300 hover:text-foreground",
			)}
			aria-current={isActive ? "page" : undefined}
		>
			{title}
		</Link>
	);
};
