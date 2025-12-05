import React, { useState } from "react";
import Input from "./ui/input";
import { Button } from "./ui/button";
import {
	calcGps1,
	calcGps2,
	calcMems,
	calcOptalert,
	calcPtx,
	calcRadio,
} from "../../../utils/functions";
import { Select } from "./ui/select";
import Output from "./ui/output";

const Header = () => {
	const [tagType, setTagType] = useState<string>(null);
	const [tag, setTag] = useState<number>(undefined);
	const [ipList, setIpList] = useState({
		ipPtx: "0.0.0.0",
		ipRdio: "0.0.0.0",
		ipMems: "0.0.0.0",
		ipOptalert: "0.0.0.0",
		ipGps1: "0.0.0.0",
		ipGps2: "0.0.0.0",
	});

	const verifyTagForGps =
		tagType === "tt" ||
		tagType === "pf" ||
		tagType === "cr" ||
		tagType === "es";
	const verifyTagForMems = tagType == "cm" || tagType == "cr";

	const handleClear = () => {
		setIpList({
			ipPtx: "0.0.0.0",
			ipRdio: "0.0.0.0",
			ipMems: "0.0.0.0",
			ipOptalert: "0.0.0.0",
			ipGps1: "0.0.0.0",
			ipGps2: "0.0.0.0",
		});
		setTag(0);
	};

	const handleCalc = () => {
		if (tagType) {
			if (tag) {
				setIpList((prev) => ({
					...prev,
					ipPtx: `171.13.${calcPtx(tag)}.${Math.abs(calcPtx(tag) * 256 - tag)}`,
				}));

				setIpList((prev) => ({
					...prev,
					ipRdio: `171.13.${calcRadio(tag).tagR1}.${Math.abs(
						calcRadio(tag).tagR1 * 256 - calcRadio(tag).tagR2,
					)}`,
				}));
			}
			if (tag && verifyTagForMems) {
				setIpList((prev) => ({
					...prev,
					ipRdio: `171.13.${calcMems(tag).tagR1}.${Math.abs(
						calcMems(tag).tagR1 * 256 - calcMems(tag).tagR2,
					)}`,
				}));
				setIpList((prev) => ({
					...prev,
					ipOptalert: `171.13.${calcOptalert(tag).tagR1}.${Math.abs(
						calcOptalert(tag).tagR1 * 256 - calcOptalert(tag).tagR2,
					)}`,
				}));
			}
			if (tag && verifyTagForGps) {
				setIpList((prev) => ({
					...prev,
					ipGps1: `171.13.${calcGps1(tag).tagR1}.${Math.abs(
						calcGps1(tag).tagR1 * 256 - calcGps1(tag).tagR2,
					)}`,
				}));
				setIpList((prev) => ({
					...prev,
					ipGps2: `171.13.${calcGps2(tag).tagR1}.${Math.abs(
						calcGps2(tag).tagR1 * 256 - calcGps2(tag).tagR2,
					)}`,
				}));
			}
		}
	};

	return (
		<div className="flex flex-col items-center">
			<h1>Calculadora de IPS - CKS</h1>
			<div>
				<Select value={tagType} onChange={(e) => setTagType(e.target.value)} />
				<input
					value={tag === 0 ? "" : tag}
					onChange={(e) => setTag(parseInt(e.target.value))}
					type="number"
					className="rounded-md text-gray-950 text-center"
					placeholder="IP ex:1.1.1.1"
				/>
				<div className="flex justify-center gap-4 mt-4">
					<Button variant="blue" onClick={handleCalc}>
						Calcular
					</Button>
					<Button variant="red" onClick={handleClear}>
						Limpar
					</Button>
				</div>
			</div>
			<Output ipList={ipList} tagType={tagType} />
		</div>
	);
};

export default Header;
