import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

function Container({ children, className = "" }: Props) {
  return <div className={`w-full 2xl:w-[80rem] ${className}`}>{children}</div>;
}

export default Container;
