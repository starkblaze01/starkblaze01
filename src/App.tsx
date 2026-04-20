import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Work = lazy(() => import("./pages/Work"));
const Projects = lazy(() => import("./pages/Projects"));
const Writing = lazy(() => import("./pages/Writing"));
const Timeline = lazy(() => import("./pages/Timeline"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div className="flex justify-center py-16">
      <Spin />
    </div>
  );
}

function lazyRoute(el: JSX.Element) {
  return <Suspense fallback={<PageFallback />}>{el}</Suspense>;
}

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={lazyRoute(<About />)} />
        <Route path="work" element={lazyRoute(<Work />)} />
        <Route path="projects" element={lazyRoute(<Projects />)} />
        <Route path="writing" element={lazyRoute(<Writing />)} />
        <Route path="blog" element={<Navigate to="/writing" replace />} />
        <Route path="timeline" element={lazyRoute(<Timeline />)} />
        <Route path="*" element={lazyRoute(<NotFound />)} />
      </Route>
    </Routes>
  );
}
