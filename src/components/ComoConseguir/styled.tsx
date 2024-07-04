import styled from "styled-components";

export const ComoConseguirWrapper = styled.div`
    display: flex;
    align-self: center;
    background-color: #fff;
    width: 995px;
    height: 440px;
    overflow: clip;
    box-shadow: 4px 4px 8px -4px rgba(0, 0, 0, 0.2), 6px 6px 20px -6px rgba(0, 0, 0, 0.19);
`

export const Moldura = styled.div`
    img {
        width: 606px;
    }
`

export const Descricao = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        display: block;
        margin-left: 10px;
        font-family: Montserrat;
        font-size: 22px;
        font-weight: 400;
        line-height: 26.82px;
        text-align: left;
        opacity: 50%;
    }
`

export const Titulo = styled.h2`
    margin: 0;
    font-family: Montserrat;
    font-size: 22px;
    font-weight: 400;
    line-height: 26.82px;
    text-align: left;
    opacity: 0.5;
`

export const Subtitulo = styled.h1`
    margin: 0;
    font-family: Elsie Swash Caps;
    font-size: 42px;
    font-weight: 900;
    line-height: 48.38px;
    text-align: left;
`

export const Lista = styled.div`
    margin-top: 10px;
`

export const ItemLista = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;

    button {
        height: 52px;
        width: 52px;
        border: none;
        background-color: #FFCB47;
        border-radius: 52px;
        margin: 10px 0;
    }
`
