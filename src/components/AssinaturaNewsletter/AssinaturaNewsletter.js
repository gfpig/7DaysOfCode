import React, {useState} from 'react'
import emailjs from "@emailjs/browser"
import ComoConseguir from '../ComoConseguir/ComoConseguir'
import NossasOfertas from '../NossasOfertas/NossasOfertas'
import {AssinaturaNewsLetter, Titulo, Subtitulo, Texto, Formulario, NewsLetter, Moldura} from './styled.tsx'

function AssinaturaNewsletter() {
  const [email, setEmail] = useState('');

  const enviaEmail = e => {
    e.preventDefault();
    const service_id = "service_s03ysud";
    const template_id = "template_3nj5zfe"

    const templateParams = {
      to_name: email
    }

    emailjs.send(service_id, template_id, templateParams, "T6IjFO-6IGLpLT4ox")
    .then(() => {
      console.log("E-mail enviado com sucesso")
    }, (err) => {
      alert("Um erro ocorreu", err);
    })
  }

  const HandleSubmit = e => {
    e.preventDefault();

    enviaEmail(e);
    alert("Obrigado pela sua assinatura, você receberá nossas novidades no e-mail " + email)
    setEmail("");
  }

  return (
    <>
    <AssinaturaNewsLetter>
        <NewsLetter>
            <Titulo>Sua casa com as</Titulo>
            <Subtitulo>melhores<br />plantas</Subtitulo>
            <Texto>Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.</Texto>
            <Formulario onSubmit={e => {HandleSubmit(e)}}>
                    <input type="email" placeholder='Insira seu e-mail' required value={email} onChange={(e) => {setEmail(e.target.value)}} />
                    <button type='submit'>Assinar newsletter</button>             
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