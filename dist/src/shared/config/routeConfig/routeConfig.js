var _a, _b;
import { jsx as _jsx } from "react/jsx-runtime";
import { AboutPage } from 'pages/AboutPage';
import MainPage from 'pages/MainPage/ui/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
export var AppRouters;
(function (AppRouters) {
    AppRouters["MAIN"] = "main";
    AppRouters["ABOUT"] = "about";
    AppRouters["NOT_FOUND"] = "not_found";
})(AppRouters || (AppRouters = {}));
export var RoutePath = (_a = {},
    _a[AppRouters.MAIN] = '/',
    _a[AppRouters.ABOUT] = '/about',
    _a[AppRouters.NOT_FOUND] = '*',
    _a);
export var routeConfig = (_b = {},
    _b[AppRouters.MAIN] = {
        path: RoutePath.main,
        element: _jsx(MainPage, {}, void 0),
    },
    _b[AppRouters.ABOUT] = {
        path: RoutePath.about,
        element: _jsx(AboutPage, {}, void 0),
    },
    _b[AppRouters.NOT_FOUND] = {
        path: RoutePath.not_found,
        element: _jsx(NotFoundPage, {}, void 0),
    },
    _b);
