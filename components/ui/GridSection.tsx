import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

type GridSectionProps = ComponentPropsWithoutRef<"section">;

const gridSectionClassName =
  "mx-auto grid grid-cols-5 gap-2 px-4 md:max-w-360 md:grid-cols-12 md:gap-7 md:px-20";

const GridSection = ({
  className,
  children,
  ...otherProps
}: GridSectionProps) => {
  return (
    <section {...otherProps} className={clsx(gridSectionClassName, className)}>
      {children}
    </section>
  );
};

export default GridSection;
