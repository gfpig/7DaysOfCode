import React from 'react'
import { ComoConseguirWrapper, Moldura, Descricao, Titulo, Subtitulo, Lista, ItemLista} from './styled.tsx'
//import './ComoConseguir.css'

function ComoConseguir() {
  return (
    <ComoConseguirWrapper>
        <Moldura>
            <img alt="planta" src="images/minha_planta.png" />
        </Moldura>
        <Descricao>
            <Titulo>Como conseguir</Titulo>
            <Subtitulo>minha planta</Subtitulo>
            <Lista>
                <ItemLista>
                    <button /><span>Escolha suas plantas</span>
                </ItemLista>
                <ItemLista>
                    <button /><span>Faça seu pedido</span>
                </ItemLista>
                <ItemLista>
                    <button /><span>Aguarde na sua casa</span>
                </ItemLista>
            </Lista>
        </Descricao>
    </ComoConseguirWrapper>
  )
}

export default ComoConseguir