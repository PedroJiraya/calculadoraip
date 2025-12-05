import { ComponentProps } from "react";
import Input from "./input";

type OutputProps = ComponentProps<"div"> & {
	ipList: {
		ipPtx: string;
		ipRdio: string;
		ipMems: string;
		ipOptalert: string;
		ipGps1: string;
		ipGps2: string;
	};
	tagType: string;
};

const Output = ({ ipList, tagType, ...props }: OutputProps) => {
	const verifyTagForGps =
		tagType === "tt" ||
		tagType === "pf" ||
		tagType === "cr" ||
		tagType === "es";
	const verifyTagForMems = tagType == "cm" || tagType == "cr";

	return (
		<div {...props}>
			<Input label={"PTX"} value={ipList.ipPtx} />
			<Input label={"Rádio"} value={ipList.ipRdio} />
			{verifyTagForMems && <Input label={"MEMS"} value={ipList.ipMems} />}
			{tagType === "cm" && (
				<Input label={"Optalert"} value={ipList.ipOptalert} />
			)}
			{verifyTagForGps && <Input label={"GPS 1"} value={ipList.ipGps1} />}
			{verifyTagForGps && <Input label={"GPS 2"} value={ipList.ipGps2} />}
		</div>
	);
};

export default Output;
