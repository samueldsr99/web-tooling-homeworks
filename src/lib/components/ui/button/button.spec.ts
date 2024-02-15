import { fireEvent, render, screen } from '@testing-library/svelte'
import { vi } from 'vitest'

import ButtonView from './buttonview.svelte'

describe('ButtonView', () => {
  test('should render', () => {
    render(ButtonView)

    const button = screen.getByRole('button')

    expect(button).toBeTruthy()
  })

  test('should render slot text', () => {
    render(ButtonView, {})

    const button = screen.getByRole('button')

    expect(button.textContent).toBe('Hello')
  })
})
