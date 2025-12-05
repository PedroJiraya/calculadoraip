import { ComponentProps } from "react";

type SelectProps = ComponentProps<"select">;

export const Select = ({ ...props }: SelectProps) => {
	return (
		<div className="max-w-lg flex justify-center flex-col mt-4">
			<select className="text-gray-950 rounded-md mb-2 text-center" {...props}>
				<option value="">--Selecione--</option>
				<option value="cm">Caminhão</option>
				<option value="tt">Trator</option>
				<option value="pf">Perfuratriz</option>
				<option value="es">Escavadeira</option>
				<option value="cr">Carregadeira</option>
			</select>
		</div>
	);
};
