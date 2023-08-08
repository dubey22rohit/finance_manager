import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import styles from "./button.module.css";

const buttonVariants = cva([`${styles["cyber-btn"]}`], {
  variants: {
    variant: {
      default: `${styles["cyber-btn"]}`,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  buttonText: string;
  purpose?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => {
  return (
    <button className={buttonVariants({ variant, className })} ref={ref} {...props}>
      {props.buttonText}
      <span aria-hidden>_</span>
      <span aria-hidden className={styles["cybr-btn__glitch"]}>
        {props.buttonText}_
      </span>
      <span aria-hidden className={styles["cybr-btn__tag"]}>
        {props.purpose ?? `R25`}
      </span>
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
