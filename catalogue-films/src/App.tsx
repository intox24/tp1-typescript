import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Bouton } from './composants/Bouton'


function App() {
  
  return (

  <>
  <Bouton libelle="Valider" />
  <Bouton libelle="Supprimer" variante="danger" />
  <Bouton libelle="Indisponible" desactive />
  </>
  )
}

export default App
