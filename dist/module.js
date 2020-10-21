define(["@grafana/data","@grafana/ui","d3","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_d3__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./BarGraph.tsx":
/*!**********************!*\
  !*** ./BarGraph.tsx ***!
  \**********************/
/*! exports provided: BarGraph */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarGraph", function() { return BarGraph; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./utils.ts");
/* harmony import */ var _eventBus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventBus */ "./eventBus.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./constants.ts");







function BarGraph(data, _a) {
  var options = _a.options,
      width = _a.width,
      height = _a.height;
  var vitalBreakpointVal = options.vitalBreakpointVal;
  var maxYOffsetVal = Object(d3__WEBPACK_IMPORTED_MODULE_2__["max"])(data.y) || 0;
  var minYOffsetVal = Object(d3__WEBPACK_IMPORTED_MODULE_2__["min"])(data.y) || 0;
  var padding = 20;
  var chartHeight = height - 3 * padding;
  var chartWidth = width - 2 * padding;
  var xBand = Object(d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"])().range([0, chartWidth - padding]).padding(options.barPadding);
  var xPBand = Object(d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"])().range([0, chartWidth - padding]).padding(options.barPadding).paddingOuter(0.6);
  var xLinear = Object(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().range([0, chartWidth - padding]);
  var x = Object(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().range([0, chartWidth - padding]);
  var y = Object(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().range([chartHeight, 0]);
  var p = Object(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])().range([chartHeight, 0]);
  var line = Object(d3__WEBPACK_IMPORTED_MODULE_2__["line"])().curve(d3__WEBPACK_IMPORTED_MODULE_2__["curveBasis"]).x(function (d, i) {
    return x(i) || 0;
  }).y(function (d) {
    return !!d ? p(d.p / 100) : d;
  });

  var pLabels = function pLabels(n, index) {
    if (index === 0 || !n || !!!n) {
      return "";
    }

    return n * 100 + " %";
  };

  var pathData = data.p.map(function (d, i) {
    return {
      x: data.xAxisLabels[i] || '',
      p: d || 0
    };
  }) || null;
  var cutOffXPathData = data.p.map(function (d, i) {
    return {
      x: data.xAxisLabels[i] || '',
      p: vitalBreakpointVal
    };
  }) || null;
  var bottomLineData = data.p.map(function (d, i) {
    return {
      x: i,
      p: 0
    };
  });
  var barHeightOffset = data.p[0] / data.p.length;
  var yDomainMin = minYOffsetVal - barHeightOffset > 0 ? minYOffsetVal - barHeightOffset : 0;
  xBand.domain(data.xAxisLabels);
  xPBand.domain(data.xAxisLabels);
  xLinear.domain([-1, data.x.length]);
  x.domain([-1, data.x.length]);
  p.domain([0, 1]);
  y.domain([yDomainMin, maxYOffsetVal + barHeightOffset]);
  return {
    padding: padding,
    x: x,
    xBand: xBand,
    xPBand: xPBand,
    xLinear: xLinear,
    y: y,
    p: p,
    chartHeight: chartHeight,
    chartWidth: chartWidth,
    line: line,
    pathData: pathData,
    cutOffXPathData: cutOffXPathData,
    bottomLineData: bottomLineData,
    pLabels: pLabels,
    Component: Component
  };
}

var Component = function Component(_a) {
  var data = _a.data,
      styles = _a.styles,
      theme = _a.theme,
      padding = _a.padding,
      x = _a.x,
      xBand = _a.xBand,
      y = _a.y,
      p = _a.p,
      chartHeight = _a.chartHeight,
      chartWidth = _a.chartWidth,
      vitalBreakpointVal = _a.vitalBreakpointVal,
      isInclusive = _a.isInclusive,
      showVitalFew = _a.showVitalFew,
      showBarValue = _a.showBarValue,
      valToFixed = _a.valToFixed,
      chartId = _a.chartId,
      vitalColor = _a.vitalColor,
      vitalLineColor = _a.vitalLineColor,
      trivialColor = _a.trivialColor,
      barHoverColor = _a.barHoverColor,
      props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["data", "styles", "theme", "padding", "x", "xBand", "y", "p", "chartHeight", "chartWidth", "vitalBreakpointVal", "isInclusive", "showVitalFew", "showBarValue", "valToFixed", "chartId", "vitalColor", "vitalLineColor", "trivialColor", "barHoverColor"]);

  var issetVitalFewLine = false;

  var setIssetVitalFewLine = function setIssetVitalFewLine(state) {
    issetVitalFewLine = state;
    return true;
  };

  var hasVitals = !!data.p.filter(function (d, i) {
    return d < vitalBreakpointVal;
  }).length;
  var bandwidth = xBand.bandwidth() * 0.9;

  var barClickHandler = function barClickHandler(event) {
    return _eventBus__WEBPACK_IMPORTED_MODULE_5__["eventBus"].dispatch(chartId + "-" + _constants__WEBPACK_IMPORTED_MODULE_6__["CONSTANTS"].E_TOOLTIP_CLICK, event);
  };

  var barMoveHandler = function barMoveHandler(event) {
    return _eventBus__WEBPACK_IMPORTED_MODULE_5__["eventBus"].dispatch(chartId + "-" + _constants__WEBPACK_IMPORTED_MODULE_6__["CONSTANTS"].E_TOOLTIP_MOVE, event);
  };

  var debouncedClickHandler = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["debounce"])(barClickHandler, 200);
  var debouncedMoveHandler = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["debounce"])(barMoveHandler, 200);

  var getFillColor = function getFillColor(isVital) {
    return isVital ? !!vitalColor ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["camelCase"])(vitalColor) : theme.palette.brandDanger : !!trivialColor ? Object(_utils__WEBPACK_IMPORTED_MODULE_4__["camelCase"])(trivialColor) : theme.palette.brandWarning;
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    clipPath: "url(#" + chartId + ")",
    className: "bars",
    transform: "translate(" + padding + ", 0)"
  }, data.y.map(function (val, i) {
    var currentX = x(i) - bandwidth / 2;
    var step = Math.trunc(chartWidth / 10 / bandwidth);
    var defaultFixedVal = 2;
    var maxFixedVal = 6;
    var label = typeof val === 'number' && valToFixed >= 0 ? val.toFixed(valToFixed > maxFixedVal ? defaultFixedVal : valToFixed) : val;
    var isForcedHidden = !showBarValue;
    var visibilityClassName = isForcedHidden ? styles.forcedHidden.__barLabel : '';

    var BarLabel = function BarLabel(_a) {
      var index = _a.index,
          className = _a.className;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("text", {
        "data-index": index,
        transform: "translate(0, -" + padding / 2 + ")",
        className: [className, styles.barValue, visibilityClassName].join(' '),
        x: currentX + bandwidth / 2,
        y: y(val)
      }, label);
    };

    var isVital;

    if (!hasVitals && i === 0) {
      isVital = true;
    } else if (data.p[i] < vitalBreakpointVal && !isInclusive) {
      isVital = true;
    } else if (isInclusive && (data.p[i - 1] < vitalBreakpointVal || i === 0)) {
      isVital = true;
    } else {
      isVital = false;
    }

    var textLabelClass = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTextLabelClass"])(bandwidth, styles, i, step);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
      className: [styles.bar, !!barHoverColor ? Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                &:hover {\n                  fill: ", " !important;\n                }\n              "], ["\n                &:hover {\n                  fill: ", " !important;\n                }\n              "])), Object(_utils__WEBPACK_IMPORTED_MODULE_4__["camelCase"])(barHoverColor)) : ''].join(' '),
      fill: getFillColor(isVital),
      "data-label-header": data.x[i],
      "data-label": data.tooltipLabel[i],
      "data-label2": data.p[i].toFixed(2) + "%",
      "data-count": val,
      "data-is-vital": isVital,
      "data-fill-color": getFillColor(isVital),
      onMouseUp: function onMouseUp(_a) {
        var currentTarget = _a.currentTarget;
        return debouncedClickHandler({
          currentTarget: currentTarget
        });
      },
      onMouseOver: function onMouseOver(_a) {
        var currentTarget = _a.currentTarget,
            type = _a.type,
            pageX = _a.pageX,
            pageY = _a.pageY;
        return debouncedMoveHandler({
          currentTarget: currentTarget,
          type: type,
          pageX: pageX,
          pageY: pageY
        });
      },
      onMouseMove: function onMouseMove(_a) {
        var currentTarget = _a.currentTarget,
            type = _a.type,
            pageX = _a.pageX,
            pageY = _a.pageY;
        return debouncedMoveHandler({
          currentTarget: currentTarget,
          type: type,
          pageX: pageX,
          pageY: pageY
        });
      },
      onMouseOut: function onMouseOut(_a) {
        var currentTarget = _a.currentTarget,
            type = _a.type,
            pageX = _a.pageX,
            pageY = _a.pageY;
        return debouncedMoveHandler({
          currentTarget: currentTarget,
          type: type,
          pageX: pageX,
          pageY: pageY
        });
      },
      ref: function ref(node) {
        Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).attr('x', currentX).attr('y', y(val)).attr('width', bandwidth).attr('height', chartHeight - y(val));
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BarLabel, {
      index: i,
      className: ['bar-values', textLabelClass].join(' ')
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, !isVital && showVitalFew && !issetVitalFewLine && setIssetVitalFewLine(true) && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
      className: ['line--vertical', styles.lineCutOff, Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n                    stroke: ", ";\n                  "], ["\n                    stroke: ", ";\n                  "])), !!vitalLineColor ? vitalLineColor : 'rgba(255, 0, 0, 0.75)')].join(' '),
      transform: "translate(" + 0 + ", 0)",
      ref: function ref(node) {
        Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).attr('x1', currentX + bandwidth / 2).attr('x2', currentX + bandwidth / 2).attr('y1', 0).attr('y2', chartHeight);
      }
    })));
  }));
};

