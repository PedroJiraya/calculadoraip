import { ComponentProps } from "react";
type Props = ComponentProps<"input">;

export const Input = ({ ...props }: Props) => {
  return <input className="text-gray-950 text-center rounded-md" {...props} />;
};

type InputWrapperProps = ComponentProps<"div"> & {
  visible: boolean;
};

export const InputWrapper = ({ visible, ...props }: InputWrapperProps) => {
  if (!visible) return null;
  return <div className="flex flex-col justify-center max-w-lg" {...props} />;
};
