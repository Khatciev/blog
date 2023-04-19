import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLickTheme, AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {};
Primary.args = {
    children: 'Text',
    theme: AppLickTheme.PRIMARY,
};

export const Secondary: Story = {};
Secondary.args = {
    children: 'Text',
    theme: AppLickTheme.SECONDARY,
};

export const Red: Story = {};
Red.args = {
    children: 'Text',
    theme: AppLickTheme.RED,
};

export const PrimaryDark: Story = {};
PrimaryDark.args = {
    children: 'Text',
    theme: AppLickTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark: Story = {};
SecondaryDark.args = {
    children: 'Text',
    theme: AppLickTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark: Story = {};
RedDark.args = {
    children: 'Text',
    theme: AppLickTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];

// Outline.decorators = [ThemeDecorator(Theme.DARK)];
