"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

export const ProductPageHeader = ({ title }: { title: string }) => {
	return (
		<Breadcrumbs className="h-10 w-full text-primary-100">
			<BreadcrumbItem href="/">Home</BreadcrumbItem>
			<BreadcrumbItem href="/products">Products</BreadcrumbItem>
			<BreadcrumbItem>{title}</BreadcrumbItem>
		</Breadcrumbs>
	);
};
