import { Button, ThemeButton } from './Button';
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
        theme: ThemeButton.CLEAR,
    },
};
export var Outline = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};
