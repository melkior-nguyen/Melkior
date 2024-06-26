import { ReactNode } from "react";

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className=" h-full flex justify-center items-center max-w-[1440px] w-full">
      {children}
    </section>
  );
};

export default ContentLayout;
