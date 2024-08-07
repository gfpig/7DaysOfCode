import styled from "styled-components";

export const NossasOfertasWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px;
`

export const Titulo = styled.h2`
    margin: 0;
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 400;
    line-height: 26.82px;
    text-align: center;
    opacity: 0.5;
`

export const Subtitulo = styled.h1`
    margin: 0;
    font-family: Elsie Swash Caps;
    font-size: 82px;
    font-weight: 900;
    line-height: 94.46px;
    text-align: center;
`

export const ListaFiltros = styled.div`
    display:flex;
    align-self: center;
    gap: 10px;
    margin-bottom: 10px;

    img {
        cursor: pointer;
        height: 25px;
    }
`

export const FiltroPreco = styled.div`
    display: flex;
    gap: 10px;

    input {
        border-style: none none solid none;
        border-color: #FFCB47;
        border-width: 1px;
    }

    button {
        cursor: pointer;
        width: 94px;
        height: 25px;
        background: #FFCB47;
        border: none;
        font-family: Montserrat;
        font-size: 14px;
        font-weight: 400;
        line-height: 19.5px;
        text-align: center;
        color: #FFFFFF;
    }
`

export const ListaProdutos = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(3, 379px);
    column-gap: 50px;
    row-gap: 25px;
`

export const Item = styled.div`
    display: flex;
    text-align: left;
    align-items: center;
    overflow: clip;
    background-color: #fff;
    width: 379px;
    height: 200px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const FotoPlanta = styled.img`
    max-width: 225px;
    max-height: 337px;
`

export const NomePlanta = styled.h1`
    font-family: Elsie Swash Caps;
    font-size: 32px;
    font-weight: 900;
    line-height: 36.86px;
    text-align: left;
`

export const Preco = styled.span`
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.5px;
    text-align: left;
    opacity: 0.5;
`

export const Botao = styled.button`
    cursor: pointer;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.5px;
    text-align: left;
    display: flex;
    font-weight: 400;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    width: 111px;
    color: #FFCB47;

    &:hover {
        text-decoration: underline;
    }

    img {
        width: 14px;
    }
`