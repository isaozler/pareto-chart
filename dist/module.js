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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3 */ "d3");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(d3__WEBPACK_IMPORTED_MODULE_1__);


function BarGraph(data, _a, _b) {
  var options = _a.options,
      width = _a.width,
      height = _a.height;
  var theme = _b.theme,
      tooltipRef = _b.tooltipRef,
      tooltipContentRef = _b.tooltipContentRef;
  var vitalBreakpointVal = options.vitalBreakpointVal,
      isCopyLabelVisible = options.isCopyLabelVisible;
  var contents = {
    initCopyText: 'Click on bar to copy data',
    copyText: '',
    dataCopied: 'Copied data!'
  };
  var maxYOffsetVal = Object(d3__WEBPACK_IMPORTED_MODULE_1__["max"])(data.y) || 0;
  var minYOffsetVal = Object(d3__WEBPACK_IMPORTED_MODULE_1__["min"])(data.y) || 0;
  var padding = 20;
  var chartHeight = height - 2 * padding;
  var chartWidth = width - 2 * padding;
  var x = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"])().range([0, chartWidth - padding]).padding(options.barPadding);
  var y = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().range([chartHeight, 0]);
  var p = Object(d3__WEBPACK_IMPORTED_MODULE_1__["scaleLinear"])().range([chartHeight, 0]);
  var line = Object(d3__WEBPACK_IMPORTED_MODULE_1__["line"])().x(function (d, i) {
    return x(data.xAxisLabels[i]) || 0;
  }).y(function (d, i) {
    return chartHeight - d.p * chartHeight / 100 - padding;
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

  var getCopyLabel = function getCopyLabel(text) {
    return "<span class=\"tooltip-copy-label " + (!isCopyLabelVisible ? 'hidden' : '') + "\">" + text + "</span>";
  };

  var tooltipHandler = function tooltipHandler(event) {
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
        isVital = _b.isVital,
        count = _b.count;

    var isVisible = ['mouseover', 'mousemove'].includes(event.type) ? true : false;

    if (event.type === 'mouseout') {
      contents.copyText = contents.initCopyText;
    }

    if (!!tooltipDiv) {
      Object(d3__WEBPACK_IMPORTED_MODULE_1__["select"])(tooltipDiv).style('opacity', isVisible ? 0.9 : 0).style('left', event.pageX + "px").style('top', event.pageY - 28 + "px");
      Object(d3__WEBPACK_IMPORTED_MODULE_1__["select"])(tooltipContentDiv).style('background', isVital === 'true' ? theme.palette.greenBase : theme.palette.redBase).html("<label class=\"label-header\">" + labelHeader + "\n        " + (!!contents.copyText ? getCopyLabel(contents.copyText) : '') + "</label>\n        <label class=\"label-value\">Percentage of sum: " + labelValue + "</label>\n        <strong>" + count + "</strong>\n      ");
    }
  };

  var barClickHandler = function barClickHandler(event) {
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
    var tooltipCopyLabelEl = document.getElementsByClassName('tooltip-copy-label');
    var labelElement = tooltipCopyLabelEl[0];
    labelElement.innerHTML = contents.dataCopied;
    textField.remove();
  };

  var yDomainMin = minYOffsetVal - barHeightOffset > 0 ? minYOffsetVal - barHeightOffset : 0;
  x.domain(data.xAxisLabels);
  y.domain([yDomainMin, maxYOffsetVal + barHeightOffset]);
  return {
    padding: padding,
    x: x,
    y: y,
    p: p,
    chartHeight: chartHeight,
    chartWidth: chartWidth,
    tooltipHandler: tooltipHandler,
    barClickHandler: barClickHandler,
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
      y = _a.y,
      chartHeight = _a.chartHeight,
      chartWidth = _a.chartWidth,
      tooltipHandler = _a.tooltipHandler,
      barClickHandler = _a.barClickHandler,
      vitalBreakpointVal = _a.vitalBreakpointVal,
      showVitalFew = _a.showVitalFew,
      showBarValue = _a.showBarValue,
      valToFixed = _a.valToFixed;
  var issetVitalFewLine = false;

  var setIssetVitalFewLine = function setIssetVitalFewLine(state) {
    issetVitalFewLine = state;
    return true;
  };

  var hasVitals = !!data.p.filter(function (d, i) {
    return d < vitalBreakpointVal;
  }).length;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    className: "bars",
    transform: "translate(" + padding + ", 0)"
  }, data.y.map(function (value, i) {
    var currentX = x(data.xAxisLabels[i]) || 0;
    var step = Math.trunc(chartWidth / 10 / x.bandwidth());
    var label = typeof data.y[i] === 'number' && valToFixed >= 0 ? data.y[i].toFixed(valToFixed) : data.y[i];

    var BarLabel = function BarLabel() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("text", {
        transform: "translate(0, -" + padding / 2 + ")",
        className: styles.barValue,
        x: currentX + x.bandwidth() / 2,
        y: y(value)
      }, label);
    };

    var isVital = data.p[i] < vitalBreakpointVal || !hasVitals && i === 0;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
      className: styles.bar,
      x: currentX,
      y: y(value),
      width: x.bandwidth(),
      height: chartHeight - y(value),
      fill: isVital ? theme.palette.greenBase : theme.palette.redBase,
      "data-label-header": data.x[i],
      "data-label": data.tooltipLabel[i],
      "data-count": data.y[i],
      "data-is-vital": isVital,
      onMouseUp: barClickHandler,
      onMouseOver: tooltipHandler,
      onMouseMove: tooltipHandler,
      onMouseOut: tooltipHandler
    }), showBarValue && x.bandwidth() >= 30 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BarLabel, null) : showBarValue && x.bandwidth() < 30 && i % step === 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BarLabel, null) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data.p[i] > vitalBreakpointVal && showVitalFew && !issetVitalFewLine && setIssetVitalFewLine(true) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("line", {
      className: styles.lineCutOff,
      transform: "translate(" + 0 + ", 0)",
      ref: function ref(node) {
        Object(d3__WEBPACK_IMPORTED_MODULE_1__["select"])(node).attr('x1', currentX + x.bandwidth() / 2).attr('x2', currentX + x.bandwidth() / 2).attr('y1', 0).attr('y2', chartHeight);
      }
    })));
  }));
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



