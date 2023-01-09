/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "config_js-lib_cartState_js";
exports.ids = ["config_js-lib_cartState_js"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"endpoint\": function() { return /* binding */ endpoint; },\n/* harmony export */   \"prodEndpoint\": function() { return /* binding */ prodEndpoint; },\n/* harmony export */   \"perPage\": function() { return /* binding */ perPage; }\n/* harmony export */ });\n// This is client side config only - don't put anything in here that shouldn't be public!\nconst endpoint = `http://localhost:3000/api/graphql`;\nconst prodEndpoint = `fill me in when we deploy`;\nconst perPage = 4;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9jb25maWcuanM/YTFiYyJdLCJuYW1lcyI6WyJlbmRwb2ludCIsInByb2RFbmRwb2ludCIsInBlclBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ08sTUFBTUEsUUFBUSxHQUFJLG1DQUFsQjtBQUNBLE1BQU1DLFlBQVksR0FBSSwyQkFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBaEIiLCJmaWxlIjoiLi9jb25maWcuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIGNsaWVudCBzaWRlIGNvbmZpZyBvbmx5IC0gZG9uJ3QgcHV0IGFueXRoaW5nIGluIGhlcmUgdGhhdCBzaG91bGRuJ3QgYmUgcHVibGljIVxuZXhwb3J0IGNvbnN0IGVuZHBvaW50ID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ3JhcGhxbGA7XG5leHBvcnQgY29uc3QgcHJvZEVuZHBvaW50ID0gYGZpbGwgbWUgaW4gd2hlbiB3ZSBkZXBsb3lgO1xuZXhwb3J0IGNvbnN0IHBlclBhZ2UgPSA0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./config.js\n");

/***/ }),

/***/ "./lib/cartState.js":
/*!**************************!*\
  !*** ./lib/cartState.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartStateProvider\": function() { return /* binding */ CartStateProvider; },\n/* harmony export */   \"useCart\": function() { return /* binding */ useCart; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/simonproudfoot/Projects/nextjs-course/Advanced-React/sick-fits/frontend/lib/cartState.js\";\n\nconst LocalStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst LocalStateProvider = LocalStateContext.Provider;\n\nfunction CartStateProvider({\n  children\n}) {\n  // custom provider, stores data (state) and functionality (updaters) in here and anyone can access via consumer\n  const {\n    0: cartOpen,\n    1: setCartOpen\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n\n  function toggleCart() {\n    setCartOpen(cartOpen);\n  }\n\n  function closeCart() {\n    setCartOpen(false);\n  }\n\n  function openCart() {\n    setCartOpen(true);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LocalStateProvider, {\n    value: {\n      cartOpen,\n      setCartOpen,\n      toggleCart,\n      closeCart,\n      openCart\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n} // make a custom hook for accessing the cart local state\n\n\nfunction useCart() {\n  // use a consumer here to acces the local state\n  const all = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(LocalStateContext);\n  return all;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvY2FydFN0YXRlLmpzPzdhNDQiXSwibmFtZXMiOlsiTG9jYWxTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiTG9jYWxTdGF0ZVByb3ZpZGVyIiwiUHJvdmlkZXIiLCJDYXJ0U3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwiY2FydE9wZW4iLCJzZXRDYXJ0T3BlbiIsInVzZVN0YXRlIiwidG9nZ2xlQ2FydCIsImNsb3NlQ2FydCIsIm9wZW5DYXJ0IiwidXNlQ2FydCIsImFsbCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQSxpQkFBaUIsZ0JBQUdDLG9EQUFhLEVBQXZDO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUdGLGlCQUFpQixDQUFDRyxRQUE3Qzs7QUFFQSxTQUFTQyxpQkFBVCxDQUEyQjtBQUFFQztBQUFGLENBQTNCLEVBQXlDO0FBQ3ZDO0FBRUEsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQywrQ0FBUSxDQUFDLEtBQUQsQ0FBeEM7O0FBRUEsV0FBU0MsVUFBVCxHQUFzQjtBQUNwQkYsZUFBVyxDQUFDRCxRQUFELENBQVg7QUFDRDs7QUFFRCxXQUFTSSxTQUFULEdBQXFCO0FBQ25CSCxlQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0Q7O0FBRUQsV0FBU0ksUUFBVCxHQUFvQjtBQUNsQkosZUFBVyxDQUFDLElBQUQsQ0FBWDtBQUNEOztBQUVELHNCQUNFLDhEQUFDLGtCQUFEO0FBQW9CLFNBQUssRUFBRTtBQUFFRCxjQUFGO0FBQVlDLGlCQUFaO0FBQXlCRSxnQkFBekI7QUFBcUNDLGVBQXJDO0FBQWdEQztBQUFoRCxLQUEzQjtBQUFBLGNBQ0dOO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQyxDQUVEOzs7QUFDQSxTQUFTTyxPQUFULEdBQW1CO0FBQ2pCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHQyxpREFBVSxDQUFDZCxpQkFBRCxDQUF0QjtBQUNBLFNBQU9hLEdBQVA7QUFDRCIsImZpbGUiOiIuL2xpYi9jYXJ0U3RhdGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMb2NhbFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IExvY2FsU3RhdGVQcm92aWRlciA9IExvY2FsU3RhdGVDb250ZXh0LlByb3ZpZGVyO1xuXG5mdW5jdGlvbiBDYXJ0U3RhdGVQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgLy8gY3VzdG9tIHByb3ZpZGVyLCBzdG9yZXMgZGF0YSAoc3RhdGUpIGFuZCBmdW5jdGlvbmFsaXR5ICh1cGRhdGVycykgaW4gaGVyZSBhbmQgYW55b25lIGNhbiBhY2Nlc3MgdmlhIGNvbnN1bWVyXG5cbiAgY29uc3QgW2NhcnRPcGVuLCBzZXRDYXJ0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlQ2FydCgpIHtcbiAgICBzZXRDYXJ0T3BlbihjYXJ0T3Blbik7XG4gIH1cblxuICBmdW5jdGlvbiBjbG9zZUNhcnQoKSB7XG4gICAgc2V0Q2FydE9wZW4oZmFsc2UpO1xuICB9XG5cbiAgZnVuY3Rpb24gb3BlbkNhcnQoKSB7XG4gICAgc2V0Q2FydE9wZW4odHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMb2NhbFN0YXRlUHJvdmlkZXIgdmFsdWU9e3sgY2FydE9wZW4sIHNldENhcnRPcGVuLCB0b2dnbGVDYXJ0LCBjbG9zZUNhcnQsIG9wZW5DYXJ0IH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvTG9jYWxTdGF0ZVByb3ZpZGVyPlxuICApO1xufVxuXG4vLyBtYWtlIGEgY3VzdG9tIGhvb2sgZm9yIGFjY2Vzc2luZyB0aGUgY2FydCBsb2NhbCBzdGF0ZVxuZnVuY3Rpb24gdXNlQ2FydCgpIHtcbiAgLy8gdXNlIGEgY29uc3VtZXIgaGVyZSB0byBhY2NlcyB0aGUgbG9jYWwgc3RhdGVcbiAgY29uc3QgYWxsID0gdXNlQ29udGV4dChMb2NhbFN0YXRlQ29udGV4dCk7XG4gIHJldHVybiBhbGw7XG59XG5cbmV4cG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyLCB1c2VDYXJ0IH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/cartState.js\n");

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;