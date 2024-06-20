import { ReactNode } from "react";

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="border h-full flex justify-center items-center">
      {children}
    </section>
  );
};

export default ContentLayout;
