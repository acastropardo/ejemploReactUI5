import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@ui5/webcomponents-react";
import { Layout } from "./components/layout";
import "@ui5/webcomponents-fiori/dist/Assets.js";
import "@ui5/webcomponents-react/dist/Assets.js";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout />
      </Router>
    </ThemeProvider>
  );
}
