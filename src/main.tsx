import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TooltipProvider } from "./components/animate-ui/components/animate/tooltip.tsx";
import { ThemeContextProvider } from "./context/useTheme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <TooltipProvider>
        <App />
      </TooltipProvider>
    </ThemeContextProvider>
  </StrictMode>,
);
