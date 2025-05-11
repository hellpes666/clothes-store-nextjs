import { FormElementProps, InformationFormProps } from "@/shared/types/formElement";
import { InputOtp } from "@heroui/react";

export const FormUserInputOTP = ({
	required,
	id,
	label,
	register,
	name,
	errors,
}: FormElementProps & InformationFormProps) => {
	return (
		<InputOtp
			{...register(name, { required })}
			id={id}
			label={label}
			size="lg"
			isInvalid={!!errors[name]}
			errorMessage={errors[name] && errors[name].message}
			isRequired={required}
			color="secondary"
			length={6}
		/>
	);
};
