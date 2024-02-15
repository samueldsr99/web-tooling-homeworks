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

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'default',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'default',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'default',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'default',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'default',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
  },
}

export const XtraLarge: Story = {
  args: {
    size: 'xl',
  },
}
