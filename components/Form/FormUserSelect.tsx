"use client";

import { FormElementProps, InformationFormProps, SelectProps } from "@/shared/types/formElement";
import { Select, SelectItem } from "@heroui/react";

export const FormUserSelect = ({
	label,
	defaultSelectedKeys,
	options,
	required,
	id,
	register,
	name,
	errors,
}: SelectProps & FormElementProps & InformationFormProps) => {
	return (
		<Select
			{...register(name, { required })}
			id={id}
			label={label}
			className="w-full capitalize"
			size="lg"
			isInvalid={!!errors[name]}
			errorMessage={errors[name] && errors[name].message}
			isRequired={required}
			labelPlacement={"outside"}
			defaultSelectedKeys={defaultSelectedKeys}
			color="secondary"
		>
			{options.map((option) => (
				<SelectItem key={option.key.toLocaleLowerCase()}>{option.label}</SelectItem>
			))}
		</Select>
	);
};
