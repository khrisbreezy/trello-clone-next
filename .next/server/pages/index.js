module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-trello */ \"react-trello\");\n/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_trello__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-csv */ \"react-csv\");\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/phaseStore */ \"./store/actions/phaseStore.js\");\n\nvar _jsxFileName = \"/Users/macbookpro/Desktop/Projects/React-Projects/trello-clone/pages/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst Home = () => {\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  const btnRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  const thePhaseData = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(state => state.phaseData.phases);\n  const {\n    0: mapName,\n    1: setMapName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Map Name');\n  const {\n    0: phaseData,\n    1: setPhaseData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(thePhaseData);\n  const {\n    0: csvData,\n    1: setCsvData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const TEXTS = {\n    \"Add another lane\": \"+ Add Phase\",\n    \"Click to add card\": \"Add actions\",\n    \"Delete lane\": \"Delete phase\",\n    \"Lane actions\": \"Phase actions\",\n    \"button\": {\n      \"Add lane\": \"Add Phase\",\n      \"Add card\": \"Add Action\",\n      \"Cancel\": \"Cancel\"\n    },\n    \"placeholder\": {\n      \"title\": \"action\",\n      \"description\": \"responsible\",\n      \"label\": \"label\"\n    }\n  };\n\n  const mapNameHandler = e => {\n    setMapName(e.target.value);\n  };\n\n  const headers = [{\n    label: 'Phase',\n    key: 'phase'\n  }, {\n    label: 'Action',\n    key: 'action'\n  }, {\n    label: 'Responsible',\n    key: 'responsible'\n  }];\n  const csvReport = {\n    filename: mapName.split(' ').join('-') + '.csv',\n    headers: headers,\n    data: csvData\n  };\n  const data = {\n    lanes: phaseData\n  };\n\n  const dataChange = data => {\n    setPhaseData(data.lanes);\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_6__[\"savePhaseData\"])([]));\n  };\n\n  const gotoProcessBginfoHandler = () => {\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_6__[\"savePhaseData\"])(phaseData));\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/process-background-information');\n  };\n\n  const exportDataHandler = async () => {\n    $('#authModal').modal('show');\n    return;\n    let dataToExport = [];\n    phaseData.forEach(phase => {\n      phase.cards.forEach(card => {\n        dataToExport.push({\n          'phase': phase.title,\n          'action': card.title,\n          'responsible': card.description\n        });\n      });\n    });\n    await setCsvData(dataToExport);\n    btnRef.current.link.click();\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_6__[\"savePhaseData\"])([])); // setPhaseData([]);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: \"page_manager\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container-fluid\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12 text-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: \"mapName_input\",\n            type: \"text\",\n            value: mapName,\n            onChange: mapNameHandler\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_trello__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          data: data,\n          editable: true,\n          editLaneTitle: true,\n          canAddLanes: true,\n          onDataChange: dataChange,\n          t: Object(react_trello__WEBPACK_IMPORTED_MODULE_2__[\"createTranslate\"])(TEXTS)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 20\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-6 mb-4\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: gotoProcessBginfoHandler,\n            className: \"btn\",\n            children: \"Add process background\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 109,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 108,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-6 mb-4\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_csv__WEBPACK_IMPORTED_MODULE_5__[\"CSVLink\"], _objectSpread(_objectSpread({\n            className: \"d-none\",\n            ref: btnRef\n          }, csvReport), {}, {\n            children: \"Export\"\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 112,\n            columnNumber: 25\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: exportDataHandler,\n            className: \"btn\",\n            children: \"Export to data frame\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 113,\n            columnNumber: 25\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 107,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 91,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYnRuUmVmIiwidXNlUmVmIiwidGhlUGhhc2VEYXRhIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBoYXNlRGF0YSIsInBoYXNlcyIsIm1hcE5hbWUiLCJzZXRNYXBOYW1lIiwidXNlU3RhdGUiLCJzZXRQaGFzZURhdGEiLCJjc3ZEYXRhIiwic2V0Q3N2RGF0YSIsIlRFWFRTIiwibWFwTmFtZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXJzIiwibGFiZWwiLCJrZXkiLCJjc3ZSZXBvcnQiLCJmaWxlbmFtZSIsInNwbGl0Iiwiam9pbiIsImRhdGEiLCJsYW5lcyIsImRhdGFDaGFuZ2UiLCJzYXZlUGhhc2VEYXRhIiwiZ290b1Byb2Nlc3NCZ2luZm9IYW5kbGVyIiwiUm91dGVyIiwicHVzaCIsImV4cG9ydERhdGFIYW5kbGVyIiwiJCIsIm1vZGFsIiwiZGF0YVRvRXhwb3J0IiwiZm9yRWFjaCIsInBoYXNlIiwiY2FyZHMiLCJjYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImN1cnJlbnQiLCJsaW5rIiwiY2xpY2siLCJjcmVhdGVUcmFuc2xhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBRWYsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0Msb0RBQU0sRUFBckI7QUFFQSxRQUFNQyxZQUFZLEdBQUdDLCtEQUFXLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxNQUExQixDQUFoQztBQUVBLFFBQU07QUFBQSxPQUFFQyxPQUFGO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxVQUFELENBQXhD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ZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEJvYXJkLCB7IGNyZWF0ZVRyYW5zbGF0ZSB9IGZyb20gJ3JlYWN0LXRyZWxsbyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IENTVkxpbmsgfSBmcm9tICdyZWFjdC1jc3YnO1xuXG5pbXBvcnQgeyBzYXZlUGhhc2VEYXRhIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9waGFzZVN0b3JlJztcblxuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICAgIGNvbnN0IGJ0blJlZiA9IHVzZVJlZigpO1xuXG4gICAgY29uc3QgdGhlUGhhc2VEYXRhID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUucGhhc2VEYXRhLnBoYXNlcyk7XG5cbiAgICBjb25zdCBbIG1hcE5hbWUsIHNldE1hcE5hbWUgXSA9IHVzZVN0YXRlKCdNYXAgTmFtZScpO1xuICAgIGNvbnN0IFtwaGFzZURhdGEsIHNldFBoYXNlRGF0YV0gPSB1c2VTdGF0ZSh0aGVQaGFzZURhdGEpO1xuICAgIGNvbnN0IFtjc3ZEYXRhLCBzZXRDc3ZEYXRhXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIGNvbnN0IFRFWFRTID0ge1xuICAgICAgICBcIkFkZCBhbm90aGVyIGxhbmVcIjogXCIrIEFkZCBQaGFzZVwiLFxuICAgICAgICBcIkNsaWNrIHRvIGFkZCBjYXJkXCI6IFwiQWRkIGFjdGlvbnNcIixcbiAgICAgICAgXCJEZWxldGUgbGFuZVwiOiBcIkRlbGV0ZSBwaGFzZVwiLFxuICAgICAgICBcIkxhbmUgYWN0aW9uc1wiOiBcIlBoYXNlIGFjdGlvbnNcIixcbiAgICAgICAgXCJidXR0b25cIjoge1xuICAgICAgICAgIFwiQWRkIGxhbmVcIjogXCJBZGQgUGhhc2VcIixcbiAgICAgICAgICBcIkFkZCBjYXJkXCI6IFwiQWRkIEFjdGlvblwiLFxuICAgICAgICAgIFwiQ2FuY2VsXCI6IFwiQ2FuY2VsXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJwbGFjZWhvbGRlclwiOiB7XG4gICAgICAgICAgXCJ0aXRsZVwiOiBcImFjdGlvblwiLFxuICAgICAgICAgIFwiZGVzY3JpcHRpb25cIjogXCJyZXNwb25zaWJsZVwiLFxuICAgICAgICAgIFwibGFiZWxcIjogXCJsYWJlbFwiXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgbWFwTmFtZUhhbmRsZXIgPSAoZSkgPT4ge1xuICAgICAgICBzZXRNYXBOYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGVhZGVycyA9IFtcbiAgICAgICAge2xhYmVsOiAnUGhhc2UnLCBrZXk6ICdwaGFzZSd9LFxuICAgICAgICB7bGFiZWw6ICdBY3Rpb24nLCBrZXk6ICdhY3Rpb24nfSxcbiAgICAgICAge2xhYmVsOiAnUmVzcG9uc2libGUnLCBrZXk6ICdyZXNwb25zaWJsZSd9XG4gICAgXTtcblxuICAgIGNvbnN0IGNzdlJlcG9ydCA9IHtcbiAgICAgICAgZmlsZW5hbWU6IG1hcE5hbWUuc3BsaXQoJyAnKS5qb2luKCctJykgKyAnLmNzdicsXG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIGRhdGE6IGNzdkRhdGFcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgbGFuZXM6IHBoYXNlRGF0YVxuICAgIH07XG5cbiAgICBjb25zdCBkYXRhQ2hhbmdlID0gKGRhdGEpID0+IHtcbiAgICAgICAgc2V0UGhhc2VEYXRhKGRhdGEubGFuZXMpO1xuICAgICAgICBkaXNwYXRjaChzYXZlUGhhc2VEYXRhKFtdKSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGdvdG9Qcm9jZXNzQmdpbmZvSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2F2ZVBoYXNlRGF0YShwaGFzZURhdGEpKTtcbiAgICAgICAgUm91dGVyLnB1c2goJy9wcm9jZXNzLWJhY2tncm91bmQtaW5mb3JtYXRpb24nKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZXhwb3J0RGF0YUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICQoJyNhdXRoTW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBkYXRhVG9FeHBvcnQgPSBbXTtcbiAgICAgICAgcGhhc2VEYXRhLmZvckVhY2gocGhhc2UgPT4ge1xuICAgICAgICAgICAgcGhhc2UuY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICAgICAgICAgICAgICBkYXRhVG9FeHBvcnQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICdwaGFzZSc6IHBoYXNlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAnYWN0aW9uJzogY2FyZC50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgJ3Jlc3BvbnNpYmxlJzogY2FyZC5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgc2V0Q3N2RGF0YShkYXRhVG9FeHBvcnQpO1xuICAgICAgICBidG5SZWYuY3VycmVudC5saW5rLmNsaWNrKCk7XG4gICAgICAgIGRpc3BhdGNoKHNhdmVQaGFzZURhdGEoW10pKTtcbiAgICAgICAgLy8gc2V0UGhhc2VEYXRhKFtdKTtcbiAgICB9O1xuICBcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncGFnZV9tYW5hZ2VyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+ICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nbWFwTmFtZV9pbnB1dCcgdHlwZT1cInRleHRcIiB2YWx1ZT17bWFwTmFtZX0gb25DaGFuZ2U9e21hcE5hbWVIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgPEJvYXJkIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlIGVkaXRMYW5lVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgY2FuQWRkTGFuZXMgb25EYXRhQ2hhbmdlPXtkYXRhQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICB0PXtjcmVhdGVUcmFuc2xhdGUoVEVYVFMpfVxuICAgICAgICAgICAgICAgICAgICAvPiBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtnb3RvUHJvY2Vzc0JnaW5mb0hhbmRsZXJ9IGNsYXNzTmFtZT1cImJ0blwiPkFkZCBwcm9jZXNzIGJhY2tncm91bmQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPENTVkxpbmsgY2xhc3NOYW1lPSdkLW5vbmUnIHJlZj17YnRuUmVmfSB7Li4uY3N2UmVwb3J0fT5FeHBvcnQ8L0NTVkxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2V4cG9ydERhdGFIYW5kbGVyfSBjbGFzc05hbWU9XCJidG5cIj5FeHBvcnQgdG8gZGF0YSBmcmFtZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxuICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./store/actions/phaseStore.js":
/*!*************************************!*\
  !*** ./store/actions/phaseStore.js ***!
  \*************************************/
