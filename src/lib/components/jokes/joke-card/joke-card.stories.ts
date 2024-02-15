import type { Meta, StoryObj } from '@storybook/svelte'

import JokeCard from './joke-card.svelte'

const meta = {
  title: 'Component/JokeCard',
  component: JokeCard,
} satisfies Meta<JokeCard>

export default meta
type Story = StoryObj<typeof meta>

export const Single: Story = {
  args: {
    category: 'pun',
    content: {
      first: 'There was a kidnapping at school.',
    },
  },
}

export const Double: Story = {
  args: {
    category: 'pun',
    content: {
      first: 'I told my wife she should embrace her mistakes.',
      second: 'She gave me a hug.',
    },
  },
}
