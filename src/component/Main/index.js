import React from "react";
import desktop from "../../images/img-desktop.svg"
import button from "../../images/button.svg"
import StyleGeradorDeConselhos from "./style";


const GeradorDeConselhos = () => {
  return (
    <StyleGeradorDeConselhos>
      <div className="gerador-conselhos">
        <p className="conselho">ADVICE<span>#54</span></p>

        <p className="mensagem">
            "Always seek out advice or opinions when making a decision."
        </p>
    
        <img src={desktop} alt="image" />

        <div className="btn-back">
          <img className="btn" src={button} alt="botão" style={{background: "green"}}/>
        </div>
      </div>
    </StyleGeradorDeConselhos>
  );
};

export default GeradorDeConselhos;