var PathsComponent = function PathsComponent(_a) {
  var styles = _a.styles,
      padding = _a.padding,
      x = _a.x,
      pathData = _a.pathData,
      line = _a.line,
      showVitalFew = _a.showVitalFew,
      cutOffXPathData = _a.cutOffXPathData;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: styles.paths
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: styles.line,
    transform: "translate(" + (padding + x.bandwidth() / 2) + ", " + padding + ")",
    ref: function ref(node) {
      Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).datum(pathData).attr('d', line);
    }
  }), showVitalFew && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    className: styles.lineCutOff,
    transform: "translate(" + (padding + x.bandwidth() / 2) + ", " + padding + ")",
    ref: function ref(node) {
      Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).datum(cutOffXPathData).attr('d', line);
    }
  }));
};
var AxisComponent = function AxisComponent(_a) {
  var data = _a.data,
      styles = _a.styles,
      showBottomAxis = _a.showBottomAxis,
      padding = _a.padding,
      chartHeight = _a.chartHeight,
      chartWidth = _a.chartWidth,
      x = _a.x,
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
    className: "axis"
  }, showBottomAxis && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    className: "axis-bottom",
    transform: "translate(" + padding + ", " + chartHeight + ")",
    ref: function ref(node) {
      var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(data.p.filter(isVital).sort(function (a, b) {
        return b - a;
      }), 1),
          highestVitalFewValue = _a[0];

      var tickFilter = function tickFilter(d, i) {
        return data.p[i] === highestVitalFewValue || data.p.length - 1 === i;
      };

      var callHandler = Object(d3__WEBPACK_IMPORTED_MODULE_2__["axisBottom"])(x).tickValues(x.domain().filter(tickFilter));
      Object(d3__WEBPACK_IMPORTED_MODULE_2__["select"])(node).call(callHandler).selectAll('text').attr('y', padding / 2).attr('x', 0).style('text-anchor', 'center');
    }
  }), !showBottomAxis && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("line", {
    className: styles.lineBottomAxis,
    transform: "translate(" + padding + ", 0)",
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
/* harmony import */ var _BarGraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BarGraph */ "./BarGraph.tsx");
/* harmony import */ var _GraphComponents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GraphComponents */ "./GraphComponents.tsx");
/* harmony import */ var _controllers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers */ "./controllers.ts");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ "./styles.ts");








