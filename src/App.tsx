import { useState } from 'react'
import './App.css'
import heads from '/images/heads.svg'
import tails from '/images/tails.svg'
import { flipCoin } from './utils/flipCoin'

function App() {
  const [result, setResult] = useState<'heads' | 'tails' | ''>('')

  function displayImage() {
    if (result === 'heads') return heads
    if (result === 'tails') return tails
    return ''
  }

  function handleFlipCoin() {
    setResult(flipCoin())
  }

  return (
    <>
      <h1 className="text-blue-900 font-bold underline">
        Flip the Coin Game
      </h1>

      <h2>Press the coin or the button to flip the coin</h2>

      {result && (
        <img 
          src={displayImage()} 
          alt={`coin showing ${result}`} 
        />
      )}

      {result && <p>{result}</p>}

      <button onClick={handleFlipCoin}>Random</button>
    </>
  )
}

export default App
