import { jsx as _jsx } from "react/jsx-runtime";
import { BrowserRouter } from 'react-router-dom';
// @ts-ignore
export var RouterDecorator = function (story) { return (_jsx(BrowserRouter, { children: story() }, void 0)); };
