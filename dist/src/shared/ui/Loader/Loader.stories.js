import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Loader } from './Loader';
var meta = {
    title: 'shared/Loader',
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export default meta;
export var Normal = {};
Normal.args = {};
export var Dark = {};
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
