import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import des class
import { pixelArt } from './Models/pixelArt.class.js'
import { PixelArt } from './Components/PixelArt'
import { ColorPicker } from './Components/ColorPicker.jsx'

function App() {
  const [ht, setHt] = useState();
  const [lg, setLg] = useState();

  const hauteur = sessionStorage.getItem('hauteur') || 20;
  const largeur = sessionStorage.getItem('largeur') || 20;

  console.log('Hauteur : ', hauteur, ', largeur : ', largeur);
  
  const pix = new pixelArt('testPixelArt', 'St-Fabio', hauteur, largeur);
  pix.tableau[1].codeCouleur = 'FF0000';

  const handlePix = () => {
    sessionStorage.setItem('hauteur', ht);
    sessionStorage.setItem('largeur', lg);
    window.location.reload();
  }

  const handleHauteur = (event) => {
    setHt(event.target.value);
  }

  const handleLargeur = (event) => {
    setLg(event.target.value);
  }

  if (pix.tableau.length != 0) {
    return (
      <>
        <ColorPicker pixelArt={pix}/>
        <PixelArt pixelArt={pix} />
        <input type="text" name='Hauteur' onChange={handleHauteur} placeholder='Hauteur'/>
        <input type="text" name='Largeur' onChange={handleLargeur} placeholder='Largeur'/>
        <button onClick={handlePix}>Rafraichir</button>
      </>
    )
  } else {
    return (
      <>
        <input type="text" name='Hauteur' onChange={handleHauteur} placeholder='Hauteur'/>
        <input type="text" name='Largeur' onChange={handleLargeur} placeholder='Largeur'/>
        <button onClick={handlePix}>Rafraichir</button>
      </>
    )
  }
}

export default App
