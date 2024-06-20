import { ReactNode } from "react";
import { appColors } from "../../UI/AppColors/AppColors";

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
      className={`${tailwindClass} h-8 w-8 cursor-pointer hover:bg-[${appColors.icon.hover}] rounded flex justify-center items-center`}
      onClick={handleClick}
    >
      {icon}
    </div>
  );
};

export default AppIcon;
