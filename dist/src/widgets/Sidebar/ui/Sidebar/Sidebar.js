var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwither } from 'shared/ui/ThemeSwitcher';
import LangSwitcher from 'shared/ui/LangSwither/LangSwither';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLickTheme, AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import cls from './Sidebar.module.scss';
export var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var _c = useState(false), collapsed = _c[0], setCollapsed = _c[1];
    var t = useTranslation().t;
    var onToggleCollapsed = function () {
        setCollapsed(function (prev) { return !prev; });
    };
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames(cls.Sidebar, (_b = {}, _b[cls.collapsed] = collapsed, _b), [className]) }, { children: [_jsx(Button, __assign({ square: true, className: cls.collapsedBtn, "data-testid": "sidebar-toggle", onClick: onToggleCollapsed, size: ButtonSize.L, theme: ButtonTheme.BACKGROUND_INVERTED }, { children: collapsed ? '>' : '<' }), void 0), _jsxs("div", __assign({ className: cls.items }, { children: [_jsxs(AppLink, __assign({ theme: AppLickTheme.PRIMARY, to: RoutePath.main, className: cls.item }, { children: [_jsx(MainIcon, { className: cls.icon }, void 0), _jsx("span", __assign({ className: cls.link }, { children: t('Главная') }), void 0)] }), void 0), _jsxs(AppLink, __assign({ className: cls.item, theme: AppLickTheme.PRIMARY, to: RoutePath.about }, { children: [_jsx(AboutIcon, { className: cls.icon }, void 0), _jsx("span", __assign({ className: cls.link }, { children: t('О сайте') }), void 0)] }), void 0)] }), void 0), _jsxs("div", __assign({ className: cls.switchers }, { children: [_jsx(ThemeSwither, {}, void 0), _jsx(LangSwitcher, { short: collapsed, className: cls.lang }, void 0)] }), void 0)] }), void 0));
};
