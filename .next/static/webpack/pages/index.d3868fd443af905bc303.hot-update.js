webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-trello */ \"./node_modules/react-trello/dist/index.js\");\n/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_trello__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-csv */ \"./node_modules/react-csv/index.js\");\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/phaseStore */ \"./store/actions/phaseStore.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Desktop/Projects/React-Projects/trello-clone/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"])();\n  var btnRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  var thePhaseData = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.phaseData.phases;\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('Map Name'),\n      mapName = _useState[0],\n      setMapName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(thePhaseData),\n      phaseData = _useState2[0],\n      setPhaseData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      csvData = _useState3[0],\n      setCsvData = _useState3[1];\n\n  var TEXTS = {\n    \"Add another lane\": \"+ Add Phase\",\n    \"Click to add card\": \"Add actions\",\n    \"Delete lane\": \"Delete phase\",\n    \"Lane actions\": \"Phase actions\",\n    \"button\": {\n      \"Add lane\": \"Add Phase\",\n      \"Add card\": \"Add Action\",\n      \"Cancel\": \"Cancel\"\n    },\n    \"placeholder\": {\n      \"title\": \"action\",\n      \"description\": \"responsible\",\n      \"label\": \"label\"\n    }\n  };\n\n  var mapNameHandler = function mapNameHandler(e) {\n    setMapName(e.target.value);\n  };\n\n  var headers = [{\n    label: 'Phase',\n    key: 'phase'\n  }, {\n    label: 'Action',\n    key: 'action'\n  }, {\n    label: 'Responsible',\n    key: 'responsible'\n  }];\n  var csvReport = {\n    filename: mapName.split(' ').join('-') + '.csv',\n    headers: headers,\n    data: csvData\n  };\n  var data = {\n    lanes: phaseData\n  };\n\n  var dataChange = function dataChange(data) {\n    setPhaseData(data.lanes);\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_9__[\"savePhaseData\"])([]));\n  };\n\n  var gotoProcessBginfoHandler = function gotoProcessBginfoHandler() {\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_9__[\"savePhaseData\"])(phaseData));\n    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/process-background-information');\n  };\n\n  var exportDataHandler = /*#__PURE__*/function () {\n    var _ref = Object(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n      var dataToExport;\n      return _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dataToExport = [];\n              phaseData.forEach(function (phase) {\n                phase.cards.forEach(function (card) {\n                  dataToExport.push({\n                    'phase': phase.title,\n                    'action': card.title,\n                    'responsible': card.description\n                  });\n                });\n              });\n              console.log('====================================');\n              console.log({\n                dataToExport: dataToExport\n              });\n              console.log('====================================');\n              _context.next = 7;\n              return setCsvData(dataToExport);\n\n            case 7:\n              return _context.abrupt(\"return\");\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function exportDataHandler() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  console.log('====================================');\n  console.log({\n    data: data\n  });\n  console.log('====================================');\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: \"page_manager\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"container-fluid\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12 text-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n            className: \"mapName_input\",\n            type: \"text\",\n            value: mapName,\n            onChange: mapNameHandler\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_trello__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          data: data,\n          editable: true,\n          editLaneTitle: true,\n          canAddLanes: true,\n          onDataChange: dataChange,\n          t: Object(react_trello__WEBPACK_IMPORTED_MODULE_5__[\"createTranslate\"])(TEXTS)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 20\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"row text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-6 mb-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            onClick: gotoProcessBginfoHandler,\n            className: \"btn\",\n            children: \"Add process background\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-6 mb-4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_csv__WEBPACK_IMPORTED_MODULE_8__[\"CSVLink\"], _objectSpread(_objectSpread({\n            className: \"d-none\",\n            ref: btnRef\n          }, csvReport), {}, {\n            children: \"Export\"\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            onClick: exportDataHandler,\n            className: \"btn\",\n            children: \"Export to data frame\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"8i+mHuwAGaek23CoBSD23fuyjLk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImJ0blJlZiIsInVzZVJlZiIsInRoZVBoYXNlRGF0YSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwaGFzZURhdGEiLCJwaGFzZXMiLCJ1c2VTdGF0ZSIsIm1hcE5hbWUiLCJzZXRNYXBOYW1lIiwic2V0UGhhc2VEYXRhIiwiY3N2RGF0YSIsInNldENzdkRhdGEiLCJURVhUUyIsIm1hcE5hbWVIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGVhZGVycyIsImxhYmVsIiwia2V5IiwiY3N2UmVwb3J0IiwiZmlsZW5hbWUiLCJzcGxpdCIsImpvaW4iLCJkYXRhIiwibGFuZXMiLCJkYXRhQ2hhbmdlIiwic2F2ZVBoYXNlRGF0YSIsImdvdG9Qcm9jZXNzQmdpbmZvSGFuZGxlciIsIlJvdXRlciIsInB1c2giLCJleHBvcnREYXRhSGFuZGxlciIsImRhdGFUb0V4cG9ydCIsImZvckVhY2giLCJwaGFzZSIsImNhcmRzIiwiY2FyZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjb25zb2xlIiwibG9nIiwiY3JlYXRlVHJhbnNsYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBR0EsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUVmLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLG9EQUFNLEVBQXJCO0FBRUEsTUFBTUMsWUFBWSxHQUFHQywrREFBVyxDQUFDLFVBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLE1BQXBCO0FBQUEsR0FBTixDQUFoQzs7QUFMZSxrQkFPaUJDLHNEQUFRLENBQUMsVUFBRCxDQVB6QjtBQUFBLE1B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N0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFFSTtBQUFRLG1CQUFPLEVBQUVXLGlCQUFqQjtBQUFvQyxxQkFBUyxFQUFDLEtBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4QkgsQ0FwSEQ7O0dBQU1uQyxJO1VBRWVFLHVELEVBR0lJLHVEOzs7S0FMbkJOLEk7QUFzSFNBLG1FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvYXJkLCB7IGNyZWF0ZVRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LXRyZWxsbyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IENTVkxpbmsgfSBmcm9tICdyZWFjdC1jc3YnO1xuXG5pbXBvcnQgeyBzYXZlUGhhc2VEYXRhIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9waGFzZVN0b3JlJztcblxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGJ0blJlZiA9IHVzZVJlZigpO1xuXG4gICAgY29uc3QgdGhlUGhhc2VEYXRhID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGhhc2VEYXRhLnBoYXNlcyk7XG5cbiAgICBjb25zdCBbIG1hcE5hbWUsIHNldE1hcE5hbWUgXSA9IHVzZVN0YXRlKCdNYXAgTmFtZScpO1xuICAgIGNvbnN0IFtwaGFzZURhdGEsIHNldFBoYXNlRGF0YV0gPSB1c2VTdGF0ZSh0aGVQaGFzZURhdGEpO1xuICAgIGNvbnN0IFtjc3ZEYXRhLCBzZXRDc3ZEYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFRFWFRTID0ge1xuICAgICAgICBcIkFkZCBhbm90aGVyIGxhbmVcIjogXCIrIEFkZCBQaGFzZVwiLFxuICAgICAgICBcIkNsaWNrIHRvIGFkZCBjYXJkXCI6IFwiQWRkIGFjdGlvbnNcIixcbiAgICAgICAgXCJEZWxldGUgbGFuZVwiOiBcIkRlbGV0ZSBwaGFzZVwiLFxuICAgICAgICBcIkxhbmUgYWN0aW9uc1wiOiBcIlBoYXNlIGFjdGlvbnNcIixcbiAgICAgICAgXCJidXR0b25cIjoge1xuICAgICAgICAgIFwiQWRkIGxhbmVcIjogXCJBZGQgUGhhc2VcIixcbiAgICAgICAgICBcIkFkZCBjYXJkXCI6IFwiQWRkIEFjdGlvblwiLFxuICAgICAgICAgIFwiQ2FuY2VsXCI6IFwiQ2FuY2VsXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcImFjdGlvblwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJyZXNwb25zaWJsZVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJsYWJlbFwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbWFwTmFtZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRNYXBOYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVycyA9IFtcbiAgICAgICAge2xhYmVsOiAnUGhhc2UnLCBrZXk6ICdwaGFzZSd9LFxuICAgICAgICB7bGFiZWw6ICdBY3Rpb24nLCBrZXk6ICdhY3Rpb24nfSxcbiAgICAgICAge2xhYmVsOiAnUmVzcG9uc2libGUnLCBrZXk6ICdyZXNwb25zaWJsZSd9XG4gICAgXTtcblxuICAgIGNvbnN0IGNzdlJlcG9ydCA9IHtcbiAgICAgICAgZmlsZW5hbWU6IG1hcE5hbWUuc3BsaXQoJyAnKS5qb2luKCctJykgKyAnLmNzdicsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIGRhdGE6IGNzdkRhdGFcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbGFuZXM6IHBoYXNlRGF0YVxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhQ2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UGhhc2VEYXRhKGRhdGEubGFuZXMpO1xuICAgICAgICBkaXNwYXRjaChzYXZlUGhhc2VEYXRhKFtdKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdvdG9Qcm9jZXNzQmdpbmZvSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2F2ZVBoYXNlRGF0YShwaGFzZURhdGEpKTtcbiAgICAgICAgUm91dGVyLnB1c2goJy9wcm9jZXNzLWJhY2tncm91bmQtaW5mb3JtYXRpb24nKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZXhwb3J0RGF0YUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBkYXRhVG9FeHBvcnQgPSBbXTtcbiAgICAgICAgcGhhc2VEYXRhLmZvckVhY2gocGhhc2UgPT4ge1xuICAgICAgICAgICAgcGhhc2UuY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhVG9FeHBvcnQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICdwaGFzZSc6IHBoYXNlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAnYWN0aW9uJzogY2FyZC50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3BvbnNpYmxlJzogY2FyZC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PScpO1xuICAgICAgICBjb25zb2xlLmxvZyh7ZGF0YVRvRXhwb3J0fSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcblxuICAgICAgICBhd2FpdCBzZXRDc3ZEYXRhKGRhdGFUb0V4cG9ydCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgICAgYnRuUmVmLmN1cnJlbnQubGluay5jbGljaygpO1xuICAgICAgICBkaXNwYXRjaChzYXZlUGhhc2VEYXRhKFtdKSk7XG4gICAgICAgIC8vIHNldFBoYXNlRGF0YShbXSk7XG4gICAgfTtcblxuICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgICBjb25zb2xlLmxvZyh7ZGF0YX0pO1xuICAgIGNvbnNvbGUubG9nKCc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VfbWFuYWdlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPiAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J21hcE5hbWVfaW5wdXQnIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21hcE5hbWV9IG9uQ2hhbmdlPXttYXBOYW1lSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgIDxCb2FyZCBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZSBlZGl0TGFuZVRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGNhbkFkZExhbmVzIG9uRGF0YUNoYW5nZT17ZGF0YUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdD17Y3JlYXRlVHJhbnNsYXRlKFRFWFRTKX1cbiAgICAgICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z290b1Byb2Nlc3NCZ2luZm9IYW5kbGVyfSBjbGFzc05hbWU9XCJidG5cIj5BZGQgcHJvY2VzcyBiYWNrZ3JvdW5kPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDU1ZMaW5rIGNsYXNzTmFtZT0nZC1ub25lJyByZWY9e2J0blJlZn0gey4uLmNzdlJlcG9ydH0+RXhwb3J0PC9DU1ZMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtleHBvcnREYXRhSGFuZGxlcn0gY2xhc3NOYW1lPVwiYnRuXCI+RXhwb3J0IHRvIGRhdGEgZnJhbWU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})