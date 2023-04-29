import { jsx as _jsx } from "react/jsx-runtime";
import { fireEvent, screen } from '@testing-library/react';
import { componentRouter } from 'shared/lib/tests/componentRouter/componentRouter';
import { Sidebar } from './Sidebar';
describe('Sidebar', function () {
    test('the render', function () {
        componentRouter(_jsx(Sidebar, {}, void 0));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test(' tests toggle btn', function () {
        componentRouter(_jsx(Sidebar, {}, void 0));
        var toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
