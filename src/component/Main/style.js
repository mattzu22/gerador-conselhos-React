import styled from "styled-components";

const StyleGeradorDeConselhos = styled.div`
  max-width: 540px;
  min-width: 350px;
  background-color: hsl(217, 19%, 24%);
  border-radius: 10px;
  padding: 30px;

  .gerador-conselhos {
    text-align: center;
    margin-bottom: -60px;
  }

  .conselho {
    font-size: 1.2rem;
    font-weight: 400;
    color: hsl(150, 100%, 66%);
    letter-spacing: 0.4rem;
    margin-bottom: 2.5rem;
  }

  .mensagem {
    font-size: 2.5rem;
    margin-bottom: 3rem;
  }

  .btn-back {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: hsl(150, 100%, 66%);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin: 25px auto 0;
  }

  .btn-back:hover {
    box-shadow: hsl(150, 100%, 66%) 0px 0px 20px 0px;
  }
`;

export default StyleGeradorDeConselhos;