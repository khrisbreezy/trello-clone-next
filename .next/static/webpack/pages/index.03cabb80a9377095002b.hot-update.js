webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-trello */ \"./node_modules/react-trello/dist/index.js\");\n/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_trello__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-csv */ \"./node_modules/react-csv/index.js\");\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/phaseStore */ \"./store/actions/phaseStore.js\");\n/* harmony import */ var _components_SingleActionCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/SingleActionCard */ \"./components/SingleActionCard.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Desktop/Projects/React-Projects/trello-clone/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"])();\n  var btnRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  var thePhaseData = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.phaseData.phases;\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('Map Name'),\n      mapName = _useState[0],\n      setMapName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(thePhaseData),\n      phaseData = _useState2[0],\n      setPhaseData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      csvData = _useState3[0],\n      setCsvData = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      currentCard = _useState4[0],\n      setCurrentCard = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      currentPhase = _useState5[0],\n      setCurrentPhase = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      phaseIndex = _useState6[0],\n      setPhaseIndex = _useState6[1];\n\n  console.log({\n    phaseData: phaseData\n  }); // All phases data object\n\n  var data = {\n    lanes: phaseData\n  };\n  var TEXTS = {\n    \"Add another lane\": \"+ Add Phase\",\n    \"Click to add card\": \"Add actions\",\n    \"Delete lane\": \"Delete phase\",\n    \"Lane actions\": \"Phase actions\",\n    \"button\": {\n      \"Add lane\": \"Add Phase\",\n      \"Add card\": \"Add Action\",\n      \"Cancel\": \"Cancel\"\n    },\n    \"placeholder\": {\n      \"title\": \"action\",\n      \"description\": \"responsible\",\n      \"label\": \"output\"\n    }\n  }; // set export name\n\n  var mapNameHandler = function mapNameHandler(e) {\n    setMapName(e.target.value);\n  }; // Headers for csv export\n\n\n  var headers = [{\n    label: 'Phase',\n    key: 'phase'\n  }, {\n    label: 'Action',\n    key: 'action'\n  }, {\n    label: 'Responsible',\n    key: 'responsible'\n  }, {\n    label: 'Output',\n    key: 'output'\n  }, {\n    label: 'Notes',\n    key: 'notes'\n  }]; // Csv export object\n\n  var csvReport = {\n    filename: mapName.split(' ').join('-') + '.csv',\n    headers: headers,\n    data: csvData\n  };\n\n  var dataChange = function dataChange(data) {\n    setPhaseData(data.lanes);\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_9__[\"savePhaseData\"])([]));\n  }; // Funtion to open single action modal for edit\n\n\n  var cardClickHandler = function cardClickHandler(cardId, metadata, laneId) {\n    var currentPhase = phaseData.filter(function (phase) {\n      return phase.id === laneId;\n    });\n    var currentCard = currentPhase[0].cards.find(function (card) {\n      return card.id === cardId;\n    });\n    var currentPhaseIndex = phaseData.findIndex(function (phase) {\n      return phase.id === laneId;\n    });\n    setCurrentCard(currentCard);\n    setCurrentPhase(currentPhase);\n    setPhaseIndex(currentPhaseIndex);\n    $('#actionModal').modal('show');\n  }; // Function to goto process background information page\n\n\n  var gotoProcessBginfoHandler = function gotoProcessBginfoHandler() {\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_9__[\"savePhaseData\"])(phaseData));\n    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/process-background-information');\n  }; // Export data function\n\n\n  var exportDataHandler = /*#__PURE__*/function () {\n    var _ref = Object(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n      var dataToExport;\n      return _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dataToExport = [];\n              phaseData.forEach(function (phase) {\n                phase.cards.forEach(function (card) {\n                  dataToExport.push({\n                    'phase': phase.title,\n                    'action': card.title,\n                    'responsible': card.description,\n                    'output': card.label ? card.label : '',\n                    'notes': card.metadata ? card.metadata : ''\n                  });\n                });\n              });\n              _context.next = 4;\n              return setCsvData(dataToExport);\n\n            case 4:\n              btnRef.current.link.click();\n              dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_9__[\"savePhaseData\"])([]));\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function exportDataHandler() {\n      return _ref.apply(this, arguments);\n    };\n  }(); // Function to reset current Action card after an update/change\n\n\n  var resetDataAfterUpdate = function resetDataAfterUpdate() {\n    setCurrentCard(null);\n    setCurrentPhase([]);\n    setPhaseIndex(null);\n  }; // Function to store edited data to state\n\n\n  var storeEdittedDataToState = function storeEdittedDataToState(data) {\n    setPhaseData(data);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: \"page_manager\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"container-fluid\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12 text-center d-flex align-items-center justify-content-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n            className: \"mapName_input mx-3\",\n            type: \"text\",\n            value: mapName,\n            onChange: mapNameHandler\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 131,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_trello__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          data: data,\n          editLaneTitle: true,\n          editable: true,\n          canAddLanes: true,\n          onDataChange: dataChange,\n          t: Object(react_trello__WEBPACK_IMPORTED_MODULE_5__[\"createTranslate\"])(TEXTS),\n          onCardClick: cardClickHandler,\n          laneDraggable: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 20\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"row text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-6 mb-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            onClick: gotoProcessBginfoHandler,\n            className: \"btn\",\n            children: \"Add process background\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 151,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-6 mb-4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_csv__WEBPACK_IMPORTED_MODULE_8__[\"CSVLink\"], _objectSpread(_objectSpread({\n            className: \"d-none\",\n            ref: btnRef\n          }, csvReport), {}, {\n            children: \"Export\"\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 154,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            onClick: exportDataHandler,\n            className: \"btn\",\n            children: \"Export to data frame\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 153,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 130,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_SingleActionCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n      currentCard: currentCard,\n      currentPhase: currentPhase,\n      phaseData: phaseData,\n      phaseIndex: phaseIndex,\n      resetDataAfterUpdate: resetDataAfterUpdate,\n      storeEdittedDataToState: storeEdittedDataToState\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 160,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 129,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"sJuM8O6lUpmLjXknqQtHOAjsDdE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImJ0blJlZiIsInVzZVJlZiIsInRoZVBoYXNlRGF0YSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwaGFzZURhdGEiLCJwaGFzZXMiLCJ1c2VTdGF0ZSIsIm1hcE5hbWUiLCJzZXRNYXBOYW1lIiwic2V0UGhhc2VEYXRhIiwiY3N2RGF0YSIsInNldENzdkRhdGEiLCJjdXJyZW50Q2FyZCIsInNldEN1cnJlbnRDYXJkIiwiY3VycmVudFBoYXNlIiwic2V0Q3VycmVudFBoYXNlIiwicGhhc2VJbmRleCIsInNldFBoYXNlSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxhbmVzIiwiVEVYVFMiLCJtYXBOYW1lSGFuZGxlciIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhlYWRlcnMiLCJsYWJlbCIsImtleSIsImNzdlJlcG9ydCIsImZpbGVuYW1lIiwic3BsaXQiLCJqb2luIiwiZGF0YUNoYW5nZSIsInNhdmVQaGFzZURhdGEiLCJjYXJkQ2xpY2tIYW5kbGVyIiwiY2FyZElkIiwibWV0YWRhdGEiLCJsYW5lSWQiLCJmaWx0ZXIiLCJwaGFzZSIsImlkIiwiY2FyZHMiLCJmaW5kIiwiY2FyZCIsImN1cnJlbnRQaGFzZUluZGV4IiwiZmluZEluZGV4IiwiJCIsIm1vZGFsIiwiZ290b1Byb2Nlc3NCZ2luZm9IYW5kbGVyIiwiUm91dGVyIiwicHVzaCIsImV4cG9ydERhdGFIYW5kbGVyIiwiZGF0YVRvRXhwb3J0IiwiZm9yRWFjaCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjdXJyZW50IiwibGluayIsImNsaWNrIiwicmVzZXREYXRhQWZ0ZXJVcGRhdGUiLCJzdG9yZUVkaXR0ZWREYXRhVG9TdGF0ZSIsImNyZWF0ZVRyYW5zbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNB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O0FBQUEsZUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUErQkkscUVBQUMscUVBQUQ7QUFDQSxpQkFBVyxFQUFFekMsV0FEYjtBQUVBLGtCQUFZLEVBQUVFLFlBRmQ7QUFHQSxlQUFTLEVBQUVWLFNBSFg7QUFJQSxnQkFBVSxFQUFFWSxVQUpaO0FBS0EsMEJBQW9CLEVBQUU2QyxvQkFMdEI7QUFNQSw2QkFBdUIsRUFBRUM7QUFOekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTJDSCxDQS9KRDs7R0FBTWxFLEk7VUFDZUUsdUQsRUFHSUksdUQ7OztLQUpuQk4sSTtBQWlLU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9hcmQsIHsgY3JlYXRlVHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtdHJlbGxvJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gJ3JlYWN0LWNzdic7XG5cbmltcG9ydCB7IHNhdmVQaGFzZURhdGEgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3BoYXNlU3RvcmUnO1xuaW1wb3J0IFNpbmdsZUFjdGlvbkNhcmQgZnJvbSBcIi4uL2NvbXBvbmVudHMvU2luZ2xlQWN0aW9uQ2FyZFwiO1xuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGJ0blJlZiA9IHVzZVJlZigpO1xuXG4gICAgY29uc3QgdGhlUGhhc2VEYXRhID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGhhc2VEYXRhLnBoYXNlcyk7XG5cbiAgICBjb25zdCBbIG1hcE5hbWUsIHNldE1hcE5hbWUgXSA9IHVzZVN0YXRlKCdNYXAgTmFtZScpO1xuICAgIGNvbnN0IFtwaGFzZURhdGEsIHNldFBoYXNlRGF0YV0gPSB1c2VTdGF0ZSh0aGVQaGFzZURhdGEpO1xuICAgIGNvbnN0IFtjc3ZEYXRhLCBzZXRDc3ZEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY3VycmVudENhcmQsIHNldEN1cnJlbnRDYXJkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjdXJyZW50UGhhc2UsIHNldEN1cnJlbnRQaGFzZV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3BoYXNlSW5kZXgsIHNldFBoYXNlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zb2xlLmxvZyh7cGhhc2VEYXRhfSk7XG5cbiAgICAvLyBBbGwgcGhhc2VzIGRhdGEgb2JqZWN0XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbGFuZXM6IHBoYXNlRGF0YVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgVEVYVFMgPSB7XG4gICAgICAgIFwiQWRkIGFub3RoZXIgbGFuZVwiOiBcIisgQWRkIFBoYXNlXCIsICBcbiAgICAgICAgXCJDbGljayB0byBhZGQgY2FyZFwiOiBcIkFkZCBhY3Rpb25zXCIsXG4gICAgICAgIFwiRGVsZXRlIGxhbmVcIjogXCJEZWxldGUgcGhhc2VcIixcbiAgICAgICAgXCJMYW5lIGFjdGlvbnNcIjogXCJQaGFzZSBhY3Rpb25zXCIsXG4gICAgICAgIFwiYnV0dG9uXCI6IHtcbiAgICAgICAgICBcIkFkZCBsYW5lXCI6IFwiQWRkIFBoYXNlXCIsXG4gICAgICAgICAgXCJBZGQgY2FyZFwiOiBcIkFkZCBBY3Rpb25cIixcbiAgICAgICAgICBcIkNhbmNlbFwiOiBcIkNhbmNlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJhY3Rpb25cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwicmVzcG9uc2libGVcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwib3V0cHV0XCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzZXQgZXhwb3J0IG5hbWVcbiAgICBjb25zdCBtYXBOYW1lSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIHNldE1hcE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICAvLyBIZWFkZXJzIGZvciBjc3YgZXhwb3J0XG4gICAgY29uc3QgaGVhZGVycyA9IFtcbiAgICAgICAge2xhYmVsOiAnUGhhc2UnLCBrZXk6ICdwaGFzZSd9LFxuICAgICAgICB7bGFiZWw6ICdBY3Rpb24nLCBrZXk6ICdhY3Rpb24nfSxcbiAgICAgICAge2xhYmVsOiAnUmVzcG9uc2libGUnLCBrZXk6ICdyZXNwb25zaWJsZSd9LFxuICAgICAgICB7bGFiZWw6ICdPdXRwdXQnLCBrZXk6ICdvdXRwdXQnfSxcbiAgICAgICAge2xhYmVsOiAnTm90ZXMnLCBrZXk6ICdub3Rlcyd9XG4gICAgXTtcblxuICAgIC8vIENzdiBleHBvcnQgb2JqZWN0XG4gICAgY29uc3QgY3N2UmVwb3J0ID0ge1xuICAgICAgICBmaWxlbmFtZTogbWFwTmFtZS5zcGxpdCgnICcpLmpvaW4oJy0nKSArICcuY3N2JyxcbiAgICAgICAgaGVhZGVyczogaGVhZGVycyxcbiAgICAgICAgZGF0YTogY3N2RGF0YVxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhQ2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UGhhc2VEYXRhKGRhdGEubGFuZXMpO1xuICAgICAgICBkaXNwYXRjaChzYXZlUGhhc2VEYXRhKFtdKSk7XG4gICAgfTtcblxuICAgIC8vIEZ1bnRpb24gdG8gb3BlbiBzaW5nbGUgYWN0aW9uIG1vZGFsIGZvciBlZGl0XG4gICAgY29uc3QgY2FyZENsaWNrSGFuZGxlciA9IChjYXJkSWQsIG1ldGFkYXRhLCBsYW5lSWQpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFBoYXNlID0gcGhhc2VEYXRhLmZpbHRlcigocGhhc2UpID0+IHBoYXNlLmlkID09PSBsYW5lSWQpO1xuICAgICAgICBjb25zdCBjdXJyZW50Q2FyZCA9IGN1cnJlbnRQaGFzZVswXS5jYXJkcy5maW5kKChjYXJkKSA9PiBjYXJkLmlkID09PSBjYXJkSWQpO1xuICAgICAgICBjb25zdCBjdXJyZW50UGhhc2VJbmRleCA9IHBoYXNlRGF0YS5maW5kSW5kZXgocGhhc2UgPT4gcGhhc2UuaWQgPT09IGxhbmVJZCk7XG5cbiAgICAgICAgc2V0Q3VycmVudENhcmQoY3VycmVudENhcmQpO1xuICAgICAgICBzZXRDdXJyZW50UGhhc2UoY3VycmVudFBoYXNlKTtcbiAgICAgICAgc2V0UGhhc2VJbmRleChjdXJyZW50UGhhc2VJbmRleCk7XG5cbiAgICAgICAgJCgnI2FjdGlvbk1vZGFsJykubW9kYWwoJ3Nob3cnKTtcblxuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiB0byBnb3RvIHByb2Nlc3MgYmFja2dyb3VuZCBpbmZvcm1hdGlvbiBwYWdlXG4gICAgY29uc3QgZ290b1Byb2Nlc3NCZ2luZm9IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzYXZlUGhhc2VEYXRhKHBoYXNlRGF0YSkpO1xuICAgICAgICBSb3V0ZXIucHVzaCgnL3Byb2Nlc3MtYmFja2dyb3VuZC1pbmZvcm1hdGlvbicpO1xuICAgIH07XG5cbiAgICAvLyBFeHBvcnQgZGF0YSBmdW5jdGlvblxuICAgIGNvbnN0IGV4cG9ydERhdGFIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YVRvRXhwb3J0ID0gW107XG4gICAgICAgIHBoYXNlRGF0YS5mb3JFYWNoKHBoYXNlID0+IHtcbiAgICAgICAgICAgIHBoYXNlLmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YVRvRXhwb3J0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAncGhhc2UnOiBwaGFzZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgJ2FjdGlvbic6IGNhcmQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICdyZXNwb25zaWJsZSc6IGNhcmQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICdvdXRwdXQnOiBjYXJkLmxhYmVsID8gY2FyZC5sYWJlbCA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAnbm90ZXMnOiBjYXJkLm1ldGFkYXRhID8gY2FyZC5tZXRhZGF0YSA6ICcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBzZXRDc3ZEYXRhKGRhdGFUb0V4cG9ydCk7XG4gICAgICAgIGJ0blJlZi5jdXJyZW50LmxpbmsuY2xpY2soKTtcbiAgICAgICAgZGlzcGF0Y2goc2F2ZVBoYXNlRGF0YShbXSkpO1xuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiB0byByZXNldCBjdXJyZW50IEFjdGlvbiBjYXJkIGFmdGVyIGFuIHVwZGF0ZS9jaGFuZ2VcbiAgICBjb25zdCByZXNldERhdGFBZnRlclVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudENhcmQobnVsbCk7XG4gICAgICAgIHNldEN1cnJlbnRQaGFzZShbXSk7XG4gICAgICAgIHNldFBoYXNlSW5kZXgobnVsbCk7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIHN0b3JlIGVkaXRlZCBkYXRhIHRvIHN0YXRlXG4gICAgY29uc3Qgc3RvcmVFZGl0dGVkRGF0YVRvU3RhdGUgPSAoZGF0YSkgPT4ge1xuICAgICAgICBzZXRQaGFzZURhdGEoZGF0YSk7XG4gICAgfTtcbiAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VfbWFuYWdlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPiAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdtYXBOYW1lX2lucHV0IG14LTMnIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21hcE5hbWV9IG9uQ2hhbmdlPXttYXBOYW1lSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgIDxCb2FyZCBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBlZGl0TGFuZVRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlXG4gICAgICAgICAgICAgICAgICAgIGNhbkFkZExhbmVzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkRhdGFDaGFuZ2U9e2RhdGFDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHQ9e2NyZWF0ZVRyYW5zbGF0ZShURVhUUyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FyZENsaWNrPXtjYXJkQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBsYW5lRHJhZ2dhYmxlXG4gICAgICAgICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvdG9Qcm9jZXNzQmdpbmZvSGFuZGxlcn0gY2xhc3NOYW1lPVwiYnRuXCI+QWRkIHByb2Nlc3MgYmFja2dyb3VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q1NWTGluayBjbGFzc05hbWU9J2Qtbm9uZScgcmVmPXtidG5SZWZ9IHsuLi5jc3ZSZXBvcnR9PkV4cG9ydDwvQ1NWTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZXhwb3J0RGF0YUhhbmRsZXJ9IGNsYXNzTmFtZT1cImJ0blwiPkV4cG9ydCB0byBkYXRhIGZyYW1lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7LyogU2luZ2xlIEFjdGlvbiBNb2RhbCBhbmQgaXRzIHByb3BlcnRpZXMgKi99XG4gICAgICAgICAgICA8U2luZ2xlQWN0aW9uQ2FyZCBcbiAgICAgICAgICAgIGN1cnJlbnRDYXJkPXtjdXJyZW50Q2FyZH0gXG4gICAgICAgICAgICBjdXJyZW50UGhhc2U9e2N1cnJlbnRQaGFzZX1cbiAgICAgICAgICAgIHBoYXNlRGF0YT17cGhhc2VEYXRhfVxuICAgICAgICAgICAgcGhhc2VJbmRleD17cGhhc2VJbmRleH1cbiAgICAgICAgICAgIHJlc2V0RGF0YUFmdGVyVXBkYXRlPXtyZXNldERhdGFBZnRlclVwZGF0ZX1cbiAgICAgICAgICAgIHN0b3JlRWRpdHRlZERhdGFUb1N0YXRlPXtzdG9yZUVkaXR0ZWREYXRhVG9TdGF0ZX1cbiAgICAgICAgICAgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})