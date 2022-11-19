import { useState, useEffect } from "react";
import desktop from "../../images/img-desktop.svg";
import button from "../../images/button.svg";
import StyleGeradorDeConselhos from "./style";

const GeradorDeConselhos = () => {
  const [conselho, setConselho] = useState({
    id: 0,
    advice: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.adviceslip.com/advice";
      const response = await fetch(url);
      const json = await response.json();

      setConselho({
        id: json.slip.id,
        advice: json.slip.advice,
      });
    };

    fetchData();
  }, []);

  const changeAdvice = async () => {
    const url = "https://api.adviceslip.com/advice";
    const response = await fetch(url);
    const json = await response.json();

    setConselho({
      id: json.slip.id,
      advice: json.slip.advice,
    });
  };

  return (
    <StyleGeradorDeConselhos>
      <div className="gerador-conselhos">
        <p className="conselho">
          ADVICE <span>#{conselho.id}</span>
        </p>

        <p className="mensagem">"{conselho.advice}"</p>

        <img src={desktop} alt="image" />

        <div className="btn-back" onClick={changeAdvice}>
          <img
            className="btn"
            src={button}
            alt="botão"
            style={{ background: "green" }}
          />
        </div>
      </div>
    </StyleGeradorDeConselhos>
  );
};

export default GeradorDeConselhos;
