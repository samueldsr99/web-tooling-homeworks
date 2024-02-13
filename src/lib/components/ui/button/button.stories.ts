import type { Meta, StoryObj } from '@storybook/svelte'

import Button from './button.svelte'

const meta = {
    title: 'UI/Button',
    component: Button,
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'default',
                'destructive',
                'outline',
                'secondary',
                'ghost',
                'link',
            ],
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'sm', 'lg', 'icon'],
        },
    },
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        variant: 'default',
        size: 'default',
    },
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        size: 'default',
    },
}
