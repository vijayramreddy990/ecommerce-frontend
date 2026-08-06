import React from "react";
import styles from "./Input.module.css";
import type { InputProps } from "./Input.types";
import { DEFAULT_INPUT_SIZE } from "./Input.constants";

const Input = ({
  label,
  error,
  helperText,
  fullWidth = false,
  rounded = false,
  shadow = false,
  leftIcon,
  rightIcon,
  inputSize = DEFAULT_INPUT_SIZE,
  required = false,
  disabled = false,
  className = "",
  id,
  ...rest
}: InputProps) => {
  const inputClassNames = [
    styles.input,
    styles[inputSize],
    fullWidth && styles.fullWidth,
    rounded && styles.rounded,
    shadow && styles.shadow,
    error && styles.error,
    leftIcon && styles.hasLeftIcon,
    rightIcon && styles.hasRightIcon,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={`${styles.container} ${fullWidth ? styles.fullWidth : ""}`}>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {leftIcon && <span className={styles.leftIcon}>{leftIcon}</span>}
        <input
          id={id}
          className={inputClassNames}
          required={required}
          disabled={disabled}
          {...rest}
        />
        {rightIcon && <span className={styles.rightIcon}>{rightIcon}</span>}
      </div>
      {error ? (
        <span className={styles.error}>{error}</span>
      ) : (
        helperText && <span className={styles.helperText}>{helperText}</span>
      )}
    </div>
  );
};

export default Input;
