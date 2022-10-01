import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./shared/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const reactQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={reactQueryClient}>
      <BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
