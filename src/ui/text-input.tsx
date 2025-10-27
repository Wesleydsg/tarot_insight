import { type ComponentProps, ReactElement } from "react";

export default function TextInput({
  ...props
}: ComponentProps<"input">): ReactElement {
  return (
    <input
      className="border-2 m-1 outline-3 outline-accent outline-offset-0 py-1 px-2 border-gray-700 rounded text-dark"
      type="text"
      {...props}
    />
  );
}
