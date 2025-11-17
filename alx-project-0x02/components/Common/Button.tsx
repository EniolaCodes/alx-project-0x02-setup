import { FC } from "react";
import { ButtonProps } from "@/interfaces";

const Button: FC<ButtonProps> = ({
  label,
  size = "medium",
  shape = "rounded-md",
  onClick,
  className = "",
}) => {
  // Size styles
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-5 py-3 text-lg",
  }[size];

  // Shape styles
  const shapeClasses = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  }[shape];

  return (
    <button
      onClick={onClick}
      className={`
        bg-blue-600 text-white hover:bg-blue-700 transition
        ${sizeClasses} ${shapeClasses} ${className}
      `}
    >
      {label}
    </button>
  );
};

export default Button;
