import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navigation from "./components/navigation/navigation";
import { lazy, Suspense } from "react";
import LoadingIndicator from "./components/loading-indicator/loading-indicator";

const About = lazy(() => import("./pages/about/about"));
const Favorites = lazy(() => import("./pages/favorites/favorites"));
const ErrorPage = lazy(() => import("./pages/error-page/error-page"));
const Catalog = lazy(() => import("./pages/catalog/catalog"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <main>
          <Suspense fallback={<LoadingIndicator />}>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Suspense>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
