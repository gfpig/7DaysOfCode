import React from 'react'
import { MenuWrapper, Logotipo, Opcoes, Botao} from "./styled.tsx"
import './Menu.css'

function Menu() {
  return (
    <MenuWrapper>
        <Logotipo alt="logo" src="/images/logo.svg" />
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