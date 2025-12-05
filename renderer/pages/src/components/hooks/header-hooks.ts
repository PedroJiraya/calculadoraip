import React, { useState } from 'react'
import { calcGps1, calcGps2, calcMems, calcOptalert, calcPtx, calcRadio } from '../../../../utils/functions';

export const useHeader = () => {
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
            calcRadio(tag).tagR1 * 256 - calcRadio(tag).tagR2
          )}`,
        }));
      }
      if (tag && verifyTagForMems) {
        setIpList((prev) => ({
          ...prev,
          ipMems: `171.13.${calcMems(tag).tagR1}.${Math.abs(
            calcMems(tag).tagR1 * 256 - calcMems(tag).tagR2
          )}`,
        }));
        setIpList((prev) => ({
          ...prev,
          ipOptalert: `171.13.${calcOptalert(tag).tagR1}.${Math.abs(
            calcOptalert(tag).tagR1 * 256 - calcOptalert(tag).tagR2
          )}`,
        }));
      }
      if (tag && verifyTagForGps) {
        setIpList((prev) => ({
          ...prev,
          ipGps1: `171.13.${calcGps1(tag).tagR1}.${Math.abs(
            calcGps1(tag).tagR1 * 256 - calcGps1(tag).tagR2
          )}`,
        }));
        setIpList((prev) => ({
          ...prev,
          ipGps2: `171.13.${calcGps2(tag).tagR1}.${Math.abs(
            calcGps2(tag).tagR1 * 256 - calcGps2(tag).tagR2
          )}`,
        }));
      }
    }
  }; 

  return {tagType, tag, setTag, setTagType, handleCalc, handleClear, ipList}
}
