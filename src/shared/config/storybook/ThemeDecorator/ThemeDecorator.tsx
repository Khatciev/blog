import 'app/styles/index.scss';
import { Story } from '@storybook/blocks';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

// @ts-ignore
export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            {StoryComponent()}
        </div>
    </ThemeProvider>

);
