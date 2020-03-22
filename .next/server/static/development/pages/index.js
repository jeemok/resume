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

/***/ "./components/awards/Achievement.js":
/*!******************************************!*\
  !*** ./components/awards/Achievement.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ "luxon");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/DateRange */ "@material-ui/icons/DateRange");
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\components\\awards\\Achievement.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const DATE_FORMAT = 'MMM yyyy'; // e.g. Jan 2019

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    marginBottom: '15px'
  },
  period: {
    color: 'grey',
    fontSize: '0.8em',
    marginTop: '10px',
    display: 'inline-block',
    minWidth: '300px'
  },
  icon: {
    verticalAlign: 'top',
    fontSize: '1em',
    marginRight: '5px'
  },
  tag: {
    display: 'inline-block',
    background: '#e8f3ff',
    color: '#3376ac',
    borderRadius: '2px',
    padding: '5px 8px',
    marginRight: '5px',
    fontSize: '0.6em'
  },
  project: {
    fontSize: '0.9em',
    marginLeft: '15px',
    marginBottom: '10px'
  },
  projectName: {
    fontSize: '0.9em',
    fontWeight: 600,
    marginBottom: '5px'
  },
  projectDescription: {
    fontSize: '0.9em',
    marginBottom: '5px'
  }
}));

const achievement = props => {
  const {
    title,
    date,
    descriptions,
    tags
  } = props.details;
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }, title), __jsx("div", {
    className: classes.period,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: undefined
  }, __jsx(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }), luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].fromISO(date).toFormat(DATE_FORMAT)), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(descriptions) && react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(descriptions.map(desc => __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: undefined
  }, desc))), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(tags) && react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(tags.map(tag => __jsx("div", {
    className: classes.tag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, tag))));
};

achievement.PropTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    date: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    descriptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),
    tags: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (achievement);

/***/ }),

/***/ "./components/experiences/experience.js":
/*!**********************************************!*\
  !*** ./components/experiences/experience.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ "luxon");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/DateRange */ "@material-ui/icons/DateRange");
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\components\\experiences\\experience.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const DATE_FORMAT = 'MMM yyyy'; // e.g. Jan 2019

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(theme => ({
  root: {
    marginBottom: '25px'
  },
  company: {
    fontSize: '0.8em',
    color: '#3e75c8',
    fontWeight: 'bold',
    marginTop: '5px'
  },
  subTitle: {
    color: 'grey',
    fontSize: '0.8em',
    marginTop: '10px'
  },
  period: {
    display: 'inline-block',
    minWidth: '300px'
  },
  location: {
    display: 'inline-block'
  },
  icon: {
    verticalAlign: 'top',
    fontSize: '1em',
    marginRight: '5px'
  },
  tag: {
    display: 'inline-block',
    background: '#e8f3ff',
    color: '#3376ac',
    borderRadius: '2px',
    padding: '5px 8px',
    marginRight: '5px',
    fontSize: '0.6em'
  },
  project: {
    fontSize: '0.9em',
    marginLeft: '15px',
    marginBottom: '10px'
  },
  projectName: {
    fontSize: '0.9em',
    fontWeight: 600,
    marginBottom: '5px'
  },
  projectDescription: {
    fontSize: '0.9em',
    marginBottom: '5px'
  }
}));

const experience = props => {
  const {
    title,
    company,
    location,
    from,
    to,
    descriptions,
    tags,
    projects
  } = props.details;
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, title), __jsx("div", {
    className: classes.company,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, company), __jsx("div", {
    className: classes.subTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.period,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: undefined
  }, __jsx(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: undefined
  }), luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].fromISO(from).toFormat(DATE_FORMAT), "\xA0 - \xA0", to ? luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].fromISO(to).toFormat(DATE_FORMAT) : 'Present'), __jsx("div", {
    className: classes.location,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }), location)), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(descriptions) && react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(descriptions.map(desc => __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, desc))), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(tags) && react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(tags.map(tag => __jsx("div", {
    className: classes.tag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: undefined
  }, tag))), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(projects) && react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(projects.map(project => __jsx("div", {
    className: classes.project,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx("div", {
    className: classes.projectName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, project.name), __jsx("div", {
    className: classes.projectDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: undefined
  }, project.description), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(project.tags) && react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(project.tags.map(tag => __jsx("div", {
    className: classes.tag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  }, tag)))))));
};

experience.PropTypes = {
  details: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    company: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    from: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    descriptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),
    tags: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string),
    project: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
      description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
      tags: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)
    })
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (experience);