var templateObject_1, templateObject_2;

/***/ }),

/***/ "./BrushComponent.tsx":
/*!****************************!*\
  !*** ./BrushComponent.tsx ***!
  \****************************/
/*! exports provided: BrushComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushComponent", function() { return BrushComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./styles.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./utils.ts");





var BrushComponent = function BrushComponent(props) {
  var styles = Object(_styles__WEBPACK_IMPORTED_MODULE_2__["getStyles"])();
  var initXDomain = null;
  var initBandWidth = null;
  var lastSelection = null;
  var minLimitSelection = 5;
  var idleTimeout = null;
  var idleDelay = 350;

  var idled = function idled() {
    idleTimeout = null;
  };

  var checkXBand = Object(d3__WEBPACK_IMPORTED_MODULE_3__["scaleBand"])().range([0, props.chartWidth - props.padding]).padding(props.barPadding);
  checkXBand.domain(props.data.xAxisLabels);

  var brushCalcHandler = function brushCalcHandler() {
    var svg = Object(d3__WEBPACK_IMPORTED_MODULE_3__["select"])(props.svgRef.current);
    var selection = (d3__WEBPACK_IMPORTED_MODULE_3__["event"] || {}).selection;

    if (!!selection) {
      var barCount = props.data.xAxisLabels.length;
      var xCheck = Object(d3__WEBPACK_IMPORTED_MODULE_3__["scaleLinear"])().range([0, props.chartWidth]);
      xCheck.domain(selection.map(props.xLinear.invert, props.xLinear));

      var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(props.xLinear.domain(), 1),
          xStart = _a[0];

      var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(xCheck.domain(), 2),
          xPartStart = _b[0],
          xPartEnd = _b[1];

      var selectedPart = xPartEnd - xPartStart;
      var percentage = Math.floor(selectedPart * 100 / (barCount - xStart));
      var isValidLimit = percentage >= minLimitSelection;
      svg.select('rect.selection').classed('selection--valid', isValidLimit).classed('selection--invalid', !isValidLimit);
    }
  };

  var brushHandler = function brushHandler() {
    var svg = Object(d3__WEBPACK_IMPORTED_MODULE_3__["select"])(props.svgRef.current);
    var selection = (d3__WEBPACK_IMPORTED_MODULE_3__["event"] || {}).selection;

    if (!initXDomain || !initBandWidth) {
      initXDomain = props.x.domain();
      initBandWidth = props.xBand.bandwidth();
    }

    if (!!selection) {
      props.x.domain(selection.map(props.xLinear.invert, props.xLinear));
      var barCount = props.data.xAxisLabels.length;

      var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(props.xLinear.domain(), 1),
          xStart = _a[0];

      var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(props.x.domain(), 2),
          xPartStart = _b[0],
          xPartEnd = _b[1];

      var selectedPart = xPartEnd - xPartStart;
      var percentage = Math.floor(selectedPart * 100 / (barCount - xStart));

      if (percentage < minLimitSelection) {
        svg.select('.brush').call(brush.move, lastSelection);
        return;
      }

      lastSelection = selection;
      var initWidth = props.chartWidth - props.padding;
      var newEndRange = 100 / percentage * initWidth;
      props.xBand.range([0, newEndRange]).padding(props.barPadding).domain(props.data.xAxisLabels);
      props.xBand.domain(props.data.xAxisLabels);
    } else {
      if (!idleTimeout) {
        idleTimeout = setTimeout(idled, idleDelay);
        svg.select('.brush').call(brush.move, lastSelection);
        return;
      }

      var resetRange = [0, props.chartWidth - props.padding];
      lastSelection = null;
      props.x.domain(initXDomain);
      props.xBand.range(resetRange).padding(props.barPadding).domain(props.data.xAxisLabels);
    }

    zoom();
  };

  var brush = Object(d3__WEBPACK_IMPORTED_MODULE_3__["brushX"])().extent([[0, 0], [props.chartWidth - props.padding, 10]]).on('brush', brushCalcHandler).on('end', brushHandler);

  var zoom = function zoom() {
    var _a;

    var svg = Object(d3__WEBPACK_IMPORTED_MODULE_3__["select"])(props.svgRef.current);

    if (!!svg) {
      var transition_1 = (_a = Object(d3__WEBPACK_IMPORTED_MODULE_3__["select"])(props.svgRef.current)) === null || _a === void 0 ? void 0 : _a.transition().duration(750);
      svg.select('.axis-left').transition(transition_1).call(Object(d3__WEBPACK_IMPORTED_MODULE_3__["axisLeft"])(props.y));
      svg.select('.axis-right').transition(transition_1).call(Object(d3__WEBPACK_IMPORTED_MODULE_3__["axisLeft"])(props.p).ticks(4).tickFormat(props.pLabels));
      var i_1 = 0;
      var issetVitalFewLine_1 = false;
      var bandWidth_1 = props.xBand.bandwidth();
      var bandWidth50_1 = bandWidth_1 / 2;
      svg.selectAll("rect." + styles.bar).each(function () {
        if (this.dataset) {
          var newCurrentX = props.x(i_1) - bandWidth50_1;
          Object(d3__WEBPACK_IMPORTED_MODULE_3__["select"])(this).transition(transition_1).attr('x', newCurrentX).attr('width', bandWidth_1);

          if (props.showVitalFew && props.data.p[i_1] > props.vitalBreakpointVal && !issetVitalFewLine_1) {
            issetVitalFewLine_1 = true;
            var xPos = newCurrentX + bandWidth50_1;
            svg.select('.line--vertical').transition(transition_1).attr('x1', xPos).attr('x2', xPos).attr('y1', 0).attr('y2', props.chartHeight);
          }
        }

        i_1++;
      });

      if (props.showBarValue) {
        var step_1 = Math.trunc(props.chartWidth / 10 / bandWidth_1);
        svg.selectAll("text." + styles.barValue).each(function () {
          var index = this.dataset.index;
          var newCurrentX = props.x(+index) - bandWidth50_1;
          var textLabelClass = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getTextLabelClass"])(bandWidth_1, styles, +index, step_1);
          Object(d3__WEBPACK_IMPORTED_MODULE_3__["select"])(this).transition(transition_1).attr('class', [styles.barValue, textLabelClass].join(' ')).attr('x', newCurrentX + bandWidth50_1);
        });
      }

      var yPos = props.p(props.vitalBreakpointVal / 100);
      svg.select('.line--horizontal').transition(transition_1).attr('x1', 0).attr('x2', props.chartWidth - props.padding).attr('y1', yPos).attr('y2', yPos);
      svg.select('.line--curve').datum(props.pathData).transition(transition_1).attr('transform', "translate(" + props.padding + ", 0)").attr('d', props.line);
    }
  };

  var resetChart = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    Object(d3__WEBPACK_IMPORTED_MODULE_3__["select"])(props.svgRef.current).select('.brush').call(brush.move, null);
    brushHandler();
  }, [d3__WEBPACK_IMPORTED_MODULE_3__["select"], brushHandler]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    resetChart();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    resetChart();
  }, [props.data, resetChart]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    transform: "translate(" + 2 * props.padding + ", " + (props.padding + props.chartHeight + 3) + ")",
    className: ['brush', styles.brushWrapper].join(' '),
    ref: function ref(node) {
      Object(d3__WEBPACK_IMPORTED_MODULE_3__["select"])(node).call(brush);
    }
  });
};

/***/ }),

