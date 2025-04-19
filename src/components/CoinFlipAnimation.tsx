import heads from '/images/heads.svg'
import tails from '/images/tails.svg'
import shadow from '/images/shadow.svg'

type CoinFlipAnimationProps = {
    isFlipping: boolean
    coinResult: 'heads' | 'tails'
    frameIndex: number
}

export default function CoinFlipAnimation( { isFlipping, coinResult, frameIndex}: CoinFlipAnimationProps) {

    const coinImages = [heads, shadow, tails, shadow]

    const altText = () => {
        if(isFlipping) {return 'coin flipping'}
        else {
            return coinResult === 'heads' ? 
            'coin showing heads' : 
            'coin showing tails'
        }
    }

    console.log(altText())

    return (
        <section>
            <img src={coinImages[frameIndex]} alt={altText()} />
        </section>
    )   
}