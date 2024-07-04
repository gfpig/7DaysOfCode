import React from 'react'
import ComoConseguir from '../ComoConseguir/ComoConseguir'
import NossasOfertas from '../NossasOfertas/NossasOfertas'
import {AssinaturaNewsLetter, Titulo, Subtitulo, Texto, Formulario, Botao, NewsLetter, Moldura} from './styled.tsx'


function AssinaturaNewsletter() {
  return (
    <>
    <AssinaturaNewsLetter>
        <NewsLetter>
            <Titulo>Sua casa com as</Titulo>
            <Subtitulo>melhores<br />plantas</Subtitulo>
            <Texto>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Texto>
            <Formulario>
                    <input type="email" placeholder='Insira seu e-mail' />
                    <Botao>Assinar newsletter</Botao>
            </Formulario>
        </NewsLetter>
        <Moldura>
            <img alt="planta" src="images/hero.png" />
        </Moldura>
    </AssinaturaNewsLetter>
    <ComoConseguir />
    <NossasOfertas />
    </>
  )
}

export default AssinaturaNewsletter