/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Checkout\": function() { return /* binding */ Checkout; },\n/* harmony export */   \"CheckoutForm\": function() { return /* binding */ CheckoutForm; }\n/* harmony export */ });\n/* harmony import */ var _Users_simonproudfoot_Projects_nextjs_course_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_simonproudfoot_Projects_nextjs_course_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_simonproudfoot_Projects_nextjs_course_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_simonproudfoot_Projects_nextjs_course_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_simonproudfoot_Projects_nextjs_course_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @stripe/react-stripe-js */ \"./node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js\");\n/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @stripe/stripe-js */ \"./node_modules/@stripe/stripe-js/dist/stripe.esm.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ \"./node_modules/nprogress/nprogress.js\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_CheckoutButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/CheckoutButton */ \"./components/styles/CheckoutButton.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/Users/simonproudfoot/Projects/nextjs-course/Advanced-React/sick-fits/frontend/components/Checkout.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = (0,_Users_simonproudfoot_Projects_nextjs_course_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__.default)([\"\\n  box-shadow: 0 1px 2px 2px gba(0, 0, 0, 0.05);\\n  border: 1px solid rgba(0, 0, 0, 0.06);\\n  border-radius: 5px;\\n  padding: 1rem;\\n  display: grid;\\n  grid-gap: 1rem;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\nvar CheckoutFormStyles = styled_components__WEBPACK_IMPORTED_MODULE_9__.default.form(_templateObject()); // Not using our usual form component here because we will be using Stripe elements\n\n_c = CheckoutFormStyles;\nvar stripeLib = (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_5__.loadStripe)(\"pk_test_2zGUIHbGaVTQRgCpBYZWoMKU008ZNEzLx1\");\n\nfunction CheckoutForm() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(),\n      error = _useState[0],\n      setError = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var stripe = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useStripe)();\n  var elements = (0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useElements)();\n\n  function handleSubmit(_x) {\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  function _handleSubmit() {\n    _handleSubmit = (0,_Users_simonproudfoot_Projects_nextjs_course_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_simonproudfoot_Projects_nextjs_course_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n      var _yield$stripe$createP, error, paymentMethod;\n\n      return _Users_simonproudfoot_Projects_nextjs_course_Advanced_React_sick_fits_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              // 1. Stop the form from submitting, turn loader on\n              e.preventDefault();\n              setLoading(true); // 2. Start page transition\n\n              nprogress__WEBPACK_IMPORTED_MODULE_6___default().start(); // 3. Create payment method via stripe, token comes back here if successful\n\n              _context.next = 5;\n              return stripe.createPaymentMethod({\n                type: 'card',\n                card: elements.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement)\n              });\n\n            case 5:\n              _yield$stripe$createP = _context.sent;\n              error = _yield$stripe$createP.error;\n              paymentMethod = _yield$stripe$createP.paymentMethod;\n              console.log(paymentMethod); // 4. Handle any eerrors from stripe\n\n              if (error) {\n                setError(error);\n              } // 5. Send token from step 3 to keystone servia via custom mutation\n              // 6. Change page to view the order\n              // 7. Close cart\n              // 8. Turn loader off\n\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _handleSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CheckoutFormStyles, {\n    onSubmit: handleSubmit,\n    children: [error && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n      children: error.message\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 19\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.CardElement, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_styles_CheckoutButton__WEBPACK_IMPORTED_MODULE_8__.CheckoutButton, {\n      children: \"Check Out Now\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, this);\n}\n\n_s(CheckoutForm, \"/GTcQkkNlUgykvoAY6A4l3RHUP4=\", false, function () {\n  return [_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useStripe, _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.useElements];\n});\n\n_c2 = CheckoutForm;\n\nfunction Checkout() {\n  // Weird hack, doing this because we need stripe elements provider at a high enough level to be accessed in CheckoutForm\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_4__.Elements, {\n    stripe: stripeLib,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CheckoutForm, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, this);\n}\n\n_c3 = Checkout;\n\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"CheckoutFormStyles\");\n$RefreshReg$(_c2, \"CheckoutForm\");\n$RefreshReg$(_c3, \"Checkout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcz9hODMxIl0sIm5hbWVzIjpbIkNoZWNrb3V0Rm9ybVN0eWxlcyIsInN0eWxlZCIsInN0cmlwZUxpYiIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIiwiQ2hlY2tvdXRGb3JtIiwidXNlU3RhdGUiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHJpcGUiLCJ1c2VTdHJpcGUiLCJlbGVtZW50cyIsInVzZUVsZW1lbnRzIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiblByb2dyZXNzIiwiY3JlYXRlUGF5bWVudE1ldGhvZCIsInR5cGUiLCJjYXJkIiwiZ2V0RWxlbWVudCIsIkNhcmRFbGVtZW50IiwicGF5bWVudE1ldGhvZCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwiQ2hlY2tvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGtCQUFrQixHQUFHQywyREFBSCxtQkFBeEIsQyxDQVFBOztLQVJNRCxrQjtBQVVOLElBQU1FLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQ0MsNENBQUQsQ0FBNUI7O0FBRUEsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUFBLGtCQUNJQywrQ0FBUSxFQURaO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBQUEsbUJBRVFGLCtDQUFRLENBQUMsS0FBRCxDQUZoQjtBQUFBLE1BRWZHLE9BRmU7QUFBQSxNQUVOQyxVQUZNOztBQUd0QixNQUFNQyxNQUFNLEdBQUdDLGtFQUFTLEVBQXhCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxvRUFBVyxFQUE1Qjs7QUFKc0IsV0FLUEMsWUFMTztBQUFBO0FBQUE7O0FBQUE7QUFBQSx3WkFLdEIsaUJBQTRCQyxDQUE1QjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0U7QUFDQUEsZUFBQyxDQUFDQyxjQUFGO0FBQ0FQLHdCQUFVLENBQUMsSUFBRCxDQUFWLENBSEYsQ0FJRTs7QUFDQVEsb0VBQUEsR0FMRixDQU1FOztBQU5GO0FBQUEscUJBT3dDUCxNQUFNLENBQUNRLG1CQUFQLENBQTJCO0FBQzdEQyxvQkFBSSxFQUFFLE1BRHVEO0FBRTdEQyxvQkFBSSxFQUFFUixRQUFRLENBQUNTLFVBQVQsQ0FBb0JDLGdFQUFwQjtBQUZ1RCxlQUEzQixDQVB4Qzs7QUFBQTtBQUFBO0FBT1NoQixtQkFQVCx5QkFPU0EsS0FQVDtBQU9nQmlCLDJCQVBoQix5QkFPZ0JBLGFBUGhCO0FBV0VDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsYUFBWixFQVhGLENBWUU7O0FBQ0Esa0JBQUdqQixLQUFILEVBQVU7QUFDTkMsd0JBQVEsQ0FBQ0QsS0FBRCxDQUFSO0FBQ0gsZUFmSCxDQWdCRTtBQUNBO0FBQ0E7QUFDQTs7O0FBbkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTHNCO0FBQUE7QUFBQTs7QUEyQnRCLHNCQUNFLDhEQUFDLGtCQUFEO0FBQW9CLFlBQVEsRUFBRVEsWUFBOUI7QUFBQSxlQUNLUixLQUFLLGlCQUFJO0FBQUEsZ0JBQUlBLEtBQUssQ0FBQ29CO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURkLGVBRUUsOERBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UsOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztHQWxDUXRCLFk7VUFHUU8sOEQsRUFDRUUsZ0U7OztNQUpWVCxZOztBQW9DVCxTQUFTdUIsUUFBVCxHQUFvQjtBQUNsQjtBQUNBLHNCQUNFLDhEQUFDLDZEQUFEO0FBQVUsVUFBTSxFQUFFMUIsU0FBbEI7QUFBQSwyQkFDRSw4REFBQyxZQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7TUFQUTBCLFE7QUFTVCIsImZpbGUiOiIuL2NvbXBvbmVudHMvQ2hlY2tvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkRWxlbWVudCwgRWxlbWVudHMsIHVzZUVsZW1lbnRzLCB1c2VTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9yZWFjdC1zdHJpcGUtanNcIjtcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tIFwiQHN0cmlwZS9zdHJpcGUtanNcIjtcbmltcG9ydCBuUHJvZ3Jlc3MgZnJvbSBcIm5wcm9ncmVzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBDaGVja291dEJ1dHRvbiB9IGZyb20gXCIuL3N0eWxlcy9DaGVja291dEJ1dHRvblwiO1xuXG5jb25zdCBDaGVja291dEZvcm1TdHlsZXMgPSBzdHlsZWQuZm9ybWBcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDJweCBnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDFyZW07XG5gO1xuLy8gTm90IHVzaW5nIG91ciB1c3VhbCBmb3JtIGNvbXBvbmVudCBoZXJlIGJlY2F1c2Ugd2Ugd2lsbCBiZSB1c2luZyBTdHJpcGUgZWxlbWVudHNcblxuY29uc3Qgc3RyaXBlTGliID0gbG9hZFN0cmlwZShwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfS0VZKTtcblxuZnVuY3Rpb24gQ2hlY2tvdXRGb3JtKCkge1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgc3RyaXBlID0gdXNlU3RyaXBlKCk7XG4gIGNvbnN0IGVsZW1lbnRzID0gdXNlRWxlbWVudHMoKTtcbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGUpIHtcbiAgICAvLyAxLiBTdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZywgdHVybiBsb2FkZXIgb25cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAvLyAyLiBTdGFydCBwYWdlIHRyYW5zaXRpb25cbiAgICBuUHJvZ3Jlc3Muc3RhcnQoKTtcbiAgICAvLyAzLiBDcmVhdGUgcGF5bWVudCBtZXRob2QgdmlhIHN0cmlwZSwgdG9rZW4gY29tZXMgYmFjayBoZXJlIGlmIHN1Y2Nlc3NmdWxcbiAgICBjb25zdCB7ZXJyb3IsIHBheW1lbnRNZXRob2QgfSA9IGF3YWl0IHN0cmlwZS5jcmVhdGVQYXltZW50TWV0aG9kKHtcbiAgICAgICAgdHlwZTogJ2NhcmQnLFxuICAgICAgICBjYXJkOiBlbGVtZW50cy5nZXRFbGVtZW50KENhcmRFbGVtZW50KVxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocGF5bWVudE1ldGhvZCk7XG4gICAgLy8gNC4gSGFuZGxlIGFueSBlZXJyb3JzIGZyb20gc3RyaXBlXG4gICAgaWYoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IpXG4gICAgfVxuICAgIC8vIDUuIFNlbmQgdG9rZW4gZnJvbSBzdGVwIDMgdG8ga2V5c3RvbmUgc2VydmlhIHZpYSBjdXN0b20gbXV0YXRpb25cbiAgICAvLyA2LiBDaGFuZ2UgcGFnZSB0byB2aWV3IHRoZSBvcmRlclxuICAgIC8vIDcuIENsb3NlIGNhcnRcbiAgICAvLyA4LiBUdXJuIGxvYWRlciBvZmZcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENoZWNrb3V0Rm9ybVN0eWxlcyBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAge2Vycm9yICYmIDxwPntlcnJvci5tZXNzYWdlfTwvcD59XG4gICAgICA8Q2FyZEVsZW1lbnQgLz5cbiAgICAgIDxDaGVja291dEJ1dHRvbj5DaGVjayBPdXQgTm93PC9DaGVja291dEJ1dHRvbj5cbiAgICA8L0NoZWNrb3V0Rm9ybVN0eWxlcz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gQ2hlY2tvdXQoKSB7XG4gIC8vIFdlaXJkIGhhY2ssIGRvaW5nIHRoaXMgYmVjYXVzZSB3ZSBuZWVkIHN0cmlwZSBlbGVtZW50cyBwcm92aWRlciBhdCBhIGhpZ2ggZW5vdWdoIGxldmVsIHRvIGJlIGFjY2Vzc2VkIGluIENoZWNrb3V0Rm9ybVxuICByZXR1cm4gKFxuICAgIDxFbGVtZW50cyBzdHJpcGU9e3N0cmlwZUxpYn0+XG4gICAgICA8Q2hlY2tvdXRGb3JtIC8+XG4gICAgPC9FbGVtZW50cz5cbiAgKTtcbn1cblxuZXhwb3J0IHsgQ2hlY2tvdXQsIENoZWNrb3V0Rm9ybSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Checkout.js\n");

/***/ })

});