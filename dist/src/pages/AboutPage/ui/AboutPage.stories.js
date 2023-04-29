import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';
var meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
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
