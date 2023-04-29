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
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { useCallback, useState } from 'react';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';
export var Navbar = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var _b = useState(false), isAuthModal = _b[0], setIsAuthModal = _b[1];
    var onToggleModal = useCallback(function () {
        setIsAuthModal(function (prevState) { return !prevState; });
    }, []);
    return (_jsxs("div", __assign({ className: classNames(cls.Navbar, {}, [className]) }, { children: [_jsx(Button, __assign({ theme: ButtonTheme.CLEAR_INVERTED, onClick: onToggleModal, className: cls.links }, { children: t('Войти') }), void 0), _jsx(Modal, __assign({ isOpen: isAuthModal, onClose: onToggleModal }, { children: t('используется Lorem Ipsum') }), void 0)] }), void 0));
};
