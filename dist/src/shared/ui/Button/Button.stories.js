import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';
var meta = {
    title: 'shared/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export default meta;
export var Primary = {
    args: {
        children: 'Text',
    },
};
export var Clear = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR,
    },
};
export var ClearInverted = {
    args: {
        children: 'Text',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};
export var Outline = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};
export var OutlineSizeS = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.S,
    },
};
export var OutlineSizeM = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.M,
    },
};
export var OutlineSizeL = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.L,
    },
};
export var OutlineSizeXL = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
        size: ButtonSize.XL,
    },
};
export var OutlineDark = {
    args: {
        children: 'Text',
        theme: ButtonTheme.OUTLINE,
    },
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
export var BackgroundTheme = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND,
    },
};
export var BackgroundInverted = {
    args: {
        children: 'Text',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
export var Square = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
    },
};
export var SquareSizeL = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.L,
    },
};
export var SquareSizeXL = {
    args: {
        children: '>',
        theme: ButtonTheme.BACKGROUND_INVERTED,
        square: true,
        size: ButtonSize.XL,
    },
};
