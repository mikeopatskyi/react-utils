"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.While = void 0;
var react_1 = __importDefault(require("react"));
var While = function (_a) {
    var condition = _a.condition, children = _a.children;
    return condition ? react_1.default.createElement(react_1.default.Fragment, null, children) : null;
};
exports.While = While;
