import { DevelopedBy } from "@/shared/ui/links/DevelopedBy";
import { Metadata } from "next";
import React from "react";

export const dynamic = "force-static";

export const metadata: Metadata = {
	title: "Гарантии Магазина | RTU MIREA Store",
	description: "Информация о гарантиях и целях проекта интернет-магазина RTU MIREA.",
};
export default function Guarantee() {
	return (
		<div className="mx-auto max-w-4xl px-4 py-16 text-lg leading-relaxed md:text-xl">
			<h1 className="mb-6 text-3xl font-bold text-secondary-900">Гарантии</h1>
			<p className="mb-4">
				Этот интернет-магазин разработан мной в рамках индивидуального проекта для <strong>РТУ МИРЭА</strong>.
				Его цель — продемонстрировать мои навыки в разработке современных веб-приложений, включая работу с
				каталогами товаров, интерфейсами, а также взаимодействие с внешними API.
			</p>
			<p className="mb-4">
				Так как проект учебный и не является коммерческим, представленные товары не подлежат продаже, а все
				данные — тестовые.
			</p>
			<p className="mb-4">
				Тем не менее, я постарался максимально приблизить пользовательский опыт к реальному интернет-магазину,
				включая анимации, фильтрацию, адаптивность и навигацию.
			</p>
			<p className="mb-4">В реальных условиях магазин мог бы гарантировать:</p>
			<ul className="mb-4 list-disc pl-6">
				<li>Качество и соответствие товара описанию;</li>
				<li>Гарантийное обслуживание и поддержку;</li>
				<li>Право на возврат и обмен товара;</li>
				<li>Безопасность пользовательских данных.</li>
			</ul>
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
