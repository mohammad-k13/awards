import React, { ReactNode } from "react";

type Props = {
  className?: string;
  children: ReactNode;
};

const text = ({className, children}: Props) => {
  return <p className={`font-400 text-md font-general ${className}`}>{children}</p>;
};

export default text;