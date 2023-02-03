
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import generateMuiTheme from "../src/Pages/LiveStream/mui/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "./context/AuthProvider";
import { ThemeProvider } from "@mui/material";
const queryClient = new QueryClient();


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={generateMuiTheme()}>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



