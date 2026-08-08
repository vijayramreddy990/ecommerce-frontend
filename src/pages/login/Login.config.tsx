import { FiMail, FiLock } from "react-icons/fi";
import type { FieldConfig } from "./Login.types";

export const LOGIN_FIELDS: FieldConfig[] = [
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
    leftIcon: <FiMail />,
    fullWidth: true,
    required: true,
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    leftIcon: <FiLock />,
    fullWidth: true,
    required: true,
    regex: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
    errorMessage: "Please enter your password",
  },
];