/***/ "./GraphComponents.tsx":
/*!*****************************!*\
  !*** ./GraphComponents.tsx ***!
  \*****************************/
/*! exports provided: PathsComponent, AxisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathsComponent", function() { return PathsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AxisComponent", function() { return AxisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./utils.ts");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_4__);





var PathsComponent = function PathsComponent(_a) {
  var theme = _a.theme,
      styles = _a.styles,
      padding = _a.padding,
      chartId = _a.chartId,
      chartWidth = _a.chartWidth,
      vitalBreakpointVal = _a.vitalBreakpointVal,
      vitalLineColor = _a.vitalLineColor,
      curveLineColor = _a.curveLineColor,
      p = _a.p,
      xBand = _a.xBand,
      pathData = _a.pathData,
      line = _a.line,
      showVitalFew = _a.showVitalFew;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    clipPath: "url(#" + chartId + ")",
    className: styles.paths
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: ['line--curve', styles.line, Object(emotion__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          stroke: ", ";\n        "], ["\n          stroke: ", ";\n        "])), !!curveLineColor ? curveLineColor : theme.colors.text)].join(' '),
    transform: "translate(" + padding + ", 0)",
    ref: function ref(node) {
      Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).datum(pathData).attr('d', line);
    }
  }), showVitalFew && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    className: ['line--horizontal', styles.lineCutOff, Object(emotion__WEBPACK_IMPORTED_MODULE_4__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n            stroke: ", ";\n          "], ["\n            stroke: ", ";\n          "])), !!vitalLineColor ? vitalLineColor : theme.palette.brandDanger)].join(' '),
    transform: "translate(" + (padding + xBand.bandwidth() / 2) + ", 0)",
    ref: function ref(node) {
      Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).attr('x1', 0).attr('x2', chartWidth - padding).attr('y1', p(vitalBreakpointVal / 100)).attr('y2', p(vitalBreakpointVal / 100));
    }
  }));
};
var AxisComponent = function AxisComponent(_a) {
  var data = _a.data,
      styles = _a.styles,
      padding = _a.padding,
      chartHeight = _a.chartHeight,
      chartWidth = _a.chartWidth,
      x = _a.x,
      xPBand = _a.xPBand,
      y = _a.y,
      p = _a.p,
      pLabels = _a.pLabels,
      vitalBreakpointVal = _a.vitalBreakpointVal;
  var hasVitals = !!data.p.filter(function (d) {
    return d < vitalBreakpointVal;
  }).length;

  var isVital = function isVital(_, i) {
    return data.p[i] < vitalBreakpointVal || !hasVitals && i === 0;
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: ['axis', styles.axis].join(' ')
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "axis-bottom",
    transform: "translate(" + padding + ", " + (chartHeight + 15) + ")",
    ref: function ref(node) {
      var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(data.p.filter(isVital).sort(function (a, b) {
        return b - a;
      }), 1),
          highestVitalFewValue = _a[0];

      var i = data.p.findIndex(function (pV) {
        return pV === highestVitalFewValue;
      });
      var filterHandler = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["tickFilter"])(data.xAxisLabels[i + 1], data.p.length - 1);
      var xPAxis = Object(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"])(xPBand).tickValues(data.xAxisLabels.filter(filterHandler));
      Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).call(xPAxis).selectAll('text').attr('y', padding / 2).attr('x', 0).style('text-anchor', 'center');
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    className: styles.lineBottomAxis,
    transform: "translate(" + padding + ", " + 1 + ")",
    ref: function ref(node) {
      Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).attr('x1', 0).attr('x2', chartWidth - padding).attr('y1', chartHeight).attr('y2', chartHeight);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "axis-left",
    transform: "translate(" + padding + ", 0)",
    ref: function ref(node) {
      Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).call(Object(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"])(y).ticks(chartHeight / 30));
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "axis-right",
    transform: "translate(" + (chartWidth + padding) + ", 0)",
    ref: function ref(node) {
      Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).call(Object(d3__WEBPACK_IMPORTED_MODULE_2__["axisLeft"])(p).ticks(4).tickFormat(pLabels));
    }
  }));
};
var templateObject_1, templateObject_2;

/***/ }),

