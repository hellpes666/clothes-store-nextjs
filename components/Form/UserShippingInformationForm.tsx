"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
	availableCountriesForSelect,
	UserShippingInformationFormData,
	userShippingInformationSchema,
} from "@/shared/schemas/UserShippingInformationSchema";
import { FormUserInput } from "./FormUserInput";
import { FormElementProps, InformationFormProps, InputProps, SelectProps } from "@/shared/types/formElement";
import { FormUserSelect } from "./FormUserSelect";
import { FormUserInputOTP } from "./FormUserInputOTP";
import { Button, Spinner } from "@heroui/react";

export const UserShippingInformationForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isSubmitting, isDirty, isValid },
	} = useForm<UserShippingInformationFormData>({ resolver: zodResolver(userShippingInformationSchema) });

	async function onSubmit(data: UserShippingInformationFormData) {
		console.log(isSubmitting);
		console.log(data);
		//TODO сделать сохранение в стор

		await new Promise<void>((resolve) => {
			setTimeout(() => {
				resolve();
			}, 2000);
		});
	}

	const emailInputProps: InputProps & FormElementProps & InformationFormProps = {
		label: "Email",
		required: true,
		id: "email",
		register,
		name: "email",
		type: "text",
		autocomplete: "on",
		errors,
		areaClassName: "w-full",
		inputClassName: "w-full",
	};

	const firstNameInputProps: InputProps & FormElementProps & InformationFormProps = {
		label: "First name",
		required: true,
		id: "firstName",
		register,
		name: "firstName",
		type: "text",
		autocomplete: "on",
		errors,
		areaClassName: "w-full",
		inputClassName: "w-full",
	};

	const lastNameInputProps: InputProps & FormElementProps & InformationFormProps = {
		label: "Last name",

		required: true,
		id: "lastName",
		register,
		name: "lastName",
		type: "text",
		autocomplete: "on",
		errors,
		areaClassName: "w-full",
		inputClassName: "w-full",
	};

	const countrySelectProps: SelectProps & FormElementProps & InformationFormProps = {
		label: "Country/Region",
		required: true,
		id: "country",
		register,
		name: "country",
		errors,
		defaultSelectedKeys: ["russia"],
		options: availableCountriesForSelect,
	};

	return (
		<form className="mt-3 flex w-full flex-col gap-16" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col gap-3">
				<h2 className="text-2xl font-bold">Contacts</h2>
				<FormUserInput {...emailInputProps} />
			</div>
			<div className="flex flex-col gap-3">
				<h2 className="mb-5 text-2xl font-bold">Shipping address</h2>
				<FormUserSelect {...countrySelectProps} />
				<div className="flex items-center gap-10">
					<FormUserInput {...firstNameInputProps} />
					<FormUserInput {...lastNameInputProps} />
				</div>
			</div>
			<div className="flex flex-col gap-3">
				<h2 className="text-2xl font-bold">Postal code</h2>
				<FormUserInputOTP />
			</div>

			<div className="flex items-end justify-end">
				{isSubmitting ? (
					<Spinner />
				) : (
					<Button type="submit" className="max-w-[100px]" size="lg">
						Next Step
					</Button>
				)}
			</div>
		</form>
	);
};
