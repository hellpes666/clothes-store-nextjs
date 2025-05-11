import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
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
}

export const useCheckoutsInformation = create<ICheckoutsInformation>()(
	persist(
		(set) => ({
			clientInformationFirstStep: {
				email: "",
				country: "Russia",
				firstName: "",
				lastName: "",
				postalCode: "",
			},
			saveClientInformation: (data) => {
				set({ clientInformationFirstStep: data });
			},
		}),
		{
			name: "checkouts-storage",
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);
