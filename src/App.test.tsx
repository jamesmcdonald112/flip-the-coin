import { describe, it, expect } from 'vitest'
import { screen, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'


describe('Render', () => {
    // Text
    it('renders the text to the screen, including the title and subheading', () => {
        render(<App />)
        const heading = screen.getByRole('heading', { level: 1})
        expect(heading).toHaveTextContent(/flip the coin/i)
        
        
        const subHeading = screen.getByRole('heading', { level: 2})
        expect(subHeading).toHaveTextContent(/Press the button to flip the coin/i)
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