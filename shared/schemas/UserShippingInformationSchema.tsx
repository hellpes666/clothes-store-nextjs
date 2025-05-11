import { z } from "zod";

const availableCountries = ["Russia", "Belarus", "Kazakhstan", "China"] as const;
export const availableCountriesForSelect = [
	{ key: "russia", label: "Russia" },
	{ key: "belarus", label: "Belarus" },
	{ key: "kazakhstan", label: "Kazakhstan" },
	{ key: "china", label: "China" },
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

	address: z
		.string({ required_error: "Address is required" })
		.min(5, { message: "Address must be at least 5 characters long" }),

	apartmentOptional: z.string().optional(),

	city: z
		.string({ required_error: "City is required" })
		.min(2, { message: "City must be at least 2 characters long" }),

	zipCode: z.string({ required_error: "ZIP code is required" }).regex(/^\d{6}$/, {
		message: "ZIP code must be 6 digits",
	}),
});

export type UserShippingInformationFormData = z.infer<typeof userShippingInformationSchema>;
