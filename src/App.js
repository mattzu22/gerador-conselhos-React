import CSSreset from "./component/CSSreset/CSSReset";
import GeradorDeConselhos from "./component/Main";


// const theme = {
//   light: {
//     backgroundBase: "#f9f9f9",
//     backgroundLevel1: "#DCDCDC",
//     backgroundLevel2: "#f0f0f0",
//     borderBase: "#e5e5e5",
//     textColorBase: "#222222",
//   },
//   dark: {
//     backgroundBase: "#181818",
//     backgroundLevel1: "#202020",
//     backgroundLevel2: "#313131",
//     borderBase: "#383838",
//     textColorBase: "#FFFFFF",
//   },
// };

function App() {
  return (
    <>
      <CSSreset />
      <GeradorDeConselhos />
    </>
  );
}

export default App;
