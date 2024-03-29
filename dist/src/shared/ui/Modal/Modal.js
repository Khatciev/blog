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
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { useState, useRef, useEffect, useCallback, } from 'react';
import cls from './Modal.module.scss';
var ANIMATION_DELAY = 300;
export var Modal = function (props) {
    var _a;
    var className = props.className, children = props.children, isOpen = props.isOpen, onClose = props.onClose;
    var _b = useState(false), isClosing = _b[0], setIsClosing = _b[1];
    var timerRef = useRef(null);
    var mods = (_a = {},
        _a[cls.opened] = isOpen,
        _a[cls.isClosing] = isClosing,
        _a);
    var onCloseHandler = useCallback(function () {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(function () {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);
    var onContentClick = function (e) { return e.stopPropagation(); };
    var onKeyDown = useCallback(function (e) {
        if (e.key === 'Escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);
    useEffect(function () {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return function () {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    return (_jsx("div", __assign({ className: classNames(cls.Modal, mods, [className]) }, { children: _jsx("div", __assign({ className: cls.overlay, onClick: onCloseHandler }, { children: _jsx("div", __assign({ className: cls.content, onClick: onContentClick }, { children: children }), void 0) }), void 0) }), void 0));
};
