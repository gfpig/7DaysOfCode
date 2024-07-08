import React, { useState, useEffect } from 'react'
import { NossasOfertasWrapper, Titulo, Subtitulo, ListaFiltros, FiltroPreco,  ListaProdutos, Item, FotoPlanta, NomePlanta, Preco, Botao } from './styled.tsx'
import NomeAtivado from "./assets/ordena_nome_ativado.svg"
import NomeDesativado from "./assets/ordena_nome_desativado.svg"
import PrecoAtivado from "./assets/ordena_preco_ativado.svg"
import PrecoDesativado from "./assets/ordena_preco_desativado.svg"

function NossasOfertas() {

    const [plantas, setPlantas] = useState([])
    const [filtroPlantas, setFiltroPlantas] = useState([])
    const [ordemNome, setOrdemNome] = useState(false)
    const [ordemPreco, setOrdemPreco] = useState(false)

    const [precoMin, setPrecoMin] = useState('')
    const [precoMax, setPrecoMax] = useState('')

    useEffect (() => {
        fetchPlantas();
    }, [])

    useEffect (() => {
        OrdenarNomes();
    }, [ordemNome])

    useEffect (() => {
        OrdenarPrecos();
    }, [ordemPreco])

    const fetchPlantas = () => {
        const url = "https://gist.githubusercontent.com/bugan/41d60ffa23fa0c4044cc138bf670780d/raw";

        fetch(url).then(res => res.json()).then(data => {
            if (data) {
                setPlantas(data)
                setFiltroPlantas(data)
            } else {
                console.log("resposta:", data);
            }
        })
    }

    const OrdenarNomes = () => {
        if (ordemNome) { //ordem alfabética crescente
            setFiltroPlantas([...filtroPlantas].sort((a, b) => a.name < b.name ? -1 : 1))
        } else { //ordem alfabética decrescente
            setFiltroPlantas([...filtroPlantas].sort((a, b) => a.name > b.name ? -1 : 1))
        }
        return 0;
    }

    const OrdenarPrecos = () => {
        if (ordemPreco) { //ordem preço crescente
            setFiltroPlantas([...filtroPlantas].sort((a, b) => a.preco > b.preco ? 1 : -1))
        } else { //ordem preço decrescente
            setFiltroPlantas([...filtroPlantas].sort((a, b) => a.preco < b.preco ? 1 : -1))
        }
        return 0;
    }

    const FiltrarPreco = (e) => {
        e.preventDefault()

        if(precoMax === '' && precoMin === '') {
            setFiltroPlantas(plantas)
            return;
        }

        if (precoMax === '') {
            setFiltroPlantas(plantas.filter(item => item.preco >= precoMin))
            return;
        }

        if (precoMin === '') {
            setFiltroPlantas(plantas.filter(item => item.preco <= precoMax))
            return;
        }

        setFiltroPlantas(plantas.filter(item => item.preco >= precoMin && item.preco <= precoMax))
        return 0;
    }

  return (
    <NossasOfertasWrapper>
        <Titulo>Conheça nossas</Titulo>
        <Subtitulo>Plantas</Subtitulo>

        <ListaFiltros>
            <FiltroPreco>
                <input type="number" placeholder='Preço mínimo' value={precoMin} onChange={e => setPrecoMin(e.target.value)} />
                <input type="number" placeholder='Preço máximo' value={precoMax} onChange={e => setPrecoMax(e.target.value)} />
                <button onClick={e => {FiltrarPreco(e)}}>Buscar</button>
            </FiltroPreco>

            {ordemNome ? <img alt="Ordem alfabética" title="Desativar ordem alfabética" src={NomeAtivado} onClick={() => {setOrdemNome(!ordemNome)}} /> : <img alt="Ordem alfabética" title="Ativar ordem alfabética" src={NomeDesativado} onClick={() => setOrdemNome(!ordemNome)} /> }
            {ordemPreco ? <img alt="Ordem por preço" title="Desativar ordem por preço" src={PrecoAtivado} onClick={() => {setOrdemPreco(!ordemPreco)}} /> : <img alt="Ordem por preço" title="Ativar ordem por preço" src={PrecoDesativado} onClick={() => setOrdemPreco(!ordemPreco)} /> }
        </ListaFiltros>

        <ListaProdutos>
            {filtroPlantas.map((planta) => (
                <Item id="item" key = {planta.ordem}>
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
        </ListaProdutos>
    </NossasOfertasWrapper>
  )
}

export default NossasOfertas