/***/ "./ParetoPanel.tsx":
/*!*************************!*\
  !*** ./ParetoPanel.tsx ***!
  \*************************/
/*! exports provided: ParetoPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParetoPanel", function() { return ParetoPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _BarGraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./BarGraph */ "./BarGraph.tsx");
/* harmony import */ var _BrushComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BrushComponent */ "./BrushComponent.tsx");
/* harmony import */ var _TooltipComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TooltipComponent */ "./TooltipComponent.tsx");
/* harmony import */ var _GraphComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GraphComponents */ "./GraphComponents.tsx");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controllers */ "./controllers.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles */ "./styles.ts");











var ParetoPanel = function ParetoPanel(_a) {
  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height,
      id = _a.id;
  var svgRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var styles = Object(_styles__WEBPACK_IMPORTED_MODULE_10__["getStyles"])();

  if (!data || !!!data.series.length) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: ['placeholder--no-data', styles.placeholder.__noData].join(' ')
    }, "No Data");
  }

  var chartId = "chartMask_" + id;
  var PanelData = new _controllers__WEBPACK_IMPORTED_MODULE_9__["PanelDataController"](data);
  var graphData = PanelData.getResults();
  var barGraphSettings = {
    options: options,
    width: width,
    height: height
  };
  var barGraphData = Object(_BarGraph__WEBPACK_IMPORTED_MODULE_5__["BarGraph"])(graphData, barGraphSettings);

  var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    data: graphData,
    theme: theme,
    styles: styles,
    chartId: chartId
  }, options), barGraphData), {
    svgRef: svgRef
  });

  var Component = barGraphData.Component;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TooltipComponent__WEBPACK_IMPORTED_MODULE_7__["TooltipComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    ref: svgRef,
    className: ['svg--pareto-chart', styles.svg].join(' '),
    width: width,
    height: height,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 " + width + " " + height
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    transform: "translate(" + barGraphData.padding + ", " + barGraphData.padding + ")",
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GraphComponents__WEBPACK_IMPORTED_MODULE_8__["PathsComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GraphComponents__WEBPACK_IMPORTED_MODULE_8__["AxisComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BrushComponent__WEBPACK_IMPORTED_MODULE_6__["BrushComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("defs", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("clipPath", {
    id: chartId
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("rect", {
    transform: "translate(0, -" + props.padding + ")",
    ref: function ref(node) {
      Object(d3__WEBPACK_IMPORTED_MODULE_4__["select"])(node).attr('width', props.chartWidth - props.padding).attr('height', props.chartHeight + props.padding);
    }
  })))));
};
var templateObject_1;

