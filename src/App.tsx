import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  // const darkBg = "from-[#0E1A26] to-[#111111]";
  const lightBg = "from-[#EDF2FE] to-[#FDFDFE]";

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={`bg-gradient-to-b ${lightBg} h-screen p-3 flex flex-col`}>
        <AppHeader />
        <Outlet />
      </div>
    </Suspense>
  );
}

export default App;
