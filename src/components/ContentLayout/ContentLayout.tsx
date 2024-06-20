import { ReactNode } from "react";

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="border h-full flex justify-center items-center">
      {children}
    </main>
  );
};

export default ContentLayout;
