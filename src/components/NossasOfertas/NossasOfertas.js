import React, { useState, useEffect } from 'react'
import { NossasOfertasWrapper, Titulo, Subtitulo, ListaProdutos, Item, FotoPlanta, NomePlanta, Preco, Botao } from './styled.tsx'

function NossasOfertas() {

    const [plantas, setPlantas] = useState([])

    useEffect (() => {
        fetchPlantas();
    }, [])

    const fetchPlantas = () => {
        const url = "https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw";

        fetch(url).then(res => res.json()).then(data => {
            //console.log(data)
            if (data) {
                setPlantas(data)
            } else {
                console.log("resposta:", data);
            }
        })
    }

  return (
    <NossasOfertasWrapper>
        <Titulo>Conheça nossas</Titulo>
        <Subtitulo>Ofertas</Subtitulo>

        <ListaProdutos>
            {plantas.map((planta) => (
                <Item>
                    <FotoPlanta alt={planta.name} src={`/images/${planta.img}.png`} />
                    <div>
                        <NomePlanta>{planta.name}</NomePlanta>
                        <Preco>R${planta.preco.toPrecision(4)}.</Preco>
                        <Botao>
                            Comprar
                            <img alt="Seta para a direita" src="images/seta.svg" />
                        </Botao>
                    </div>
                </Item>
            ))}
            <Item>
                <div className='produtos__item__imagem'>
                    <FotoPlanta alt="Cyperus rotundus" src="images/produto-04.png" style={{transform:"rotate(45deg)"}} />
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
                    <FotoPlanta alt="Datura metel" src="images/produto-06.png" style={{transform:"rotate(45deg)"}} />
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