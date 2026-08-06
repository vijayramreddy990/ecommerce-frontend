import type { InputHTMLAttributes, ReactNode } from "react";

export type InputSize = "small" | "medium" | "large";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  shadow?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  inputSize?: InputSize;
}
