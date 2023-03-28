import React from 'react'
import getRandomArray from '../utils/getRandomArray'
import phrases from '../utils/phrases.json'

const Button = ({ setphraseRandom, setnumberImg, imgs }) => {

    const handleButton = () => {
        setphraseRandom(getRandomArray(phrases))
        setnumberImg(getRandomArray(imgs))
    }

    return (
        <button className='App__button' onClick={handleButton}>Probar mi suerte</button>
    )
}

export default Button