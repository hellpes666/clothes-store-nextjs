import { FormElementProps, InformationFormProps, InputProps } from "@/shared/types/formElement";
import { Input } from "@heroui/input";
import clsx from "clsx";

export function FormUserInput({
	label,
	required,
	id,
	register,
	name,
	errors,
	type,
	autocomplete,
	areaClassName,
	inputClassName,
	defaultValue
}: InputProps & FormElementProps & InformationFormProps) {
	return (
		<div className={clsx(areaClassName, "flex w-full flex-col flex-wrap gap-1 md:flex-nowrap")}>
			<Input
				{...register(name, { required })}
				id={id}
				type={type}
				label={label}
				autoComplete={autocomplete}
				className={clsx(inputClassName, "capitalize")}
				size="lg"
				isInvalid={!!errors[name]}
				errorMessage={errors[name] && errors[name].message}
				isRequired={required}
				labelPlacement={"outside"}
				color="secondary"
				defaultValue={defaultValue}
			/>
		</div>
	);
}
