module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./containers/awards/awards.js":
/*!*************************************!*\
  !*** ./containers/awards/awards.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MakeItYourM2U; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/SkipPrevious */ "@material-ui/icons/SkipPrevious");
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "@material-ui/icons/PlayArrow");
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/SkipNext */ "@material-ui/icons/SkipNext");
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\awards\\awards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    '& p': {
      fontSize: '0.8rem'
    }
  }
}));
function MakeItYourM2U() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Awards", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "Academic Excellence Presenter", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), "Jan 2016", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Presented on \u201CAcademic Excellence in UCSI\u201D to 600 new students and parents during UCSI University Jan 2016 Orientation.")), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Three-times UCSI Presidential Award winner", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), "May 2015", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Awarded UCSI Presidential Award in January 2014, May 2014, May 2015")), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Dean\u2019s List Recipient", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), "Jan 2014", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Dean\u2019s List Recipient in May 2013, September 2013, January 2014", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), "The Dean's Honours List is a recognition of outstanding academic excellence and the Faculty members extend their congratulations to the following students who are admitted to the Dean\u2019s Honours List.")), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "The Star Education Fund Scholarship", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), "May 2012", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Awarded the Full Scholarship for BSc (Hons) Computing foundation-degree course in UCSI University by The Star Education Fund.")));
}

/***/ }),

/***/ "./containers/awards/news.js":
/*!***********************************!*\
  !*** ./containers/awards/news.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/SkipPrevious */ "@material-ui/icons/SkipPrevious");
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "@material-ui/icons/PlayArrow");
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/SkipNext */ "@material-ui/icons/SkipNext");
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\awards\\news.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  card: {
    display: 'flex',
    maxWidth: 1200,
    margin: '0 auto'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '100%'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));
function News() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "News", __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "The human aspect of computing", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), "Mar 2015", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Featured on the local paper, read more: http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150326/282226599220128", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), "Paper archive: https://www.ucsiuniversity.edu.my/sites/default/files/20150326-star.pdf")), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Education for a lifetime", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), "April 2015", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Featured on the local paper, read more: http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150414/282093455263590", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), "Paper archive: https://www.ucsiuniversity.edu.my/sites/default/files/20150414-star2.pdf")), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.cover,
    image: "https://i.stack.imgur.com/z4fJl.jpg",
    title: "Live from space album cover",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("div", {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "h5",
    variant: "h5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "MakeityourM2U, a UI/UX design competition for Maybank\u2019s mobile banking site was held from 1st until 27 February 2015. The competition is among students from 10 selected universities in Klang Valley."), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "subtitle1",
    color: "textSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Throughout the competition period, Maybank received more than 60 interesting designs from the students. On 9th April 2015, the top 10 designs stand before the judges to present their ideas and designs.")), __jsx("div", {
    className: classes.controls,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "previous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }) : __jsx(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "play/pause",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.playIcon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default.a, {
    "aria-label": "next",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, theme.direction === 'rtl' ? __jsx(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }) : __jsx(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })))))));
}

/***/ }),

/***/ "./containers/biography/languages.js":
/*!*******************************************!*\
  !*** ./containers/biography/languages.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Languages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\biography\\languages.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({}));
function Languages() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Languages", __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "English"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Mandarin"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Cantonese"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Malay"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Japanese", __jsx("ul", {
    style: {
      fontSize: '0.8em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "N4 Certified on Jan 2020"), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "N5 Certified on July 2019")))));
}

/***/ }),

/***/ "./containers/biography/me.js":
/*!************************************!*\
  !*** ./containers/biography/me.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MakeItYourM2U; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/icons/Email */ "@material-ui/icons/Email");
/* harmony import */ var _material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_icons_Forum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Forum */ "@material-ui/icons/Forum");
/* harmony import */ var _material_ui_icons_Forum__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Forum__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Work */ "@material-ui/icons/Work");
/* harmony import */ var _material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\biography\\me.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const GCP_ICON = '/static/google-cloud-icon.png';
const PORTRAIT = '/static/transparent_background_portrait.png';
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  card: {
    display: 'flex',
    maxWidth: 1200,
    margin: '0 auto'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '100%'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));
