import { render, screen } from '@testing-library/svelte'

import App from './App.svelte'

describe('App', () => {
    test('should render', () => {
        render(App)

        const app = screen.getByRole('heading')

        expect(app).toBeTruthy()
    })
})
