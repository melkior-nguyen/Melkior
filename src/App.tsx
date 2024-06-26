import { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AppHeader from "./components/AppHeader/AppHeader";
import AppLoader from "./components/AppLoader/AppLoader";
import { AnimatePresence } from "framer-motion";
import {
  LazyAbout,
  LazyHome,
  LazyProjects,
  LazyServices,
} from "./routes/lazyComponents";

function App() {
  // const darkBg = "from-[#0E1A26] to-[#111111]";
  const location = useLocation();
  // const lightBg = "from-[#EDF2FE] to-[#FDFDFE]";
  const bg = "from-[#000000] to-[#000000]";

  return (
    <Suspense fallback={<AppLoader />}>
      <div
        className={`bg-gradient-to-b ${bg} h-screen w-screen flex flex-col items-center p-4 overflow-hidden`}
      >
        <AppHeader />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<LazyHome />} />
            <Route path="/projects" element={<LazyProjects />} />
            <Route path="/services" element={<LazyServices />} />
            <Route path="/about" element={<LazyAbout />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Suspense>
  );
}

export default App;
