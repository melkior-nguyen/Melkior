import { Suspense, lazy } from "react";

export const LazyHome = () => {
  const LazyComponent = lazy(() => import("../pages/Home/Home"));
  return (
    <Suspense fallback={<div className="bg-red-500">loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export const LazyServices = () => {
  const LazyComponent = lazy(() => import("../pages/Services/Services"));
  return (
    <Suspense fallback={<div className="bg-red-500">loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export const LazyProjects = () => {
  const LazyComponent = lazy(() => import("../pages/Projects/Projects"));
  return (
    <Suspense fallback={<div className="bg-red-500">loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};

export const LazyAbout = () => {
  const LazyComponent = lazy(() => import("../pages/About/About"));
  return (
    <Suspense fallback={<div className="bg-red-500">loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
};
