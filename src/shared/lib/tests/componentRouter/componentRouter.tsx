import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18ForTests from 'shared/config/i18n/i18ForTests';
import { MemoryRouter } from 'react-router-dom';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export interface componentRouterOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>,
}
export function componentRouter(component: ReactNode, options: componentRouterOptions = {}) {
    const {
        route = '/',
        initialState,
    } = options;
    return render(
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18ForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>,

    );
}
