import { UseFormRegister } from "react-hook-form";
import { UserShippingInformationFormData } from "../schemas/UserShippingInformationSchema";

/**Задаёт стандартный набор пропсов для UI элемента в форме */
export type FormElementProps = {
	readonly required: boolean;
	readonly id: string;
	readonly label: string
};

/**Отдельный тип под каждую форму задаётся для строгой типизации*/
export type InformationFormProps = {
	readonly register: UseFormRegister<UserShippingInformationFormData>;
	readonly name: keyof UserShippingInformationFormData;
	readonly errors: Partial<Record<keyof UserShippingInformationFormData, { message?: string }>>;
};

export type InputProps = {
	readonly type: "password" | "text";
	readonly autocomplete: "on" | "off";
	readonly areaClassName?: string;
	readonly inputClassName?: string;
};

export type SelectProps = {
	readonly defaultSelectedKeys: [string];
	readonly options: readonly { readonly key: string; readonly label: string }[];
};
