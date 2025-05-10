"use client";

import { Button, Chip } from "@heroui/react";
import clsx from "clsx";
import React from "react";

export const CardInfoLabel = ({ title, price, id, cn }: { title: string; price: number; id: number; cn: string }) => {
	return (
		<Button
			className={clsx(
				cn,
				"max-w-[350px] !rounded-2xl px-2 py-0.5 opacity-75 transition-opacity duration-300 group-hover:opacity-100",
			)}
		>
			<span className="block w-full max-w-[120px] truncate text-start">{title}</span>{" "}
			<Chip color="warning" variant="faded">
				$ {price} USD
			</Chip>
		</Button>
	);
};
