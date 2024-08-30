import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UI1 from "./components/UI1";
import UI2 from "./components/UI2";
import UI3 from "./components/UI3";
import UI4 from "./components/UI4";
import UI5 from "./components/UI5";

const queryClient = new QueryClient();

const App = () => {
  const [assets, setAssets] = useState({
    backgroundImage: "/placeholder.svg",
    buttonImage: "/placeholder.svg",
    video: null,
    generatedImage: null
  });

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<UI1 assets={assets} setAssets={setAssets} />} />
            <Route path="/ui2" element={<UI2 assets={assets} />} />
            <Route path="/ui3" element={<UI3 assets={assets} />} />
            <Route path="/ui4" element={<UI4 assets={assets} />} />
            <Route path="/ui5" element={<UI5 assets={assets} />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
