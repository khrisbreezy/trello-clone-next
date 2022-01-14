webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SingleActionCard.js":
/*!****************************************!*\
  !*** ./components/SingleActionCard.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Error */ \"./components/Error.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Desktop/Projects/React-Projects/trello-clone/components/SingleActionCard.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AuthModal = function AuthModal(_ref) {\n  _s();\n\n  var currentCard = _ref.currentCard,\n      currentPhase = _ref.currentPhase,\n      phaseData = _ref.phaseData,\n      phaseIndex = _ref.phaseIndex,\n      resetDataAfterUpdate = _ref.resetDataAfterUpdate,\n      storeEdittedDataToState = _ref.storeEdittedDataToState;\n\n  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"])(),\n      handleSubmit = _useForm.handleSubmit,\n      errors = _useForm.errors,\n      register = _useForm.register,\n      reset = _useForm.reset,\n      setValue = _useForm.setValue;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    // Check if the current card/action was selected and has data\n    if (currentCard && currentCard.title) {\n      setValue('action', currentCard.title);\n    } else {\n      setValue('action', '');\n    }\n\n    if (currentCard && currentCard.description) {\n      setValue('responsible', currentCard.description);\n    } else {\n      setValue('responsible', '');\n    }\n\n    if (currentCard && currentCard.label) {\n      setValue('output', currentCard.label);\n    } else {\n      setValue('output', '');\n    }\n\n    if (currentCard && currentCard.metadata) {\n      setValue('notes', currentCard.metadata);\n    } else {\n      setValue('notes', '');\n    }\n  }, [currentCard]); // Function to save current card/action \n\n  var saveCurrentUpdatedCard = function saveCurrentUpdatedCard(currentCard) {\n    var currentCardIndex = currentPhase[0].cards.findIndex(function (card) {\n      return card.id === currentCard.id;\n    });\n    var theCurentCard = currentPhase[0].cards[currentCardIndex];\n    theCurentCard = currentCard;\n    phaseData.splice(phaseIndex, 1, currentPhase[0]);\n    storeEdittedDataToState(phaseData);\n  }; // Funtion to save and update the edited action/card\n\n\n  var editActionHandler = /*#__PURE__*/function () {\n    var _ref2 = Object(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(data) {\n      return _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              currentCard['description'] = data.responsible;\n              currentCard['title'] = data.action;\n              currentCard['label'] = data.output;\n              currentCard['metadata'] = data.notes;\n              _context.next = 6;\n              return saveCurrentUpdatedCard(currentCard);\n\n            case 6:\n              resetDataAfterUpdate();\n              $('#actionModal').modal('hide');\n\n            case 8:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function editActionHandler(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"modal fade\",\n      id: \"actionModal\",\n      tabIndex: \"-1\",\n      role: \"dialog\",\n      \"aria-labelledby\": \"exampleModalCenterTitle\",\n      \"aria-hidden\": \"true\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"modal-dialog modal-dialog modal-lg\",\n        role: \"document\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"modal-content\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"modal-header\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              style: {\n                fontSize: '3rem'\n              },\n              type: \"button\",\n              className: \"close\",\n              \"data-dismiss\": \"modal\",\n              \"aria-label\": \"Close\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                \"aria-hidden\": \"true\",\n                children: \"\\xD7\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 72,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 70,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"modal-body mb-5\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"container\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"row\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"col-md-12\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"text-center\",\n                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                      className: \"mb-1\",\n                      children: [\"Edit Phase: \", currentPhase.length > 0 ? currentPhase[0].title : '']\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 81,\n                      columnNumber: 45\n                    }, _this), currentCard && currentCard.title && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                      children: [\"Action: \", currentCard.title, \" \"]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 82,\n                      columnNumber: 84\n                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n                      className: \"auth-form\",\n                      onSubmit: handleSubmit(editActionHandler),\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"row\",\n                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"col-md-6 mb-4\",\n                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n                            name: \"action\",\n                            placeholder: \"Action\",\n                            className: \"w-100\",\n                            ref: register(),\n                            cols: \"30\",\n                            rows: \"3\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 86,\n                            columnNumber: 57\n                          }, _this)\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 85,\n                          columnNumber: 53\n                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"col-md-6 mb-4\",\n                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n                            name: \"responsible\",\n                            placeholder: \"Responsible\",\n                            className: \"w-100\",\n                            ref: register(),\n                            cols: \"30\",\n                            rows: \"3\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 95,\n                            columnNumber: 57\n                          }, _this)\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 94,\n                          columnNumber: 53\n                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"col-md-6 mb-4\",\n                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n                            name: \"output\",\n                            placeholder: \"Output\",\n                            className: \"w-100\",\n                            ref: register(),\n                            cols: \"30\",\n                            rows: \"3\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 104,\n                            columnNumber: 57\n                          }, _this)\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 103,\n                          columnNumber: 53\n                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"col-md-6 mb-4\",\n                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n                            name: \"notes\",\n                            placeholder: \"Notes\",\n                            className: \"w-100\",\n                            ref: register(),\n                            cols: \"30\",\n                            rows: \"3\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 113,\n                            columnNumber: 57\n                          }, _this)\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 112,\n                          columnNumber: 53\n                        }, _this)]\n                      }, void 0, true, {\n                        fileName: _jsxFileName,\n                        lineNumber: 84,\n                        columnNumber: 49\n                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"text-center\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                          disabled: loading,\n                          type: \"submit\",\n                          className: \"btn btn-login\",\n                          children: !loading ? 'Update' : 'Updating...'\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 124,\n                          columnNumber: 57\n                        }, _this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 123,\n                        columnNumber: 49\n                      }, _this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 83,\n                      columnNumber: 45\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 80,\n                    columnNumber: 41\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 79,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 78,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 77,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(AuthModal, \"ifrSScU0yLZdMR2QCXpYu+zTVR0=\", false, function () {\n  return [react_hook_form__WEBPACK_IMPORTED_MODULE_4__[\"useForm\"]];\n});\n\n_c = AuthModal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthModal);\n\nvar _c;\n\n$RefreshReg$(_c, \"AuthModal\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVBY3Rpb25DYXJkLmpzPzM2ODEiXSwibmFtZXMiOlsiQXV0aE1vZGFsIiwiY3VycmVudENhcmQiLCJjdXJyZW50UGhhc2UiLCJwaGFzZURhdGEiLCJwaGFzZUluZGV4IiwicmVzZXREYXRhQWZ0ZXJVcGRhdGUiLCJzdG9yZUVkaXR0ZWREYXRhVG9TdGF0ZSIsInVzZUZvcm0iLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJyZWdpc3RlciIsInJlc2V0Iiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImxhYmVsIiwibWV0YWRhdGEiLCJzYXZlQ3VycmVudFVwZGF0ZWRDYXJkIiwiY3VycmVudENhcmRJbmRleCIsImNhcmRzIiwiZmluZEluZGV4IiwiY2FyZCIsImlkIiwidGhlQ3VyZW50Q2FyZCIsInNwbGljZSIsImVkaXRBY3Rpb25IYW5kbGVyIiwiZGF0YSIsInJlc3BvbnNpYmxlIiwiYWN0aW9uIiwib3V0cHV0Iiwibm90ZXMiLCIkIiwibW9kYWwiLCJmb250U2l6ZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUF1RztBQUFBOztBQUFBLE1BQXJHQyxXQUFxRyxRQUFyR0EsV0FBcUc7QUFBQSxNQUF4RkMsWUFBd0YsUUFBeEZBLFlBQXdGO0FBQUEsTUFBMUVDLFNBQTBFLFFBQTFFQSxTQUEwRTtBQUFBLE1BQS9EQyxVQUErRCxRQUEvREEsVUFBK0Q7QUFBQSxNQUFuREMsb0JBQW1ELFFBQW5EQSxvQkFBbUQ7QUFBQSxNQUE3QkMsdUJBQTZCLFFBQTdCQSx1QkFBNkI7O0FBQUEsaUJBQ3pEQywrREFBTyxFQURrRDtBQUFBLE1BQzdHQyxZQUQ2RyxZQUM3R0EsWUFENkc7QUFBQSxN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QUdBLHFDQUFTLEVBQUMsT0FIVjtBQUlBLCtCQUFHLEVBQUVBLFFBQVEsRUFKYjtBQUtBLGdDQUFJLEVBQUMsSUFMTDtBQUtVLGdDQUFJLEVBQUM7QUFMZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0E1Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURKLGVBd0NJO0FBQUssaUNBQVMsRUFBQyxhQUFmO0FBQUEsK0NBQ1E7QUFBUSxrQ0FBUSxFQUFFSSxPQUFsQjtBQUEyQiw4QkFBSSxFQUFDLFFBQWhDO0FBQXlDLG1DQUFTLEVBQUMsZUFBbkQ7QUFBQSxvQ0FDSyxDQUFDQSxPQUFELEdBQVcsUUFBWCxHQUFzQjtBQUQzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkF4Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixtQkFESjtBQThFSCxDQXRJRDs7R0FBTWQsUztVQUMwRE8sdUQ7OztLQUQxRFAsUztBQXdJU0Esd0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpbmdsZUFjdGlvbkNhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9FcnJvcic7XG5cbmNvbnN0IEF1dGhNb2RhbCA9ICh7Y3VycmVudENhcmQsIGN1cnJlbnRQaGFzZSwgcGhhc2VEYXRhLCBwaGFzZUluZGV4LCByZXNldERhdGFBZnRlclVwZGF0ZSwgc3RvcmVFZGl0dGVkRGF0YVRvU3RhdGV9KSA9PiB7XG4gICAgY29uc3QgeyBoYW5kbGVTdWJtaXQsIGVycm9ycywgcmVnaXN0ZXIsIHJlc2V0LCBzZXRWYWx1ZSB9ID0gdXNlRm9ybSgpO1xuICAgIGNvbnN0IFsgbG9hZGluZywgc2V0TG9hZGluZyBdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgY2FyZC9hY3Rpb24gd2FzIHNlbGVjdGVkIGFuZCBoYXMgZGF0YVxuICAgICAgICBpZiAoY3VycmVudENhcmQgJiYgY3VycmVudENhcmQudGl0bGUpIHtcbiAgICAgICAgICAgIHNldFZhbHVlKCdhY3Rpb24nLCBjdXJyZW50Q2FyZC50aXRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRWYWx1ZSgnYWN0aW9uJywgJycpO1xuICAgICAgICB9ICAgXG5cbiAgICAgICAgaWYgKGN1cnJlbnRDYXJkICYmIGN1cnJlbnRDYXJkLmRlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZSgncmVzcG9uc2libGUnLCBjdXJyZW50Q2FyZC5kZXNjcmlwdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRWYWx1ZSgncmVzcG9uc2libGUnLCAnJyk7XG4gICAgICAgIH0gXG5cbiAgICAgICAgaWYgKGN1cnJlbnRDYXJkICYmIGN1cnJlbnRDYXJkLmxhYmVsKSB7XG4gICAgICAgICAgICBzZXRWYWx1ZSgnb3V0cHV0JywgY3VycmVudENhcmQubGFiZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VmFsdWUoJ291dHB1dCcsICcnKTtcbiAgICAgICAgfSBcblxuICAgICAgICBpZiAoY3VycmVudENhcmQgJiYgY3VycmVudENhcmQubWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHNldFZhbHVlKCdub3RlcycsIGN1cnJlbnRDYXJkLm1ldGFkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFZhbHVlKCdub3RlcycsICcnKTtcbiAgICAgICAgfSBcbiAgICB9LCBbY3VycmVudENhcmRdKTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIHNhdmUgY3VycmVudCBjYXJkL2FjdGlvbiBcbiAgICBjb25zdCBzYXZlQ3VycmVudFVwZGF0ZWRDYXJkID0gKGN1cnJlbnRDYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDYXJkSW5kZXggPSBjdXJyZW50UGhhc2VbMF0uY2FyZHMuZmluZEluZGV4KGNhcmQgPT4gY2FyZC5pZCA9PT0gY3VycmVudENhcmQuaWQpO1xuXG4gICAgICAgIGxldCB0aGVDdXJlbnRDYXJkID0gY3VycmVudFBoYXNlWzBdLmNhcmRzW2N1cnJlbnRDYXJkSW5kZXhdO1xuICAgICAgICB0aGVDdXJlbnRDYXJkID0gY3VycmVudENhcmQ7XG5cbiAgICAgICAgcGhhc2VEYXRhLnNwbGljZShwaGFzZUluZGV4LCAxLCBjdXJyZW50UGhhc2VbMF0pO1xuXG4gICAgICAgIHN0b3JlRWRpdHRlZERhdGFUb1N0YXRlKHBoYXNlRGF0YSk7XG4gICAgfTtcblxuICAgIC8vIEZ1bnRpb24gdG8gc2F2ZSBhbmQgdXBkYXRlIHRoZSBlZGl0ZWQgYWN0aW9uL2NhcmRcbiAgICBjb25zdCBlZGl0QWN0aW9uSGFuZGxlciA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICAgIGN1cnJlbnRDYXJkWydkZXNjcmlwdGlvbiddID0gZGF0YS5yZXNwb25zaWJsZTtcbiAgICAgICAgY3VycmVudENhcmRbJ3RpdGxlJ10gPSBkYXRhLmFjdGlvbjtcbiAgICAgICAgY3VycmVudENhcmRbJ2xhYmVsJ10gPSBkYXRhLm91dHB1dDtcbiAgICAgICAgY3VycmVudENhcmRbJ21ldGFkYXRhJ10gPSBkYXRhLm5vdGVzO1xuXG4gICAgICAgIGF3YWl0IHNhdmVDdXJyZW50VXBkYXRlZENhcmQoY3VycmVudENhcmQpO1xuICAgICAgICByZXNldERhdGFBZnRlclVwZGF0ZSgpO1xuXG4gICAgICAgICQoJyNhY3Rpb25Nb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIGZhZGVcIiBpZD1cImFjdGlvbk1vZGFsXCIgdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIlxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGVNb2RhbENlbnRlclRpdGxlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nIG1vZGFsLWxnXCIgcm9sZT1cImRvY3VtZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gc3R5bGU9e3sgZm9udFNpemU6ICczcmVtJyB9fSB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keSBtYi01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSdtYi0xJz5FZGl0IFBoYXNlOiB7Y3VycmVudFBoYXNlLmxlbmd0aCA+IDAgPyBjdXJyZW50UGhhc2VbMF0udGl0bGUgOiAnJ308L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7KGN1cnJlbnRDYXJkICYmIGN1cnJlbnRDYXJkLnRpdGxlKSAmJiA8cD5BY3Rpb246IHtjdXJyZW50Q2FyZC50aXRsZX0gPC9wPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdhdXRoLWZvcm0nIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQoZWRpdEFjdGlvbkhhbmRsZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicmVzcG9uc2libGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlJlc3BvbnNpYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3JlZ2lzdGVyKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiIHJvd3M9XCIzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwib3V0cHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPdXRwdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCIgcm93cz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJub3Rlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm90ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17cmVnaXN0ZXIoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29scz1cIjMwXCIgcm93cz1cIjNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBkaXNhYmxlZD17bG9hZGluZ30gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tbG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshbG9hZGluZyA/ICdVcGRhdGUnIDogJ1VwZGF0aW5nLi4uJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQXV0aE1vZGFsOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SingleActionCard.js\n");

/***/ })

})