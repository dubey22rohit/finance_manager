import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import styles from "./button.module.css";

const buttonVariants = cva([`${styles["cta"]}`], {
  variants: {
    variant: {
      default: `${styles["cta"]}`,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  purpose?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, ...props }, ref) => {
  return (
    <button className={buttonVariants({ variant, className })} ref={ref} {...props}>
      {props.children}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };
