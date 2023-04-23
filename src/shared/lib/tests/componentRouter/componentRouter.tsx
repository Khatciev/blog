import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18ForTests from 'shared/config/i18n/i18ForTests';
import { MemoryRouter } from 'react-router-dom';

export interface componentRouterOptions {
    route?: string;
}
export function componentRouter(component: ReactNode, options: componentRouterOptions = {}) {
    const {
        route = '/',
    } = options;
    return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18ForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>,
    );
}