/***/ }),

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
/* harmony import */ var _components_awards_Achievement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/awards/Achievement */ "./components/awards/Achievement.js");
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\awards\\awards.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ACHIEVEMENTS = [{
  "title": "HTM Top Performer",
  "date": "2019-11-01",
  "descriptions": ["One of the top performers in HTM Niseko with highest peer reviews score."]
}, {
  "title": "Three-times UCSI Presidential Award winner",
  "date": "2015-05-01",
  "descriptions": ["Awarded UCSI Presidential Award in January 2014, May 2014, May 2015."]
}, {
  "title": "Dean’s List Recipient",
  "date": "2014-04-01",
  "descriptions": ["Dean’s List Recipient in May 2013, September 2013, January 2014.", "The Dean's Honours List is a recognition of outstanding academic excellence and the Faculty members extend their congratulations to the following students who are admitted to the Dean’s Honours List."]
}, {
  "title": "The Star Education Fund Scholarship",
  "date": "2012-12-01",
  "descriptions": ["Awarded the Full Scholarship for BSc (Hons) Computing foundation-degree course in UCSI University by The Star Education Fund."]
}];
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
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Achievements"), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, ACHIEVEMENTS.map(details => __jsx(_components_awards_Achievement__WEBPACK_IMPORTED_MODULE_2__["default"], {
    details: details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }))));
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
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/SkipPrevious */ "@material-ui/icons/SkipPrevious");
/* harmony import */ var _material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipPrevious__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/PlayArrow */ "@material-ui/icons/PlayArrow");
/* harmony import */ var _material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PlayArrow__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/SkipNext */ "@material-ui/icons/SkipNext");
/* harmony import */ var _material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_SkipNext__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\awards\\news.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(theme => ({
  card: {
    maxWidth: 250,
    margin: 10,
    display: 'inline-block',
    verticalAlign: 'top'
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
      lineNumber: 50
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "News"), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "img",
    height: "200",
    alt: "Human Aspect of Computing",
    image: "/static/human-aspect-of-computing.jpg",
    title: "Human Aspect of Computing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "The Human Aspect of Computing"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Local paper, Mar 2015.", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Online: http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150326/282226599220128"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Paper archive: https://www.ucsiuniversity.edu.my/sites/default/files/20150326-star.pdf"))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Download"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    size: "small",
    color: "primary",
    href: "http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150326/282226599220128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Read More"))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "img",
    height: "200",
    alt: "Education for a lifetime",
    image: "/static/education-for-a-lifetime.png",
    title: "Education for a lifetime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Education for a Lifetime"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, "Local paper, Apr 2015.", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "Online: http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150414/282093455263590"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Paper archive: https://www.ucsiuniversity.edu.my/sites/default/files/20150414-star2.pdf"))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    size: "small",
    color: "primary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "Download"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    size: "small",
    color: "primary",
    href: "http://www.pressreader.com/malaysia/the-star-malaysia-star2/20150414/282093455263590",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Read More"))), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_4___default.a, {
    component: "img",
    height: "200",
    alt: "MakeityourM2U",
    image: "https://i.stack.imgur.com/z4fJl.jpg",
    title: "MakeityourM2U",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "MakeityourM2U"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "MakeityourM2U, a UI/UX design competition for Maybank\u2019s mobile banking site was held from 1st until 27 February 2015. The competition is among students from 10 selected universities in Klang Valley.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), "Throughout the competition period, Maybank received more than 60 interesting designs from the students. On 9th April 2015, the top 10 designs stand before the judges to present their ideas and designs."))));
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
  }, __jsx("div", {
    style: {
      marginTop: '50px',
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Hi, I'm Mok"), __jsx("div", {
    style: {
      marginTop: '5px',
      fontSize: '0.8rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Full stack developer"), __jsx("div", {
    style: {
      marginTop: '10px',
      fontSize: '0.7rem'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_icons_Email__WEBPACK_IMPORTED_MODULE_2___default.a, {
    style: {
      fontSize: '0.7rem',
      marginRight: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), "jee.ict@hotmail.com"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(_material_ui_icons_Forum__WEBPACK_IMPORTED_MODULE_3___default.a, {
    style: {
      fontSize: '0.7rem',
      marginRight: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), "Speaks English, \u4E2D\u6587, \u5E7F\u4E1C\u8BDD, \u65E5\u672C\u8A9E, Melayu"), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, __jsx(_material_ui_icons_Work__WEBPACK_IMPORTED_MODULE_4___default.a, {
    style: {
      fontSize: '0.7rem',
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
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! luxon */ "luxon");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/DateRange */ "@material-ui/icons/DateRange");
/* harmony import */ var _material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\education\\education.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const DATE_FORMAT = 'MMM yyyy'; // e.g. Jan 2019

const EDUCATIONS = __webpack_require__(/*! ../../data/educations */ "./data/educations.json");

const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(theme => ({
  root: {
    marginBottom: '25px'
  },
  school: {
    fontSize: '0.8em',
    color: '#3e75c8',
    fontWeight: 'bold',
    marginTop: '5px'
  },
  subTitle: {
    color: 'grey',
    fontSize: '0.8em',
    marginTop: '10px'
  },
  icon: {
    verticalAlign: 'top',
    fontSize: '1em',
    marginRight: '5px'
  },
  description: {
    fontSize: '0.8em'
  },
  tag: {
    display: 'inline-block',
    background: '#e8f3ff',
    color: '#3376ac',
    borderRadius: '2px',
    padding: '5px 8px',
    marginRight: '5px',
    fontSize: '0.6em'
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (() => {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, "Education"), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, EDUCATIONS.map(education => __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: undefined
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: undefined
  }, education.title), __jsx("div", {
    className: classes.school,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }, education.school), __jsx("div", {
    className: classes.subTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: undefined
  }, __jsx(_material_ui_icons_DateRange__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }), luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromISO(education.from).toFormat(DATE_FORMAT), "\xA0 - \xA0", education.to ? luxon__WEBPACK_IMPORTED_MODULE_2__["DateTime"].fromISO(education.to).toFormat(DATE_FORMAT) : 'Present'), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(education.descriptions) && react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(education.descriptions.map(desc => __jsx("p", {
    className: classes.description,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, desc))), _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(education.tags) && react__WEBPACK_IMPORTED_MODULE_1__["Children"].toArray(education.tags.map(tag => __jsx("div", {
    className: classes.tag,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, tag)))))));
});

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
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/LocationOn */ "@material-ui/icons/LocationOn");
/* harmony import */ var _material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOn__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_experiences_experience__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/experiences/experience */ "./components/experiences/experience.js");
var _jsxFileName = "C:\\Users\\mok.liu\\Projects\\resume\\containers\\experiences\\experiences.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const JOBS = __webpack_require__(/*! ../../data/jobs */ "./data/jobs.json");

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
    padding: '10px'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
    color: '#315893'
  }
}));
function MakeItYourM2U() {
  const classes = useStyles();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  return __jsx("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.panel,
    defaultExpanded: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_3___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_5___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }),
    id: "panel1a-header",
    "aria-controls": "panel1a-content",
    className: classes.summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: classes.heading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Experiences")), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, JOBS.map(details => __jsx(_components_experiences_experience__WEBPACK_IMPORTED_MODULE_8__["default"], {
    details: details,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))))));
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
  }, __jsx("a", {
    href: "https://www.npmjs.com/package/better-npm-audit",
    style: {
      display: 'block'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Better NPM Audit"), __jsx("div", {
    style: {
      fontSize: '0.8rem',
      marginBottom: '10px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Made to allow skipping certain vulnerabilities, and any extra handling that are not supported by the default npm audit in the future."), __jsx("img", {
    src: "https://nodei.co/npm/better-npm-audit.png?downloads=true&downloadRank=true&stars=true",
    style: {
      display: 'block',
      maxWidth: '300px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })));
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
  }, "Other Projects", __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "PichaEats Ordering System", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "PichaEats (rebrand from The Picha Project) has been growing a lot over the years. The initial solution of using WordPress no longer work well with the size and has to grow. Building a new website system that comes with a ordering capability and integrate with external systems. making sure it is scalable for any requirements in the future. Integrate with external systems: Payment, Invoice, Chat, etc. Tracking Google Analytics and Pixels. Migration from existing wordpress server to GCP. Email client migration, Setup new client using ZOHO and migrated DNS. Development mode: Using staging environment and production."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Website", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), "All the static sites. SEO and designs."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Cart", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), "Items to cart and checkout. Google map API for real data address. Persistency of user's cart. Promo code system."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Catering", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), "Customize menu."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Management Backend", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), "Delivery area, menu, items, etc."), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Blog", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), "using wordpress?")), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Instructors management system", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "June 2019"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "to manage daily instructors shifts.")), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "OKingLegend App", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Sep 2017"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Built native iOS & Android application using React Native through Expo.io tool; Uses WordPress Woocommerce as backend; The application supports PayPal and COD payment; Published on both AppStore & Google Play Store:", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), "https://itunes.apple.com/us/app/okinglegend/id1236763942?mt=8&ign-mpt=uo%3D4", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }), "https://play.google.com/store/apps/details?id=com.okinglegend.okinglegendapp&hl=en")), __jsx("div", {
    style: {
      margin: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "LFC Malaysia App", __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Jun 2017"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Built native ios & Android application using React Native through Expo.io tool; Uses WordPress Woocommerce as backend; The application supports PayPal and COD payment; Published on both AppStore & Google Play Store:", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), "https://itunes.apple.com/us/app/lfc-malaysia/id1215617599?mt=8", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
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

/***/ "./data/educations.json":
/*!******************************!*\
  !*** ./data/educations.json ***!
  \******************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"B.Sc. (Hons) Computing\",\"school\":\"UCSI University, Kuala Lumpur\",\"from\":\"2013-05-01\",\"to\":\"2016-05-01\",\"descriptions\":[\"CGPA: 3.95 / 4.00\"],\"tags\":[\"First Class Honour\"]}]");

/***/ }),

