import { ComponentProps } from "react";
import { Input, InputWrapper } from "./input";
import { Label } from "./label";

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
      <InputWrapper visible>
        <Label>
          PTX
          <Input value={ipList.ipPtx} />
        </Label>
      </InputWrapper>

      <InputWrapper visible>
        <Label>
          Rádio
          <Input value={ipList.ipRdio} />
        </Label>
      </InputWrapper>

      <InputWrapper visible={verifyTagForMems}>
        <Label>
          Mems
          <Input value={ipList.ipMems} />
        </Label>
      </InputWrapper>

      <InputWrapper visible={tagType === "cm"}>
        <Label>
          Optalert
          <Input value={ipList.ipOptalert} />
        </Label>
      </InputWrapper>

      <InputWrapper visible={verifyTagForGps}>
        <Label>
          GPS 1
          <Input value={ipList.ipGps1} />
        </Label>
      </InputWrapper>

      <InputWrapper visible={verifyTagForGps}>
        <Label>
          GPS 2
          <Input value={ipList.ipGps2} />
        </Label>
      </InputWrapper>
    </div>
  );
};

export default Output;
