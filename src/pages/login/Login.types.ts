import type { ReactNode } from "react";

export type FieldConfig = {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  required?: boolean;
  regex?: RegExp;
  errorMessage?: string;
};
