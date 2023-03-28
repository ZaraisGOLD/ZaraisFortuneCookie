import React from 'react'

const Phrases = ({ phraseRandom }) => {
    return (
        <>
            <div className="App__main">
                <div className='App__body'>
                    <svg className='App__svg' xmlns="http://www.w3.org/2000/svg" viewBox="-4 1.667 8 3.634">
                        <path d="M -4 2 Q -2.007 2.571 0 2 Q 1.99 1.334 4 2 L 4 5 Q 1.99 4.35 0 5 Q -2.022 5.602 -4 5 L -4 2" fill="currentColor" />
                    </svg>
                    <p className='App__phrase'>" {phraseRandom.phrase} "</p>
                </div>
                <div className='App__author'>
                    <p><span>Fuente: </span>{phraseRandom.author}</p>
                </div>
            </div>
        </>
    )
}

export default Phrases