function MakeItYourM2U() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    style: {
      display: 'inline-block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("img", {
    src: PORTRAIT,
    alt: "Mok's Portrait",
    style: {
      maxWidth: 100,
      borderRadius: '50%'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx("div", {
    style: {
      display: 'inline-block',
      marginLeft: 20
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Hi, I'm Mok"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Full stack developer"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      fontSize: '0.9em',
      marginRight: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "jee.ict@hotmail.com"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_material_ui_icons_Forum__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      fontSize: '0.9em',
      marginRight: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "Speaks English, \u4E2D\u6587, \u5E7F\u4E1C\u8BDD, \u65E5\u672C\u8A9E, Melayu"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: '0.9em',
      marginRight: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), "Work: Hokkaido, Japan"))), __jsx("img", {
    src: GCP_ICON,
    alt: "GCP icon",
    style: {
      maxWidth: 50,
      float: 'right'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
}

/***/ }),

/***/ "./containers/education/education.js":
/*!*******************************************!*\
  !*** ./containers/education/education.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MakeItYourM2U; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/SkipPrevious */ "@material-ui/icons/SkipPrevious");
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "@material-ui/icons/PlayArrow");
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/SkipNext */ "@material-ui/icons/SkipNext");
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\education\\education.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  card: {
    display: 'flex',
    maxWidth: 1200,
    margin: '0 auto'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '100%'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));
function MakeItYourM2U() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Education", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "BSc (Hons) Computing, UCSI University", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), "May 2013 \u2192 May 2016", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Graduated with first-class honours", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), "CGPA 3.95/4.00")));
}

/***/ }),

/***/ "./containers/experiences/experiences.js":
/*!***********************************************!*\
  !*** ./containers/experiences/experiences.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MakeItYourM2U; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/ExpansionPanel */ "@material-ui/core/ExpansionPanel");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelSummary */ "@material-ui/core/ExpansionPanelSummary");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ExpansionPanelDetails */ "@material-ui/core/ExpansionPanelDetails");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\experiences\\experiences.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    '& p': {
      fontSize: '0.8rem'
    }
  },
  panel: {
    boxShadow: 'none'
  },
  summary: {
    padding: 0
  },
  details: {
    padding: 0
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));
function MakeItYourM2U() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.panel,
    defaultExpanded: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }),
    "aria-controls": "panel1a-content",
    id: "panel1a-header",
    className: classes.summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Experiences")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Lead Developer at HTM Niseko", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "May 2019 \u2192 Current (10 months)"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), "Developer at HTM Niseko", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Nov 2017 \u2192 May 2019 (1 year, 7 months)"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), "Remote Developer at HTM Niseko", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Jan 2017 \u2192 Nov 2017 (11 months)"), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), "Intern at HTM Niseko", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Jun 2016 \u2192 Dec 2016 (7 months)")))));
}

/***/ }),

/***/ "./containers/openSources/libraries.js":
/*!*********************************************!*\
  !*** ./containers/openSources/libraries.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MakeItYourM2U; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/SkipPrevious */ "@material-ui/icons/SkipPrevious");
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "@material-ui/icons/PlayArrow");
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/SkipNext */ "@material-ui/icons/SkipNext");
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\openSources\\libraries.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  card: {
    display: 'flex',
    maxWidth: 1200,
    margin: '0 auto'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: '100%'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));
function MakeItYourM2U() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Open Sources", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "NPM Audit Handler", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), "jeemok/better-npm-audit Last commit on Dec 25, 19 18 Commits / 331 ++ / 53 -- NPM Audit Handler"));
}

/***/ }),

/***/ "./containers/projects/projects.js":
/*!*****************************************!*\
  !*** ./containers/projects/projects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Projects; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/SkipPrevious */ "@material-ui/icons/SkipPrevious");
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "@material-ui/icons/PlayArrow");
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/SkipNext */ "@material-ui/icons/SkipNext");
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\projects\\projects.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    '& p': {
      fontSize: '0.8rem'
    }
  }
}));
function Projects() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Projects", __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Instructors management system", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "June 2020"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "to manage daily.")), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "OKingLegend App", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Sep 2017"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Built native iOS & Android application using React Native through Expo.io tool; Uses WordPress Woocommerce as backend; The application supports PayPal and COD payment; Published on both AppStore & Google Play Store:", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), "https://itunes.apple.com/us/app/okinglegend/id1236763942?mt=8&ign-mpt=uo%3D4", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), "https://play.google.com/store/apps/details?id=com.okinglegend.okinglegendapp&hl=en")), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "LFC Malaysia App", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Jun 2017"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Built native ios & Android application using React Native through Expo.io tool; Uses WordPress Woocommerce as backend; The application supports PayPal and COD payment; Published on both AppStore & Google Play Store:", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), "https://itunes.apple.com/us/app/lfc-malaysia/id1215617599?mt=8", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "https://play.google.com/store/apps/details?id=com.nav.lfc&hl=en")));
}

