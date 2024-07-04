import styled from 'styled-components'
import mail from "../../assets/envelope-regular.svg"

export const AssinaturaNewsLetter = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 200px;
`

export const NewsLetter = styled.div`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 585px;
}
`

export const Titulo = styled.h2`
    margin: 0;
    color: #202020;
    opacity: 50%;
    font-family: 'Montserrat';
    font-weight: 400px;
    font-size: 22px;
`

export const Subtitulo = styled.h1`
    margin: 0;
    color: #202020;
    font-family: Elsie Swash Caps;
    font-size: 82px;
    font-weight: 900;
    line-height: 94.46px;
    text-align: left;
`

export const Texto = styled.span`
    opacity: 50%;
    margin-top: 20px;
    color: #202020;
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 26px;
    text-align: left;
`

export const Formulario = styled.form`
    display: flex;
    align-items: center;
    margin-top: 30px;
    align-items: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    input {
        border: none;
        background: url(${mail}) no-repeat scroll 10px 10px;
        background-size: 21px;
        background-position-y: center;
        padding-left: 40px;
        width: 585px;
        height: 75px;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.5px;
        text-align: left;
    }

    button {
        cursor: pointer;
        width: 194px;
        height: 75px;
        background: #FFCB47;
        border: none;
        font-family: Montserrat;
        font-size: 16px;
        font-weight: 400;
        line-height: 19.5px;
        text-align: center;
        color: #FFFFFF;
    }
`

export const Moldura = styled.div`
    position: relative;
    z-index: 0;
    margin-top: -508px;
    width: 787px;

    img {
        width: 100%;
    }
`