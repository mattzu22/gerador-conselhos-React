import { useState, useEffect, useContext } from "react";
import desktop from "../../images/img-desktop.svg";
import button from "../../images/button.svg";
import { StyleGeradorDeConselhos, ContainerGerador } from "./style";
import { ThemeContext } from "../../context";

const GeradorDeConselhos = () => {
  const [conselho, setConselho] = useState({
    id: 0,
    advice: "",
  });

  const { theme } = useContext(ThemeContext);

  const fetchData = async () => {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const json = await response.json();

    setConselho({
      id: json.slip.id,
      advice: json.slip.advice,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StyleGeradorDeConselhos theme={theme}>
      <ContainerGerador theme={theme}>
        <div className="gerador-conselhos">
          <p className="conselho">
            ADVICE <span>#{conselho.id}</span>
          </p>

          <p className="mensagem">"{conselho.advice}"</p>

          <img src={desktop} alt="image" />

          <div className="btn-back" onClick={fetchData}>
            <img
              className="btn"
              src={button}
              alt="botão"
              style={{ background: "green" }}
            />
          </div>
        </div>
      </ContainerGerador>
    </StyleGeradorDeConselhos>
  );
};

export default GeradorDeConselhos;
