import React from 'react'
import './styles.css'

function AssinaturaNewsletter() {
  return (
    <div className='hero'>
    <div className='news__letter'>
        <span className='titulo'>Sua casa com as</span>
        <span className='bold'>melhores<br />plantas</span>
        <span className='texto'>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</span>
    </div>
    <div className='hero__imagem'>
        <img alt="planta" src="images/hero.png" />
    </div>
    </div>
  )
}

export default AssinaturaNewsletter