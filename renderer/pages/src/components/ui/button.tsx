import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button"> & {
	variant: "red" | "blue";
};

export const Button = ({ variant, ...props }: ButtonProps) => {
	const variantButton = {
		red: "bg-[#f00]",
		blue: "bg-blue-500",
	};
	const color = variantButton[variant];
	return <button className={`${color} p-1 rounded-md w-full`} {...props} />;
};
