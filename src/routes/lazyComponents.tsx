import { Suspense, lazy } from "react";
import AppLoader from "../components/AppLoader/AppLoader";

export const LazyHome = () => {
  const LazyComponent = lazy(() => import("../pages/Home/Home"));
  return (
    <Suspense fallback={<AppLoader/>}>
      <LazyComponent />
    </Suspense>
  );
};

export const LazyServices = () => {
  const LazyComponent = lazy(() => import("../pages/Services/Services"));
  return (
    <Suspense fallback={<AppLoader/>}>
      <LazyComponent />
    </Suspense>
  );
};

export const LazyProjects = () => {
  const LazyComponent = lazy(() => import("../pages/Projects/Projects"));
  return (
    <Suspense fallback={<AppLoader/>}>
      <LazyComponent />
    </Suspense>
  );
};

export const LazyAbout = () => {
  const LazyComponent = lazy(() => import("../pages/About/About"));
  return (
    <Suspense fallback={<AppLoader/>}>
      <LazyComponent />
    </Suspense>
  );
};
