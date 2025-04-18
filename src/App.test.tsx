import { describe, it, expect } from 'vitest'
import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

    // Coin
    it('renders the coin to the screen', () => {
        // Should it starrt on heads or tails by default or should it even be random by default?
    })

    // Button
    it('renders the button to the screen', () => {

    })

})

describe('Interaction', () => {

    // Button click and result
    it('when the button is clicked, a result is displayed to the screen', () => {

    })

    // Differnet results
    it('results change on multiple flips', () => {

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