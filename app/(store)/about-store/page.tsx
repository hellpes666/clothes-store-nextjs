import { DevelopedBy } from "@/shared/ui/links/DevelopedBy";
import { Metadata } from "next";
import React from "react";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "О магазине | RTU MIREA Store",
	description:
		"Описание учебного онлайн-магазина, разработанного в рамках проекта в РТУ МИРЭА. Подробности о технологиях и целях.",
};

export default function AboutStore() {
	return (
		<div className="mx-auto max-w-4xl px-4 py-16 text-lg leading-relaxed md:text-xl">
			<h1 className="mb-6 text-3xl font-bold text-secondary-900 md:text-4xl">О магазине</h1>
			<p className="mb-4 md:text-xl xl:text-2xl">
				Добро пожаловать в учебный онлайн-магазин!
				<br />
				Этот проект был разработан в рамках учебной деятельности в{" "}
				<strong>Российском технологическом университете — МИРЭА</strong>. Цель проекта — продемонстрировать
				применение современных веб-технологий для создания полнофункционального интернет-магазина.
			</p>
			<p className="mb-4 md:text-xl xl:text-2xl">
				Я постарались реализовать все ключевые возможности: просмотр каталога, детальные страницы товаров,
				адаптивный интерфейс, а также приятный пользовательский опыт. Интерфейс разработан с использованием{" "}
				<i>NextJS</i>, а данные получаются с помощью публичного API.
			</p>
			<p className="mb-4 md:text-xl xl:text-2xl">
				Проект не является коммерческим и создан исключительно в образовательных целях для демонстрации навыков
				разработки фронтенда и взаимодействия с API.
			</p>
			<hr />
			<div className="mt-5 flex items-center justify-between">
				<p className="text-sm text-gray-500">
					Если вас заинтересовал технический аспект проекта — буду рад обсудить реализацию.
				</p>
				<DevelopedBy />
			</div>
		</div>
	);
}
