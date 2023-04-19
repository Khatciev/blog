import { Story } from '@storybook/blocks';
import { BrowserRouter } from 'react-router-dom';

// @ts-ignore
export const RouterDecorator = (story: () => Story) => (
    <BrowserRouter>
        {story()}
    </BrowserRouter>
);