/***/ }),

/***/ "./TooltipComponent.tsx":
/*!******************************!*\
  !*** ./TooltipComponent.tsx ***!
  \******************************/
/*! exports provided: TooltipComponent, tooltipHandler, barClickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tooltipHandler", function() { return tooltipHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "barClickHandler", function() { return barClickHandler; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./styles.ts");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _eventBus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventBus */ "./eventBus.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./utils.ts");






var contents = {
  initCopyText: 'Click on bar to copy data',
  copyText: '',
  dataCopied: 'Copied data!'
};

var getCopyLabel = function getCopyLabel(_a, text) {
  var isCopyLabelVisible = _a.isCopyLabelVisible;
  return "<span class=\"tooltip-copy-label " + (!isCopyLabelVisible ? 'hidden' : '') + "\">" + text + "</span>";
};

var TooltipComponent = function TooltipComponent(props) {
  var styles = Object(_styles__WEBPACK_IMPORTED_MODULE_1__["getStyles"])();
  var tooltipRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  var tooltipContentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var barClickEventHandler = function barClickEventHandler(e) {
    barClickHandler(tooltipRef, props, e);
  };

  var barMoveEventHandler = function barMoveEventHandler(e) {
    tooltipHandler(tooltipRef, tooltipContentRef, props, e);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _eventBus__WEBPACK_IMPORTED_MODULE_3__["eventBus"].on(props.chartId + "-" + _constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].E_TOOLTIP_CLICK, barClickEventHandler);
    _eventBus__WEBPACK_IMPORTED_MODULE_3__["eventBus"].on(props.chartId + "-" + _constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].E_TOOLTIP_MOVE, barMoveEventHandler);
    return function () {
      _eventBus__WEBPACK_IMPORTED_MODULE_3__["eventBus"].remove(props.chartId + "-" + _constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].E_TOOLTIP_CLICK, barClickEventHandler);
      _eventBus__WEBPACK_IMPORTED_MODULE_3__["eventBus"].remove(props.chartId + "-" + _constants__WEBPACK_IMPORTED_MODULE_4__["CONSTANTS"].E_TOOLTIP_MOVE, barMoveEventHandler);
    };
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: tooltipRef,
    className: ['tooltip__container', styles.tooltipContainer, props.chartId].join(' ')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: tooltipContentRef,
    className: styles.tooltip
  }));
};
var tooltipHandler = function tooltipHandler(tooltipRef, tooltipContentRef, props, event) {
  var _a;

  var tooltipDiv = (tooltipRef || {
    current: null
  }).current;
  var tooltipContentDiv = (tooltipContentRef || {
    current: null
  }).current;

  var _b = ((_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.dataset) || {},
      labelHeader = _b.labelHeader,
      labelValue = _b.label,
      label2 = _b.label2,
      isVital = _b.isVital,
      count = _b.count,
      fillColor = _b.fillColor;

  var isVisible = ['mouseover', 'mousemove'].includes(event.type) ? true : false;

  if (event.type === 'mouseout') {
    contents.copyText = contents.initCopyText;
  }

  if (!!tooltipDiv) {
    Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(tooltipDiv).classed('tooltip--visible', isVisible);

    if (isVisible) {
      Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(tooltipDiv).style('left', event.pageX + "px").style('top', event.pageY - 28 + "px");
    }

    Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(tooltipContentDiv).style('background', !!fillColor ? fillColor : isVital === 'true' ? !!props.vitalColor ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["camelCase"])(props.vitalColor) : props.theme.palette.brandDanger : !!props.trivialColor ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["camelCase"])(props.trivialColor) : props.theme.palette.brandWarning).html("<label class=\"label-header\">" + labelHeader + "\n      " + (!!contents.copyText ? getCopyLabel(props, contents.copyText) : getCopyLabel(props, contents.initCopyText)) + "</label>\n      <label class=\"label-value\">Bar percentage: " + labelValue + "</label>\n      <label class=\"label-value\">Cumulative percentage: " + label2 + "</label>\n      <strong>" + count + "</strong>\n    ");
  }
};
var barClickHandler = function barClickHandler(tooltipRef, props, event) {
  var _a;

  var content = ((_a = event.currentTarget) === null || _a === void 0 ? void 0 : _a.dataset.labelHeader) || 'No Content';
  var textField = document.createElement('textarea');
  textField.innerText = content;
  var appendTo = !!tooltipRef.current ? tooltipRef.current : document.body;

  if (!!appendTo) {
    appendTo.appendChild(textField);
  }

  textField.select();
  document.execCommand('copy');
  Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(appendTo).select('.tooltip-copy-label').text(contents.dataCopied);
  textField.remove();
};

