import { ThemeProvider } from "./context";
import CSSreset from "./component/CSSreset/CSSReset";
import GeradorDeConselhos from "./component/Main";
import { ThemeTogglerButton } from "./component/theme-toggler";

function App() {
  return (
    <ThemeProvider>
      <CSSreset />
      <GeradorDeConselhos />
    </ThemeProvider>
  );
}

export default App;
