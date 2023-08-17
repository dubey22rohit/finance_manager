import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import styles from "./input.module.css";

const inputVariants = cva([`${styles.input}`], {
  variants: {
    variant: {
      default: `${styles.input}`,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, variant, ...props }, ref) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{props.placeholder}</label>
      <input className={inputVariants({ variant, className })} ref={ref} {...props} />
    </div>
  );
});

Input.displayName = "Input";

export { Input };
