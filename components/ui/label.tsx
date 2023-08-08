import React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => {
  return (
    <label className={className} ref={ref} {...props}>
      {props.children}
    </label>
  );
});

Label.displayName = "Label";
export { Label };
