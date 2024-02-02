import { fireEvent, render, screen } from '@testing-library/svelte'

import Counter from './Counter.svelte'

describe('Counter', () => {
    test('should render', () => {
        render(Counter)

        const counter = screen.getByRole('button')

        expect(counter).toBeTruthy()
    })

    test('should increment', async () => {
        render(Counter)

        const counter = screen.getByRole('button')

        await fireEvent.click(counter)

        expect(counter.textContent).toBe('count is 1')
    })
})
