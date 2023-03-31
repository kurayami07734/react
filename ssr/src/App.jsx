import { Link, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import { useState, lazy, Suspense } from "react";
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: Infinity, cacheTime: Infinity } },
});
const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));
function App() {
  const adoptedPetHook = useState(null);
  return (
    <AdoptedPetContext.Provider value={adoptedPetHook}>
      <QueryClientProvider client={queryClient}>
        <Suspense
          fallback={
            <div className="loading-pane">
              <h2 className="loader">Loading</h2>
            </div>
          }
        >
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </AdoptedPetContext.Provider>
  );
}

export default App;
