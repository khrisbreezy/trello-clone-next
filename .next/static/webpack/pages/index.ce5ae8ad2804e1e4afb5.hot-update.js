webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-trello */ \"./node_modules/react-trello/dist/index.js\");\n/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_trello__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-csv */ \"./node_modules/react-csv/index.js\");\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-notifications */ \"./node_modules/react-notifications/lib/index.js\");\n/* harmony import */ var react_notifications__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_notifications__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/actions/phaseStore */ \"./store/actions/phaseStore.js\");\n/* harmony import */ var _store_actions_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/actions/auth */ \"./store/actions/auth.js\");\n/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../config/axios */ \"./config/axios.js\");\n/* harmony import */ var _components_SingleActionCard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/SingleActionCard */ \"./components/SingleActionCard.js\");\n\n\n\n\n\nvar _jsxFileName = \"/Users/macbookpro/Desktop/Projects/React-Projects/trello-clone/pages/index.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"])();\n  var btnRef = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useRef\"])();\n  var thePhaseData = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.phaseData.phases;\n  });\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])('Map Name'),\n      mapName = _useState[0],\n      setMapName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(thePhaseData),\n      phaseData = _useState2[0],\n      setPhaseData = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      csvData = _useState3[0],\n      setCsvData = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      currentCard = _useState4[0],\n      setCurrentCard = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      currentPhase = _useState5[0],\n      setCurrentPhase = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(null),\n      phaseIndex = _useState6[0],\n      setPhaseIndex = _useState6[1]; // All phases data object\n\n\n  var data = {\n    lanes: phaseData\n  };\n  var TEXTS = {\n    \"Add another lane\": \"+ Add Phase\",\n    \"Click to add card\": \"Add actions\",\n    \"Delete lane\": \"Delete phase\",\n    \"Lane actions\": \"Phase actions\",\n    \"button\": {\n      \"Add lane\": \"Add Phase\",\n      \"Add card\": \"Add Action\",\n      \"Cancel\": \"Cancel\"\n    },\n    \"placeholder\": {\n      \"title\": \"action\",\n      \"description\": \"responsible\",\n      \"label\": \"output\"\n    }\n  }; // set export name\n\n  var mapNameHandler = function mapNameHandler(e) {\n    setMapName(e.target.value);\n  }; // Headers for csv export\n\n\n  var headers = [{\n    label: 'Phase',\n    key: 'phase'\n  }, {\n    label: 'Action',\n    key: 'action'\n  }, {\n    label: 'Responsible',\n    key: 'responsible'\n  }, {\n    label: 'Output',\n    key: 'output'\n  }, {\n    label: 'Notes',\n    key: 'notes'\n  }]; // Csv Export function\n\n  var csvReport = {\n    filename: mapName.split(' ').join('-') + '.csv',\n    headers: headers,\n    data: csvData\n  };\n\n  var dataChange = function dataChange(data) {\n    setPhaseData(data.lanes);\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_11__[\"savePhaseData\"])([]));\n  }; // Funtion to open single action modal for edit\n\n\n  var cardClickHandler = function cardClickHandler(cardId, laneId) {\n    var currentPhase = phaseData.filter(function (phase) {\n      return phase.id === laneId;\n    });\n    var currentCard = currentPhase[0].cards.find(function (card) {\n      return card.id === cardId;\n    });\n    var currentPhaseIndex = phaseData.findIndex(function (phase) {\n      return phase.id === laneId;\n    });\n    setCurrentCard(currentCard);\n    setCurrentPhase(currentPhase);\n    setPhaseIndex(currentPhaseIndex);\n    $('#actionModal').modal('show');\n    console.log({\n      currentPhase: currentPhase\n    });\n  }; // Function to goto process background information page\n\n\n  var gotoProcessBginfoHandler = function gotoProcessBginfoHandler() {\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_11__[\"savePhaseData\"])(phaseData));\n    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/process-background-information');\n  }; // Export data function\n\n\n  var exportDataHandler = /*#__PURE__*/function () {\n    var _ref = Object(_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__[\"default\"])( /*#__PURE__*/_Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {\n      var dataToExport;\n      return _Users_macbookpro_Desktop_Projects_React_Projects_trello_clone_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dataToExport = [];\n              phaseData.forEach(function (phase) {\n                phase.cards.forEach(function (card) {\n                  dataToExport.push({\n                    'phase': phase.title,\n                    'action': card.title,\n                    'responsible': card.description,\n                    'output': card.label ? card.label : '',\n                    'notes': card.metadata ? card.metadata : ''\n                  });\n                });\n              });\n              _context.next = 4;\n              return setCsvData(dataToExport);\n\n            case 4:\n              btnRef.current.link.click();\n              dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_11__[\"savePhaseData\"])([]));\n\n            case 6:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function exportDataHandler() {\n      return _ref.apply(this, arguments);\n    };\n  }(); // Function to reset current Action card after an update/change\n\n\n  var resetDataAfterUpdate = function resetDataAfterUpdate() {\n    setCurrentCard(null);\n    setCurrentPhase([]);\n    setPhaseIndex(null);\n  }; // Function to store edited data to state\n\n\n  var storeEdittedDataToState = function storeEdittedDataToState(data) {\n    setPhaseData(data);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"section\", {\n    className: \"page_manager\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n      className: \"container-fluid\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12 text-center d-flex align-items-center justify-content-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", {\n            className: \"mapName_input mx-3\",\n            type: \"text\",\n            value: mapName,\n            onChange: mapNameHandler\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 21\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 135,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_trello__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          data: data,\n          editLaneTitle: true,\n          editable: true,\n          canAddLanes: true,\n          onDataChange: dataChange,\n          t: Object(react_trello__WEBPACK_IMPORTED_MODULE_5__[\"createTranslate\"])(TEXTS),\n          onCardClick: cardClickHandler,\n          laneDraggable: true\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 142,\n          columnNumber: 20\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: \"row text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-6 mb-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            onClick: gotoProcessBginfoHandler,\n            className: \"btn\",\n            children: \"Add process background\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-6 mb-4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_csv__WEBPACK_IMPORTED_MODULE_8__[\"CSVLink\"], _objectSpread(_objectSpread({\n            className: \"d-none\",\n            ref: btnRef\n          }, csvReport), {}, {\n            children: \"Export\"\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 158,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"button\", {\n            onClick: exportDataHandler,\n            className: \"btn\",\n            children: \"Export to data frame\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 159,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 134,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_SingleActionCard__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n      currentCard: currentCard,\n      currentPhase: currentPhase,\n      phaseData: phaseData,\n      phaseIndex: phaseIndex,\n      resetDataAfterUpdate: resetDataAfterUpdate,\n      storeEdittedDataToState: storeEdittedDataToState\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 163,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 133,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"sJuM8O6lUpmLjXknqQtHOAjsDdE=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"], react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImJ0blJlZiIsInVzZVJlZiIsInRoZVBoYXNlRGF0YSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwaGFzZURhdGEiLCJwaGFzZXMiLCJ1c2VTdGF0ZSIsIm1hcE5hbWUiLCJzZXRNYXBOYW1lIiwic2V0UGhhc2VEYXRhIiwiY3N2RGF0YSIsInNldENzdkRhdGEiLCJjdXJyZW50Q2FyZCIsInNldEN1cnJlbnRDYXJkIiwiY3VycmVudFBoYXNlIiwic2V0Q3VycmVudFBoYXNlIiwicGhhc2VJbmRleCIsInNldFBoYXNlSW5kZXgiLCJkYXRhIiwibGFuZXMiLCJURVhUUyIsIm1hcE5hbWVIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiaGVhZGVycyIsImxhYmVsIiwia2V5IiwiY3N2UmVwb3J0IiwiZmlsZW5hbWUiLCJzcGxpdCIsImpvaW4iLCJkYXRhQ2hhbmdlIiwic2F2ZVBoYXNlRGF0YSIsImNhcmRDbGlja0hhbmRsZXIiLCJjYXJkSWQiLCJsYW5lSWQiLCJmaWx0ZXIiLCJwaGFzZSIsImlkIiwiY2FyZHMiLCJmaW5kIiwiY2FyZCIsImN1cnJlbnRQaGFzZUluZGV4IiwiZmluZEluZGV4IiwiJCIsIm1vZGFsIiwiY29uc29sZSIsImxvZyIsImdvdG9Qcm9jZXNzQmdpbmZvSGFuZGxlciIsIlJvdXRlciIsInB1c2giLCJleHBvcnREYXRhSGFuZGxlciIsImRhdGFUb0V4cG9ydCIsImZvckVhY2giLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwibWV0YWRhdGEiLCJjdXJyZW50IiwibGluayIsImNsaWNrIiwicmVzZXREYXRhQWZ0ZXJVcGRhdGUiLCJzdG9yZUVkaXR0ZWREYXRhVG9TdGF0ZSIsImNyZWF0ZVRyYW5zbGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFBQTtBQUFBO0FBQUEsZUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUE4QkkscUVBQUMscUVBQUQ7QUFDQSxpQkFBVyxFQUFFeEMsV0FEYjtBQUVBLGtCQUFZLEVBQUVFLFlBRmQ7QUFHQSxlQUFTLEVBQUVWLFNBSFg7QUFJQSxnQkFBVSxFQUFFWSxVQUpaO0FBS0EsMEJBQW9CLEVBQUU2QyxvQkFMdEI7QUFNQSw2QkFBdUIsRUFBRUM7QUFOekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBDSCxDQTlKRDs7R0FBTWxFLEk7VUFFZUUsdUQsRUFHSUksdUQ7OztLQUxuQk4sSTtBQWdLU0EsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9hcmQsIHsgY3JlYXRlVHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtdHJlbGxvJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gJ3JlYWN0LWNzdic7XG5pbXBvcnQge05vdGlmaWNhdGlvbk1hbmFnZXJ9IGZyb20gJ3JlYWN0LW5vdGlmaWNhdGlvbnMnO1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJztcblxuaW1wb3J0IHsgc2F2ZVBoYXNlRGF0YSB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvcGhhc2VTdG9yZSc7XG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSAnLi4vY29uZmlnL2F4aW9zJztcbmltcG9ydCBTaW5nbGVBY3Rpb25DYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL1NpbmdsZUFjdGlvbkNhcmRcIjtcblxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGJ0blJlZiA9IHVzZVJlZigpO1xuXG4gICAgY29uc3QgdGhlUGhhc2VEYXRhID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGhhc2VEYXRhLnBoYXNlcyk7XG5cbiAgICBjb25zdCBbIG1hcE5hbWUsIHNldE1hcE5hbWUgXSA9IHVzZVN0YXRlKCdNYXAgTmFtZScpO1xuICAgIGNvbnN0IFtwaGFzZURhdGEsIHNldFBoYXNlRGF0YV0gPSB1c2VTdGF0ZSh0aGVQaGFzZURhdGEpO1xuICAgIGNvbnN0IFtjc3ZEYXRhLCBzZXRDc3ZEYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBjb25zdCBbY3VycmVudENhcmQsIHNldEN1cnJlbnRDYXJkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFtjdXJyZW50UGhhc2UsIHNldEN1cnJlbnRQaGFzZV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW3BoYXNlSW5kZXgsIHNldFBoYXNlSW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICAvLyBBbGwgcGhhc2VzIGRhdGEgb2JqZWN0XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbGFuZXM6IHBoYXNlRGF0YVxuICAgIH07XG4gICAgXG4gICAgY29uc3QgVEVYVFMgPSB7XG4gICAgICAgIFwiQWRkIGFub3RoZXIgbGFuZVwiOiBcIisgQWRkIFBoYXNlXCIsICBcbiAgICAgICAgXCJDbGljayB0byBhZGQgY2FyZFwiOiBcIkFkZCBhY3Rpb25zXCIsXG4gICAgICAgIFwiRGVsZXRlIGxhbmVcIjogXCJEZWxldGUgcGhhc2VcIixcbiAgICAgICAgXCJMYW5lIGFjdGlvbnNcIjogXCJQaGFzZSBhY3Rpb25zXCIsXG4gICAgICAgIFwiYnV0dG9uXCI6IHtcbiAgICAgICAgICBcIkFkZCBsYW5lXCI6IFwiQWRkIFBoYXNlXCIsXG4gICAgICAgICAgXCJBZGQgY2FyZFwiOiBcIkFkZCBBY3Rpb25cIixcbiAgICAgICAgICBcIkNhbmNlbFwiOiBcIkNhbmNlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJhY3Rpb25cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwicmVzcG9uc2libGVcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwib3V0cHV0XCJcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzZXQgZXhwb3J0IG5hbWVcbiAgICBjb25zdCBtYXBOYW1lSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIHNldE1hcE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgIH07XG5cbiAgICAvLyBIZWFkZXJzIGZvciBjc3YgZXhwb3J0XG4gICAgY29uc3QgaGVhZGVycyA9IFtcbiAgICAgICAge2xhYmVsOiAnUGhhc2UnLCBrZXk6ICdwaGFzZSd9LFxuICAgICAgICB7bGFiZWw6ICdBY3Rpb24nLCBrZXk6ICdhY3Rpb24nfSxcbiAgICAgICAge2xhYmVsOiAnUmVzcG9uc2libGUnLCBrZXk6ICdyZXNwb25zaWJsZSd9LFxuICAgICAgICB7bGFiZWw6ICdPdXRwdXQnLCBrZXk6ICdvdXRwdXQnfSxcbiAgICAgICAge2xhYmVsOiAnTm90ZXMnLCBrZXk6ICdub3Rlcyd9XG4gICAgXTtcblxuICAgIC8vIENzdiBFeHBvcnQgZnVuY3Rpb25cbiAgICBjb25zdCBjc3ZSZXBvcnQgPSB7XG4gICAgICAgIGZpbGVuYW1lOiBtYXBOYW1lLnNwbGl0KCcgJykuam9pbignLScpICsgJy5jc3YnLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICBkYXRhOiBjc3ZEYXRhXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGFDaGFuZ2UgPSAoZGF0YSkgPT4ge1xuICAgICAgICBzZXRQaGFzZURhdGEoZGF0YS5sYW5lcyk7XG4gICAgICAgIGRpc3BhdGNoKHNhdmVQaGFzZURhdGEoW10pKTtcbiAgICB9O1xuXG4gICAgLy8gRnVudGlvbiB0byBvcGVuIHNpbmdsZSBhY3Rpb24gbW9kYWwgZm9yIGVkaXRcbiAgICBjb25zdCBjYXJkQ2xpY2tIYW5kbGVyID0gKGNhcmRJZCwgbGFuZUlkKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQaGFzZSA9IHBoYXNlRGF0YS5maWx0ZXIoKHBoYXNlKSA9PiBwaGFzZS5pZCA9PT0gbGFuZUlkKTtcbiAgICAgICAgY29uc3QgY3VycmVudENhcmQgPSBjdXJyZW50UGhhc2VbMF0uY2FyZHMuZmluZCgoY2FyZCkgPT4gY2FyZC5pZCA9PT0gY2FyZElkKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBoYXNlSW5kZXggPSBwaGFzZURhdGEuZmluZEluZGV4KHBoYXNlID0+IHBoYXNlLmlkID09PSBsYW5lSWQpO1xuXG4gICAgICAgIHNldEN1cnJlbnRDYXJkKGN1cnJlbnRDYXJkKTtcbiAgICAgICAgc2V0Q3VycmVudFBoYXNlKGN1cnJlbnRQaGFzZSk7XG4gICAgICAgIHNldFBoYXNlSW5kZXgoY3VycmVudFBoYXNlSW5kZXgpO1xuXG4gICAgICAgICQoJyNhY3Rpb25Nb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coe2N1cnJlbnRQaGFzZX0pO1xuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiB0byBnb3RvIHByb2Nlc3MgYmFja2dyb3VuZCBpbmZvcm1hdGlvbiBwYWdlXG4gICAgY29uc3QgZ290b1Byb2Nlc3NCZ2luZm9IYW5kbGVyID0gKCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzYXZlUGhhc2VEYXRhKHBoYXNlRGF0YSkpO1xuICAgICAgICBSb3V0ZXIucHVzaCgnL3Byb2Nlc3MtYmFja2dyb3VuZC1pbmZvcm1hdGlvbicpO1xuICAgIH07XG5cbiAgICAvLyBFeHBvcnQgZGF0YSBmdW5jdGlvblxuICAgIGNvbnN0IGV4cG9ydERhdGFIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YVRvRXhwb3J0ID0gW107XG4gICAgICAgIHBoYXNlRGF0YS5mb3JFYWNoKHBoYXNlID0+IHtcbiAgICAgICAgICAgIHBoYXNlLmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YVRvRXhwb3J0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAncGhhc2UnOiBwaGFzZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgJ2FjdGlvbic6IGNhcmQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICdyZXNwb25zaWJsZSc6IGNhcmQuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICdvdXRwdXQnOiBjYXJkLmxhYmVsID8gY2FyZC5sYWJlbCA6ICcnLFxuICAgICAgICAgICAgICAgICAgICAnbm90ZXMnOiBjYXJkLm1ldGFkYXRhID8gY2FyZC5tZXRhZGF0YSA6ICcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBzZXRDc3ZEYXRhKGRhdGFUb0V4cG9ydCk7XG4gICAgICAgIGJ0blJlZi5jdXJyZW50LmxpbmsuY2xpY2soKTtcbiAgICAgICAgZGlzcGF0Y2goc2F2ZVBoYXNlRGF0YShbXSkpO1xuICAgIH07XG5cbiAgICAvLyBGdW5jdGlvbiB0byByZXNldCBjdXJyZW50IEFjdGlvbiBjYXJkIGFmdGVyIGFuIHVwZGF0ZS9jaGFuZ2VcbiAgICBjb25zdCByZXNldERhdGFBZnRlclVwZGF0ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0Q3VycmVudENhcmQobnVsbCk7XG4gICAgICAgIHNldEN1cnJlbnRQaGFzZShbXSk7XG4gICAgICAgIHNldFBoYXNlSW5kZXgobnVsbCk7XG4gICAgfTtcblxuICAgIC8vIEZ1bmN0aW9uIHRvIHN0b3JlIGVkaXRlZCBkYXRhIHRvIHN0YXRlXG4gICAgY29uc3Qgc3RvcmVFZGl0dGVkRGF0YVRvU3RhdGUgPSAoZGF0YSkgPT4ge1xuICAgICAgICBzZXRQaGFzZURhdGEoZGF0YSk7XG4gICAgfTtcbiAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VfbWFuYWdlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPiAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdtYXBOYW1lX2lucHV0IG14LTMnIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21hcE5hbWV9IG9uQ2hhbmdlPXttYXBOYW1lSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgIDxCb2FyZCBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBlZGl0TGFuZVRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlXG4gICAgICAgICAgICAgICAgICAgIGNhbkFkZExhbmVzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBvbkRhdGFDaGFuZ2U9e2RhdGFDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIHQ9e2NyZWF0ZVRyYW5zbGF0ZShURVhUUyl9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2FyZENsaWNrPXtjYXJkQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICBsYW5lRHJhZ2dhYmxlXG4gICAgICAgICAgICAgICAgICAgIC8+IFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2dvdG9Qcm9jZXNzQmdpbmZvSGFuZGxlcn0gY2xhc3NOYW1lPVwiYnRuXCI+QWRkIHByb2Nlc3MgYmFja2dyb3VuZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q1NWTGluayBjbGFzc05hbWU9J2Qtbm9uZScgcmVmPXtidG5SZWZ9IHsuLi5jc3ZSZXBvcnR9PkV4cG9ydDwvQ1NWTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZXhwb3J0RGF0YUhhbmRsZXJ9IGNsYXNzTmFtZT1cImJ0blwiPkV4cG9ydCB0byBkYXRhIGZyYW1lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2luZ2xlQWN0aW9uQ2FyZCBcbiAgICAgICAgICAgIGN1cnJlbnRDYXJkPXtjdXJyZW50Q2FyZH0gXG4gICAgICAgICAgICBjdXJyZW50UGhhc2U9e2N1cnJlbnRQaGFzZX1cbiAgICAgICAgICAgIHBoYXNlRGF0YT17cGhhc2VEYXRhfVxuICAgICAgICAgICAgcGhhc2VJbmRleD17cGhhc2VJbmRleH1cbiAgICAgICAgICAgIHJlc2V0RGF0YUFmdGVyVXBkYXRlPXtyZXNldERhdGFBZnRlclVwZGF0ZX1cbiAgICAgICAgICAgIHN0b3JlRWRpdHRlZERhdGFUb1N0YXRlPXtzdG9yZUVkaXR0ZWREYXRhVG9TdGF0ZX1cbiAgICAgICAgICAgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbiAgXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})