/***/ "./data/jobs.json":
/*!************************!*\
  !*** ./data/jobs.json ***!
  \************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Lead Developer\",\"company\":\"Hokkaido Tourism Management Niseko\",\"location\":\"Hokkaido, Japan\",\"from\":\"2019-05-01\",\"descriptions\":[\"Hands on React development everyday. We practice DevOps culture and Agile methodology for project development. Main tools that we use here including Taiga Kanban for tasks & backlogs, BitBucket to store our code repository, Atlassian Confuence for documentation, and CircleCI for continuous integration. Setup with Bitbucket webhook functionality that whenever our main repository is changed, it will notify CircleCI and Taiga.io about the changes.\",\"We practice Test Driven Development and our testing libraries including Jest, Mocha, Chai, Sinon, Enzyme and etc. We use ESLint for linting with additional rules. Other tools including: Egnyte (legacy system to share fles within the company) & Postman (handling REST & E2E live testing)\"],\"projects\":[{\"name\":\"Passport Scanner\",\"tags\":[\"Java\",\"Loopback v4\"]},{\"name\":\"Guest Portal\",\"description\":\"Challenges: Guest relations, multiple source of truths\",\"tags\":[\"Material UI\"]}],\"tags\":[\"DevOps\",\"Agile\",\"REST\",\"SaaS\",\"Google Cloud Platform\",\"Docker\",\"Kubernetes\"]},{\"title\":\"Full Stack Developer\",\"company\":\"Hokkaido Tourism Management Niseko\",\"location\":\"Hokkaido, Japan\",\"from\":\"2017-01-01\",\"to\":\"2019-05-01\",\"descriptions\":[\"Working remotely for 11 months.\"],\"projects\":[{\"name\":\"Storefront\",\"description\":\"Storefront is the public-facing booking portal. Through this channel people can browse HTM properties, see the prices and book or quote them, also take payments through the portal. All of the information comes from GuestCentrix and also ends up in the GuestCentrix.\",\"tags\":[]},{\"name\":\"Bamboo+\",\"description\":\"Staff shift management system. Challenges: Timezone, shift calculation.\",\"descriptions\":[\"HTM Internal (a.k.a. Bamboo Plus) is development project for internal tools. The goal is to unify all of the small tools we use throughout the company under one roof and also to make them easier and more convenient to use. Integration of the above systems replaces the existing Timesheet system and interfaces with third-party software - Bamboo HR in several ways.\"],\"tags\":[]},{\"name\":\"Owners Portal\",\"description\":\"The Owner Portal is a portal for owners of HTM managed accommodations. Designed to be able to view and manage many of the major aspects of their property ownership through the new portal; including viewing their Owner Statements, making and changing their Owner Bookings, requesting and viewing payments and transactions, managing personal details, viewing Occupancy information for their room, and communicating with our Owner Team.\",\"tags\":[]},{\"name\":\"Admin Portal\",\"description\":\"Serves as the administration portal, for multiple purposes. Marketing to manage properties information and images connecting with Amazon Web Services.\",\"tags\":[]}],\"tags\":[\"Remote\"]},{\"title\":\"Project Manager / App Developer\",\"company\":\"MYCiTY SME\",\"location\":\"Kuala Lumpur, Malaysia\",\"from\":\"2017-01-01\",\"to\":\"2017-11-01\",\"descriptions\":[\"Met clients and gather requirements to hands on development to publish to PlayStore & AppStore. App features built including: SSO login (Facebook), user registration, payment integrations (Paypal also Cash on Delivery), Wordpress blog integrations, WooCommerce backend integrations (Products management, app features controls, orders tracking, wishlist management, fles managements, etc)\",\"From meeting clients and gather requirements to hands-on development to publish to PlayStore & AppStore. App features built including SSO login (Facebook), user registration, payment integrations (Paypal also Cash on Delivery), Wordpress blog integrations, WooCommerce backend integrations (Products management, app features controls, orders tracking, wishlist management, files management, etc.)\"],\"projects\":[{\"name\":\"OKingLegend Mobile App\",\"tags\":[]},{\"name\":\"LFC Malaysia Mobile App\",\"tags\":[]}]},{\"title\":\"IT Support Intern\",\"company\":\"Hokkaido Tourism Management Niseko\",\"location\":\"Hokkaido, Japan\",\"from\":\"2016-06-01\",\"to\":\"2016-12-01\",\"descriptions\":[\"My main job scopes are support and resolve internal company tickets, create documentation, manual and SOP for softwares and web tools for stafs, and maintain all the IT infrastructures within HTM. During my free time at work, I built a few systems to improve the existing ones:\"],\"projects\":[{\"name\":\"Inventory System\",\"description\":\"New web application system built with PHP & JavaScript. Replaced the existing Excel Inventory System used within the company with added features: Report printing, users management, multiple users view & printer management subsystem.\",\"tags\":[]},{\"name\":\"FlipKey System\",\"description\":\"An automated PHP script system used for managing hotels room information via WSDL & SOAP requests using cURL.\",\"tags\":[]},{\"name\":\"Contracts Creator\",\"description\":\"An automated tool built for HR department to create a large number of contracts. This tool was built using Macros in Microsoft Excel; it retrieves staff details from a .csv file, merges the information into a .doc template, and finally export each of them as a new contract file.\",\"tags\":[]},{\"name\":\"Google Email Extractor\",\"description\":\"A micro system written in Google Apps Script (GAS) used to compile the latest list of HTM email addresses from Google Contact; Scheduled to send the list back via email.\",\"tags\":[\"Google App Script\"]}]},{\"title\":\"Web Developer\",\"company\":\"The Picha Project\",\"location\":\"Kuala Lumpur, Malaysia\",\"from\":\"2016-03-01\",\"to\":\"2016-06-01\",\"descriptions\":[\"Publish a website for a social enterprise called The Picha Project, which provides fnancial empowerment to the marginalised groups in Malaysia. Live: www.pichaproject.com\"]},{\"title\":\"Web Developer\",\"company\":\"Mevicco Group\",\"location\":\"Kuala Lumpur, Malaysia\",\"from\":\"2015-02-01\",\"to\":\"2015-07-01\",\"descriptions\":[\"Publish and manage E-Commerce online fashion store using OpenCart. Maintain the system and resolve all the system problems and relevant faults.\"]},{\"title\":\"Web Developer Intern\",\"company\":\"Sliver Interactive\",\"location\":\"Kuala Lumpur, Malaysia\",\"from\":\"2014-11-01\",\"to\":\"2014-12-01\",\"descriptions\":[\"Built a small PHP system replacing the existing Excel system, that used for managing new website content more efciently and shorten the overall work progress. Install custom modules based on clients’ request, and learnt to enhance website’s ranking using Search Engine Optimisation.\"]},{\"title\":\"IT Operation Supervisor\",\"company\":\"The Champs Cafe\",\"location\":\"Kuala Lumpur, Malaysia\",\"from\":\"2014-05-01\",\"to\":\"2014-10-01\",\"descriptions\":[\"Built the official website and managed the social media site for the business. Trained and mentored new staff to update the system. Also designed the business logo for the new franchise brand Veggie Express which is now well- known across Malaysia in various location.\"]}]");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

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











 // Ref: https://stackoverflow.com/cv/mok
// TODO:
//  - eslint

function Index() {
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    style: {
      fontFamily: 'arial'
    },
    maxWidth: "md",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(_containers_biography_me__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(_containers_experiences_experiences__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx(_containers_projects_projects__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx(_containers_openSources_libraries__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
  }), __jsx(_containers_awards_awards__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx(_containers_awards_news__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx(_containers_education_education__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx(_containers_reviews_reviews__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(_containers_biography_languages__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
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

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

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

/***/ "@material-ui/icons/DateRange":
/*!***********************************************!*\
  !*** external "@material-ui/icons/DateRange" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/DateRange");

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

/***/ "@material-ui/icons/LocationOn":
/*!************************************************!*\
  !*** external "@material-ui/icons/LocationOn" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOn");

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

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "luxon":
/*!************************!*\
  !*** external "luxon" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("luxon");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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