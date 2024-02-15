import { fireEvent, render, screen } from '@testing-library/svelte'

import Greeter from './Greeter.svelte'

describe('Greeter', () => {
  test('should render', () => {
    render(Greeter)

    expect(screen.getByRole('textbox')).toBeTruthy()
  })

  test('should greet when input', async () => {
    render(Greeter)

    const input = screen.getByRole('textbox')

    await fireEvent.input(input, { target: { value: 'world' } })

    expect(screen.getByText('Hello, world!')).toBeTruthy()
  })
})
