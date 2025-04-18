import './App.css'
import heads from '/images/heads.svg'

function App() {
  
  return (
    <>
      <h1 className="text-blue-900 font-bold underline">
        Flip the Coin Game
      </h1>
      <h2>Press the coin or the button to flip the coin</h2>
      <img src={heads} alt='coin showing heads'/>
      <button onClick={() => console.log("Spin the coin")}>Random</button>
    </>
  )
}

export default App
