import { cn } from "@/utils/cn";
import { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "danger"; // Add variant types
}

const Button = ({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  // Define styles based on the variant
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600",
    secondary: "bg-gray-500 hover:bg-gray-600",
    danger: "bg-red-500 hover:bg-red-600",
  };

  return (
    <button
      className={cn(
        "px-8 py-3 text-white rounded-md focus:scale-[1.04] transition duration-500 cursor-pointer",
        variantStyles[variant], // Apply variant styles
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
