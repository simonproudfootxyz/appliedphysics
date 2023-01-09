/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/paginationField.js":
/*!********************************!*\
  !*** ./lib/paginationField.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ paginationField; }\n/* harmony export */ });\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Pagination */ \"./components/Pagination.js\");\n\nfunction paginationField() {\n  return {\n    keyArgs: false,\n\n    // Tells Apollo we will take care of this\n    read(existing = [], {\n      args,\n      cache\n    }) {\n      var _data$_allProductsMet;\n\n      const {\n        skip,\n        first\n      } = args; // Read the number of items on the page from the cache\n\n      const data = cache.readQuery({\n        query: _components_Pagination__WEBPACK_IMPORTED_MODULE_0__.PAGINATION_QUERY\n      });\n      const count = data === null || data === void 0 ? void 0 : (_data$_allProductsMet = data._allProductsMeta) === null || _data$_allProductsMet === void 0 ? void 0 : _data$_allProductsMet.count;\n      const page = skip / first + 1;\n      const pages = Math.ceil(count / first); // Check if we have existing items\n\n      const items = existing.slice(skip, skip + first).filter(item => item);\n\n      if (items.length && items.length !== first && page === pages) {\n        // If there are items, and there there aren't enough for a full query, AND we are on the last page\n        return items;\n      }\n\n      if (items.length !== first) {\n        // If we have no items, return false (make another network request)\n        return false;\n      }\n\n      if (items.length) {\n        // If we have items, return them\n        return items;\n      } // Failsafe, if nothing else return false (make another network request)\n\n\n      return false; // first thing it does is asks the read function for those items\n      // We can do one of two things\n      // 1. return the items they are already in the cache\n      // 2. return false from here (network request)\n    },\n\n    merge(existing, incoming, {\n      args\n    }) {\n      // This runs when the Apollo client comes back from the network with our product\n      const {\n        skip,\n        first\n      } = args;\n      const merged = existing ? existing.slice(0) : [];\n\n      for (let i = skip; i < skip + incoming.length; ++i) {\n        merged[i] = incoming[i - skip];\n      } // TODO: refactor this\n\n\n      return merged;\n    }\n\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvcGFnaW5hdGlvbkZpZWxkLmpzPzk0NDAiXSwibmFtZXMiOlsicGFnaW5hdGlvbkZpZWxkIiwia2V5QXJncyIsInJlYWQiLCJleGlzdGluZyIsImFyZ3MiLCJjYWNoZSIsInNraXAiLCJmaXJzdCIsImRhdGEiLCJyZWFkUXVlcnkiLCJxdWVyeSIsIlBBR0lOQVRJT05fUVVFUlkiLCJjb3VudCIsIl9hbGxQcm9kdWN0c01ldGEiLCJwYWdlIiwicGFnZXMiLCJNYXRoIiwiY2VpbCIsIml0ZW1zIiwic2xpY2UiLCJmaWx0ZXIiLCJpdGVtIiwibGVuZ3RoIiwibWVyZ2UiLCJpbmNvbWluZyIsIm1lcmdlZCIsImkiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxTQUFTQSxlQUFULEdBQTJCO0FBQ3RDLFNBQU87QUFDSEMsV0FBTyxFQUFFLEtBRE47O0FBRUg7QUFDQUMsUUFBSSxDQUFDQyxRQUFRLEdBQUcsRUFBWixFQUFnQjtBQUFFQyxVQUFGO0FBQVFDO0FBQVIsS0FBaEIsRUFBaUM7QUFBQTs7QUFDakMsWUFBTTtBQUFFQyxZQUFGO0FBQVFDO0FBQVIsVUFBa0JILElBQXhCLENBRGlDLENBRWpDOztBQUNBLFlBQU1JLElBQUksR0FBR0gsS0FBSyxDQUFDSSxTQUFOLENBQWdCO0FBQ3pCQyxhQUFLLEVBQUVDLG9FQUFnQkE7QUFERSxPQUFoQixDQUFiO0FBR0EsWUFBTUMsS0FBSyxHQUFHSixJQUFILGFBQUdBLElBQUgsZ0RBQUdBLElBQUksQ0FBRUssZ0JBQVQsMERBQUcsc0JBQXdCRCxLQUF0QztBQUNBLFlBQU1FLElBQUksR0FBR1IsSUFBSSxHQUFHQyxLQUFQLEdBQWUsQ0FBNUI7QUFDQSxZQUFNUSxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxLQUFLLEdBQUVMLEtBQWpCLENBQWQsQ0FSaUMsQ0FTakM7O0FBQ0EsWUFBTVcsS0FBSyxHQUFHZixRQUFRLENBQUNnQixLQUFULENBQWViLElBQWYsRUFBcUJBLElBQUksR0FBR0MsS0FBNUIsRUFBbUNhLE1BQW5DLENBQTJDQyxJQUFELElBQVVBLElBQXBELENBQWQ7O0FBQ0EsVUFBR0gsS0FBSyxDQUFDSSxNQUFOLElBQWdCSixLQUFLLENBQUNJLE1BQU4sS0FBaUJmLEtBQWpDLElBQTBDTyxJQUFJLEtBQUtDLEtBQXRELEVBQTZEO0FBQ3pEO0FBQ0EsZUFBT0csS0FBUDtBQUNIOztBQUNELFVBQUdBLEtBQUssQ0FBQ0ksTUFBTixLQUFpQmYsS0FBcEIsRUFBMkI7QUFDdkI7QUFDQSxlQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFHVyxLQUFLLENBQUNJLE1BQVQsRUFBaUI7QUFDYjtBQUNBLGVBQU9KLEtBQVA7QUFDSCxPQXRCZ0MsQ0F1QmpDOzs7QUFDQSxhQUFPLEtBQVAsQ0F4QmlDLENBeUJqQztBQUNBO0FBQ0E7QUFDQTtBQUNILEtBaENFOztBQWlDSEssU0FBSyxDQUFDcEIsUUFBRCxFQUFXcUIsUUFBWCxFQUFxQjtBQUFFcEI7QUFBRixLQUFyQixFQUErQjtBQUNoQztBQUNBLFlBQU07QUFBRUUsWUFBRjtBQUFRQztBQUFSLFVBQWtCSCxJQUF4QjtBQUNBLFlBQU1xQixNQUFNLEdBQUd0QixRQUFRLEdBQUdBLFFBQVEsQ0FBQ2dCLEtBQVQsQ0FBZSxDQUFmLENBQUgsR0FBdUIsRUFBOUM7O0FBQ0EsV0FBSSxJQUFJTyxDQUFDLEdBQUdwQixJQUFaLEVBQWtCb0IsQ0FBQyxHQUFHcEIsSUFBSSxHQUFHa0IsUUFBUSxDQUFDRixNQUF0QyxFQUE4QyxFQUFFSSxDQUFoRCxFQUFtRDtBQUMvQ0QsY0FBTSxDQUFDQyxDQUFELENBQU4sR0FBWUYsUUFBUSxDQUFDRSxDQUFDLEdBQUdwQixJQUFMLENBQXBCO0FBQ0gsT0FOK0IsQ0FPaEM7OztBQUNBLGFBQU9tQixNQUFQO0FBQ0g7O0FBMUNFLEdBQVA7QUE0Q0giLCJmaWxlIjoiLi9saWIvcGFnaW5hdGlvbkZpZWxkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUEFHSU5BVElPTl9RVUVSWSB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BhZ2luYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFnaW5hdGlvbkZpZWxkKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtleUFyZ3M6IGZhbHNlLFxuICAgICAgICAvLyBUZWxscyBBcG9sbG8gd2Ugd2lsbCB0YWtlIGNhcmUgb2YgdGhpc1xuICAgICAgICByZWFkKGV4aXN0aW5nID0gW10sIHsgYXJncywgY2FjaGUgfSkge1xuICAgICAgICAgICAgY29uc3QgeyBza2lwLCBmaXJzdCB9ID0gYXJncztcbiAgICAgICAgICAgIC8vIFJlYWQgdGhlIG51bWJlciBvZiBpdGVtcyBvbiB0aGUgcGFnZSBmcm9tIHRoZSBjYWNoZVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRRdWVyeSh7XG4gICAgICAgICAgICAgICAgcXVlcnk6IFBBR0lOQVRJT05fUVVFUllcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IGRhdGE/Ll9hbGxQcm9kdWN0c01ldGE/LmNvdW50O1xuICAgICAgICAgICAgY29uc3QgcGFnZSA9IHNraXAgLyBmaXJzdCArIDE7XG4gICAgICAgICAgICBjb25zdCBwYWdlcyA9IE1hdGguY2VpbChjb3VudC8gZmlyc3QpO1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UgaGF2ZSBleGlzdGluZyBpdGVtc1xuICAgICAgICAgICAgY29uc3QgaXRlbXMgPSBleGlzdGluZy5zbGljZShza2lwLCBza2lwICsgZmlyc3QpLmZpbHRlcigoaXRlbSkgPT4gaXRlbSk7XG4gICAgICAgICAgICBpZihpdGVtcy5sZW5ndGggJiYgaXRlbXMubGVuZ3RoICE9PSBmaXJzdCAmJiBwYWdlID09PSBwYWdlcykge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZSBpdGVtcywgYW5kIHRoZXJlIHRoZXJlIGFyZW4ndCBlbm91Z2ggZm9yIGEgZnVsbCBxdWVyeSwgQU5EIHdlIGFyZSBvbiB0aGUgbGFzdCBwYWdlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaXRlbXMubGVuZ3RoICE9PSBmaXJzdCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgbm8gaXRlbXMsIHJldHVybiBmYWxzZSAobWFrZSBhbm90aGVyIG5ldHdvcmsgcmVxdWVzdClcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihpdGVtcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGl0ZW1zLCByZXR1cm4gdGhlbVxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEZhaWxzYWZlLCBpZiBub3RoaW5nIGVsc2UgcmV0dXJuIGZhbHNlIChtYWtlIGFub3RoZXIgbmV0d29yayByZXF1ZXN0KVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgLy8gZmlyc3QgdGhpbmcgaXQgZG9lcyBpcyBhc2tzIHRoZSByZWFkIGZ1bmN0aW9uIGZvciB0aG9zZSBpdGVtc1xuICAgICAgICAgICAgLy8gV2UgY2FuIGRvIG9uZSBvZiB0d28gdGhpbmdzXG4gICAgICAgICAgICAvLyAxLiByZXR1cm4gdGhlIGl0ZW1zIHRoZXkgYXJlIGFscmVhZHkgaW4gdGhlIGNhY2hlXG4gICAgICAgICAgICAvLyAyLiByZXR1cm4gZmFsc2UgZnJvbSBoZXJlIChuZXR3b3JrIHJlcXVlc3QpXG4gICAgICAgIH0sXG4gICAgICAgIG1lcmdlKGV4aXN0aW5nLCBpbmNvbWluZywgeyBhcmdzIH0pIHtcbiAgICAgICAgICAgIC8vIFRoaXMgcnVucyB3aGVuIHRoZSBBcG9sbG8gY2xpZW50IGNvbWVzIGJhY2sgZnJvbSB0aGUgbmV0d29yayB3aXRoIG91ciBwcm9kdWN0XG4gICAgICAgICAgICBjb25zdCB7IHNraXAsIGZpcnN0IH0gPSBhcmdzO1xuICAgICAgICAgICAgY29uc3QgbWVyZ2VkID0gZXhpc3RpbmcgPyBleGlzdGluZy5zbGljZSgwKSA6IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gc2tpcDsgaSA8IHNraXAgKyBpbmNvbWluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIG1lcmdlZFtpXSA9IGluY29taW5nW2kgLSBza2lwXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVE9ETzogcmVmYWN0b3IgdGhpc1xuICAgICAgICAgICAgcmV0dXJuIG1lcmdlZDtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/paginationField.js\n");