/***/ }),

/***/ "./constants.ts":
/*!**********************!*\
  !*** ./constants.ts ***!
  \**********************/
/*! exports provided: CONSTANTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSTANTS", function() { return CONSTANTS; });
var CONSTANTS;

(function (CONSTANTS) {
  CONSTANTS["E_TOOLTIP_CLICK"] = "E_TOOLTIP_CLICK";
  CONSTANTS["E_TOOLTIP_MOVE"] = "E_TOOLTIP_MOVE";
})(CONSTANTS || (CONSTANTS = {}));

/***/ }),

/***/ "./controllers.ts":
/*!************************!*\
  !*** ./controllers.ts ***!
  \************************/
/*! exports provided: PanelDataController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDataController", function() { return PanelDataController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);



var PanelDataController =
/** @class */
function () {
  function PanelDataController(data) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(data.request.targets, 1),
        target = _a[0];

    var resultFormat = target.resultFormat;

    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(data.series, 1),
        serie = _b[0];

    var fields = serie.fields,
        meta = serie.meta;

    if (!!meta && !!meta.executedQueryString && resultFormat !== 'time_series') {
      this.dataType = 'table';
      this.results = this.setTableData(fields);
    } else if (resultFormat === 'time_series') {
      this.dataType = 'series';
      this.results = this.setTimeSeriesData(data.series);
    } else {
      this.dataType = 'series';
      this.results = this.setSeriesData(fields);
    }
  }

  PanelDataController.prototype.getResults = function () {
    return this.results;
  };

  PanelDataController.prototype.setTableData = function (fields) {
    var xData = fields.find(function (_a) {
      var type = _a.type;
      return type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldType"].string;
    });
    var yData = fields.find(function (_a) {
      var type = _a.type;
      return type === _grafana_data__WEBPACK_IMPORTED_MODULE_1__["FieldType"].number;
    });
    var xValues = xData.values.toArray().map(function (d) {
      return "" + d;
    });
    var yValues = yData.values.toArray();
    return this.setResults(xValues, yValues, this.sumYVals(yValues));
  };

  PanelDataController.prototype.setSeriesData = function (fields) {
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(fields, 2),
        xData = _a[0],
        yData = _a[1];

    var xValues = xData.values.toArray().map(function (d) {
      return d;
    });
    var yValues = yData.values.toArray();
    return this.setResults(xValues, yValues, this.sumYVals(yValues));
  };

  PanelDataController.prototype.setTimeSeriesData = function (series) {
    var _this = this;

    var xValues = series.map(function (_a) {
      var name = _a.name;
      return _this.stripName(name);
    });
    var yValues = series.map(function (_a) {
      var fields = _a.fields;

      var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(fields, 2),
          val = _b[1];

      var _c = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(val.values.toArray(), 1),
          response = _c[0];

      return response;
    });
    return this.setResults(xValues, yValues, this.sumYVals(yValues));
  };

  PanelDataController.prototype.sumYVals = function (vals) {
    return vals.reduce(function (a, d) {
      return a + d;
    }, 0);
  };

  PanelDataController.prototype.stripName = function (name) {
    var string = name.match(/\{.*:+(.*)\}/);
    if (!string) return name;

    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(string, 2),
        fullTagName = _a[0],
        tagName = _a[1];

    if (!!tagName) {
      return tagName.trim();
    } else if (!!fullTagName) {
      return fullTagName.trim();
    }

    return name;
  };

  PanelDataController.prototype.setResults = function (xValues, yValues, yValuesSum) {
    this.results = yValues.map(function (d, i) {
      return {
        i: i,
        x: xValues[i],
        y: d
      };
    }).sort(function (a, b) {
      return b.y - a.y;
    }).reduce(function (result, d, i) {
      var _a;

      var xPercentage = d.y * 100 / yValuesSum;
      xPercentage = xPercentage > 100 ? 100 : xPercentage;
      var percentage = (((_a = result) === null || _a === void 0 ? void 0 : _a.p[i - 1]) ? result.p[i - 1] : 0) + xPercentage;
      percentage = percentage > 100 ? 100 : percentage;
      var xAxisLabels = i === yValues.length - 1 ? Math.trunc(Math.ceil(percentage)) + " %" : percentage.toFixed(2) + " %";
      var tooltipLabel = xPercentage.toFixed(2) + " %";
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, result), {
        x: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(result.x, [d.x]),
        y: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(result.y, [d.y]),
        p: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(result.p, [percentage]),
        xP: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(result.xP, [xPercentage]),
        xAxisLabels: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(result.xAxisLabels, [xAxisLabels]),
        tooltipLabel: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(result.tooltipLabel, [tooltipLabel])
      });
    }, {
      x: [],
      y: [],
      p: [],
      xP: [],
      xAxisLabels: [],
      tooltipLabel: []
    });
    return this.results;
  };

  return PanelDataController;
}();



/***/ }),

/***/ "./eventBus.ts":
/*!*********************!*\
  !*** ./eventBus.ts ***!
  \*********************/
/*! exports provided: eventBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventBus", function() { return eventBus; });
var eventBus = {
  on: function on(event, callback) {
    document.addEventListener(event, function (e) {
      return callback(e.detail);
    });
  },
  dispatch: function dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, {
      detail: data
    }));
  },
  remove: function remove(event, callback) {
    document.removeEventListener(event, callback);
  }
};

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ParetoPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ParetoPanel */ "./ParetoPanel.tsx");


