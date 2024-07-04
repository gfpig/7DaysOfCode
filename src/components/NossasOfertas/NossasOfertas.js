import React from 'react'
import { NossasOfertasWrapper, Titulo, Subtitulo, ListaProdutos, Item, FotoPlanta, NomePlanta, Preco, Botao } from './styled.tsx'

function NossasOfertas() {
  return (
    <NossasOfertasWrapper>
        <Titulo>Conheça nossas</Titulo>
        <Subtitulo>Ofertas</Subtitulo>

        <ListaProdutos>
            <Item>
                <FotoPlanta alt="Ajuga reptans" src="images/produto-01.png" />
                <div>
                    <NomePlanta>Ajuga reptans</NomePlanta>
                    <Preco>R$20,00</Preco>
                    <Botao>
                        Comprar
                        <img alt="Seta para a direita" src="images/seta.svg" />
                    </Botao>
                </div>
            </Item>
            <Item>
                <FotoPlanta alt="Cordyline fruticosa" src="images/produto-02.png" />
                <div>
                    <NomePlanta>Cordyline fruticosa</NomePlanta>
                    <Preco>R$20,00</Preco>
                    <Botao>
                        Comprar
                        <img alt="Seta para a direita" src="images/seta.svg" />
                    </Botao>
                </div>
            </Item>
            <Item>
                <div className='produtos__item__imagem'>
                    <FotoPlanta alt="Crassula ovata" src="images/produto-03.png" />
                </div>
                <div>
                    <NomePlanta>Crassula ovata</NomePlanta>
                    <Preco>R$20,00</Preco>
                    <Botao>
                        Comprar
                        <img alt="Seta para a direita" src="images/seta.svg" />
                    </Botao>
                </div>
            </Item>
            <Item>
                <div className='produtos__item__imagem'>
                    <FotoPlanta alt="Cyperus rotundus" src="images/produto-04.png" />
                </div>
                <div>
                    <NomePlanta>Cyperus rotundus</NomePlanta>
                    <Preco>R$20,00</Preco>
                    <Botao>
                        Comprar
                        <img alt="Seta para a direita" src="images/seta.svg" />
                    </Botao>
                </div>
            </Item>
            <Item>
                <div className='produtos__item__imagem'>
                    <FotoPlanta alt="Delairea odorata" src="images/produto-05.png" />
                </div>
                <div>
                    <NomePlanta>Delairea odorata</NomePlanta>
                    <Preco>R$20,00</Preco>
                    <Botao>
                        Comprar
                        <img alt="Seta para a direita" src="images/seta.svg" />
                    </Botao>
                </div>
            </Item>
            <Item>
                <div className='produtos__item__imagem'>
                    <FotoPlanta alt="Datura metel" src="images/produto-06.png" />
                </div>
                <div>
                    <NomePlanta>Datura metel</NomePlanta>
                    <Preco>R$20,00</Preco>
                    <Botao>
                        Comprar
                        <img alt="Seta para a direita" src="images/seta.svg" />
                    </Botao>
                </div>
            </Item>
        </ListaProdutos>
    </NossasOfertasWrapper>
  )
}

export default NossasOfertas