/*! exports provided: SAVE_PHASE_DATA, savePhaseData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SAVE_PHASE_DATA\", function() { return SAVE_PHASE_DATA; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"savePhaseData\", function() { return savePhaseData; });\nconst SAVE_PHASE_DATA = 'SAVE_PHASE_DATA';\nconst savePhaseData = data => ({\n  type: SAVE_PHASE_DATA,\n  data\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9hY3Rpb25zL3BoYXNlU3RvcmUuanM/ZDlmMCJdLCJuYW1lcyI6WyJTQVZFX1BIQVNFX0RBVEEiLCJzYXZlUGhhc2VEYXRhIiwiZGF0YSIsInR5cGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLGVBQWUsR0FBRyxpQkFBeEI7QUFHQSxNQUFNQyxhQUFhLEdBQUlDLElBQUQsS0FBVztBQUNwQ0MsTUFBSSxFQUFFSCxlQUQ4QjtBQUVwQ0U7QUFGb0MsQ0FBWCxDQUF0QiIsImZpbGUiOiIuL3N0b3JlL2FjdGlvbnMvcGhhc2VTdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTQVZFX1BIQVNFX0RBVEEgPSAnU0FWRV9QSEFTRV9EQVRBJztcblxuXG5leHBvcnQgY29uc3Qgc2F2ZVBoYXNlRGF0YSA9IChkYXRhKSA9PiAoe1xuICAgIHR5cGU6IFNBVkVfUEhBU0VfREFUQSxcbiAgICBkYXRhXG59KTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/actions/phaseStore.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-csv":
/*!****************************!*\
  !*** external "react-csv" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-csv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1jc3ZcIj8xZTFiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWNzdi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWNzdlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-csv\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react-trello":
/*!*******************************!*\
  !*** external "react-trello" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-trello\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10cmVsbG9cIj80NTI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXRyZWxsby5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRyZWxsb1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-trello\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });