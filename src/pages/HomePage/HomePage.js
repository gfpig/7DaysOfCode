import React from 'react'
import './homepage.css'
import Menu from '../../components/Menu/Menu'
import AssinaturaNewsletter from '../../components/AssinaturaNewsletter/AssinaturaNewsletter'

function HomePage() {
  return (
    <main>
        <Menu />
        <AssinaturaNewsletter />
    </main>
  )
}

export default HomePage