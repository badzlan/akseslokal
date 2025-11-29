import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import LocationDetail from "./pages/LocationDetail";
import MapView from "./pages/MapView";
import AddReport from "./pages/AddReport";
import ReportSubmitted from "./pages/ReportSubmitted";
import EditLocation from "./pages/EditLocation";
import LocationUpdated from "./pages/LocationUpdated";
import Accessibility from "./pages/Accessibility";
import Difabel from "./pages/Difabel";
import Tips from "./pages/Tips";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/location/:id" element={<LocationDetail />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/add-report" element={<AddReport />} />
          <Route path="/report-submitted" element={<ReportSubmitted />} />
          <Route path="/edit-location/:id" element={<EditLocation />} />
          <Route path="/location-updated" element={<LocationUpdated />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/difabel" element={<Difabel />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
