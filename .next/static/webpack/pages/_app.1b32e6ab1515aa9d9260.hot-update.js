webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/AuthModal.js":
/*!*********************************!*\
  !*** ./components/AuthModal.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Error */ \"./components/Error.js\");\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Desktop/Projects/React-Projects/trello-clone/components/AuthModal.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AuthModal = function AuthModal() {\n  _s();\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"])(),\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors,\n      register = _useForm.register;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var signUpHandler = function signUpHandler() {};\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"modal fade\",\n      id: \"authModal\",\n      tabIndex: \"-1\",\n      role: \"dialog\",\n      \"aria-labelledby\": \"exampleModalCenterTitle\",\n      \"aria-hidden\": \"true\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"modal-dialog modal-dialog-centered modal-lg\",\n        role: \"document\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-content\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"modal-header\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              style: {\n                fontSize: '3rem'\n              },\n              type: \"button\",\n              className: \"close\",\n              \"data-dismiss\": \"modal\",\n              \"aria-label\": \"Close\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                \"aria-hidden\": \"true\",\n                children: \"\\xD7\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 24,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 22,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 21,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"modal-body mb-5\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"container\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"col-md-12\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-center\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                      children: \"Kindly sign up/login\"\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 33,\n                      columnNumber: 45\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n                      className: \"auth-form\",\n                      onSubmit: handleSubmit(signUpHandler),\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"row\",\n                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"col-md-6 mb-4\",\n                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                            type: \"text\",\n                            name: \"firstName\",\n                            placeholder: \"First name\",\n                            className: \"w-100\",\n                            ref: register({\n                              required: 'This field is required'\n                            })\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 37,\n                            columnNumber: 57\n                          }, _this), errors.firstName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: errors.firstName.message\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 43,\n                            columnNumber: 78\n                          }, _this)]\n                        }, void 0, true, {\n                          fileName: _jsxFileName,\n                          lineNumber: 36,\n                          columnNumber: 53\n                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"col-md-6 mb-4\",\n                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                            type: \"text\",\n                            name: \"lastName\",\n                            placeholder: \"Last name\",\n                            className: \"w-100\",\n                            ref: register({\n                              required: 'This field is required'\n                            })\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 46,\n                            columnNumber: 57\n                          }, _this), errors.lastName && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: errors.lastName.message\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 51,\n                            columnNumber: 77\n                          }, _this)]\n                        }, void 0, true, {\n                          fileName: _jsxFileName,\n                          lineNumber: 45,\n                          columnNumber: 53\n                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"col-md-6 mb-4\",\n                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                            type: \"email\",\n                            name: \"email\",\n                            placeholder: \"Email\",\n                            className: \"w-100\",\n                            ref: register({\n                              required: 'This field is required'\n                            })\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 54,\n                            columnNumber: 57\n                          }, _this), errors.email && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: errors.email.message\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 59,\n                            columnNumber: 74\n                          }, _this)]\n                        }, void 0, true, {\n                          fileName: _jsxFileName,\n                          lineNumber: 53,\n                          columnNumber: 53\n                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"col-md-6 mb-4\",\n                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                            type: \"password\",\n                            name: \"password\",\n                            placeholder: \"Password\",\n                            className: \"w-100\",\n                            ref: register({\n                              required: 'This field is required'\n                            })\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 62,\n                            columnNumber: 57\n                          }, _this), errors.password && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Error__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            children: errors.password.message\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 67,\n                            columnNumber: 77\n                          }, _this)]\n                        }, void 0, true, {\n                          fileName: _jsxFileName,\n                          lineNumber: 61,\n                          columnNumber: 53\n                        }, _this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 35,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"text-center\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                          disabled: loading,\n                          type: \"submit\",\n                          className: \"btn\",\n                          children: !loading ? 'Submit' : 'Submitting...'\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 72,\n                          columnNumber: 57\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 71,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"d-flex align-items-center justify-content-between\",\n                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                          children: [\"Already a signed up? \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                            className: \"cursor\",\n                            children: \"Login\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 77,\n                            columnNumber: 77\n                          }, _this)]\n                        }, void 0, true, {\n                          fileName: _jsxFileName,\n                          lineNumber: 77,\n                          columnNumber: 53\n                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                          className: \"cursor\",\n                          children: \"Forgot password?\"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 78,\n                          columnNumber: 53\n                        }, _this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 76,\n                        columnNumber: 49\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 34,\n                      columnNumber: 45\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 32,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 31,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(AuthModal, \"RZ3V7X1dX/WId3w5lZOlHsJNnp4=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_2__[\"useForm\"]];\n});\n\n_c = AuthModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BdXRoTW9kYWwuanM/NTgzNiJdLCJuYW1lcyI6WyJBdXRoTW9kYWwiLCJ1c2VGb3JtIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwicmVnaXN0ZXIiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic2lnblVwSGFuZGxlciIsImZvbnRTaXplIiwicmVxdWlyZWQiLCJmaXJzdE5hbWUiLCJtZXNzYWdlIiwibGFzdE5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQUE7O0FBQUEsaUJBQ3VCQywrREFBTyxFQUQ5QjtBQUFBLE1BQ1pDLFlBRFksWUFDWkEsWUFEWTtBQUFBLE1BQ0VDLE1BREYsWUFDRUEsTUFERjtBQUFBLE1BQ1VDLFFBRFYsWUFDVUEsUUFEVjs7QUFBQSxrQkFFWUMsc0RBQVEsQ0FBQyxLQUFELENBRnBCO0FBQUEsTUFFWkMsT0FGWTtBQUFBLE1BRUhDLFVBRkc7O0FBSXBCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTSxDQUUzQixDQUZEOztBQUlBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixRQUFFLEVBQUMsV0FBL0I7QUFBMkMsY0FBUSxFQUFDLElBQXBEO0FBQXlELFVBQUksRUFBQyxRQUE5RDtBQUNJLHlCQUFnQix5QkFEcEI7QUFDOEMscUJBQVksTUFEMUQ7QUFBQSw2QkFFSTtBQUFLLGlCQUFTLEVBQUMsNkNBQWY7QUFBNkQsWUFBSSxFQUFDLFVBQWxFO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLGVBQWY7QUFBQSxrQ0FFSTtBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG1DQUNJO0FBQVEsbUJBQUssRUFBRTtBQUFFQyx3QkFBUSxFQUFFO0FBQVosZUFBZjtBQUFxQyxr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anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuaW1wb3J0IEVycm9yIGZyb20gJy4uL2NvbXBvbmVudHMvRXJyb3InO1xuXG5jb25zdCBBdXRoTW9kYWwgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGVycm9ycywgcmVnaXN0ZXIgfSA9IHVzZUZvcm0oKTtcbiAgICBjb25zdCBbIGxvYWRpbmcsIHNldExvYWRpbmcgXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIGNvbnN0IHNpZ25VcEhhbmRsZXIgPSAoKSA9PiB7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBmYWRlXCIgaWQ9XCJhdXRoTW9kYWxcIiB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZU1vZGFsQ2VudGVyVGl0bGVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQgbW9kYWwtbGdcIiByb2xlPVwiZG9jdW1lbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZT17eyBmb250U2l6ZTogJzNyZW0nIH19IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5IG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5LaW5kbHkgc2lnbiB1cC9sb2dpbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nYXV0aC1mb3JtJyBvblN1Ym1pdD17aGFuZGxlU3VibWl0KHNpZ25VcEhhbmRsZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmZpcnN0TmFtZSAmJiA8RXJyb3I+e2Vycm9ycy5maXJzdE5hbWUubWVzc2FnZX08L0Vycm9yPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKHsgcmVxdWlyZWQ6ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJyB9KX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9ycy5sYXN0TmFtZSAmJiA8RXJyb3I+e2Vycm9ycy5sYXN0TmFtZS5tZXNzYWdlfTwvRXJyb3I+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoeyByZXF1aXJlZDogJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnIH0pfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JzLmVtYWlsICYmIDxFcnJvcj57ZXJyb3JzLmVtYWlsLm1lc3NhZ2V9PC9FcnJvcj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtyZWdpc3Rlcih7IHJlcXVpcmVkOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCcgfSl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMucGFzc3dvcmQgJiYgPEVycm9yPntlcnJvcnMucGFzc3dvcmQubWVzc2FnZX08L0Vycm9yPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGlzYWJsZWQ9e2xvYWRpbmd9IHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyA/ICdTdWJtaXQnIDogJ1N1Ym1pdHRpbmcuLi4nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+QWxyZWFkeSBhIHNpZ25lZCB1cD8gPHNwYW4gY2xhc3NOYW1lPSdjdXJzb3InPkxvZ2luPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2N1cnNvcic+Rm9yZ290IHBhc3N3b3JkPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBdXRoTW9kYWw7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/AuthModal.js\n");

/***/ })

})