var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_ParetoPanel__WEBPACK_IMPORTED_MODULE_1__["ParetoPanel"]).setPanelOptions(function (builder) {
  return builder.addBooleanSwitch({
    path: 'showVitalFew',
    name: 'Show vital few line',
    description: 'Indicates that many defects come from relatively few causes.',
    defaultValue: true
  }).addNumberInput({
    path: 'vitalBreakpointVal',
    name: 'Vital few value (%)',
    description: 'Default is 80 based on the 80/20 rule. But, you are able to customize this.',
    defaultValue: 20
  }).addBooleanSwitch({
    path: 'isInclusive',
    name: 'Inclusive vital few',
    description: 'Include bar with overlapping breakpoint value',
    defaultValue: false
  }).addBooleanSwitch({
    path: 'showBarValue',
    name: 'Show bar values',
    description: 'Show the bar values on top of the bars?',
    defaultValue: false
  }).addNumberInput({
    path: 'valToFixed',
    name: 'Number of decimals (max. 6)',
    description: 'Set number of decimals in bar values.',
    settings: {
      min: 0,
      max: 6
    },
    defaultValue: 2,
    showIf: function showIf(c) {
      return c.showBarValue;
    }
  })
  /**
   * Will add the slider input once implementation is done :)
   */
  .addNumberInput({
    path: 'barPadding',
    name: 'Bar padding',
    description: 'Space between bars. Should be a value between 0 and 1.',
    defaultValue: 0.2,
    settings: {
      min: 0,
      max: 1
    }
  }).addColorPicker({
    category: ['Colors'],
    path: 'curveLineColor',
    name: 'Percentage line',
    description: 'The curved line visualizing the optimal trade off'
  }).addColorPicker({
    category: ['Colors'],
    path: 'vitalLineColor',
    name: 'Breakpoint lines',
    description: 'Horizontal and vertical lines indicating the vital few breakpoint',
    showIf: function showIf(c) {
      return c.showVitalFew;
    }
  }).addColorPicker({
    category: ['Colors'],
    path: 'vitalColor',
    name: 'Vital few bars',
    description: 'The bars within the determined vital few percentage'
  }).addColorPicker({
    category: ['Colors'],
    path: 'trivialColor',
    name: 'Trivial many bars',
    description: 'The bars outside the vital few percentage'
  }).addColorPicker({
    category: ['Colors'],
    path: 'barHoverColor',
    name: 'Bar hover state',
    description: 'Bar fill color on hover'
  });
});

/***/ }),

/***/ "./styles.ts":
/*!*******************!*\
  !*** ./styles.ts ***!
  \*******************/
