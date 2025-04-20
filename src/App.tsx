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
    const styles = "mt-4 text-white text-xl font-semibold uppercase"
    if(isFlipping) return <p className={styles}>Flipping...</p>
    else {
      return <p data-testid='result' className={styles}>{coinResult}</p>
    }
  }

  return (
    <>
    <div className="h-screen flex flex-col items-center justify-center px-4 bg-[#35383F] text-white">
      <h1 className="text-4xl font-semibold text-white drop-shadow mb-2">Flip the coin

      </h1>


      <h2 className="text-xl text-gray-300 mb-20">Press the button to flip the coin</h2>
      {isFlipping 
        ? <CoinFlipAnimation isFlipping={isFlipping} coinResult={coinResult} frameIndex={frameIndex}/>
        : <CoinResultImage result={coinResult} />
      }
      
      <CoinStatus />
      
      <button  disabled={isFlipping} onClick={handleFlipCoin} className='w-40 h-12 mt-15 bg-blue-500 shadow-md rounded uppercase hover:bg-blue-300 disabled:opacity-50 transition-all'>Random</button>
    </div>
    </>
  )
}

export default App
