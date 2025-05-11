import { z } from "zod";

const availableCountries = ["Russia", "Belarus", "Kazakhstan", "China"] as const;

export type AvailableCountries = (typeof availableCountries)[number];

export const availableCountriesForSelect = [
	{ key: "Russia", label: "Russia" },
	{ key: "Belarus", label: "Belarus" },
	{ key: "Kazakhstan", label: "Kazakhstan" },
	{ key: "China", label: "China" },
] as const;

export const userShippingInformationSchema = z.object({
	email: z.string({ required_error: "Email is required" }).email({ message: "Please enter a valid email address" }),

	country: z.enum(availableCountries, {
		errorMap: () => ({
			message: "Please select a country from the list",
		}),
	}),

	firstName: z
		.string({ required_error: "First name is required" })
		.min(2, { message: "First name must be at least 2 characters long" }),

	lastName: z
		.string({ required_error: "Last name is required" })
		.min(2, { message: "Last name must be at least 2 characters long" }),

	// address: z
	// 	.string({ required_error: "Address is required" })
	// 	.min(5, { message: "Address must be at least 5 characters long" }),

	// apartmentOptional: z.string().optional(),

	// city: z
	// 	.string({ required_error: "City is required" })
	// 	.min(2, { message: "City must be at least 2 characters long" }),

	postalCode: z.string({ required_error: "Postal code is required" }).regex(/^\d{6}$/, {
		message: "Postal code must be 6 digits",
	}),
});

export type UserShippingInformationFormData = z.infer<typeof userShippingInformationSchema>;
