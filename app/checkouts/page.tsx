import { UserShippingInformationForm } from "@/components/Form/UserShippingInformationForm";
import { InfoHeader } from "@/components/Header/checkouts/InfoHeader";

export default async function CheckoutsPage() {
	return (
		<div className="flex h-full items-start justify-between">
			<section
				className="flex w-full flex-col items-start gap-5 py-2 pr-12 sm:py-4 md:py-8 lg:py-12"
				key={"form"}
			>
				<h1 className="rounded bg-content4 px-4 py-2 text-2xl text-warning-500">H</h1>
				<InfoHeader />
				<UserShippingInformationForm />
			</section>
			<div className="h-full w-0.5 bg-content4" />
			<section className="w-full py-2 pl-12 sm:py-4 md:py-8 lg:py-12"></section>
		</div>
	);
}
