import { describe, it, expect, vi } from 'vitest'
import { screen, render, waitFor, act } from '@testing-library/react'
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

})

describe('Interaction', () => {

    // Button click and result
    it('when the button is clicked, a result is displayed to the screen', async () => {
        const user = userEvent.setup()
        render(<App />)
        const button = screen.getByRole('button', { name: /random/i})
        expect(button).toBeInTheDocument()

        await user.click(button)

        const result = await screen.findByTestId('result')
        expect(result).toBeInTheDocument()

    })

    // Differnet results
    it('results change on multiple flips', async () => {
        

    })

    // Always a valid result
    it('checks the result is always valid', async () => {
        render(<App />)
        const user = userEvent.setup()
        const button = screen.getByRole('button', { name: /random/i})

        const validResults: string[] = ['heads', 'tails'] 

        for(let i = 0; i < 10; i++) {
            await user.click(button)
            const resultText = await screen.findByText(/heads|tails/i)
            expect(validResults).toContain(resultText.textContent?.toLocaleLowerCase())

        }
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

    // Result is shown in the correct DOM element
    it('is displays in the correct DOM element', () => {

    })

})

describe('Persistence', () => {
    // Last result is stored in local storage
    it('Persist last result in local storage', () => {

    })
})