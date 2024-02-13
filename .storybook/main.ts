import type { StorybookConfig } from '@storybook/svelte-vite'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],

    framework: {
        name: '@storybook/svelte-vite',
        options: {},
    },

    docs: {
        autodocs: 'tag',
    },

    addons: ['@storybook/addon-styling-webpack']
}
export default config
