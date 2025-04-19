import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import CoinFlipAnimation from './CoinFlipAnimation'
 

describe('CoinFlipAnimation', () => {
  it('shows the final coin image (heads or tails) when not flipping', () => {
    render(<CoinFlipAnimation isFlipping={false} coinResult="heads" frameIndex={0}/>)
    const img = screen.getByAltText(/coin showing heads/i)
    expect(img).toBeInTheDocument()
  })

  

  it('renders tails when not flipping and side is tails', () => {
    render(<CoinFlipAnimation isFlipping={false} coinResult="tails" frameIndex={0}/>)
    const img = screen.getByAltText(/coin showing tails/i)
    expect(img).toBeInTheDocument()
  })

  it('only renders one image at a time', () => {
    render(<CoinFlipAnimation isFlipping={true} coinResult="tails" frameIndex={2} />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(1)
  })


  it('shows the flipping animation when isFlipping is true', () => {
    render(<CoinFlipAnimation isFlipping={true} coinResult="heads" frameIndex={1}/>)
    const img = screen.getByAltText(/coin flipping/i)
    expect(img).toBeInTheDocument()
  })

})