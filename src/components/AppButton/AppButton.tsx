import { ReactNode } from "react";

const AppButton = ({
  icon,
  label,
  handleClick,
  tailwindClass,
}: {
  icon: ReactNode;
  label: string;
  handleClick: () => void;
  tailwindClass?: string;
}) => {
  return (
    <div
      className={`${tailwindClass} ${
        label === "" ? "w-8" : ""
      } h-8 cursor-pointer bg-primary rounded flex justify-center items-center`}
      onClick={handleClick}
    >
      {icon}
      {label}
    </div>
  );
};

export default AppButton;
