import { useState } from 'react'
import './App.css'
import { flipCoin } from './utils/flipCoin'
import CoinFlipAnimation from './components/CoinFlipAnimation'
import CoinResultImage from './components/CoinResultImage'

function App() {
  const [coinResult, setCoinResult] = useState<'heads' | 'tails'>('heads')
  const [frameIndex, setFrameIndex] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  function handleFlipCoin() {
    setIsFlipping(true)
    const result = flipCoin()
  
    const intervalId = window.setInterval(() => {
      setFrameIndex(prevIndex => (prevIndex + 1) % 4)
    }, 100)
  
    setTimeout(() => {
      setIsFlipping(false)
      clearInterval(intervalId)
      setFrameIndex(result === 'heads' ? 0 : 2)
      setCoinResult(result)
    }, 2000)
  }

  function CoinStatus() {
    if(isFlipping) return <p>Flipping...</p>
    else {
      return <p data-testid='result'>{coinResult}</p>
    }
  }

  return (
    <>
      <h1 className="text-blue-900 font-bold underline">
        Flip the Coin Game
      </h1>

      <h2>Press the coin or the button to flip the coin</h2>

      {isFlipping 
        ? <CoinFlipAnimation isFlipping={isFlipping} coinResult={coinResult} frameIndex={frameIndex}/>
        : <CoinResultImage result={coinResult} />
      }
      
      <CoinStatus />
      
      <button disabled={isFlipping} onClick={handleFlipCoin}>Random</button>
    </>
  )
}

export default App
