import { FC, ReactNode } from "react";

interface FlexRowProps {
  children: ReactNode;
  className?: string;
}

const FlexRow: FC<FlexRowProps> = ({ children, className = "" }) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};

export default FlexRow;
