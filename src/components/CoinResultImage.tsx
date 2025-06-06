import heads from '/images/heads.svg'
import tails from '/images/tails.svg'

type Props = {
    result: 'heads'| 'tails'
}

export default function CoinResultImage({ result }: Props) {
    const src = (result === 'heads'
        ? heads
        : tails
    )

    return (
        <img className='mb-20' src={src} alt={`coin showing ${result}`} />
    )

    
}