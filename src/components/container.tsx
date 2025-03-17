import { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return <div className={`p-4 lg:p-5 ${className}`}>{children}</div>;
};

export default Container;
