import type { Meta, StoryObj } from '@storybook/svelte'

import ButtonView from './buttonview.svelte'

const meta = {
    title: 'UI/Button',
    component: ButtonView,
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
} satisfies Meta<ButtonView>

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
