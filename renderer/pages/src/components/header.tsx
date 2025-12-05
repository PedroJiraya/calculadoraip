import React, { useState } from "react";
import Input from "./ui/input";
import Button from "./ui/button";
import { calcGps1, calcGps2, calcMems, calcOptalert, calcPtx, calcRadio } from "../../../utils/functions";

const Header = () => {
  const [tagType, setTagType] = useState();
  const [tag, setTag] = useState<number>(undefined);
  const [ipPtx, setIpPtx] = useState<string>("0.0.0.0");
  const [ipRdio, setIpRdio] = useState<string>("0.0.0.0");
  const [ipMems, setIpMems] = useState<string>("0.0.0.0");
  const [ipOptalert, setIpOptalert] = useState<string>("0.0.0.0");
  const [ipGps1, setIpGps1] = useState<string>("0.0.0.0");
  const [ipGps2, setIpGps2] = useState<string>("0.0.0.0");

  const verifyTagForGps =
    tagType === "tt" ||
    tagType === "pf" ||
    tagType === "cr" ||
    tagType === "es";
  const verifyTagForMems = tagType == "cm" || tagType == "cr";

  const handleClick2 = () => {
    setIpPtx("0.0.0.0");
    setIpRdio("0.0.0.0");
    setIpMems("0.0.0.0");
    setIpOptalert("0.0.0.0");
    setIpGps1("0.0.0.0");
    setIpGps2("0.0.0.0");
    setTag(0);
  };
  
  const handleClick1 = () => {
    if (tagType) {
      if (tag) {
            setIpPtx(
            `171.13.${calcPtx(tag)}.${Math.abs(calcPtx(tag) * 256 - tag)}`
            );
            setIpRdio(
            `171.13.${calcRadio(tag).tagR1}.${Math.abs(
                calcRadio(tag).tagR1 * 256 - calcRadio(tag).tagR2
            )}`
            )
        }if (tag && verifyTagForMems) {
          setIpMems(
            `171.13.${calcMems(tag).tagR1}.${Math.abs(
              calcMems(tag).tagR1 * 256 - calcMems(tag).tagR2
            )}`
          );
          setIpOptalert(
            `171.13.${calcOptalert(tag).tagR1}.${Math.abs(
              calcOptalert(tag).tagR1 * 256 - calcOptalert(tag).tagR2
            )}`
          );
        }if(tag && verifyTagForGps){
            setIpGps1(`171.13.${calcGps1(tag).tagR1}.${Math.abs(
              calcGps1(tag).tagR1 * 256 - calcGps1(tag).tagR2
            )}`)
             setIpGps2(`171.13.${calcGps2(tag).tagR1}.${Math.abs(
              calcGps2(tag).tagR1 * 256 - calcGps2(tag).tagR2
            )}`)
        }
      

    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Calculadora de IPS - CKS</h1>
      <Button
        onClick1={handleClick1}
        onClick2={handleClick2}
        value={tag === 0 ? "" : tag}
        setValue={setTag}
        valueSelect={tagType}
        setValueSelect={setTagType}
      />
      <Input label={"PTX"} value={ipPtx} />
      <Input label={"Rádio"} value={ipRdio} />
      {verifyTagForMems && <Input label={"MEMS"} value={ipMems} />}
      {tagType === "cm" && <Input label={"Optalert"} value={ipOptalert} />}
      {verifyTagForGps && <Input label={"GPS 1"} value={ipGps1} />}
      {verifyTagForGps && <Input label={"GPS 2"} value={ipGps2} />}
    </div>
  );
};

export default Header;
