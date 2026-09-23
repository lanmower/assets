import { createElement } from "./createElement.js";
import { Fragment } from "./types.js";
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

export * from "./jsx.js";
export { createElement, Fragment };
export default createElement;
//# sourceMappingURL=factory.js.map
