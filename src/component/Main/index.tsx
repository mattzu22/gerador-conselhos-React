import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { useState, useEffect, useContext } from "react";
import { StyleGeradorDeConselhos, ContainerGerador } from "./style";
import { ThemeContext, ThemeContextType } from "../../context";

const desktop = require("../../images/img-desktop.svg").default;
const mobile = require("../../images/img-mobile.svg").default;
const button = require("../../images/button.svg").default;

interface AdviceResponse {
  id: number;
  advice: string;
}

const GeradorDeConselhos = () => {
  const [conselho, setConselho] = useState<AdviceResponse>({
    id: 0,
    advice: "",
  });

  const { theme } = useContext(ThemeContext) as ThemeContextType;

  const fetchData = async () => {
    setConselho({
      id: 0,
      advice: ""
    })
    try {
      setTimeout(async () => {
        const url: string = "https://api.adviceslip.com/advice";
        const response: Response = await fetch(url);
        const json = await response.json();
        const { id, advice }: AdviceResponse = json.slip;

        setConselho({
          id: id,
          advice: advice,
        });
      }, 1000);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 1000);
  }, []);

  return (
    <StyleGeradorDeConselhos theme={theme}>
      <ContainerGerador theme={theme}>
        <div className="gerador-conselhos">
          <p className="conselho">
            ADVICE <span>#{conselho.id || <Skeleton width={20} borderRadius={5}/>}</span>
          </p>

          <p className="mensagem">
            {conselho.advice || <Skeleton count={2} height={20} borderRadius={5} />}
          </p>
          <picture>
            <source srcSet={mobile} media="(max-width:540px)"></source>
            <img src={desktop} alt="image" />
          </picture>
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
