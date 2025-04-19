import { describe, it, expect, vi } from 'vitest'
import { screen, render, waitFor} from '@testing-library/react'
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

    // Button
    it('renders the button to the screen', () => {
        render(<App />)
        const button = screen.getByRole('button', { name: /random/i})
        expect(button).toBeInTheDocument()
    })


})

describe('Interaction', () => {

    // Button click and text result 
    it('when the random button is clicked, a text result is displayed to the screen', async () => {
        const user = userEvent.setup()
        render(<App />)
        const button = screen.getByRole('button', { name: /random/i})
        expect(button).toBeInTheDocument()

        await user.click(button)

        const result = await screen.findByTestId('result', {}, { timeout: 3000 })

        expect(result).toBeInTheDocument()


    })

    // Button click and image result
    it('when the random button it clicked, a coin result is displayed', async () => {
        const user = userEvent.setup()
        render(<App />)
        const button = screen.getByRole('button', { name: /random/i})
        expect(button).toBeInTheDocument()

        await user.click(button)

        // Animation starts
        const flippingImage = await screen.findByAltText(/coin flipping/i)
        expect(flippingImage).toBeInTheDocument()

    })

    // Button disabled during the spin
    it('checks the button is disabled during the spin', async () => {
        render(<App />)
        const user = userEvent.setup()

        const button = screen.getByRole('button', { name: /random/i })
        expect(button).not.toBeDisabled()

        await user.click(button)

        expect(button).toBeDisabled()


    })

})

describe('Persistence', () => {
    // Last result is stored in local storage
    it('Persist last result in local storage', () => {

    })
})