/*! exports provided: getStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyles", function() { return getStyles; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);



var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["stylesFactory"])(function () {
  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  return {
    wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    svg: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "], ["\n      position: absolute;\n      top: 0;\n      left: 0;\n    "]))),
    tooltipContainer: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: fixed;\n      z-index: 100;\n      min-width: 20vw;\n      display: flex;\n      transition: all 0.2s ease;\n\n      &:not(.tooltip--visible) {\n        z-index: -10;\n        opacity: 0;\n      }\n\n      .tooltip--visible {\n        z-index: 1;\n        opacity: 1;\n      }\n    "], ["\n      position: fixed;\n      z-index: 100;\n      min-width: 20vw;\n      display: flex;\n      transition: all 0.2s ease;\n\n      &:not(.tooltip--visible) {\n        z-index: -10;\n        opacity: 0;\n      }\n\n      .tooltip--visible {\n        z-index: 1;\n        opacity: 1;\n      }\n    "]))),
    tooltip: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      border: 1px solid ", ";\n      padding: 4px 10px;\n      max-width: 100%;\n      color: white;\n\n      strong {\n        position: absolute;\n        top: -1px;\n        left: 100%;\n        padding: 4px;\n        bottom: -1px;\n        min-width: 50px;\n        text-align: center;\n        background: inherit;\n        border: 1px solid ", ";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.4rem;\n      }\n\n      label {\n        display: block;\n        background: inherit;\n        padding: 0 0 4px 0;\n\n        &.label-header {\n          font-weight: bold;\n          font-size: 1.2rem;\n          max-width: 100%;\n        }\n      }\n\n      .tooltip-copy-label {\n        position: absolute;\n        top: calc(100% + 4px);\n        left: 0;\n        background: ", ";\n        color: ", ";\n        font-size: 10px;\n        height: 20px;\n        box-sizing: border-box;\n        padding: 2px 4px;\n\n        &.hidden {\n          opacity: 0;\n          z-index: -1;\n        }\n      }\n    "], ["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      border: 1px solid ", ";\n      padding: 4px 10px;\n      max-width: 100%;\n      color: white;\n\n      strong {\n        position: absolute;\n        top: -1px;\n        left: 100%;\n        padding: 4px;\n        bottom: -1px;\n        min-width: 50px;\n        text-align: center;\n        background: inherit;\n        border: 1px solid ", ";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.4rem;\n      }\n\n      label {\n        display: block;\n        background: inherit;\n        padding: 0 0 4px 0;\n\n        &.label-header {\n          font-weight: bold;\n          font-size: 1.2rem;\n          max-width: 100%;\n        }\n      }\n\n      .tooltip-copy-label {\n        position: absolute;\n        top: calc(100% + 4px);\n        left: 0;\n        background: ", ";\n        color: ", ";\n        font-size: 10px;\n        height: 20px;\n        box-sizing: border-box;\n        padding: 2px 4px;\n\n        &.hidden {\n          opacity: 0;\n          z-index: -1;\n        }\n      }\n    "])), theme.colors.border2, theme.colors.border2, theme.colors.border2, theme.colors.text),
    textBox: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "], ["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "]))),
    bar: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      cursor: pointer;\n\n      &:hover {\n        fill: ", ";\n      }\n    "], ["\n      cursor: pointer;\n\n      &:hover {\n        fill: ", ";\n      }\n    "])), theme.colors.text),
    barValue: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: ", ";\n      text-anchor: middle;\n      opacity: 1;\n      transition: opacity 0.2s ease-out;\n      user-select: none;\n    "], ["\n      fill: ", ";\n      text-anchor: middle;\n      opacity: 1;\n      transition: opacity 0.2s ease-out;\n      user-select: none;\n    "])), theme.colors.text),
    line: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: none;\n      stroke-width: 2px;\n      shape-rendering: geometricPrecision;\n    "], ["\n      fill: none;\n      stroke-width: 2px;\n      shape-rendering: geometricPrecision;\n    "]))),
    lineCutOff: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: none;\n      stroke-width: 2px;\n      stroke-dasharray: 5px;\n    "], ["\n      fill: none;\n      stroke-width: 2px;\n      stroke-dasharray: 5px;\n    "]))),
    lineBottomAxis: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      // fill: none;\n      stroke: ", ";\n      shape-rendering: crispEdges;\n    "], ["\n      // fill: none;\n      stroke: ", ";\n      shape-rendering: crispEdges;\n    "])), theme.colors.text),
    paths: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "]))),
    brushWrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_12 || (templateObject_12 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: ", ";\n      stroke: ", ";\n      stroke-width: 0.75px;\n\n      .selection {\n        fill: ", " !important;\n        fill-opacity: 0.75;\n        stroke: none;\n\n        &--invalid {\n          fill: ", " !important;\n        }\n      }\n\n      .handle {\n        fill: ", " !important;\n        fill-opacity: 0.75;\n      }\n    "], ["\n      fill: ", ";\n      stroke: ", ";\n      stroke-width: 0.75px;\n\n      .selection {\n        fill: ", " !important;\n        fill-opacity: 0.75;\n        stroke: none;\n\n        &--invalid {\n          fill: ", " !important;\n        }\n      }\n\n      .handle {\n        fill: ", " !important;\n        fill-opacity: 0.75;\n      }\n    "])), theme.colors.bg3, theme.colors.border2, theme.colors.bgBlue2, theme.palette.brandDanger, theme.palette.brandWarning),
    brushOverlay: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_13 || (templateObject_13 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      cursor: crosshair;\n    "], ["\n      cursor: crosshair;\n    "]))),
    textLabel: {
      __largeBar: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_14 || (templateObject_14 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))),
      __smallBar: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_15 || (templateObject_15 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])([""], [""]))),
      __hidden: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_16 || (templateObject_16 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        fill: none;\n        opacity: 0;\n      "], ["\n        fill: none;\n        opacity: 0;\n      "])))
    },
    axis: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_17 || (templateObject_17 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      text {\n        user-select: none;\n      }\n    "], ["\n      text {\n        user-select: none;\n      }\n    "]))),
    chartMaskId: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_18 || (templateObject_18 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: none;\n      user-select: none;\n    "], ["\n      fill: none;\n      user-select: none;\n    "]))),
    placeholder: {
      __noData: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_19 || (templateObject_19 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 2rem;\n        font-weight: bold;\n        color: ", ";\n        height: 100%;\n        user-select: none;\n      "], ["\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        font-size: 2rem;\n        font-weight: bold;\n        color: ", ";\n        height: 100%;\n        user-select: none;\n      "])), theme.palette.redBase)
    },
    forcedHidden: {
      __barLabel: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_20 || (templateObject_20 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        opacity: 0 !important;\n        transform: translate(0, -100px);\n      "], ["\n        opacity: 0 !important;\n        transform: translate(0, -100px);\n      "])))
    }
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13, templateObject_14, templateObject_15, templateObject_16, templateObject_17, templateObject_18, templateObject_19, templateObject_20;

/***/ }),

/***/ "./utils.ts":
/*!******************!*\
  !*** ./utils.ts ***!
  \******************/
/*! exports provided: getTextLabelClass, tickFilter, debounce, throttle, camelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextLabelClass", function() { return getTextLabelClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickFilter", function() { return tickFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "camelCase", function() { return camelCase; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");

var getTextLabelClass = function getTextLabelClass(bandWidth, styles, i, step) {
  return bandWidth >= 30 ? styles.textLabel.__largeBar + " --large" : bandWidth < 30 && i % step === 0 ? styles.textLabel.__smallBar + " --small" : styles.textLabel.__hidden + " --hidden";
};
var tickFilter = function tickFilter(highestVitalFewValue, maxCount) {
  return function (pVal, i) {
    return pVal === highestVitalFewValue || maxCount === i;
  };
};
var debounce = function debounce(func, waitFor) {
  var timeout;
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return new Promise(function (resolve) {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(function () {
        return resolve(func.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args)));
      }, waitFor);
    });
  };
};
var throttle = function throttle(func, waitFor) {
  var now = function now() {
    return new Date().getTime();
  };

  var resetStartTime = function resetStartTime() {
    return startTime = now();
  };

  var timeout;
  var startTime = now() - waitFor;
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    return new Promise(function (resolve) {
      var timeLeft = startTime + waitFor - now();

      if (timeout) {
        clearTimeout(timeout);
      }

      if (startTime + waitFor <= now()) {
        resetStartTime();
        resolve(func.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args)));
      } else {
        timeout = setTimeout(function () {
          resetStartTime();
          resolve(func.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(args)));
        }, timeLeft);
      }
    });
  };
};
var camelCase = function camelCase(input) {
  if (input.indexOf('rgb') === 0) return input;
  return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
};

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_d3__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map