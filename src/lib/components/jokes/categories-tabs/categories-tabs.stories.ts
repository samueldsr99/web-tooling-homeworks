import type { Meta, StoryObj } from '@storybook/svelte'

import CategoriesTabsView from './categories-tabs-view.svelte'

const meta = {
  title: 'Component/CategoriesTabs',
  component: CategoriesTabsView,
} satisfies Meta<CategoriesTabsView>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { category: 'pun' },
}
