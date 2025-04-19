import { useEffect, useState } from 'react'
import './App.css'
import heads from '/images/heads.svg'
import tails from '/images/tails.svg'
import { flipCoin } from './utils/flipCoin'
import CoinFlipAnimation from './components/CoinFlipAnimation'

function App() {
  const [coinResult, setCoinResult] = useState<'heads' | 'tails' | ''>('')
  const [frameIndex, setFrameIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  function displayImage() {
    if (coinResult === 'heads') return heads
    if (coinResult === 'tails') return tails
    return ''
  }

  function handleFlipCoin() {
    setIsFlipping(true)
    setCoinResult(flipCoin())
    setTimeout(() => { 
      setIsFlipping(false)
    },2000)

  }

  return (
    <>
      <h1 className="text-blue-900 font-bold underline">
        Flip the Coin Game
      </h1>

      <h2>Press the coin or the button to flip the coin</h2>

      {coinResult && (
        <img 
          src={displayImage()} 
          alt={`coin showing ${coinResult}`} 
        />
      )}

      {coinResult && <p data-testid="result">{coinResult}</p>}     


      <button disabled={isFlipping} onClick={handleFlipCoin}>Random</button>
    </>
  )
}

export default App
