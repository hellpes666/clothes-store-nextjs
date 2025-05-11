"use client";

import { Breadcrumbs, BreadcrumbItem } from "@heroui/react";

//TODO обозначить активное поле
export const InfoHeader = () => {
	return (
		<Breadcrumbs className="w-full text-primary-100">
			<BreadcrumbItem isCurrent={true}>Information</BreadcrumbItem>
			<BreadcrumbItem isCurrent={false}>Shipping</BreadcrumbItem>
			<BreadcrumbItem isCurrent={false}>Payment</BreadcrumbItem>
		</Breadcrumbs>
	);
};
