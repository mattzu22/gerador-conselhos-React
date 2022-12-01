import styled from "styled-components";

export const ContainerGerador = styled.div`
  max-width: 540px;
  min-width: 350px;
  background-color: ${({theme}) => theme.bgCard};
  border-radius: 10px;
  padding: 30px;
  transition: all 0.3s ease-in-out;

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
    color:${({theme}) => theme.color};
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
`

export const StyleGeradorDeConselhos = styled.div`
    min-height: 100vh;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.bg};
    transition: all 0.3s ease-in-out;
`;


