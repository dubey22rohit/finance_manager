import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import styles from "./container.module.css";

const containerVariants = cva([`${styles.cyberContainer}`], {
  variants: {
    variant: {
      default: `${styles.cyberContainer}`,
      primary: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ContainerProps
  extends React.DetailsHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(({ className, variant, ...props }, ref) => {
  return (
    <div className={containerVariants({ variant, className })} ref={ref} {...props}>
      {props.children}
    </div>
  );
});

Container.displayName = "Container";

export { Container };
