import { ThemeProvider } from "./context";
import CSSreset from "./component/CSSreset/CSSReset";
import GeradorDeConselhos from "./component/Main";
import { ThemeTogglerButton } from "./component/theme-toggler/index";
import React from "react";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <ThemeProvider>
      <SkeletonTheme baseColor="rgb(71, 81, 98)" highlightColor="#444">
        <CSSreset />
        <ThemeTogglerButton />
        <GeradorDeConselhos />
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;
