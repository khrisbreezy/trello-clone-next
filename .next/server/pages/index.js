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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-trello */ \"react-trello\");\n/* harmony import */ var react_trello__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_trello__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-csv */ \"react-csv\");\n/* harmony import */ var react_csv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_csv__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/phaseStore */ \"./store/actions/phaseStore.js\");\n\nvar _jsxFileName = \"/Users/macbookpro/Desktop/Projects/React-Projects/trello-clone/pages/index.js\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nconst Home = () => {\n  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useDispatch\"])();\n  const btnRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])();\n  const thePhaseData = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__[\"useSelector\"])(state => state.phaseData.phases);\n  const {\n    0: mapName,\n    1: setMapName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Map Name');\n  const {\n    0: phaseData,\n    1: setPhaseData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(thePhaseData);\n  const {\n    0: csvData,\n    1: setCsvData\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]);\n  const TEXTS = {\n    \"Add another lane\": \"+ Add Phase\",\n    \"Click to add card\": \"Add actions\",\n    \"Delete lane\": \"Delete phase\",\n    \"Lane actions\": \"Phase actions\",\n    \"button\": {\n      \"Add lane\": \"Add Phase\",\n      \"Add card\": \"Add Phase\",\n      \"Cancel\": \"Cancel\"\n    },\n    \"placeholder\": {\n      \"title\": \"action\",\n      \"description\": \"responsible\",\n      \"label\": \"label\"\n    }\n  };\n\n  const mapNameHandler = e => {\n    setMapName(e.target.value);\n  };\n\n  const headers = [{\n    label: 'Phase',\n    key: 'phase'\n  }, {\n    label: 'Action',\n    key: 'action'\n  }, {\n    label: 'Responsible',\n    key: 'responsible'\n  }];\n  const csvReport = {\n    filename: mapName.split(' ').join('-') + '.csv',\n    headers: headers,\n    data: csvData\n  };\n  const data = {\n    lanes: phaseData\n  };\n\n  const dataChange = data => {\n    setPhaseData(data.lanes);\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_6__[\"savePhaseData\"])([]));\n  };\n\n  const gotoProcessBginfoHandler = () => {\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_6__[\"savePhaseData\"])(phaseData));\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push('/process-background-information');\n  };\n\n  const exportDataHandler = async () => {\n    let dataToExport = [];\n    phaseData.forEach(phase => {\n      phase.cards.forEach(card => {\n        dataToExport.push({\n          'phase': phase.title,\n          'action': card.title,\n          'responsible': card.description\n        });\n      });\n    });\n    await setCsvData(dataToExport);\n    btnRef.current.link.click();\n    dispatch(Object(_store_actions_phaseStore__WEBPACK_IMPORTED_MODULE_6__[\"savePhaseData\"])([])); // setPhaseData([]);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: \"page_manager\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container-fluid\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-12 text-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n            className: \"mapName_input\",\n            type: \"text\",\n            value: mapName,\n            onChange: mapNameHandler\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 93,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 21\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_trello__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          data: data,\n          editable: true,\n          editLaneTitle: true,\n          canAddLanes: true,\n          onDataChange: dataChange,\n          t: Object(react_trello__WEBPACK_IMPORTED_MODULE_2__[\"createTranslate\"])(TEXTS)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 20\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"row mb-5 text-center\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-6\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: gotoProcessBginfoHandler,\n            className: \"btn\",\n            children: \"Add process background\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 25\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"col-md-6\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_csv__WEBPACK_IMPORTED_MODULE_5__[\"CSVLink\"], _objectSpread(_objectSpread({\n            className: \"d-none\",\n            ref: btnRef\n          }, csvReport), {}, {\n            children: \"Export\"\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 25\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            onClick: exportDataHandler,\n            className: \"btn\",\n            children: \"Export to data frame\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 25\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 89,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiYnRuUmVmIiwidXNlUmVmIiwidGhlUGhhc2VEYXRhIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBoYXNlRGF0YSIsInBoYXNlcyIsIm1hcE5hbWUiLCJzZXRNYXBOYW1lIiwidXNlU3RhdGUiLCJzZXRQaGFzZURhdGEiLCJjc3ZEYXRhIiwic2V0Q3N2RGF0YSIsIlRFWFRTIiwibWFwTmFtZUhhbmRsZXIiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJoZWFkZXJzIiwibGFiZWwiLCJrZXkiLCJjc3ZSZXBvcnQiLCJmaWxlbmFtZSIsInNwbGl0Iiwiam9pbiIsImRhdGEiLCJsYW5lcyIsImRhdGFDaGFuZ2UiLCJzYXZlUGhhc2VEYXRhIiwiZ290b1Byb2Nlc3NCZ2luZm9IYW5kbGVyIiwiUm91dGVyIiwicHVzaCIsImV4cG9ydERhdGFIYW5kbGVyIiwiZGF0YVRvRXhwb3J0IiwiZm9yRWFjaCIsInBoYXNlIiwiY2FyZHMiLCJjYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImN1cnJlbnQiLCJsaW5rIiwiY2xpY2siLCJjcmVhdGVUcmFuc2xhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBLE1BQU1BLElBQUksR0FBRyxNQUFNO0FBRWYsUUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0Msb0RBQU0sRUFBckI7QUFFQSxRQUFNQyxZQUFZLEdBQUdDLCtEQUFXLENBQUNDLEtBQUssSUFBSUEsS0FBSyxDQUFDQyxTQUFOLENBQWdCQyxNQUExQixDQUFoQztBQUVBLFFBQU07QUFBQSxPQUFFQyxPQUFGO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxVQUFELENBQXhDO0FBQ0EsUUFBTTtB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QTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQU9JO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsK0JBQ0cscUVBQUMsbURBQUQ7QUFBTyxjQUFJLEVBQUVXLElBQWI7QUFDQyxrQkFBUSxNQURUO0FBQ1UsdUJBQWEsTUFEdkI7QUFFQyxxQkFBVyxNQUZaO0FBRWEsc0JBQVksRUFBRUUsVUFGM0I7QUFHQyxXQUFDLEVBQUVnQixvRUFBZSxDQUFDOUIsS0FBRDtBQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixlQWVJO0FBQUssaUJBQVMsRUFBQyxzQkFBZjtBQUFBLGdDQUNJO0FBQUssbUJBQVMsRUFBQyxVQUFmO0FBQUEsaUNBQ0k7QUFBUSxtQkFBTyxFQUFFZ0Isd0JBQWpCO0FBQTJDLHFCQUFTLEVBQUMsS0FBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBSUk7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxrQ0FDSSxxRUFBQyxpREFBRDtBQUFTLHFCQUFTLEVBQUMsUUFBbkI7QUFBNEIsZUFBRyxFQUFFN0I7QUFBakMsYUFBNkNxQixTQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQVEsbUJBQU8sRUFBRVcsaUJBQWpCO0FBQW9DLHFCQUFTLEVBQUMsS0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUE4QkgsQ0EzR0Q7O0FBNkdlbkMsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm9hcmQsIHsgY3JlYXRlVHJhbnNsYXRlIH0gZnJvbSAncmVhY3QtdHJlbGxvJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQ1NWTGluayB9IGZyb20gJ3JlYWN0LWNzdic7XG5cbmltcG9ydCB7IHNhdmVQaGFzZURhdGEgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL3BoYXNlU3RvcmUnO1xuXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gICAgY29uc3QgYnRuUmVmID0gdXNlUmVmKCk7XG5cbiAgICBjb25zdCB0aGVQaGFzZURhdGEgPSB1c2VTZWxlY3RvcihzdGF0ZSA9PiBzdGF0ZS5waGFzZURhdGEucGhhc2VzKTtcblxuICAgIGNvbnN0IFsgbWFwTmFtZSwgc2V0TWFwTmFtZSBdID0gdXNlU3RhdGUoJ01hcCBOYW1lJyk7XG4gICAgY29uc3QgW3BoYXNlRGF0YSwgc2V0UGhhc2VEYXRhXSA9IHVzZVN0YXRlKHRoZVBoYXNlRGF0YSk7XG4gICAgY29uc3QgW2NzdkRhdGEsIHNldENzdkRhdGFdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgY29uc3QgVEVYVFMgPSB7XG4gICAgICAgIFwiQWRkIGFub3RoZXIgbGFuZVwiOiBcIisgQWRkIFBoYXNlXCIsXG4gICAgICAgIFwiQ2xpY2sgdG8gYWRkIGNhcmRcIjogXCJBZGQgYWN0aW9uc1wiLFxuICAgICAgICBcIkRlbGV0ZSBsYW5lXCI6IFwiRGVsZXRlIHBoYXNlXCIsXG4gICAgICAgIFwiTGFuZSBhY3Rpb25zXCI6IFwiUGhhc2UgYWN0aW9uc1wiLFxuICAgICAgICBcImJ1dHRvblwiOiB7XG4gICAgICAgICAgXCJBZGQgbGFuZVwiOiBcIkFkZCBQaGFzZVwiLFxuICAgICAgICAgIFwiQWRkIGNhcmRcIjogXCJBZGQgUGhhc2VcIixcbiAgICAgICAgICBcIkNhbmNlbFwiOiBcIkNhbmNlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFwicGxhY2Vob2xkZXJcIjoge1xuICAgICAgICAgIFwidGl0bGVcIjogXCJhY3Rpb25cIixcbiAgICAgICAgICBcImRlc2NyaXB0aW9uXCI6IFwicmVzcG9uc2libGVcIixcbiAgICAgICAgICBcImxhYmVsXCI6IFwibGFiZWxcIlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG1hcE5hbWVIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgc2V0TWFwTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBbXG4gICAgICAgIHtsYWJlbDogJ1BoYXNlJywga2V5OiAncGhhc2UnfSxcbiAgICAgICAge2xhYmVsOiAnQWN0aW9uJywga2V5OiAnYWN0aW9uJ30sXG4gICAgICAgIHtsYWJlbDogJ1Jlc3BvbnNpYmxlJywga2V5OiAncmVzcG9uc2libGUnfVxuICAgIF07XG5cbiAgICBjb25zdCBjc3ZSZXBvcnQgPSB7XG4gICAgICAgIGZpbGVuYW1lOiBtYXBOYW1lLnNwbGl0KCcgJykuam9pbignLScpICsgJy5jc3YnLFxuICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxuICAgICAgICBkYXRhOiBjc3ZEYXRhXG4gICAgfTtcblxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGxhbmVzOiBwaGFzZURhdGFcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YUNoYW5nZSA9IChkYXRhKSA9PiB7XG4gICAgICAgIHNldFBoYXNlRGF0YShkYXRhLmxhbmVzKTtcbiAgICAgICAgZGlzcGF0Y2goc2F2ZVBoYXNlRGF0YShbXSkpO1xuICAgIH07XG5cbiAgICBjb25zdCBnb3RvUHJvY2Vzc0JnaW5mb0hhbmRsZXIgPSAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNhdmVQaGFzZURhdGEocGhhc2VEYXRhKSk7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvcHJvY2Vzcy1iYWNrZ3JvdW5kLWluZm9ybWF0aW9uJyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGV4cG9ydERhdGFIYW5kbGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgZGF0YVRvRXhwb3J0ID0gW107XG4gICAgICAgIHBoYXNlRGF0YS5mb3JFYWNoKHBoYXNlID0+IHtcbiAgICAgICAgICAgIHBoYXNlLmNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgICAgICAgICAgICAgZGF0YVRvRXhwb3J0LnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAncGhhc2UnOiBwaGFzZS50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgJ2FjdGlvbic6IGNhcmQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICdyZXNwb25zaWJsZSc6IGNhcmQuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHNldENzdkRhdGEoZGF0YVRvRXhwb3J0KTtcbiAgICAgICAgYnRuUmVmLmN1cnJlbnQubGluay5jbGljaygpO1xuICAgICAgICBkaXNwYXRjaChzYXZlUGhhc2VEYXRhKFtdKSk7XG4gICAgICAgIC8vIHNldFBoYXNlRGF0YShbXSk7XG4gICAgfTtcbiAgXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3BhZ2VfbWFuYWdlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPiAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J21hcE5hbWVfaW5wdXQnIHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e21hcE5hbWV9IG9uQ2hhbmdlPXttYXBOYW1lSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgIDxCb2FyZCBkYXRhPXtkYXRhfVxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZSBlZGl0TGFuZVRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGNhbkFkZExhbmVzIG9uRGF0YUNoYW5nZT17ZGF0YUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgdD17Y3JlYXRlVHJhbnNsYXRlKFRFWFRTKX1cbiAgICAgICAgICAgICAgICAgICAgLz4gXG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi01IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Z290b1Byb2Nlc3NCZ2luZm9IYW5kbGVyfSBjbGFzc05hbWU9XCJidG5cIj5BZGQgcHJvY2VzcyBiYWNrZ3JvdW5kPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q1NWTGluayBjbGFzc05hbWU9J2Qtbm9uZScgcmVmPXtidG5SZWZ9IHsuLi5jc3ZSZXBvcnR9PkV4cG9ydDwvQ1NWTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZXhwb3J0RGF0YUhhbmRsZXJ9IGNsYXNzTmFtZT1cImJ0blwiPkV4cG9ydCB0byBkYXRhIGZyYW1lPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG4gIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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