import React from 'react'
import './Menu.css'

function Menu() {
  return (
    <div className='container__menu'>
        <div className='logo'>
            <img alt="logo" src="/images/logo.svg" />
        </div>
        <div className='opcoes__menu'>
            <button>Como fazer</button>
            /
            <button>Ofertas</button>
            /
            <button>Depoimentos</button>
            /
            <button>Vídeos</button>
            /
            <button>Meu carrinho</button>
        </div>
    </div>
  )
}

export default Menu