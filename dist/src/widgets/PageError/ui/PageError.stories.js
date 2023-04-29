import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageError } from './PageError';
var meta = {
    title: 'widgets/PageError',
    component: PageError,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
};
export default meta;
export var Light = {};
Light.args = {};
export var Dark = {};
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