/***/ }),

/***/ "./lib/withData.js":
/*!*************************!*\
  !*** ./lib/withData.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/link-error */ \"@apollo/link-error\");\n/* harmony import */ var _apollo_link_error__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client/react/ssr */ \"@apollo/client/react/ssr\");\n/* harmony import */ var _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-upload-client */ \"apollo-upload-client\");\n/* harmony import */ var apollo_upload_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-with-apollo */ \"next-with-apollo\");\n/* harmony import */ var next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_with_apollo__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _paginationField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paginationField */ \"./lib/paginationField.js\");\n\n\n\n\n\n\n\n\nfunction createClient({\n  headers,\n  initialState\n}) {\n  return new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n    link: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloLink.from([(0,_apollo_link_error__WEBPACK_IMPORTED_MODULE_1__.onError)(({\n      graphQLErrors,\n      networkError\n    }) => {\n      if (graphQLErrors) graphQLErrors.forEach(({\n        message,\n        locations,\n        path\n      }) => console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`));\n      if (networkError) console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);\n    }), // this uses apollo-link-http under the hood, so all the options here come from that package\n    (0,apollo_upload_client__WEBPACK_IMPORTED_MODULE_3__.createUploadLink)({\n      uri:  true ? _config__WEBPACK_IMPORTED_MODULE_5__.endpoint : 0,\n      fetchOptions: {\n        credentials: 'include'\n      },\n      // pass the headers along from this request. This enables SSR with logged in state\n      headers\n    })]),\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache({\n      typePolicies: {\n        Query: {\n          fields: {\n            // TODO: We will add this together!\n            allProducts: (0,_paginationField__WEBPACK_IMPORTED_MODULE_6__.default)()\n          }\n        }\n      }\n    }).restore(initialState || {})\n  });\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_with_apollo__WEBPACK_IMPORTED_MODULE_4___default()(createClient, {\n  getDataFromTree: _apollo_client_react_ssr__WEBPACK_IMPORTED_MODULE_2__.getDataFromTree\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9saWIvd2l0aERhdGEuanM/ZGJmMSJdLCJuYW1lcyI6WyJjcmVhdGVDbGllbnQiLCJoZWFkZXJzIiwiaW5pdGlhbFN0YXRlIiwiQXBvbGxvQ2xpZW50IiwibGluayIsIkFwb2xsb0xpbmsiLCJvbkVycm9yIiwiZ3JhcGhRTEVycm9ycyIsIm5ldHdvcmtFcnJvciIsImZvckVhY2giLCJtZXNzYWdlIiwibG9jYXRpb25zIiwicGF0aCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVVcGxvYWRMaW5rIiwidXJpIiwiZW5kcG9pbnQiLCJwcm9kRW5kcG9pbnQiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwiYWxsUHJvZHVjdHMiLCJwYWdpbmF0aW9uRmllbGQiLCJyZXN0b3JlIiwid2l0aEFwb2xsbyIsImdldERhdGFGcm9tVHJlZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0I7QUFBRUMsU0FBRjtBQUFXQztBQUFYLENBQXRCLEVBQWlEO0FBQy9DLFNBQU8sSUFBSUMsd0RBQUosQ0FBaUI7QUFDdEJDLFFBQUksRUFBRUMsMkRBQUEsQ0FBZ0IsQ0FDcEJDLDJEQUFPLENBQUMsQ0FBQztBQUFFQyxtQkFBRjtBQUFpQkM7QUFBakIsS0FBRCxLQUFxQztBQUMzQyxVQUFJRCxhQUFKLEVBQ0VBLGFBQWEsQ0FBQ0UsT0FBZCxDQUFzQixDQUFDO0FBQUVDLGVBQUY7QUFBV0MsaUJBQVg7QUFBc0JDO0FBQXRCLE9BQUQsS0FDcEJDLE9BQU8sQ0FBQ0MsR0FBUixDQUNHLDZCQUE0QkosT0FBUSxlQUFjQyxTQUFVLFdBQVVDLElBQUssRUFEOUUsQ0FERjtBQUtGLFVBQUlKLFlBQUosRUFDRUssT0FBTyxDQUFDQyxHQUFSLENBQ0csb0JBQW1CTixZQUFhLDBDQURuQztBQUdILEtBWE0sQ0FEYSxFQWFwQjtBQUNBTywwRUFBZ0IsQ0FBQztBQUNmQyxTQUFHLEVBQUUsUUFBeUNDLDZDQUF6QyxHQUFvREMsQ0FEMUM7QUFFZkMsa0JBQVksRUFBRTtBQUNaQyxtQkFBVyxFQUFFO0FBREQsT0FGQztBQUtmO0FBQ0FuQjtBQU5lLEtBQUQsQ0FkSSxDQUFoQixDQURnQjtBQXdCdEJvQixTQUFLLEVBQUUsSUFBSUMseURBQUosQ0FBa0I7QUFDdkJDLGtCQUFZLEVBQUU7QUFDWkMsYUFBSyxFQUFFO0FBQ0xDLGdCQUFNLEVBQUU7QUFDTjtBQUNBQyx1QkFBVyxFQUFFQyx5REFBZTtBQUZ0QjtBQURIO0FBREs7QUFEUyxLQUFsQixFQVNKQyxPQVRJLENBU0kxQixZQUFZLElBQUksRUFUcEI7QUF4QmUsR0FBakIsQ0FBUDtBQW1DRDs7QUFFRCwrREFBZTJCLHVEQUFVLENBQUM3QixZQUFELEVBQWU7QUFBRThCLGlCQUFlQTtBQUFqQixDQUFmLENBQXpCIiwiZmlsZSI6Ii4vbGliL3dpdGhEYXRhLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBBcG9sbG9MaW5rLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgb25FcnJvciB9IGZyb20gJ0BhcG9sbG8vbGluay1lcnJvcic7XG5pbXBvcnQgeyBnZXREYXRhRnJvbVRyZWUgfSBmcm9tICdAYXBvbGxvL2NsaWVudC9yZWFjdC9zc3InO1xuaW1wb3J0IHsgY3JlYXRlVXBsb2FkTGluayB9IGZyb20gJ2Fwb2xsby11cGxvYWQtY2xpZW50JztcbmltcG9ydCB3aXRoQXBvbGxvIGZyb20gJ25leHQtd2l0aC1hcG9sbG8nO1xuaW1wb3J0IHsgZW5kcG9pbnQsIHByb2RFbmRwb2ludCB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgcGFnaW5hdGlvbkZpZWxkIGZyb20gJy4vcGFnaW5hdGlvbkZpZWxkJztcblxuZnVuY3Rpb24gY3JlYXRlQ2xpZW50KHsgaGVhZGVycywgaW5pdGlhbFN0YXRlIH0pIHtcbiAgcmV0dXJuIG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGxpbms6IEFwb2xsb0xpbmsuZnJvbShbXG4gICAgICBvbkVycm9yKCh7IGdyYXBoUUxFcnJvcnMsIG5ldHdvcmtFcnJvciB9KSA9PiB7XG4gICAgICAgIGlmIChncmFwaFFMRXJyb3JzKVxuICAgICAgICAgIGdyYXBoUUxFcnJvcnMuZm9yRWFjaCgoeyBtZXNzYWdlLCBsb2NhdGlvbnMsIHBhdGggfSkgPT5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAgICAgICBgW0dyYXBoUUwgZXJyb3JdOiBNZXNzYWdlOiAke21lc3NhZ2V9LCBMb2NhdGlvbjogJHtsb2NhdGlvbnN9LCBQYXRoOiAke3BhdGh9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgICAgIGlmIChuZXR3b3JrRXJyb3IpXG4gICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICBgW05ldHdvcmsgZXJyb3JdOiAke25ldHdvcmtFcnJvcn0uIEJhY2tlbmQgaXMgdW5yZWFjaGFibGUuIElzIGl0IHJ1bm5pbmc/YFxuICAgICAgICAgICk7XG4gICAgICB9KSxcbiAgICAgIC8vIHRoaXMgdXNlcyBhcG9sbG8tbGluay1odHRwIHVuZGVyIHRoZSBob29kLCBzbyBhbGwgdGhlIG9wdGlvbnMgaGVyZSBjb21lIGZyb20gdGhhdCBwYWNrYWdlXG4gICAgICBjcmVhdGVVcGxvYWRMaW5rKHtcbiAgICAgICAgdXJpOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IGVuZHBvaW50IDogcHJvZEVuZHBvaW50LFxuICAgICAgICBmZXRjaE9wdGlvbnM6IHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ2luY2x1ZGUnLFxuICAgICAgICB9LFxuICAgICAgICAvLyBwYXNzIHRoZSBoZWFkZXJzIGFsb25nIGZyb20gdGhpcyByZXF1ZXN0LiBUaGlzIGVuYWJsZXMgU1NSIHdpdGggbG9nZ2VkIGluIHN0YXRlXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICB9KSxcbiAgICBdKSxcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoe1xuICAgICAgdHlwZVBvbGljaWVzOiB7XG4gICAgICAgIFF1ZXJ5OiB7XG4gICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAvLyBUT0RPOiBXZSB3aWxsIGFkZCB0aGlzIHRvZ2V0aGVyIVxuICAgICAgICAgICAgYWxsUHJvZHVjdHM6IHBhZ2luYXRpb25GaWVsZCgpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLnJlc3RvcmUoaW5pdGlhbFN0YXRlIHx8IHt9KSxcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBcG9sbG8oY3JlYXRlQ2xpZW50LCB7IGdldERhdGFGcm9tVHJlZSB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/withData.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Page */ \"./components/Page.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/styles/nprogress.css */ \"./components/styles/nprogress.css\");\n/* harmony import */ var _components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_styles_nprogress_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _lib_withData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/withData */ \"./lib/withData.js\");\n/* harmony import */ var _lib_cartState__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/cartState */ \"./lib/cartState.js\");\n\nvar _jsxFileName = \"/Users/simonproudfoot/Projects/nextjs-course/Advanced-React/sick-fits/frontend/pages/_app.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // TODO: Swap our own\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeStart\", () => nprogress__WEBPACK_IMPORTED_MODULE_3___default().start());\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeComplete\", () => nprogress__WEBPACK_IMPORTED_MODULE_3___default().done());\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeError\", () => nprogress__WEBPACK_IMPORTED_MODULE_3___default().done());\n\nfunction MyApp({\n  Component,\n  pageProps,\n  apollo\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {\n    client: apollo,\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_lib_cartState__WEBPACK_IMPORTED_MODULE_8__.CartStateProvider, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Page__WEBPACK_IMPORTED_MODULE_1__.default, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, this);\n}\n\nMyApp.getInitialProps = async function ({\n  Component,\n  ctx\n}) {\n  let pageProps = {};\n\n  if (Component.getInitialProps) {\n    pageProps = await Component.getInitialProps(ctx);\n  }\n\n  pageProps.query = ctx.query;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_lib_withData__WEBPACK_IMPORTED_MODULE_7__.default)(MyApp));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaWNrLWZpdHMtZnJvbnRlbmQvLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiUm91dGVyIiwiTlByb2dyZXNzIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhcG9sbG8iLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJxdWVyeSIsIndpdGhEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsNERBQUEsQ0FBaUIsa0JBQWpCLEVBQXFDLE1BQU1DLHNEQUFBLEVBQTNDO0FBQ0FELDREQUFBLENBQWlCLHFCQUFqQixFQUF3QyxNQUFNQyxxREFBQSxFQUE5QztBQUNBRCw0REFBQSxDQUFpQixrQkFBakIsRUFBcUMsTUFBTUMscURBQUEsRUFBM0M7O0FBRUEsU0FBU0MsS0FBVCxDQUFlO0FBQUVDLFdBQUY7QUFBYUMsV0FBYjtBQUF3QkM7QUFBeEIsQ0FBZixFQUFpRDtBQUMvQyxzQkFDRSw4REFBQywwREFBRDtBQUFnQixVQUFNLEVBQUVBLE1BQXhCO0FBQUEsMkJBQ0UsOERBQUMsNkRBQUQ7QUFBQSw2QkFDRSw4REFBQyxxREFBRDtBQUFBLCtCQUNFLDhEQUFDLFNBQUQsb0JBQWVELFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0FBRURGLEtBQUssQ0FBQ0ksZUFBTixHQUF3QixnQkFBZ0I7QUFBRUgsV0FBRjtBQUFhSTtBQUFiLENBQWhCLEVBQW9DO0FBQzFELE1BQUlILFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxNQUFJRCxTQUFTLENBQUNHLGVBQWQsRUFBK0I7QUFDN0JGLGFBQVMsR0FBRyxNQUFNRCxTQUFTLENBQUNHLGVBQVYsQ0FBMEJDLEdBQTFCLENBQWxCO0FBQ0Q7O0FBQ0RILFdBQVMsQ0FBQ0ksS0FBVixHQUFrQkQsR0FBRyxDQUFDQyxLQUF0QjtBQUNELENBTkQ7O0FBUUEsK0RBQWVDLHNEQUFRLENBQUNQLEtBQUQsQ0FBdkIiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZVwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuLy8gVE9ETzogU3dhcCBvdXIgb3duXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gXCJucHJvZ3Jlc3NcIjtcbmltcG9ydCBcIm5wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL3N0eWxlcy9ucHJvZ3Jlc3MuY3NzXCI7XG5pbXBvcnQgeyBBcG9sbG9Qcm92aWRlciB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gXCIuLi9saWIvd2l0aERhdGFcIjtcbmltcG9ydCB7IENhcnRTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIi4uL2xpYi9jYXJ0U3RhdGVcIjtcblxuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlU3RhcnRcIiwgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xuUm91dGVyLmV2ZW50cy5vbihcInJvdXRlQ2hhbmdlQ29tcGxldGVcIiwgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgYXBvbGxvIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXthcG9sbG99PlxuICAgICAgPENhcnRTdGF0ZVByb3ZpZGVyPlxuICAgICAgICA8UGFnZT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvUGFnZT5cbiAgICAgIDwvQ2FydFN0YXRlUHJvdmlkZXI+XG4gICAgPC9BcG9sbG9Qcm92aWRlcj5cbiAgKTtcbn1cblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHsgQ29tcG9uZW50LCBjdHggfSkge1xuICBsZXQgcGFnZVByb3BzID0ge307XG4gIGlmIChDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICB9XG4gIHBhZ2VQcm9wcy5xdWVyeSA9IGN0eC5xdWVyeTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKE15QXBwKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./components/styles/nprogress.css":
/*!*****************************************!*\
  !*** ./components/styles/nprogress.css ***!
  \*****************************************/
/***/ (function() {



/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/***/ (function() {



/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client");;

/***/ }),

/***/ "@apollo/client/react/ssr":
/*!*******************************************!*\
  !*** external "@apollo/client/react/ssr" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/client/react/ssr");;

/***/ }),

/***/ "@apollo/link-error":
/*!*************************************!*\
  !*** external "@apollo/link-error" ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@apollo/link-error");;

/***/ }),

/***/ "@stripe/react-stripe-js":
/*!******************************************!*\
  !*** external "@stripe/react-stripe-js" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/react-stripe-js");;

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ (function(module) {

"use strict";
module.exports = require("apollo-upload-client");;

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("graphql-tag");;

/***/ }),

/***/ "next-with-apollo":
/*!***********************************!*\
  !*** external "next-with-apollo" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-with-apollo");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-transition-group");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_ErrorMessage_js-components_User_js-config_js-lib_cartState_js-lib_formatMoney_js","components_Page_js","components_Pagination_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();