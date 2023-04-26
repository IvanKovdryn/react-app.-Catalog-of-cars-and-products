import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import styles from "./assets/styles/globalStyles.css";
import { Router } from "./components/Router";
import "./index.css";
import AuthProvider from "./components/providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ModalProvider } from "./components/providers/ModalProvider";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
