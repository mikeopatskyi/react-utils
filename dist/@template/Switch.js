"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
var react_1 = __importDefault(require("react"));
var Switch = function (_a) {
    var value = _a.value, cases = _a.cases, defaultCase = _a.defaultCase;
    var selectedCase = cases[value] || defaultCase;
    return react_1.default.createElement(react_1.default.Fragment, null, selectedCase);
};
exports.Switch = Switch;