/***/ }),

/***/ "./containers/reviews/reviews.js":
/*!***************************************!*\
  !*** ./containers/reviews/reviews.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Reviews; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\reviews\\reviews.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  root: {
    '& p': {
      fontSize: '0.8rem'
    }
  }
}));
function Reviews() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Manager Assessments", __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "HTM", __jsx("div", {
    style: {
      border: '1px solid gray',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Completed: Aug 31, 2018 at 9:57 PM by Benjamin Metcalf"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Mok develops functional, reliable, easy to use products, while maintaining extremely high standards for coding, security, documentation and testing. Really good suggestions for problem solving and improvements - thinking beyond the specification and about delivering the best result for HTM. He is also a really positive influence within the team - he is fun to work with! Provides useful, insightful analysis or potential applicants.")), __jsx("div", {
    style: {
      border: '1px solid gray',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Completed: Apr 30, 2018 at 8:31 AM by Benjamin Metcalf"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Last review I wrote how impressed I was with all Mok had learned. 3 months later I don't think like that any more; I see Mok as one of the most important and knowledgeable parts of our team. His dedication to quality code and structure is fantastic and I rely of him a lot to watch over that for the team. He produces fantastic, well-functioning results and is a pleasure to work with! I very much appreciate Mok coming to me recently with his concerns. Another example of how he is dedicated to doing quality work.")), __jsx("div", {
    style: {
      border: '1px solid gray',
      padding: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Completed: Jan 28, 2018 at 11:03 PM by Benjamin Metcalf"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Mok has learnt A LOT in the past year, I am very impressed. His development produces really great results. He thinks about the right approach to solving a problem and the fastest approach and makes a choice between those two (or a middle ground), as appropriate. He stays positive despite repeated changes and set-backs (for Bamboo+) and is a pleasure to work with. Tests his development from a user perspective, as well as a developer."))));
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_biography_me__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/biography/me */ "./containers/biography/me.js");
/* harmony import */ var _containers_biography_languages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/biography/languages */ "./containers/biography/languages.js");
/* harmony import */ var _containers_experiences_experiences__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../containers/experiences/experiences */ "./containers/experiences/experiences.js");
/* harmony import */ var _containers_education_education__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/education/education */ "./containers/education/education.js");
/* harmony import */ var _containers_awards_awards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/awards/awards */ "./containers/awards/awards.js");
/* harmony import */ var _containers_awards_news__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../containers/awards/news */ "./containers/awards/news.js");
/* harmony import */ var _containers_projects_projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../containers/projects/projects */ "./containers/projects/projects.js");
/* harmony import */ var _containers_openSources_libraries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers/openSources/libraries */ "./containers/openSources/libraries.js");
/* harmony import */ var _containers_reviews_reviews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../containers/reviews/reviews */ "./containers/reviews/reviews.js");
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function Index() {
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      fontFamily: 'arial'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, __jsx(_containers_biography_me__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx(_containers_experiences_experiences__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx(_containers_education_education__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_containers_awards_awards__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx(_containers_awards_news__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_containers_projects_projects__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx(_containers_biography_languages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_containers_reviews_reviews__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx(_containers_openSources_libraries__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mok.liu\Projects\resume\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/ExpansionPanel":
/*!***************************************************!*\
  !*** external "@material-ui/core/ExpansionPanel" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelDetails":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelDetails" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "@material-ui/core/ExpansionPanelSummary":
/*!**********************************************************!*\
  !*** external "@material-ui/core/ExpansionPanelSummary" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Email":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Email" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Email");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/Forum":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Forum" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Forum");

/***/ }),

/***/ "@material-ui/icons/PlayArrow":
/*!***********************************************!*\
  !*** external "@material-ui/icons/PlayArrow" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PlayArrow");

/***/ }),

/***/ "@material-ui/icons/SkipNext":
/*!**********************************************!*\
  !*** external "@material-ui/icons/SkipNext" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipNext");

/***/ }),

/***/ "@material-ui/icons/SkipPrevious":
/*!**************************************************!*\
  !*** external "@material-ui/icons/SkipPrevious" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/SkipPrevious");

/***/ }),

/***/ "@material-ui/icons/Work":
/*!******************************************!*\
  !*** external "@material-ui/icons/Work" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Work");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map