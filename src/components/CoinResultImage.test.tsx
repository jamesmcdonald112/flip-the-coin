import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CoinResultImage from "./CoinResultImage";


describe('CoinResultImage', () => {
    it('render heads image with correct alt text', () => {
        render(<CoinResultImage result="heads" />)
        expect(screen.getByAltText(/coin showing heads/i)).toBeInTheDocument()
    })

    it('render tails image with correct alt text', () => {
        render(<CoinResultImage result="tails" />)
        expect(screen.getByAltText(/coin showing tails/i)).toBeInTheDocument()
    })


})