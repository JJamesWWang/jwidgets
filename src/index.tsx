import { StrictMode } from "react";
import { render } from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

import App from "./App";
import KVocabApp from "./widgets/kvocab/KVocabApp";
import { MantineProvider } from "@mantine/core";

render(
  <StrictMode>
    <MantineProvider theme={{ colorScheme: "dark" }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/kvocab" element={<KVocabApp />}></Route>
        </Routes>
      </HashRouter>
    </MantineProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
