import React from "react";
type Props = {
	label: string;
	value: string;
};

const Input = ({ label, value, ...props }) => {
	return (
		<div className="flex justify-center max-w-lg">
			<label className="flex flex-col items-start">
				{label}
				<input
					type="text"
					value={value}
					className="text-gray-950 text-center rounded-md"
					{...props}
				/>
			</label>
		</div>
	);
};

export default Input;
