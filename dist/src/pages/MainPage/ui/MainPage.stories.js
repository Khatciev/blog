import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';
var meta = {
    title: 'pages/MainPage',
    component: MainPage,
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
