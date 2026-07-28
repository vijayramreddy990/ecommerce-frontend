import React from "react";
import type { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";
import {
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
} from "./Button.constants";

const Button = ({
  children,
  variant = DEFAULT_BUTTON_VARIANT,
  size = DEFAULT_BUTTON_SIZE,
  loading = false,
  fullWidth = false,
  rounded = false,
  shadow = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled = false,
}: ButtonProps) => {
  const buttonClassNames = [
    styles.button,
    variant && styles[variant],
    size && styles[size],
    fullWidth && styles.fullWidth,
    rounded && styles.rounded,
    shadow && styles.shadow,
    loading && styles.loading,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button disabled={loading || disabled} className={buttonClassNames}>
      {!loading && leftIcon && <span className="left-icon">{leftIcon}</span>}
      <span className={styles.text}>{loading ? "Loading..." : children}</span>
      {!loading && rightIcon && <span className="right-icon">{rightIcon}</span>}
    </button>
  );
};

export default Button;
