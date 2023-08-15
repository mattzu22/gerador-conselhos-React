import { ThemeProvider } from "./context";
import CSSreset from "./component/CSSreset/CSSReset";
import GeradorDeConselhos from "./component/Main";
import { ThemeTogglerButton } from "./component/theme-toggler/index";
import React from "react";

function App() {
  return (
    <ThemeProvider>
      <CSSreset />
      <ThemeTogglerButton />
      <GeradorDeConselhos />
    </ThemeProvider>
  );
}

export default App;
