import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent, { UserEvent } from '@testing-library/user-event'
import App from './App'


describe('Render', () => {
    // Text
    it('renders the text to the screen, including the title and subheading', () => {
        render(<App />)
        const heading = screen.getByText(/flip the coin game/i)
        const subheading = screen.getByText(/Press the coin or the button to flip the coin/i)

        expect(heading).toBeInTheDocument()
        expect(subheading).toBeInTheDocument()
    

    })

    // Button
    it('renders the button to the screen', () => {
        render(<App />)
        const button = screen.getByRole('button', { name: /random/i})
        expect(button).toBeInTheDocument()
    })

    // Coin
    it('renders the coin to the screen', async () => {
        render(<App />)
        const user = userEvent.setup()
        const button = screen.getByRole('button', { name: /random/i})
        await user.click(button)
        const coin = screen.getByAltText(/coin showing/i)

        expect(coin).toBeInTheDocument()
    })

})

describe('Interaction', () => {

    // Button click and result
    it('when the button is clicked, a result is displayed to the screen', async () => {
        render(<App />)
        const user = userEvent.setup()
        const button = screen.getByRole('button', { name: /random/i})

        await user.click(button)

        const result = await screen.findByText(/heads|tails/i)

        expect(result).toBeInTheDocument()
    })

    // Differnet results
    it('results change on multiple flips', async () => {
        render(<App />)
        const user = userEvent.setup()
        const button = screen.getByRole('button', { name: /random/i})

        let headCount: number = 0
        let tailCount: number = 0
        

        for(let i =  0; i < 20; i++) {
            await user.click(button)
            const result: HTMLImageElement = await screen.findByAltText(/coin showing (heads|tails)/i)
            
            const altText = result.alt
            if(altText.includes('heads')) headCount++
            if(altText.includes('tails')) tailCount++
        }

        expect(headCount).toBeGreaterThan(0)
        expect(tailCount).toBeGreaterThan(0)

    })

    // Always a valid result
    it('checks the result is always valid', () => {

    })

    // Coin animation during flip
    it('checks the coin changes images during the flip', () => {

    })

    // Button disabled during the spin
    it('checks the button is disabled during the spin', () => {

    })

    // Result is shown in the correct DOM element
    it('is displays in the correct DOM element', () => {

    })

})

describe('Persistence', () => {
    // Last result is stored in local storage
    it('Persist last result in local storage', () => {

    })
})