var ParetoPanel = function ParetoPanel(_a) {
  var options = _a.options,
      data = _a.data,
      width = _a.width,
      height = _a.height;

  if (!data || !!!data.series.length) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "No Data");
  }

  var theme = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var styles = Object(_styles__WEBPACK_IMPORTED_MODULE_7__["getStyles"])();
  var tooltipRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var tooltipContentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var PanelData = new _controllers__WEBPACK_IMPORTED_MODULE_6__["PanelDataController"](data);
  var graphData = PanelData.getResults();
  var barGraphSettings = {
    options: options,
    width: width,
    height: height
  };
  var barGraphRefs = {
    theme: theme,
    tooltipRef: tooltipRef,
    tooltipContentRef: tooltipContentRef
  };
  var barGraphData = Object(_BarGraph__WEBPACK_IMPORTED_MODULE_4__["BarGraph"])(graphData, barGraphSettings, barGraphRefs);

  var props = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({
    data: graphData,
    styles: styles
  }, options), barGraphRefs), barGraphData);

  var Component = barGraphData.Component;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["cx"])(styles.wrapper, Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n          width: ", "px;\n          height: ", "px;\n        "], ["\n          width: ", "px;\n          height: ", "px;\n        "])), width, height))
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: tooltipRef,
    className: styles.tooltipContainer
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    ref: tooltipContentRef,
    className: styles.tooltip
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    className: styles.svg,
    width: width,
    height: height,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 " + width + " " + height
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    transform: "translate(" + barGraphData.padding + ", " + barGraphData.padding + ")",
    className: "wrapper"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GraphComponents__WEBPACK_IMPORTED_MODULE_5__["PathsComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GraphComponents__WEBPACK_IMPORTED_MODULE_5__["AxisComponent"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props)))));
};
var templateObject_1;

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
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(name.match(/\{.*:+(.*)\}/), 2),
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
    path: 'showBottomAxis',
    name: 'Show bottom axis?',
    description: 'The bottom axis contains the vital few breakpoint value in %',
    defaultValue: false
  }).addBooleanSwitch({
    path: 'showVitalFew',
    name: 'Show vital few line?',
    description: 'Indicates that many defects come from relatively few causes.',
    defaultValue: true
  }).addNumberInput({
    path: 'vitalBreakpointVal',
    name: 'Vital few value (%)',
    description: 'Default is 80 based on the 80/20 rule. But, you are able to customize this.',
    defaultValue: 20
  }).addBooleanSwitch({
    path: 'showBarValue',
    name: 'Show bar values?',
    description: 'Show the bar values on top of the bars?',
    defaultValue: false
  }).addNumberInput({
    path: 'valToFixed',
    name: 'Number of decimals?',
    description: 'Set number of decimals in bar values.',
    settings: {
      min: 0
    },
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
  }).addBooleanSwitch({
    path: 'isCopyLabelVisible',
    name: 'Show copy content label?',
    description: 'This label below the tooltip hints users to copy content of the entered bar.',
    defaultValue: true
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
    tooltipContainer: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: fixed;\n      z-index: 100;\n      min-width: 20vw;\n      display: flex;\n      top: -100vh;\n      left: -100vw;\n    "], ["\n      position: fixed;\n      z-index: 100;\n      min-width: 20vw;\n      display: flex;\n      top: -100vh;\n      left: -100vw;\n    "]))),
    tooltip: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      border: 1px solid ", ";\n      padding: 4px 10px;\n      max-width: 100%;\n      color: white;\n\n      strong {\n        position: absolute;\n        top: -1px;\n        left: 100%;\n        padding: 4px;\n        bottom: -1px;\n        min-width: 50px;\n        text-align: center;\n        background: inherit;\n        border: 1px solid ", ";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.4rem;\n      }\n\n      label {\n        display: block;\n        background: inherit;\n        padding: 0 0 4px 0;\n\n        &.label-header {\n          font-weight: bold;\n          font-size: 1.2rem;\n          max-width: 100%;\n        }\n      }\n\n      .tooltip-copy-label {\n        position: absolute;\n        top: calc(100% + 4px);\n        left: 0;\n        background: ", ";\n        color: ", ";\n        font-size: 10px;\n        height: 20px;\n        box-sizing: border-box;\n        padding: 2px 4px;\n\n        &.hidden {\n          opacity: 0;\n          z-index: -1;\n        }\n      }\n    "], ["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      border: 1px solid ", ";\n      padding: 4px 10px;\n      max-width: 100%;\n      color: white;\n\n      strong {\n        position: absolute;\n        top: -1px;\n        left: 100%;\n        padding: 4px;\n        bottom: -1px;\n        min-width: 50px;\n        text-align: center;\n        background: inherit;\n        border: 1px solid ", ";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 1.4rem;\n      }\n\n      label {\n        display: block;\n        background: inherit;\n        padding: 0 0 4px 0;\n\n        &.label-header {\n          font-weight: bold;\n          font-size: 1.2rem;\n          max-width: 100%;\n        }\n      }\n\n      .tooltip-copy-label {\n        position: absolute;\n        top: calc(100% + 4px);\n        left: 0;\n        background: ", ";\n        color: ", ";\n        font-size: 10px;\n        height: 20px;\n        box-sizing: border-box;\n        padding: 2px 4px;\n\n        &.hidden {\n          opacity: 0;\n          z-index: -1;\n        }\n      }\n    "])), theme.colors.border2, theme.colors.border2, theme.colors.border2, theme.colors.text),
    textBox: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_5 || (templateObject_5 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "], ["\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      padding: 10px;\n    "]))),
    bar: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_6 || (templateObject_6 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      cursor: pointer;\n\n      &:hover {\n        fill: ", ";\n      }\n    "], ["\n      cursor: pointer;\n\n      &:hover {\n        fill: ", ";\n      }\n    "])), theme.colors.text),
    barValue: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_7 || (templateObject_7 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: ", ";\n      text-anchor: middle;\n    "], ["\n      fill: ", ";\n      text-anchor: middle;\n    "])), theme.colors.text),
    line: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_8 || (templateObject_8 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: none;\n      stroke: ", ";\n      stroke-width: 2px;\n    "], ["\n      fill: none;\n      stroke: ", ";\n      stroke-width: 2px;\n    "])), theme.isDark ? 'rgba(255,255,255,.5)' : 'rgba(0,0,0,.5)'),
    lineCutOff: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_9 || (templateObject_9 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: none;\n      stroke: rgba(255, 0, 0, 0.75);\n      stroke-width: 2px;\n      stroke-dasharray: 5px;\n    "], ["\n      fill: none;\n      stroke: rgba(255, 0, 0, 0.75);\n      stroke-width: 2px;\n      stroke-dasharray: 5px;\n    "]))),
    lineBottomAxis: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_10 || (templateObject_10 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      fill: none;\n      stroke: rgba(255, 255, 255, 1);\n      stroke-width: 0.75px;\n    "], ["\n      fill: none;\n      stroke: rgba(255, 255, 255, 1);\n      stroke-width: 0.75px;\n    "]))),
    paths: Object(emotion__WEBPACK_IMPORTED_MODULE_1__["css"])(templateObject_11 || (templateObject_11 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      position: relative;\n    "], ["\n      position: relative;\n    "])))
  };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10, templateObject_11;

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