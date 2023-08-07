import React from "react";
import styles from "./primary-container.module.css";
import { VariantProps, cva } from "class-variance-authority";

const primaryContainerVariants = cva([`${styles.cyberContainer}`], {
  variants: {
    variant: {
      default: `${styles.cyberContainer}`,
      primary: "",
    },
    size: {
      default: "h-10 py-2 px-4",
      sm: "h-9 px-3 rounded-md",
      lg: "h-11 px-8 rounded-md",
    },
  },
});

export interface PrimaryContainerProps
  extends React.DetailsHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof primaryContainerVariants> {}

const PrimaryContainer = React.forwardRef<HTMLDivElement, PrimaryContainerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div className={primaryContainerVariants({ variant, size, className })} ref={ref} {...props}>
        {props.children}
      </div>
    );
  },
);

PrimaryContainer.displayName = "PrimaryContainer";

export { PrimaryContainer };
