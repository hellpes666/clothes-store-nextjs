import React, { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<section className="flex h-full w-full items-center justify-center">
			<div className="min-w-60 rounded bg-content1 p-5">{children}</div>
		</section>
	);
}
