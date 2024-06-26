import { ReactNode } from "react";

const AppIcon = ({
  icon,
  handleClick,
  tailwindClass,
}: {
  icon: ReactNode;
  handleClick: () => void;
  tailwindClass?: string;
}) => {
  return (
    <div
      className={`${tailwindClass} transition-all h-8 w-8 cursor-pointer hover:bg-grayHover rounded flex justify-center items-center`}
      onClick={handleClick}
    >
      {icon}
    </div>
  );
};

export default AppIcon;
