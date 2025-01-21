import { FC } from "react";

interface SpinnerProps {
  size?: "tiny" | "small" | "medium" | "large";
  label?: string;
}

const sizeClasses = {
  tiny: "w-4 h-4",
  small: "w-6 h-6",
  medium: "w-8 h-8",
  large: "w-12 h-12",
};

export const Spinner: FC<SpinnerProps> = ({ size = "medium", label }) => {
  return (
    <div className="w-full flex items-center justify-center gap-2">
      <div
        className={`${sizeClasses[size]} border-2 border-background/20 border-t-background rounded-full animate-spin`}
        role="status"
      />
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
};
