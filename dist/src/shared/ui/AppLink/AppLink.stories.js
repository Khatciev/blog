import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLickTheme, AppLink } from './AppLink';
var meta = {
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
export var Primary = {};
Primary.args = {
    children: 'Text',
    theme: AppLickTheme.PRIMARY,
};
export var Secondary = {};
Secondary.args = {
    children: 'Text',
    theme: AppLickTheme.SECONDARY,
};
export var Red = {};
Red.args = {
    children: 'Text',
    theme: AppLickTheme.RED,
};
export var PrimaryDark = {};
PrimaryDark.args = {
    children: 'Text',
    theme: AppLickTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export var SecondaryDark = {};
SecondaryDark.args = {
    children: 'Text',
    theme: AppLickTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
export var RedDark = {};
RedDark.args = {
    children: 'Text',
    theme: AppLickTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
// Outline.decorators = [ThemeDecorator(Theme.DARK)];
