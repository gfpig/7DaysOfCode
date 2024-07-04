import React from 'react'
import { MenuWrapper, Logotipo, Opcoes, Botao} from "./styled.tsx"
import logo from "../../assets/logo.svg"

function Menu() {
  return (
    <MenuWrapper>
        <Logotipo alt="logo" src={logo} />
        <Opcoes>
            <Botao>Como fazer</Botao>
            /
            <Botao>Ofertas</Botao>
            /
            <Botao>Depoimentos</Botao>
            /
            <Botao>Vídeos</Botao>
            /
            <Botao>Meu carrinho</Botao>
        </Opcoes>
    </MenuWrapper>
  )
}

export default Menu