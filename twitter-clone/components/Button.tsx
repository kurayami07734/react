import React from "react";
interface ButtonProps {
  label: string;
  secondary: boolean;
  fullWidth: boolean;
  large: boolean;
  onClick: () => void;
  disabled?: boolean;
  outline?: boolean;
}
export default function Button({
  label,
  secondary,
  fullWidth,
  large,
  onClick,
  disabled,
  outline,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`rounded-full font-semibold hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 ${
        fullWidth ? "w-full" : "w-fit"
      } ${
        secondary
          ? "border-black bg-white text-black"
          : "border-sky-500 bg-sky-500 text-white"
      } ${large ? "px-5 py-3 text-xl" : "text-md px-4 py-2"} ${
        outline ? "border-white bg-transparent text-white" : ""
      }`}
    >
      {label}
    </button>
  );
}
