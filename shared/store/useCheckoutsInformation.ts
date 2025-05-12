import { create } from "zustand";
import { AvailableCountries } from "../schemas/UserShippingInformationSchema";

type ClientInformation = {
	email: string;
	country: AvailableCountries;
	firstName: string;
	lastName: string;
	postalCode: string;
};

interface ICheckoutsInformation {
	clientInformationFirstStep: ClientInformation;
	saveClientInformation: (data: ClientInformation) => void;
	isLoading: boolean;
}

export const useCheckoutsInformation = create<ICheckoutsInformation>()((set) => ({
	isLoading: false,
	clientInformationFirstStep: {
		email: "",
		country: "Russia",
		firstName: "",
		lastName: "",
		postalCode: "",
	},
	saveClientInformation: (data) => {
		set({ isLoading: true });
		set({ clientInformationFirstStep: data });

		const currentUrl = new URL(window.location.href);

		Object.entries(data).forEach(([key, value]) => {
			currentUrl.searchParams.set(key, value);
		});

		window.history.replaceState({}, "", currentUrl.toString());

		set({ isLoading: false });
	},
}));
