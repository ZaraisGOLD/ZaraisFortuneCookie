import './App.css'
import Button from './components/Button'
import Phrases from './components/Phrases'
import phrases from './utils/phrases.json'
import getRandomArray from './utils/getRandomArray'
import { useState } from 'react'

function App() {

  const imgs = [1, 2, 3, 4]

  const [phraseRandom, setphraseRandom] = useState(getRandomArray(phrases))
  const [numberImg, setnumberImg] = useState(getRandomArray(imgs))


  const appStyle = {
    backgroundImage: `url('/fortune-image/fondo${numberImg}.jpg')`
  }

  return (
    <div style={appStyle} className="App">
      <h1 className='App__title'>Galletas de la Fortuna</h1>
      <Button
        setphraseRandom={setphraseRandom}
        setnumberImg={setnumberImg}
        imgs={imgs}
      />
      <Phrases
        phraseRandom={phraseRandom}
      />
    </div>
  )
}

export default App
