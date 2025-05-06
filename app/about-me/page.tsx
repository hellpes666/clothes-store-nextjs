import { DevelopedBy } from "@/shared/ui/links/DevelopedBy";
import React from "react";

export default function AboutMe() {
	return (
		<div className="mx-auto max-w-4xl px-4 py-16 text-lg leading-relaxed md:text-xl">
			<h1 className="mb-6 text-3xl font-bold text-secondary-900">О магазине</h1>
			<p className="mb-4">
				Добро пожаловать в учебный онлайн-магазин!
				<br />
				Этот проект был разработан в рамках учебной деятельности в{" "}
				<strong>Российском технологическом университете — МИРЭА</strong>. Цель проекта — продемонстрировать
				применение современных веб-технологий для создания полнофункционального интернет-магазина.
			</p>
			<p className="mb-4">
				Я постарались реализовать все ключевые возможности: просмотр каталога, детальные страницы товаров,
				адаптивный интерфейс, а также приятный пользовательский опыт. Интерфейс разработан с использованием{" "}
				<i>NextJS</i>, а данные получаются с помощью публичного API.
			</p>
			<p className="mb-4">
				Проект не является коммерческим и создан исключительно в образовательных целях для демонстрации навыков
				разработки фронтенда и взаимодействия с API.
			</p>
			<p className="mb-4 font-semibold text-secondary-700">Спасибо за внимание!</p>
			<div className="flex justify-end">
				<DevelopedBy />
			</div>
		</div>
	);
}
