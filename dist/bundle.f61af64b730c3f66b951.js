/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sketch_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


(w => Object.keys(_sketch_main__WEBPACK_IMPORTED_MODULE_0__).forEach(hook => {
  w[hook] = _sketch_main__WEBPACK_IMPORTED_MODULE_0__[hook];
}))(window);

/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setup", function() { return setup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mousePressed", function() { return mousePressed; });
/* harmony import */ var d3_voronoi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _classes_LCell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _lib_pallete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(42);




// import Offset from 'polygon-offset';

let vFunc;
let vDiag;
const sites = [];
let framesSinceSitesChanged = 1000;
function setup() {
    const c = createCanvas(300, 300);
    c.parent('#canvas');
    background(55);
    vFunc = Object(d3_voronoi__WEBPACK_IMPORTED_MODULE_0__["voronoi"])().size([width, height]).x(d => d.x).y(d => d.y);
    lodash__WEBPACK_IMPORTED_MODULE_1__["range"](24).map(i => {
        const s = new _classes_LCell__WEBPACK_IMPORTED_MODULE_2__["default"](lodash__WEBPACK_IMPORTED_MODULE_1__["random"](width), lodash__WEBPACK_IMPORTED_MODULE_1__["random"](height), _enums__WEBPACK_IMPORTED_MODULE_3__["default"].BASIC);
        s.index = i;
        s.colour = Object(_lib_pallete__WEBPACK_IMPORTED_MODULE_4__["getC"])(lodash__WEBPACK_IMPORTED_MODULE_1__["random"](12), lodash__WEBPACK_IMPORTED_MODULE_1__["random"](4));
        sites.push(s);
    });
    framesSinceSitesChanged = 0;
}
function draw() {
    background(155);
    vDiag = vFunc(sites);
    vDiag.polygons().map(pgon => {
        const cell = pgon.data;
        cell.setPolygon = pgon;
        strokeWeight(2 + Math.sin(frameCount / 100));
        cell.drawBasic(window);
        if (framesSinceSitesChanged < 12) {
            cell.smooth();
        }
    });
    framesSinceSitesChanged++;
}
function mousePressed() {
    sites.push(new _classes_LCell__WEBPACK_IMPORTED_MODULE_2__["default"](mouseX, mouseY, 0));
    framesSinceSitesChanged = 0;
}

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LCell; });
/* harmony import */ var b_spline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var b_spline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(b_spline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var d3_polygon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polygon_offset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24);
/* harmony import */ var polygon_offset__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polygon_offset__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _lib_pallete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42);
// @ts-ignore



// @ts-ignore



/**
 * Class For Individual Voronoi Cells
 * @author Rupert
 *
 */
class LCell {
    /**
     * Creates an instance of LCell.
     * @param {number} X
     * @param {number} Y
     * @param {CellTypes} [TYPE=CellTypes.BASIC] Type to use for cell
     * @memberof LCell
     */
    constructor(X, Y, TYPE = _enums__WEBPACK_IMPORTED_MODULE_4__["default"].BASIC) {
        [this.x, this.y, this.type] = [X, Y, TYPE];
        this.colour = Object(_lib_pallete__WEBPACK_IMPORTED_MODULE_5__["getC"])(0, 6);
        this.clipper = new polygon_offset__WEBPACK_IMPORTED_MODULE_3__();
        this.spliner = b_spline__WEBPACK_IMPORTED_MODULE_0__;
    }
    /**
     * Sets the position of this cell's site from a tuple
     *
     * @param {[number, number]} pos length 2 array to use for position
     * @memberof LCell
     */
    posFromTuple(pos) {
        [this.x, this.y] = pos;
    }
    addNeighbour(n) {
        this.neighbours.push(n);
    }
    isNeighbour(n) {
        return this.neighbours.includes(n);
    }
    get getNeighbours() {
        return this.neighbours;
    }
    set setPolygon(poly) {
        this.polygon = poly;
    }
    drawBasic(p) {
        if (!this.polygon) {
            throw new Error('no polygon linked to this site');
        }
        let cpoly = this.clipper.data([...this.polygon, this.polygon[0]]).padding(6)[0];
        cpoly = lodash__WEBPACK_IMPORTED_MODULE_2__["range"](0, 10, 0.1).map(i => {
            return this.spliner(i / 10, 3, [...cpoly, cpoly[1], cpoly[2]]);
        });
        if (p instanceof p5) {
            p.fill(this.colour.hex);
            p.beginShape();
            this.polygon.map(pt => p.vertex(pt[0], pt[1]));
            p.endShape(CLOSE);
        }
        if (p instanceof Window) {
            fill(this.colour.hex);
            beginShape();
            cpoly.map(pt => vertex(pt[0], pt[1]));
            endShape();
        }
    }
    /** Runs Lloyd Smoothing on this cell */
    smooth() {
        if (!this.polygon) {
            throw new Error('no polygon found');
        }
        this.centroid = Object(d3_polygon__WEBPACK_IMPORTED_MODULE_1__["polygonCentroid"])(this.polygon);
        this.posFromTuple(this.centroid);
    }
}

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var CellTypes;
(function (CellTypes) {
    CellTypes[CellTypes["BASIC"] = 0] = "BASIC";
    CellTypes[CellTypes["ROAD"] = 1] = "ROAD";
    CellTypes[CellTypes["CITY"] = 2] = "CITY";
    CellTypes[CellTypes["DISTRICT"] = 3] = "DISTRICT";
})(CellTypes || (CellTypes = {}));
/* harmony default export */ __webpack_exports__["default"] = (CellTypes);

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getC", function() { return getC; });
/*tslint:disable object-literal-sort-keys */
var hues;
(function (hues) {
    hues[hues["cools"] = 0] = "cools";
    hues[hues["warms"] = 1] = "warms";
    hues[hues["neutrals"] = 2] = "neutrals";
    hues[hues["pinks"] = 3] = "pinks";
    hues[hues["purples"] = 4] = "purples";
    hues[hues["violets"] = 5] = "violets";
    hues[hues["blues"] = 6] = "blues";
    hues[hues["aquas"] = 7] = "aquas";
    hues[hues["greens"] = 8] = "greens";
    hues[hues["limes"] = 9] = "limes";
    hues[hues["yellows"] = 10] = "yellows";
    hues[hues["browns"] = 11] = "browns";
    hues[hues["oranges"] = 12] = "oranges";
    hues[hues["apricots"] = 13] = "apricots";
    hues[hues["reds"] = 14] = "reds";
})(hues || (hues = {}));
var shades;
(function (shades) {
    shades[shades["black"] = 0] = "black";
    shades[shades["dark"] = 1] = "dark";
    shades[shades["mediumDark"] = 2] = "mediumDark";
    shades[shades["medium"] = 3] = "medium";
    shades[shades["mediumLight"] = 4] = "mediumLight";
    shades[shades["light"] = 5] = "light";
    shades[shades["white"] = 6] = "white";
})(shades || (shades = {}));
const PalleteArray = [[{
    red: 0.2117647,
    alpha: 1,
    name: 'BigStone',
    blue: 0.2745098,
    green: 0.254902,
    hex: '#364146'
}, {
    red: 0.2666667,
    alpha: 1,
    name: 'RiverBed',
    blue: 0.3372549,
    green: 0.3137255,
    hex: '#445056'
}, {
    red: 0.4666667,
    alpha: 1,
    name: 'RegentGray',
    blue: 0.5333334,
    green: 0.5137255,
    hex: '#778388'
}, {
    red: 0.6627451,
    alpha: 1,
    name: 'Casper',
    blue: 0.7294118,
    green: 0.7098039,
    hex: '#a9b5ba'
}, {
    red: 0.07058824,
    alpha: 1,
    name: 'Mirage',
    blue: 0.1372549,
    green: 0.1176471,
    hex: '#121e23'
}, {
    red: 0.8588235,
    alpha: 1,
    name: 'Tranquil',
    blue: 0.9254902,
    green: 0.9058824,
    hex: '#dbe7ec'
}, {
    red: 0.8980392,
    alpha: 1,
    name: 'AquaSqueeze',
    blue: 0.9647059,
    green: 0.945098,
    hex: '#e5f1f6'
}], [{
    red: 0.1529412,
    alpha: 1,
    name: 'Oil',
    blue: 0.08235294,
    green: 0.1176471,
    hex: '#271e15'
}, {
    red: 0.2941177,
    alpha: 1,
    name: 'SpaceShuttle',
    blue: 0.2235294,
    green: 0.2627451,
    hex: '#4b4339'
}, {
    red: 0.34902,
    alpha: 1,
    name: 'Masala',
    blue: 0.28235,
    green: 0.31765,
    hex: '#595148'
}, {
    red: 0.5490196,
    alpha: 1,
    name: 'Schooner',
    blue: 0.4745098,
    green: 0.5137255,
    hex: '#8c8379'
}, {
    red: 0.7450981,
    alpha: 1,
    name: 'Tide',
    blue: 0.6745098,
    green: 0.7098039,
    hex: '#beb5ac'
}, {
    red: 0.9411765,
    alpha: 1,
    name: 'DesertStorm',
    blue: 0.8705882,
    green: 0.9098039,
    hex: '#f0e8de'
}, {
    red: 0.9803922,
    alpha: 1,
    name: 'WhiteLinen',
    blue: 0.9098039,
    green: 0.9490196,
    hex: '#faf2e8'
}], [{
    red: 0.05882353,
    alpha: 1,
    name: 'Onyx',
    blue: 0.05882353,
    green: 0.05882353,
    hex: '#0f0f0f'
}, {
    red: 0.2156863,
    alpha: 1,
    name: 'Tuatara',
    blue: 0.2156863,
    green: 0.2156863,
    hex: '#373737'
}, {
    red: 0.2784314,
    alpha: 1,
    name: 'Charcoal',
    blue: 0.2784314,
    green: 0.2784314,
    hex: '#474747'
}, {
    red: 0.4980392,
    alpha: 1,
    name: 'Tin',
    blue: 0.4980392,
    green: 0.4980392,
    hex: '#7f7f7f'
}, {
    red: 0.7176471,
    alpha: 1,
    name: 'Loblolly',
    blue: 0.7176471,
    green: 0.7176471,
    hex: '#b7b7b7'
}, {
    red: 0.9372549,
    alpha: 1,
    name: 'Gallery',
    blue: 0.9372549,
    green: 0.9372549,
    hex: '#efefef'
}, {
    red: 0.9803922,
    alpha: 1,
    name: 'Alabaster',
    blue: 0.9803922,
    green: 0.9803922,
    hex: '#fafafa'
}], [{
    red: 0.6313726,
    alpha: 1,
    name: 'RoyalHeath',
    blue: 0.5058824,
    green: 0.1960784,
    hex: '#a13281'
}, {
    red: 0.7450981,
    alpha: 1,
    name: 'Byzantine',
    blue: 0.6039216,
    green: 0.227451,
    hex: '#be3a9a'
}, {
    red: 0.827451,
    alpha: 1,
    name: 'DeepFuchsia',
    blue: 0.6862745,
    green: 0.3098039,
    hex: '#d34faf'
}, {
    red: 0.9333333,
    alpha: 1,
    name: 'NeonFuchsia',
    blue: 0.7568628,
    green: 0.2862745,
    hex: '#ee49c1'
}, {
    red: 0.945098,
    alpha: 1,
    name: 'RosePink',
    blue: 0.8039216,
    green: 0.427451,
    hex: '#f16dcd'
}, {
    red: 0.972549,
    alpha: 1,
    name: 'Chantilly',
    blue: 0.9019608,
    green: 0.7137255,
    hex: '#f8b6e6'
}, {
    red: 0.9882353,
    alpha: 1,
    name: 'PaleRose',
    blue: 0.9607843,
    green: 0.8862745,
    hex: '#fce2f5'
}], [{
    red: 0.427451,
    alpha: 1,
    name: 'PurpleHeart',
    blue: 0.6117647,
    green: 0.2196078,
    hex: '#6d389c'
}, {
    red: 0.5058824,
    alpha: 1,
    name: 'Studio',
    blue: 0.7333333,
    green: 0.254902,
    hex: '#8141bb'
}, {
    red: 0.5843138,
    alpha: 1,
    name: 'Amethyst',
    blue: 0.8156863,
    green: 0.3333333,
    hex: '#9555d0'
}, {
    red: 0.6313726,
    alpha: 1,
    name: 'LavenderIndigo',
    blue: 0.9176471,
    green: 0.3176471,
    hex: '#a151ea'
}, {
    red: 0.7058824,
    alpha: 1,
    name: 'SoftPurple',
    blue: 0.9333333,
    green: 0.454902,
    hex: '#b474ee'
}, {
    red: 0.8509804,
    alpha: 1,
    name: 'Perfume',
    blue: 0.9686275,
    green: 0.7254902,
    hex: '#d9b9f7'
}, {
    red: 0.9411765,
    alpha: 1,
    name: 'BlueChalk',
    blue: 0.9882353,
    green: 0.8901961,
    hex: '#f0e3fc'
}], [{
    red: 0.2392157,
    alpha: 1,
    name: 'DarkSlateBlue',
    blue: 0.5529412,
    green: 0.2470588,
    hex: '#3d3f8d'
}, {
    red: 0.282353,
    alpha: 1,
    name: 'GovernorBay',
    blue: 0.6627451,
    green: 0.2901961,
    hex: '#484aa9'
}, {
    red: 0.3607843,
    alpha: 1,
    name: 'BlueViolet',
    blue: 0.7411765,
    green: 0.372549,
    hex: '#5c5fbd'
}, {
    red: 0.3529412,
    alpha: 1,
    name: 'Iris',
    blue: 0.827451,
    green: 0.3647059,
    hex: '#5a5dd3'
}, {
    red: 0.4823529,
    alpha: 1,
    name: 'ChetwodeBlue',
    blue: 0.8627451,
    green: 0.4901961,
    hex: '#7b7ddc'
}, {
    red: 0.7411765,
    alpha: 1,
    name: 'Melrose',
    blue: 0.9294118,
    green: 0.7450981,
    hex: '#bdbeed'
}, {
    red: 0.8980392,
    alpha: 1,
    name: 'Lavender',
    blue: 0.972549,
    green: 0.8980392,
    hex: '#e5e5f8'
}], [{
    red: 0.1294118,
    alpha: 1,
    name: 'Calypso',
    blue: 0.5647059,
    green: 0.4352941,
    hex: '#216f90'
}, {
    red: 0.145098,
    alpha: 1,
    name: 'Astral',
    blue: 0.6705883,
    green: 0.509804,
    hex: '#2582ab'
}, {
    red: 0.2235294,
    alpha: 1,
    name: 'BostonBlue',
    blue: 0.7529412,
    green: 0.5921569,
    hex: '#3997c0'
}, {
    red: 0.1803922,
    alpha: 1,
    name: 'CuriousBlue',
    blue: 0.8392157,
    green: 0.6392157,
    hex: '#2ea3d6'
}, {
    red: 0.345098,
    alpha: 1,
    name: 'Malibu',
    blue: 0.8705882,
    green: 0.7098039,
    hex: '#58b5de'
}, {
    red: 0.6705883,
    alpha: 1,
    name: 'NonPhotoBlue',
    blue: 0.9372549,
    green: 0.854902,
    hex: '#abdaef'
}, {
    red: 0.8666667,
    alpha: 1,
    name: 'PattensBlue',
    blue: 0.9764706,
    green: 0.9411765,
    hex: '#ddf0f9'
}], [{
    red: 0.2078431,
    alpha: 1,
    name: 'Viridian',
    blue: 0.4156863,
    green: 0.5450981,
    hex: '#358b6a'
}, {
    red: 0.2352941,
    alpha: 1,
    name: 'OceanGreen',
    blue: 0.4784314,
    green: 0.6392157,
    hex: '#3ca37a'
}, {
    red: 0.3137255,
    alpha: 1,
    name: 'Mint',
    blue: 0.5607843,
    green: 0.7215686,
    hex: '#50b88f'
}, {
    red: 0.2941177,
    alpha: 1,
    name: 'Shamrock',
    blue: 0.6,
    green: 0.8,
    hex: '#4bcc99'
}, {
    red: 0.4352941,
    alpha: 1,
    name: 'MediumAquamarine',
    blue: 0.6784314,
    green: 0.8392157,
    hex: '#6fd6ad'
}, {
    red: 0.7176471,
    alpha: 1,
    name: 'WaterLeaf',
    blue: 0.8392157,
    green: 0.9215686,
    hex: '#b7ebd6'
}, {
    red: 0.8862745,
    alpha: 1,
    name: 'WhiteIce',
    blue: 0.9372549,
    green: 0.9686275,
    hex: '#e2f7ef'
}], [{
    red: 0.2941177,
    alpha: 1,
    name: 'HippieGreen',
    blue: 0.2901961,
    green: 0.5176471,
    hex: '#4b844a'
}, {
    red: 0.3411765,
    alpha: 1,
    name: 'FruitSalad',
    blue: 0.3176471,
    green: 0.6078432,
    hex: '#579b51'
}, {
    red: 0.4235294,
    alpha: 1,
    name: 'Fern',
    blue: 0.3960784,
    green: 0.6901961,
    hex: '#6cb065'
}, {
    red: 0.427451,
    alpha: 1,
    name: 'Mantis',
    blue: 0.3960784,
    green: 0.7607843,
    hex: '#6dc265'
}, {
    red: 0.5411765,
    alpha: 1,
    name: 'DeYork',
    blue: 0.5176471,
    green: 0.8078431,
    hex: '#8ace84'
}, {
    red: 0.772549,
    alpha: 1,
    name: 'GrannyApple',
    blue: 0.7568628,
    green: 0.9058824,
    hex: '#c5e7c1'
}, {
    red: 0.9098039,
    alpha: 1,
    name: 'AquaSpringCool',
    blue: 0.9019608,
    green: 0.9607843,
    hex: '#e8f5e6'
}], [{
    red: 0.4705882,
    alpha: 1,
    name: 'Asparagus',
    blue: 0.2980392,
    green: 0.5764706,
    hex: '#78934c'
}, {
    red: 0.5529412,
    alpha: 1,
    name: 'ChelseaCucumber',
    blue: 0.3176471,
    green: 0.6784314,
    hex: '#8dad51'
}, {
    red: 0.6313726,
    alpha: 1,
    name: 'Olivine',
    blue: 0.3960784,
    green: 0.7568628,
    hex: '#a1c165'
}, {
    red: 0.6901961,
    alpha: 1,
    name: 'Conifer',
    blue: 0.3960784,
    green: 0.8470588,
    hex: '#b0d865'
}, {
    red: 0.7529412,
    alpha: 1,
    name: 'YellowGreen',
    blue: 0.5176471,
    green: 0.8784314,
    hex: '#c0e084'
}, {
    red: 0.8745098,
    alpha: 1,
    name: 'BerylGreen',
    blue: 0.7568628,
    green: 0.9372549,
    hex: '#dfefc1'
}, {
    red: 0.9098039,
    alpha: 1,
    name: 'AquaSpringWarm',
    blue: 0.9019608,
    green: 0.9607843,
    hex: '#e8f5e6'
}], [{
    red: 0.6352941,
    alpha: 1,
    name: 'MuddyWaters',
    blue: 0.2901961,
    green: 0.5529412,
    hex: '#a28d4a'
}, {
    red: 0.7450981,
    alpha: 1,
    name: 'Sundance',
    blue: 0.3098039,
    green: 0.6509804,
    hex: '#bea64f'
}, {
    red: 0.827451,
    alpha: 1,
    name: 'Tacha',
    blue: 0.3921569,
    green: 0.7333333,
    hex: '#d3bb64'
}, {
    red: 0.9333333,
    alpha: 1,
    name: 'GoldenSand',
    blue: 0.3882353,
    green: 0.8156863,
    hex: '#eed063'
}, {
    red: 0.945098,
    alpha: 1,
    name: 'Buff',
    blue: 0.509804,
    green: 0.8509804,
    hex: '#f1d982'
}, {
    red: 0.972549,
    alpha: 1,
    name: 'Blond',
    blue: 0.7568628,
    green: 0.9254902,
    hex: '#f8ecc1'
}, {
    red: 0.9882353,
    alpha: 1,
    name: 'OldLaceGreen',
    blue: 0.9019608,
    green: 0.9686275,
    hex: '#fcf7e6'
}], [{
    red: 0.654902,
    alpha: 1,
    name: 'Alpine',
    blue: 0.2588235,
    green: 0.5058824,
    hex: '#a78142'
}, {
    red: 0.7686275,
    alpha: 1,
    name: 'Tussock',
    blue: 0.2666667,
    green: 0.5960785,
    hex: '#c49844'
}, {
    red: 0.8470588,
    alpha: 1,
    name: 'RobRoy',
    blue: 0.345098,
    green: 0.6745098,
    hex: '#d8ac58'
}, {
    red: 0.9607843,
    alpha: 1,
    name: 'SaffronMango',
    blue: 0.3333333,
    green: 0.7450981,
    hex: '#f5be55'
}, {
    red: 0.9686275,
    alpha: 1,
    name: 'Chardonnay',
    blue: 0.4666667,
    green: 0.7960784,
    hex: '#f7cb77'
}, {
    red: 0.9843137,
    alpha: 1,
    name: 'DairyCream',
    blue: 0.7333333,
    green: 0.8980392,
    hex: '#fbe5bb'
}, {
    red: 0.9921569,
    alpha: 1,
    name: 'OldLaceYellow',
    blue: 0.8941177,
    green: 0.9607843,
    hex: '#fdf5e4'
}], [{
    red: 0.6705883,
    alpha: 1,
    name: 'Bourbon',
    blue: 0.2235294,
    green: 0.4470588,
    hex: '#ab7239'
}, {
    red: 0.7882353,
    alpha: 1,
    name: 'GoldenBell',
    blue: 0.2235294,
    green: 0.5254902,
    hex: '#c98639'
}, {
    red: 0.8666667,
    alpha: 1,
    name: 'FireBush',
    blue: 0.3019608,
    green: 0.6039216,
    hex: '#dd9a4d'
}, {
    red: 0.9843137,
    alpha: 1,
    name: 'NeonCarrot',
    blue: 0.2784314,
    green: 0.654902,
    hex: '#fba747'
}, {
    red: 0.9882353,
    alpha: 1,
    name: 'Rajah',
    blue: 0.4235294,
    green: 0.7254902,
    hex: '#fcb96c'
}, {
    red: 0.9921569,
    alpha: 1,
    name: 'SandyBeach',
    blue: 0.7098039,
    green: 0.8627451,
    hex: '#fddcb5'
}, {
    red: 0.9960784,
    alpha: 1,
    name: 'Sazerac',
    blue: 0.8823529,
    green: 0.945098,
    hex: '#fef1e1'
}], [{
    red: 0.654902,
    alpha: 1,
    name: 'OrangeRoughy',
    blue: 0.2,
    green: 0.3176471,
    hex: '#a75133'
}, {
    red: 0.7764706,
    alpha: 1,
    name: 'Ecstasy',
    blue: 0.2117647,
    green: 0.3686275,
    hex: '#c65e36'
}, {
    red: 0.854902,
    alpha: 1,
    name: 'Jaffa',
    blue: 0.2941177,
    green: 0.4509804,
    hex: '#da734b'
}, {
    red: 0.9686275,
    alpha: 1,
    name: 'OutrageousOrange',
    blue: 0.2666667,
    green: 0.4627451,
    hex: '#f77644'
}, {
    red: 0.9764706,
    alpha: 1,
    name: 'Salmon',
    blue: 0.4117647,
    green: 0.5686275,
    hex: '#f99169'
}, {
    red: 0.9882353,
    alpha: 1,
    name: 'Apricot',
    blue: 0.7058824,
    green: 0.7843137,
    hex: '#fcc8b4'
}, {
    red: 0.9960784,
    alpha: 1,
    name: 'Chablis',
    blue: 0.8823529,
    green: 0.9137255,
    hex: '#fee9e1'
}], [{
    red: 0.6431373,
    alpha: 1,
    name: 'MilanoRed',
    blue: 0.1843137,
    green: 0.1882353,
    hex: '#a4302f'
}, {
    red: 0.7607843,
    alpha: 1,
    name: 'Mahogany',
    blue: 0.2039216,
    green: 0.2156863,
    hex: '#c23734'
}, {
    red: 0.8392157,
    alpha: 1,
    name: 'Valencia',
    blue: 0.2980392,
    green: 0.3137255,
    hex: '#d6504c'
}, {
    red: 0.9490196,
    alpha: 1,
    name: 'CarminePink',
    blue: 0.254902,
    green: 0.2705882,
    hex: '#f24541'
}, {
    red: 0.9607843,
    alpha: 1,
    name: 'PastelRed',
    blue: 0.4039216,
    green: 0.4156863,
    hex: '#f56a67'
}, {
    red: 0.9803922,
    alpha: 1,
    name: 'Sundown',
    blue: 0.7019608,
    green: 0.7098039,
    hex: '#fab5b3'
}, {
    red: 0.9921569,
    alpha: 1,
    name: 'Pippin',
    blue: 0.8823529,
    green: 0.8823529,
    hex: '#fde1e1'
}]];
function getC(arg1, arg2) {
    let hue;
    let shad;
    if (typeof arg1 === 'string' && arg2 === null) {
        for (const v of PalleteArray) {
            for (const c of v) {
                if (c.name === arg1) {
                    return c;
                }
            }
        }
        throw new Error("can't find colour");
    } else if (typeof arg1 === 'number' && arg2 === null) {
        throw new Error('invalid');
    }
    if (typeof arg1 === 'number') {
        hue = arg1;
    }
    if (typeof arg2 === 'number') {
        shad = arg2;
    }
    if (typeof arg1 === 'string' && arg2 !== null) {
        hue = hues[arg1];
    }
    if (typeof arg2 === 'string') {
        shad = shades[arg2];
    }
    try {
        return PalleteArray[hue][shad];
    } catch (error) {
        throw error;
    }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9za2V0Y2gvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2tldGNoL2NsYXNzZXMvTENlbGwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NrZXRjaC9lbnVtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2tldGNoL2xpYi9wYWxsZXRlLnRzIl0sIm5hbWVzIjpbInciLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImhvb2siLCJza2V0Y2hIb29rcyIsIndpbmRvdyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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SUFBSjtBQUNBLFFBQUssT0FBTyxJQUFQLEtBQWdCLFFBQWhCLElBQTRCLFNBQVMsSUFBMUMsRUFBaUQ7QUFDL0MsYUFBTSxNQUFNLENBQVosSUFBaUIsWUFBakIsRUFBZ0M7QUFDOUIsaUJBQU0sTUFBTSxDQUFaLElBQWlCLENBQWpCLEVBQXFCO0FBQ25CLG9CQUFLLEVBQUUsSUFBRixLQUFXLElBQWhCLEVBQXVCO0FBQ3JCLDJCQUFPLENBQVA7QUFDRDtBQUNGO0FBQ0Y7QUFDRCxjQUFNLElBQUksS0FBSixDQUFXLG1CQUFYLENBQU47QUFDRCxLQVRELE1BU08sSUFBSyxPQUFPLElBQVAsS0FBZ0IsUUFBaEIsSUFBNEIsU0FBUyxJQUExQyxFQUFpRDtBQUN0RCxjQUFNLElBQUksS0FBSixDQUFXLFNBQVgsQ0FBTjtBQUNEO0FBQ0QsUUFBSyxPQUFPLElBQVAsS0FBZ0IsUUFBckIsRUFBZ0M7QUFDOUIsY0FBTSxJQUFOO0FBQ0Q7QUFDRCxRQUFLLE9BQU8sSUFBUCxLQUFnQixRQUFyQixFQUFnQztBQUM5QixlQUFPLElBQVA7QUFDRDtBQUNELFFBQUssT0FBTyxJQUFQLEtBQWdCLFFBQWhCLElBQTRCLFNBQVMsSUFBMUMsRUFBaUQ7QUFDL0MsY0FBTSxLQUFLLElBQUwsQ0FBTjtBQUNEO0FBQ0QsUUFBSyxPQUFPLElBQVAsS0FBZ0IsUUFBckIsRUFBZ0M7QUFDOUIsZUFBTyxPQUFPLElBQVAsQ0FBUDtBQUNEO0FBQ0QsUUFBSTtBQUNGLGVBQU8sYUFBYSxHQUFiLEVBQWtCLElBQWxCLENBQVA7QUFDRCxLQUZELENBRUUsT0FBUSxLQUFSLEVBQWdCO0FBQ2hCLGNBQU0sS0FBTjtBQUNEO0FBQ0YsQyIsImZpbGUiOiJidW5kbGUuZjYxYWY2NGI3MzBjM2Y2NmI5NTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQwOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLDFdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0ICogYXMgc2tldGNoSG9va3MgZnJvbSAnLi9za2V0Y2gvbWFpbic7XG5cbih3ID0+XG4gIE9iamVjdC5rZXlzKHNrZXRjaEhvb2tzKS5mb3JFYWNoKGhvb2sgPT4ge1xuICAgIHdbaG9va10gPSBza2V0Y2hIb29rc1tob29rXTtcbiAgfSkpKHdpbmRvdyk7XG4iLCJpbXBvcnQgaW50ZXJwb2xhdGUgZnJvbSAnYi1zcGxpbmUnO1xuaW1wb3J0IHsgdm9yb25vaSwgVm9yb25vaURpYWdyYW0gfSBmcm9tICdkMy12b3Jvbm9pJztcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBMQ2VsbCBmcm9tICcuL2NsYXNzZXMvTENlbGwnO1xuaW1wb3J0IENlbGxUeXBlcyBmcm9tICcuL2VudW1zJztcbi8vIGltcG9ydCBPZmZzZXQgZnJvbSAncG9seWdvbi1vZmZzZXQnO1xuaW1wb3J0IHsgZ2V0QyB9IGZyb20gJy4vbGliL3BhbGxldGUnO1xubGV0IHZGdW5jO1xubGV0IHZEaWFnOiBWb3Jvbm9pRGlhZ3JhbTxMQ2VsbD47XG5jb25zdCBzaXRlcyA9IFtdO1xubGV0IGZyYW1lc1NpbmNlU2l0ZXNDaGFuZ2VkID0gMTAwMDtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKCkge1xuICBjb25zdCBjID0gY3JlYXRlQ2FudmFzKCAzMDAsIDMwMCApO1xuICBjLnBhcmVudCggJyNjYW52YXMnICk7XG4gIGJhY2tncm91bmQoIDU1ICk7XG4gIHZGdW5jID0gdm9yb25vaTxMQ2VsbD4oKVxuICAgIC5zaXplKCBbIHdpZHRoLCBoZWlnaHQgXSApXG4gICAgLngoIGQgPT4gZC54IClcbiAgICAueSggZCA9PiBkLnkgKTtcbiAgXy5yYW5nZSggMjQgKS5tYXAoIGkgPT4ge1xuICAgIGNvbnN0IHMgPSBuZXcgTENlbGwoIF8ucmFuZG9tKCB3aWR0aCApLCBfLnJhbmRvbSggaGVpZ2h0ICksIENlbGxUeXBlcy5CQVNJQyApO1xuICAgIHMuaW5kZXggPSBpO1xuICAgIHMuY29sb3VyID0gZ2V0QyggXy5yYW5kb20oIDEyICksIF8ucmFuZG9tKCA0ICkgKTtcbiAgICBzaXRlcy5wdXNoKCBzICk7XG4gIH0gKTtcbiAgZnJhbWVzU2luY2VTaXRlc0NoYW5nZWQgPSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZHJhdygpIHtcbiAgYmFja2dyb3VuZCggMTU1ICk7XG4gIHZEaWFnID0gdkZ1bmMoIHNpdGVzICk7XG4gIHZEaWFnLnBvbHlnb25zKCkubWFwKCBwZ29uID0+IHtcbiAgICBjb25zdCBjZWxsID0gcGdvbi5kYXRhO1xuICAgIGNlbGwuc2V0UG9seWdvbiA9IHBnb247XG4gICAgc3Ryb2tlV2VpZ2h0KCAyICsgTWF0aC5zaW4oIGZyYW1lQ291bnQgLyAxMDAgKSApO1xuICAgIGNlbGwuZHJhd0Jhc2ljKCB3aW5kb3cgKTtcbiAgICBpZiAoIGZyYW1lc1NpbmNlU2l0ZXNDaGFuZ2VkIDwgMTIgKSB7XG4gICAgICBjZWxsLnNtb290aCgpO1xuICAgIH1cbiAgfSApO1xuICBmcmFtZXNTaW5jZVNpdGVzQ2hhbmdlZCsrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW91c2VQcmVzc2VkKCkge1xuICBzaXRlcy5wdXNoKCBuZXcgTENlbGwoIG1vdXNlWCwgbW91c2VZLCAwICkgKTtcbiAgZnJhbWVzU2luY2VTaXRlc0NoYW5nZWQgPSAwO1xufVxuIiwiLy8gQHRzLWlnbm9yZVxuaW1wb3J0ICogYXMgYnMgZnJvbSAnYi1zcGxpbmUnO1xuaW1wb3J0IHsgcG9seWdvbkNlbnRyb2lkIH0gZnJvbSAnZDMtcG9seWdvbic7XG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgKiBhcyBwbyBmcm9tICdwb2x5Z29uLW9mZnNldCc7XG5pbXBvcnQgQ2VsbFR5cGVzIGZyb20gJy4uL2VudW1zJztcbmltcG9ydCB7IENvbG91ck9iaiwgZ2V0QyB9IGZyb20gJy4uL2xpYi9wYWxsZXRlJztcbi8qKlxuICogQ2xhc3MgRm9yIEluZGl2aWR1YWwgVm9yb25vaSBDZWxsc1xuICogQGF1dGhvciBSdXBlcnRcbiAqXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExDZWxsIHtcbiAgcHVibGljIHg6IG51bWJlcjtcbiAgcHVibGljIHk6IG51bWJlcjtcblxuICAvKiogSW5kZXggaW4gdm9yb25vaSBhcnJheSAqL1xuICBwdWJsaWMgaW5kZXg6IG51bWJlcjtcblxuICBwdWJsaWMgY2VudHJvaWQ6IFtudW1iZXIsIG51bWJlcl07XG5cbiAgcHVibGljIHR5cGU6IENlbGxUeXBlcztcblxuICBwdWJsaWMgY29sb3VyOiBDb2xvdXJPYmo7XG4gIHByb3RlY3RlZCBjbGlwcGVyO1xuICBwcm90ZWN0ZWQgc3BsaW5lcjtcbiAgcHJvdGVjdGVkIHBvbHlnb246IGQzLlZvcm9ub2lQb2x5Z29uPExDZWxsPjtcbiAgcHJvdGVjdGVkIG5laWdoYm91cnM6IExDZWxsW107XG4gIHByb3RlY3RlZCBjbG9zZXN0Q2l0eTogTENlbGw7XG4gIHByb3RlY3RlZCBkaXN0YW5jZVRvQ2l0eTogbnVtYmVyO1xuICBwcm90ZWN0ZWQgY2xpcHBlZFBvbHk6IEFycmF5PFtudW1iZXIsIG51bWJlcl0+O1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIExDZWxsLlxuICAgKiBAcGFyYW0ge251bWJlcn0gWFxuICAgKiBAcGFyYW0ge251bWJlcn0gWVxuICAgKiBAcGFyYW0ge0NlbGxUeXBlc30gW1RZUEU9Q2VsbFR5cGVzLkJBU0lDXSBUeXBlIHRvIHVzZSBmb3IgY2VsbFxuICAgKiBAbWVtYmVyb2YgTENlbGxcbiAgICovXG4gIGNvbnN0cnVjdG9yKCBYOiBudW1iZXIsIFk6IG51bWJlciwgVFlQRTogQ2VsbFR5cGVzID0gQ2VsbFR5cGVzLkJBU0lDICkge1xuICAgIFsgdGhpcy54LCB0aGlzLnksIHRoaXMudHlwZSBdID0gWyBYLCBZLCBUWVBFIF07XG4gICAgdGhpcy5jb2xvdXIgPSBnZXRDKCAwLCA2ICk7XG4gICAgdGhpcy5jbGlwcGVyID0gbmV3IHBvKCk7XG4gICAgdGhpcy5zcGxpbmVyID0gYnM7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhpcyBjZWxsJ3Mgc2l0ZSBmcm9tIGEgdHVwbGVcbiAgICpcbiAgICogQHBhcmFtIHtbbnVtYmVyLCBudW1iZXJdfSBwb3MgbGVuZ3RoIDIgYXJyYXkgdG8gdXNlIGZvciBwb3NpdGlvblxuICAgKiBAbWVtYmVyb2YgTENlbGxcbiAgICovXG4gIHB1YmxpYyBwb3NGcm9tVHVwbGUoIHBvczogW251bWJlciwgbnVtYmVyXSApIHtcbiAgICBbIHRoaXMueCwgdGhpcy55IF0gPSBwb3M7XG4gIH1cblxuICBwdWJsaWMgYWRkTmVpZ2hib3VyKCBuOiBMQ2VsbCApIHtcbiAgICB0aGlzLm5laWdoYm91cnMucHVzaCggbiApO1xuICB9XG5cbiAgcHVibGljIGlzTmVpZ2hib3VyKCBuOiBMQ2VsbCApIHtcbiAgICByZXR1cm4gdGhpcy5uZWlnaGJvdXJzLmluY2x1ZGVzKCBuICk7XG4gIH1cblxuICBnZXQgZ2V0TmVpZ2hib3VycygpIHtcbiAgICByZXR1cm4gdGhpcy5uZWlnaGJvdXJzO1xuICB9XG4gIHNldCBzZXRQb2x5Z29uKCBwb2x5OiBkMy5Wb3Jvbm9pUG9seWdvbjxMQ2VsbD4gKSB7XG4gICAgdGhpcy5wb2x5Z29uID0gcG9seTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3QmFzaWMoIHA6IHA1IHwgV2luZG93ICkge1xuICAgIGlmICggIXRoaXMucG9seWdvbiApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvciggJ25vIHBvbHlnb24gbGlua2VkIHRvIHRoaXMgc2l0ZScgKTtcbiAgICB9XG4gICAgbGV0IGNwb2x5ID0gdGhpcy5jbGlwcGVyXG4gICAgICAuZGF0YSggWyAuLi50aGlzLnBvbHlnb24sIHRoaXMucG9seWdvblswXSBdIClcbiAgICAgIC5wYWRkaW5nKCA2IClbMF07XG4gICAgY3BvbHkgPSBfLnJhbmdlKCAwLCAxMCwgMC4xICkubWFwKCBpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNwbGluZXIoIGkgLyAxMCwgMywgWyAuLi5jcG9seSwgY3BvbHlbMV0sIGNwb2x5WzJdIF0gKTtcbiAgICB9ICk7XG4gICAgaWYgKCBwIGluc3RhbmNlb2YgcDUgKSB7XG4gICAgICBwLmZpbGwoIHRoaXMuY29sb3VyLmhleCApO1xuICAgICAgcC5iZWdpblNoYXBlKCk7XG4gICAgICB0aGlzLnBvbHlnb24ubWFwKCBwdCA9PiBwLnZlcnRleCggcHRbMF0sIHB0WzFdICkgKTtcbiAgICAgIHAuZW5kU2hhcGUoIENMT1NFICk7XG4gICAgfVxuICAgIGlmICggcCBpbnN0YW5jZW9mIFdpbmRvdyApIHtcbiAgICAgIGZpbGwoIHRoaXMuY29sb3VyLmhleCApO1xuICAgICAgYmVnaW5TaGFwZSgpO1xuICAgICAgY3BvbHkubWFwKCBwdCA9PiB2ZXJ0ZXgoIHB0WzBdLCBwdFsxXSApICk7XG4gICAgICBlbmRTaGFwZSgpO1xuICAgIH1cbiAgfVxuICAvKiogUnVucyBMbG95ZCBTbW9vdGhpbmcgb24gdGhpcyBjZWxsICovXG4gIHB1YmxpYyBzbW9vdGgoKSB7XG4gICAgaWYgKCAhdGhpcy5wb2x5Z29uICkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCAnbm8gcG9seWdvbiBmb3VuZCcgKTtcbiAgICB9XG4gICAgdGhpcy5jZW50cm9pZCA9IHBvbHlnb25DZW50cm9pZCggdGhpcy5wb2x5Z29uICk7XG4gICAgdGhpcy5wb3NGcm9tVHVwbGUoIHRoaXMuY2VudHJvaWQgKTtcbiAgfVxufVxuIiwiZW51bSBDZWxsVHlwZXMge1xuICBCQVNJQyxcbiAgUk9BRCxcbiAgQ0lUWSxcbiAgRElTVFJJQ1Rcbn1cbmV4cG9ydCBkZWZhdWx0IENlbGxUeXBlcztcbiIsIi8qdHNsaW50OmRpc2FibGUgb2JqZWN0LWxpdGVyYWwtc29ydC1rZXlzICovXG5cbi8qKlxuICogQ29udGFpbnMgY29sb3VyIGluZm9ybWF0aW9uXG4gKlxuICogQGV4cG9ydFxuICogQGludGVyZmFjZSBDb2xvdXJPYmpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDb2xvdXJPYmoge1xuICByZWQ6IG51bWJlcjtcbiAgYWxwaGE6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBibHVlOiBudW1iZXI7XG4gIGdyZWVuOiBudW1iZXI7XG4gIGhleDogc3RyaW5nO1xufVxuZW51bSBodWVzIHtcbiAgY29vbHMsXG4gIHdhcm1zLFxuICBuZXV0cmFscyxcbiAgcGlua3MsXG4gIHB1cnBsZXMsXG4gIHZpb2xldHMsXG4gIGJsdWVzLFxuICBhcXVhcyxcbiAgZ3JlZW5zLFxuICBsaW1lcyxcbiAgeWVsbG93cyxcbiAgYnJvd25zLFxuICBvcmFuZ2VzLFxuICBhcHJpY290cyxcbiAgcmVkc1xufVxuZW51bSBzaGFkZXMge1xuICBibGFjayxcbiAgZGFyayxcbiAgbWVkaXVtRGFyayxcbiAgbWVkaXVtLFxuICBtZWRpdW1MaWdodCxcbiAgbGlnaHQsXG4gIHdoaXRlXG59XG5jb25zdCBQYWxsZXRlQXJyYXk6IENvbG91ck9ialtdW10gPSBbXG4gIFtcbiAgICB7XG4gICAgICByZWQ6IDAuMjExNzY0NyxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0JpZ1N0b25lJyxcbiAgICAgIGJsdWU6IDAuMjc0NTA5OCxcbiAgICAgIGdyZWVuOiAwLjI1NDkwMixcbiAgICAgIGhleDogJyMzNjQxNDYnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuMjY2NjY2NyxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1JpdmVyQmVkJyxcbiAgICAgIGJsdWU6IDAuMzM3MjU0OSxcbiAgICAgIGdyZWVuOiAwLjMxMzcyNTUsXG4gICAgICBoZXg6ICcjNDQ1MDU2J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjQ2NjY2NjcsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdSZWdlbnRHcmF5JyxcbiAgICAgIGJsdWU6IDAuNTMzMzMzNCxcbiAgICAgIGdyZWVuOiAwLjUxMzcyNTUsXG4gICAgICBoZXg6ICcjNzc4Mzg4J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjY2Mjc0NTEsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdDYXNwZXInLFxuICAgICAgYmx1ZTogMC43Mjk0MTE4LFxuICAgICAgZ3JlZW46IDAuNzA5ODAzOSxcbiAgICAgIGhleDogJyNhOWI1YmEnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuMDcwNTg4MjQsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdNaXJhZ2UnLFxuICAgICAgYmx1ZTogMC4xMzcyNTQ5LFxuICAgICAgZ3JlZW46IDAuMTE3NjQ3MSxcbiAgICAgIGhleDogJyMxMjFlMjMnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuODU4ODIzNSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1RyYW5xdWlsJyxcbiAgICAgIGJsdWU6IDAuOTI1NDkwMixcbiAgICAgIGdyZWVuOiAwLjkwNTg4MjQsXG4gICAgICBoZXg6ICcjZGJlN2VjJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjg5ODAzOTIsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdBcXVhU3F1ZWV6ZScsXG4gICAgICBibHVlOiAwLjk2NDcwNTksXG4gICAgICBncmVlbjogMC45NDUwOTgsXG4gICAgICBoZXg6ICcjZTVmMWY2J1xuICAgIH1cbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHJlZDogMC4xNTI5NDEyLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnT2lsJyxcbiAgICAgIGJsdWU6IDAuMDgyMzUyOTQsXG4gICAgICBncmVlbjogMC4xMTc2NDcxLFxuICAgICAgaGV4OiAnIzI3MWUxNSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC4yOTQxMTc3LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnU3BhY2VTaHV0dGxlJyxcbiAgICAgIGJsdWU6IDAuMjIzNTI5NCxcbiAgICAgIGdyZWVuOiAwLjI2Mjc0NTEsXG4gICAgICBoZXg6ICcjNGI0MzM5J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjM0OTAyLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnTWFzYWxhJyxcbiAgICAgIGJsdWU6IDAuMjgyMzUsXG4gICAgICBncmVlbjogMC4zMTc2NSxcbiAgICAgIGhleDogJyM1OTUxNDgnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuNTQ5MDE5NixcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1NjaG9vbmVyJyxcbiAgICAgIGJsdWU6IDAuNDc0NTA5OCxcbiAgICAgIGdyZWVuOiAwLjUxMzcyNTUsXG4gICAgICBoZXg6ICcjOGM4Mzc5J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjc0NTA5ODEsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdUaWRlJyxcbiAgICAgIGJsdWU6IDAuNjc0NTA5OCxcbiAgICAgIGdyZWVuOiAwLjcwOTgwMzksXG4gICAgICBoZXg6ICcjYmViNWFjJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjk0MTE3NjUsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdEZXNlcnRTdG9ybScsXG4gICAgICBibHVlOiAwLjg3MDU4ODIsXG4gICAgICBncmVlbjogMC45MDk4MDM5LFxuICAgICAgaGV4OiAnI2YwZThkZSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45ODAzOTIyLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnV2hpdGVMaW5lbicsXG4gICAgICBibHVlOiAwLjkwOTgwMzksXG4gICAgICBncmVlbjogMC45NDkwMTk2LFxuICAgICAgaGV4OiAnI2ZhZjJlOCdcbiAgICB9XG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICByZWQ6IDAuMDU4ODIzNTMsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdPbnl4JyxcbiAgICAgIGJsdWU6IDAuMDU4ODIzNTMsXG4gICAgICBncmVlbjogMC4wNTg4MjM1MyxcbiAgICAgIGhleDogJyMwZjBmMGYnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuMjE1Njg2MyxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1R1YXRhcmEnLFxuICAgICAgYmx1ZTogMC4yMTU2ODYzLFxuICAgICAgZ3JlZW46IDAuMjE1Njg2MyxcbiAgICAgIGhleDogJyMzNzM3MzcnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuMjc4NDMxNCxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0NoYXJjb2FsJyxcbiAgICAgIGJsdWU6IDAuMjc4NDMxNCxcbiAgICAgIGdyZWVuOiAwLjI3ODQzMTQsXG4gICAgICBoZXg6ICcjNDc0NzQ3J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjQ5ODAzOTIsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdUaW4nLFxuICAgICAgYmx1ZTogMC40OTgwMzkyLFxuICAgICAgZ3JlZW46IDAuNDk4MDM5MixcbiAgICAgIGhleDogJyM3ZjdmN2YnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuNzE3NjQ3MSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0xvYmxvbGx5JyxcbiAgICAgIGJsdWU6IDAuNzE3NjQ3MSxcbiAgICAgIGdyZWVuOiAwLjcxNzY0NzEsXG4gICAgICBoZXg6ICcjYjdiN2I3J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjkzNzI1NDksXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdHYWxsZXJ5JyxcbiAgICAgIGJsdWU6IDAuOTM3MjU0OSxcbiAgICAgIGdyZWVuOiAwLjkzNzI1NDksXG4gICAgICBoZXg6ICcjZWZlZmVmJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjk4MDM5MjIsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdBbGFiYXN0ZXInLFxuICAgICAgYmx1ZTogMC45ODAzOTIyLFxuICAgICAgZ3JlZW46IDAuOTgwMzkyMixcbiAgICAgIGhleDogJyNmYWZhZmEnXG4gICAgfVxuICBdLFxuICBbXG4gICAge1xuICAgICAgcmVkOiAwLjYzMTM3MjYsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdSb3lhbEhlYXRoJyxcbiAgICAgIGJsdWU6IDAuNTA1ODgyNCxcbiAgICAgIGdyZWVuOiAwLjE5NjA3ODQsXG4gICAgICBoZXg6ICcjYTEzMjgxJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjc0NTA5ODEsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdCeXphbnRpbmUnLFxuICAgICAgYmx1ZTogMC42MDM5MjE2LFxuICAgICAgZ3JlZW46IDAuMjI3NDUxLFxuICAgICAgaGV4OiAnI2JlM2E5YSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC44Mjc0NTEsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdEZWVwRnVjaHNpYScsXG4gICAgICBibHVlOiAwLjY4NjI3NDUsXG4gICAgICBncmVlbjogMC4zMDk4MDM5LFxuICAgICAgaGV4OiAnI2QzNGZhZidcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45MzMzMzMzLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnTmVvbkZ1Y2hzaWEnLFxuICAgICAgYmx1ZTogMC43NTY4NjI4LFxuICAgICAgZ3JlZW46IDAuMjg2Mjc0NSxcbiAgICAgIGhleDogJyNlZTQ5YzEnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuOTQ1MDk4LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnUm9zZVBpbmsnLFxuICAgICAgYmx1ZTogMC44MDM5MjE2LFxuICAgICAgZ3JlZW46IDAuNDI3NDUxLFxuICAgICAgaGV4OiAnI2YxNmRjZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45NzI1NDksXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdDaGFudGlsbHknLFxuICAgICAgYmx1ZTogMC45MDE5NjA4LFxuICAgICAgZ3JlZW46IDAuNzEzNzI1NSxcbiAgICAgIGhleDogJyNmOGI2ZTYnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuOTg4MjM1MyxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1BhbGVSb3NlJyxcbiAgICAgIGJsdWU6IDAuOTYwNzg0MyxcbiAgICAgIGdyZWVuOiAwLjg4NjI3NDUsXG4gICAgICBoZXg6ICcjZmNlMmY1J1xuICAgIH1cbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHJlZDogMC40Mjc0NTEsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdQdXJwbGVIZWFydCcsXG4gICAgICBibHVlOiAwLjYxMTc2NDcsXG4gICAgICBncmVlbjogMC4yMTk2MDc4LFxuICAgICAgaGV4OiAnIzZkMzg5YydcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC41MDU4ODI0LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnU3R1ZGlvJyxcbiAgICAgIGJsdWU6IDAuNzMzMzMzMyxcbiAgICAgIGdyZWVuOiAwLjI1NDkwMixcbiAgICAgIGhleDogJyM4MTQxYmInXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuNTg0MzEzOCxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0FtZXRoeXN0JyxcbiAgICAgIGJsdWU6IDAuODE1Njg2MyxcbiAgICAgIGdyZWVuOiAwLjMzMzMzMzMsXG4gICAgICBoZXg6ICcjOTU1NWQwJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjYzMTM3MjYsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdMYXZlbmRlckluZGlnbycsXG4gICAgICBibHVlOiAwLjkxNzY0NzEsXG4gICAgICBncmVlbjogMC4zMTc2NDcxLFxuICAgICAgaGV4OiAnI2ExNTFlYSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC43MDU4ODI0LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnU29mdFB1cnBsZScsXG4gICAgICBibHVlOiAwLjkzMzMzMzMsXG4gICAgICBncmVlbjogMC40NTQ5MDIsXG4gICAgICBoZXg6ICcjYjQ3NGVlJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjg1MDk4MDQsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdQZXJmdW1lJyxcbiAgICAgIGJsdWU6IDAuOTY4NjI3NSxcbiAgICAgIGdyZWVuOiAwLjcyNTQ5MDIsXG4gICAgICBoZXg6ICcjZDliOWY3J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjk0MTE3NjUsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdCbHVlQ2hhbGsnLFxuICAgICAgYmx1ZTogMC45ODgyMzUzLFxuICAgICAgZ3JlZW46IDAuODkwMTk2MSxcbiAgICAgIGhleDogJyNmMGUzZmMnXG4gICAgfVxuICBdLFxuICBbXG4gICAge1xuICAgICAgcmVkOiAwLjIzOTIxNTcsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdEYXJrU2xhdGVCbHVlJyxcbiAgICAgIGJsdWU6IDAuNTUyOTQxMixcbiAgICAgIGdyZWVuOiAwLjI0NzA1ODgsXG4gICAgICBoZXg6ICcjM2QzZjhkJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjI4MjM1MyxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0dvdmVybm9yQmF5JyxcbiAgICAgIGJsdWU6IDAuNjYyNzQ1MSxcbiAgICAgIGdyZWVuOiAwLjI5MDE5NjEsXG4gICAgICBoZXg6ICcjNDg0YWE5J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjM2MDc4NDMsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdCbHVlVmlvbGV0JyxcbiAgICAgIGJsdWU6IDAuNzQxMTc2NSxcbiAgICAgIGdyZWVuOiAwLjM3MjU0OSxcbiAgICAgIGhleDogJyM1YzVmYmQnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuMzUyOTQxMixcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0lyaXMnLFxuICAgICAgYmx1ZTogMC44Mjc0NTEsXG4gICAgICBncmVlbjogMC4zNjQ3MDU5LFxuICAgICAgaGV4OiAnIzVhNWRkMydcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC40ODIzNTI5LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnQ2hldHdvZGVCbHVlJyxcbiAgICAgIGJsdWU6IDAuODYyNzQ1MSxcbiAgICAgIGdyZWVuOiAwLjQ5MDE5NjEsXG4gICAgICBoZXg6ICcjN2I3ZGRjJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjc0MTE3NjUsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdNZWxyb3NlJyxcbiAgICAgIGJsdWU6IDAuOTI5NDExOCxcbiAgICAgIGdyZWVuOiAwLjc0NTA5ODEsXG4gICAgICBoZXg6ICcjYmRiZWVkJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjg5ODAzOTIsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdMYXZlbmRlcicsXG4gICAgICBibHVlOiAwLjk3MjU0OSxcbiAgICAgIGdyZWVuOiAwLjg5ODAzOTIsXG4gICAgICBoZXg6ICcjZTVlNWY4J1xuICAgIH1cbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHJlZDogMC4xMjk0MTE4LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnQ2FseXBzbycsXG4gICAgICBibHVlOiAwLjU2NDcwNTksXG4gICAgICBncmVlbjogMC40MzUyOTQxLFxuICAgICAgaGV4OiAnIzIxNmY5MCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC4xNDUwOTgsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdBc3RyYWwnLFxuICAgICAgYmx1ZTogMC42NzA1ODgzLFxuICAgICAgZ3JlZW46IDAuNTA5ODA0LFxuICAgICAgaGV4OiAnIzI1ODJhYidcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC4yMjM1Mjk0LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnQm9zdG9uQmx1ZScsXG4gICAgICBibHVlOiAwLjc1Mjk0MTIsXG4gICAgICBncmVlbjogMC41OTIxNTY5LFxuICAgICAgaGV4OiAnIzM5OTdjMCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC4xODAzOTIyLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnQ3VyaW91c0JsdWUnLFxuICAgICAgYmx1ZTogMC44MzkyMTU3LFxuICAgICAgZ3JlZW46IDAuNjM5MjE1NyxcbiAgICAgIGhleDogJyMyZWEzZDYnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuMzQ1MDk4LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnTWFsaWJ1JyxcbiAgICAgIGJsdWU6IDAuODcwNTg4MixcbiAgICAgIGdyZWVuOiAwLjcwOTgwMzksXG4gICAgICBoZXg6ICcjNThiNWRlJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjY3MDU4ODMsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdOb25QaG90b0JsdWUnLFxuICAgICAgYmx1ZTogMC45MzcyNTQ5LFxuICAgICAgZ3JlZW46IDAuODU0OTAyLFxuICAgICAgaGV4OiAnI2FiZGFlZidcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC44NjY2NjY3LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnUGF0dGVuc0JsdWUnLFxuICAgICAgYmx1ZTogMC45NzY0NzA2LFxuICAgICAgZ3JlZW46IDAuOTQxMTc2NSxcbiAgICAgIGhleDogJyNkZGYwZjknXG4gICAgfVxuICBdLFxuICBbXG4gICAge1xuICAgICAgcmVkOiAwLjIwNzg0MzEsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdWaXJpZGlhbicsXG4gICAgICBibHVlOiAwLjQxNTY4NjMsXG4gICAgICBncmVlbjogMC41NDUwOTgxLFxuICAgICAgaGV4OiAnIzM1OGI2YSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC4yMzUyOTQxLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnT2NlYW5HcmVlbicsXG4gICAgICBibHVlOiAwLjQ3ODQzMTQsXG4gICAgICBncmVlbjogMC42MzkyMTU3LFxuICAgICAgaGV4OiAnIzNjYTM3YSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC4zMTM3MjU1LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnTWludCcsXG4gICAgICBibHVlOiAwLjU2MDc4NDMsXG4gICAgICBncmVlbjogMC43MjE1Njg2LFxuICAgICAgaGV4OiAnIzUwYjg4ZidcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC4yOTQxMTc3LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnU2hhbXJvY2snLFxuICAgICAgYmx1ZTogMC42LFxuICAgICAgZ3JlZW46IDAuOCxcbiAgICAgIGhleDogJyM0YmNjOTknXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuNDM1Mjk0MSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ01lZGl1bUFxdWFtYXJpbmUnLFxuICAgICAgYmx1ZTogMC42Nzg0MzE0LFxuICAgICAgZ3JlZW46IDAuODM5MjE1NyxcbiAgICAgIGhleDogJyM2ZmQ2YWQnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuNzE3NjQ3MSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1dhdGVyTGVhZicsXG4gICAgICBibHVlOiAwLjgzOTIxNTcsXG4gICAgICBncmVlbjogMC45MjE1Njg2LFxuICAgICAgaGV4OiAnI2I3ZWJkNidcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC44ODYyNzQ1LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnV2hpdGVJY2UnLFxuICAgICAgYmx1ZTogMC45MzcyNTQ5LFxuICAgICAgZ3JlZW46IDAuOTY4NjI3NSxcbiAgICAgIGhleDogJyNlMmY3ZWYnXG4gICAgfVxuICBdLFxuICBbXG4gICAge1xuICAgICAgcmVkOiAwLjI5NDExNzcsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdIaXBwaWVHcmVlbicsXG4gICAgICBibHVlOiAwLjI5MDE5NjEsXG4gICAgICBncmVlbjogMC41MTc2NDcxLFxuICAgICAgaGV4OiAnIzRiODQ0YSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC4zNDExNzY1LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnRnJ1aXRTYWxhZCcsXG4gICAgICBibHVlOiAwLjMxNzY0NzEsXG4gICAgICBncmVlbjogMC42MDc4NDMyLFxuICAgICAgaGV4OiAnIzU3OWI1MSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC40MjM1Mjk0LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnRmVybicsXG4gICAgICBibHVlOiAwLjM5NjA3ODQsXG4gICAgICBncmVlbjogMC42OTAxOTYxLFxuICAgICAgaGV4OiAnIzZjYjA2NSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC40Mjc0NTEsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdNYW50aXMnLFxuICAgICAgYmx1ZTogMC4zOTYwNzg0LFxuICAgICAgZ3JlZW46IDAuNzYwNzg0MyxcbiAgICAgIGhleDogJyM2ZGMyNjUnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuNTQxMTc2NSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0RlWW9yaycsXG4gICAgICBibHVlOiAwLjUxNzY0NzEsXG4gICAgICBncmVlbjogMC44MDc4NDMxLFxuICAgICAgaGV4OiAnIzhhY2U4NCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC43NzI1NDksXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdHcmFubnlBcHBsZScsXG4gICAgICBibHVlOiAwLjc1Njg2MjgsXG4gICAgICBncmVlbjogMC45MDU4ODI0LFxuICAgICAgaGV4OiAnI2M1ZTdjMSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45MDk4MDM5LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnQXF1YVNwcmluZ0Nvb2wnLFxuICAgICAgYmx1ZTogMC45MDE5NjA4LFxuICAgICAgZ3JlZW46IDAuOTYwNzg0MyxcbiAgICAgIGhleDogJyNlOGY1ZTYnXG4gICAgfVxuICBdLFxuICBbXG4gICAge1xuICAgICAgcmVkOiAwLjQ3MDU4ODIsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdBc3BhcmFndXMnLFxuICAgICAgYmx1ZTogMC4yOTgwMzkyLFxuICAgICAgZ3JlZW46IDAuNTc2NDcwNixcbiAgICAgIGhleDogJyM3ODkzNGMnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuNTUyOTQxMixcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0NoZWxzZWFDdWN1bWJlcicsXG4gICAgICBibHVlOiAwLjMxNzY0NzEsXG4gICAgICBncmVlbjogMC42Nzg0MzE0LFxuICAgICAgaGV4OiAnIzhkYWQ1MSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC42MzEzNzI2LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnT2xpdmluZScsXG4gICAgICBibHVlOiAwLjM5NjA3ODQsXG4gICAgICBncmVlbjogMC43NTY4NjI4LFxuICAgICAgaGV4OiAnI2ExYzE2NSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC42OTAxOTYxLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnQ29uaWZlcicsXG4gICAgICBibHVlOiAwLjM5NjA3ODQsXG4gICAgICBncmVlbjogMC44NDcwNTg4LFxuICAgICAgaGV4OiAnI2IwZDg2NSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC43NTI5NDEyLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnWWVsbG93R3JlZW4nLFxuICAgICAgYmx1ZTogMC41MTc2NDcxLFxuICAgICAgZ3JlZW46IDAuODc4NDMxNCxcbiAgICAgIGhleDogJyNjMGUwODQnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuODc0NTA5OCxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0JlcnlsR3JlZW4nLFxuICAgICAgYmx1ZTogMC43NTY4NjI4LFxuICAgICAgZ3JlZW46IDAuOTM3MjU0OSxcbiAgICAgIGhleDogJyNkZmVmYzEnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuOTA5ODAzOSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0FxdWFTcHJpbmdXYXJtJyxcbiAgICAgIGJsdWU6IDAuOTAxOTYwOCxcbiAgICAgIGdyZWVuOiAwLjk2MDc4NDMsXG4gICAgICBoZXg6ICcjZThmNWU2J1xuICAgIH1cbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHJlZDogMC42MzUyOTQxLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnTXVkZHlXYXRlcnMnLFxuICAgICAgYmx1ZTogMC4yOTAxOTYxLFxuICAgICAgZ3JlZW46IDAuNTUyOTQxMixcbiAgICAgIGhleDogJyNhMjhkNGEnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuNzQ1MDk4MSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1N1bmRhbmNlJyxcbiAgICAgIGJsdWU6IDAuMzA5ODAzOSxcbiAgICAgIGdyZWVuOiAwLjY1MDk4MDQsXG4gICAgICBoZXg6ICcjYmVhNjRmJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjgyNzQ1MSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1RhY2hhJyxcbiAgICAgIGJsdWU6IDAuMzkyMTU2OSxcbiAgICAgIGdyZWVuOiAwLjczMzMzMzMsXG4gICAgICBoZXg6ICcjZDNiYjY0J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjkzMzMzMzMsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdHb2xkZW5TYW5kJyxcbiAgICAgIGJsdWU6IDAuMzg4MjM1MyxcbiAgICAgIGdyZWVuOiAwLjgxNTY4NjMsXG4gICAgICBoZXg6ICcjZWVkMDYzJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjk0NTA5OCxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0J1ZmYnLFxuICAgICAgYmx1ZTogMC41MDk4MDQsXG4gICAgICBncmVlbjogMC44NTA5ODA0LFxuICAgICAgaGV4OiAnI2YxZDk4MidcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45NzI1NDksXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdCbG9uZCcsXG4gICAgICBibHVlOiAwLjc1Njg2MjgsXG4gICAgICBncmVlbjogMC45MjU0OTAyLFxuICAgICAgaGV4OiAnI2Y4ZWNjMSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45ODgyMzUzLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnT2xkTGFjZUdyZWVuJyxcbiAgICAgIGJsdWU6IDAuOTAxOTYwOCxcbiAgICAgIGdyZWVuOiAwLjk2ODYyNzUsXG4gICAgICBoZXg6ICcjZmNmN2U2J1xuICAgIH1cbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHJlZDogMC42NTQ5MDIsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdBbHBpbmUnLFxuICAgICAgYmx1ZTogMC4yNTg4MjM1LFxuICAgICAgZ3JlZW46IDAuNTA1ODgyNCxcbiAgICAgIGhleDogJyNhNzgxNDInXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuNzY4NjI3NSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1R1c3NvY2snLFxuICAgICAgYmx1ZTogMC4yNjY2NjY3LFxuICAgICAgZ3JlZW46IDAuNTk2MDc4NSxcbiAgICAgIGhleDogJyNjNDk4NDQnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuODQ3MDU4OCxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1JvYlJveScsXG4gICAgICBibHVlOiAwLjM0NTA5OCxcbiAgICAgIGdyZWVuOiAwLjY3NDUwOTgsXG4gICAgICBoZXg6ICcjZDhhYzU4J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjk2MDc4NDMsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdTYWZmcm9uTWFuZ28nLFxuICAgICAgYmx1ZTogMC4zMzMzMzMzLFxuICAgICAgZ3JlZW46IDAuNzQ1MDk4MSxcbiAgICAgIGhleDogJyNmNWJlNTUnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuOTY4NjI3NSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0NoYXJkb25uYXknLFxuICAgICAgYmx1ZTogMC40NjY2NjY3LFxuICAgICAgZ3JlZW46IDAuNzk2MDc4NCxcbiAgICAgIGhleDogJyNmN2NiNzcnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuOTg0MzEzNyxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0RhaXJ5Q3JlYW0nLFxuICAgICAgYmx1ZTogMC43MzMzMzMzLFxuICAgICAgZ3JlZW46IDAuODk4MDM5MixcbiAgICAgIGhleDogJyNmYmU1YmInXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuOTkyMTU2OSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ09sZExhY2VZZWxsb3cnLFxuICAgICAgYmx1ZTogMC44OTQxMTc3LFxuICAgICAgZ3JlZW46IDAuOTYwNzg0MyxcbiAgICAgIGhleDogJyNmZGY1ZTQnXG4gICAgfVxuICBdLFxuICBbXG4gICAge1xuICAgICAgcmVkOiAwLjY3MDU4ODMsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdCb3VyYm9uJyxcbiAgICAgIGJsdWU6IDAuMjIzNTI5NCxcbiAgICAgIGdyZWVuOiAwLjQ0NzA1ODgsXG4gICAgICBoZXg6ICcjYWI3MjM5J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjc4ODIzNTMsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdHb2xkZW5CZWxsJyxcbiAgICAgIGJsdWU6IDAuMjIzNTI5NCxcbiAgICAgIGdyZWVuOiAwLjUyNTQ5MDIsXG4gICAgICBoZXg6ICcjYzk4NjM5J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjg2NjY2NjcsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdGaXJlQnVzaCcsXG4gICAgICBibHVlOiAwLjMwMTk2MDgsXG4gICAgICBncmVlbjogMC42MDM5MjE2LFxuICAgICAgaGV4OiAnI2RkOWE0ZCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45ODQzMTM3LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnTmVvbkNhcnJvdCcsXG4gICAgICBibHVlOiAwLjI3ODQzMTQsXG4gICAgICBncmVlbjogMC42NTQ5MDIsXG4gICAgICBoZXg6ICcjZmJhNzQ3J1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjk4ODIzNTMsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdSYWphaCcsXG4gICAgICBibHVlOiAwLjQyMzUyOTQsXG4gICAgICBncmVlbjogMC43MjU0OTAyLFxuICAgICAgaGV4OiAnI2ZjYjk2YydcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45OTIxNTY5LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnU2FuZHlCZWFjaCcsXG4gICAgICBibHVlOiAwLjcwOTgwMzksXG4gICAgICBncmVlbjogMC44NjI3NDUxLFxuICAgICAgaGV4OiAnI2ZkZGNiNSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45OTYwNzg0LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnU2F6ZXJhYycsXG4gICAgICBibHVlOiAwLjg4MjM1MjksXG4gICAgICBncmVlbjogMC45NDUwOTgsXG4gICAgICBoZXg6ICcjZmVmMWUxJ1xuICAgIH1cbiAgXSxcbiAgW1xuICAgIHtcbiAgICAgIHJlZDogMC42NTQ5MDIsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdPcmFuZ2VSb3VnaHknLFxuICAgICAgYmx1ZTogMC4yLFxuICAgICAgZ3JlZW46IDAuMzE3NjQ3MSxcbiAgICAgIGhleDogJyNhNzUxMzMnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuNzc2NDcwNixcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ0Vjc3Rhc3knLFxuICAgICAgYmx1ZTogMC4yMTE3NjQ3LFxuICAgICAgZ3JlZW46IDAuMzY4NjI3NSxcbiAgICAgIGhleDogJyNjNjVlMzYnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuODU0OTAyLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnSmFmZmEnLFxuICAgICAgYmx1ZTogMC4yOTQxMTc3LFxuICAgICAgZ3JlZW46IDAuNDUwOTgwNCxcbiAgICAgIGhleDogJyNkYTczNGInXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuOTY4NjI3NSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ091dHJhZ2VvdXNPcmFuZ2UnLFxuICAgICAgYmx1ZTogMC4yNjY2NjY3LFxuICAgICAgZ3JlZW46IDAuNDYyNzQ1MSxcbiAgICAgIGhleDogJyNmNzc2NDQnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuOTc2NDcwNixcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1NhbG1vbicsXG4gICAgICBibHVlOiAwLjQxMTc2NDcsXG4gICAgICBncmVlbjogMC41Njg2Mjc1LFxuICAgICAgaGV4OiAnI2Y5OTE2OSdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45ODgyMzUzLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnQXByaWNvdCcsXG4gICAgICBibHVlOiAwLjcwNTg4MjQsXG4gICAgICBncmVlbjogMC43ODQzMTM3LFxuICAgICAgaGV4OiAnI2ZjYzhiNCdcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC45OTYwNzg0LFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnQ2hhYmxpcycsXG4gICAgICBibHVlOiAwLjg4MjM1MjksXG4gICAgICBncmVlbjogMC45MTM3MjU1LFxuICAgICAgaGV4OiAnI2ZlZTllMSdcbiAgICB9XG4gIF0sXG4gIFtcbiAgICB7XG4gICAgICByZWQ6IDAuNjQzMTM3MyxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ01pbGFub1JlZCcsXG4gICAgICBibHVlOiAwLjE4NDMxMzcsXG4gICAgICBncmVlbjogMC4xODgyMzUzLFxuICAgICAgaGV4OiAnI2E0MzAyZidcbiAgICB9LFxuICAgIHtcbiAgICAgIHJlZDogMC43NjA3ODQzLFxuICAgICAgYWxwaGE6IDEsXG4gICAgICBuYW1lOiAnTWFob2dhbnknLFxuICAgICAgYmx1ZTogMC4yMDM5MjE2LFxuICAgICAgZ3JlZW46IDAuMjE1Njg2MyxcbiAgICAgIGhleDogJyNjMjM3MzQnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuODM5MjE1NyxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1ZhbGVuY2lhJyxcbiAgICAgIGJsdWU6IDAuMjk4MDM5MixcbiAgICAgIGdyZWVuOiAwLjMxMzcyNTUsXG4gICAgICBoZXg6ICcjZDY1MDRjJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjk0OTAxOTYsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdDYXJtaW5lUGluaycsXG4gICAgICBibHVlOiAwLjI1NDkwMixcbiAgICAgIGdyZWVuOiAwLjI3MDU4ODIsXG4gICAgICBoZXg6ICcjZjI0NTQxJ1xuICAgIH0sXG4gICAge1xuICAgICAgcmVkOiAwLjk2MDc4NDMsXG4gICAgICBhbHBoYTogMSxcbiAgICAgIG5hbWU6ICdQYXN0ZWxSZWQnLFxuICAgICAgYmx1ZTogMC40MDM5MjE2LFxuICAgICAgZ3JlZW46IDAuNDE1Njg2MyxcbiAgICAgIGhleDogJyNmNTZhNjcnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuOTgwMzkyMixcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1N1bmRvd24nLFxuICAgICAgYmx1ZTogMC43MDE5NjA4LFxuICAgICAgZ3JlZW46IDAuNzA5ODAzOSxcbiAgICAgIGhleDogJyNmYWI1YjMnXG4gICAgfSxcbiAgICB7XG4gICAgICByZWQ6IDAuOTkyMTU2OSxcbiAgICAgIGFscGhhOiAxLFxuICAgICAgbmFtZTogJ1BpcHBpbicsXG4gICAgICBibHVlOiAwLjg4MjM1MjksXG4gICAgICBncmVlbjogMC44ODIzNTI5LFxuICAgICAgaGV4OiAnI2ZkZTFlMSdcbiAgICB9XG4gIF1cbl07XG4vKipcbiAqIEdldCBDb2xvdXIgZnJvbSBuYW1lXG4gKiBAcGFyYW0gbmFtZSBjb2xvdXIgbmFtZVxuICogQHJldHVybiBjb2xvdXIgb2JqZWN0LCBnZXQgaGV4IHN0cmluZyB3aXRoIGhleCBwcm9wZXJ0eVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QyggbmFtZTogc3RyaW5nICk6IENvbG91ck9iajtcblxuLyoqXG4gKiBHZXQgQ29sb3VyIGZyYW1lIGh1ZSBuYW1lIGFuZCBzaGFkZSBudW1iZXJcbiAqIEBwYXJhbSBodWUgaHVlIG5hbWVcbiAqIEBwYXJhbSBzaGFkIHNoYWRlIG51bWJlclxuICogQHJldHVybiBjb2xvdXIgb2JqZWN0LCBnZXQgaGV4IHN0cmluZyB3aXRoIGhleCBwcm9wZXJ0eVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QyggaHVlOiBzdHJpbmcsIHNoYWQ6IHNoYWRlcyApOiBDb2xvdXJPYmo7XG4vKipcbiAqIEdldCBDb2xvdXIgZnJhbWUgaHVlIG51bWJlciBhbmQgc2hhZGUgbnVtYmVyXG4gKiBAcGFyYW0gaHVlIGh1ZSBudW1iZXJcbiAqIEBwYXJhbSBzaGFkIHNoYWRlIG51bWJlclxuICogQHJldHVybiBjb2xvdXIgb2JqZWN0LCBnZXQgaGV4IHN0cmluZyB3aXRoIGhleCBwcm9wZXJ0eVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QyggaHVlOiBodWVzLCBzaGFkOiBzaGFkZXMgKTogQ29sb3VyT2JqO1xuLyoqXG4gKiBHZXQgQ29sb3VyIGZyYW1lIGh1ZSBudW1iZXIgYW5kIHNoYWRlIG5hbWVcbiAqIEBwYXJhbSBodWUgaHVlIG51bWJlclxuICogQHBhcmFtIHNoYWQgc2hhZGUgbmFtZVxuICogQHJldHVybiBjb2xvdXIgb2JqZWN0LCBnZXQgaGV4IHN0cmluZyB3aXRoIGhleCBwcm9wZXJ0eVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0QyggaHVlOiBodWVzLCBzaGFkOiBzdHJpbmcgKTogQ29sb3VyT2JqO1xuLyoqXG4gKiBHZXQgQ29sb3VyIGZyYW1lIGh1ZSBuYW1lIGFuZCBzaGFkZSBuYW1lXG4gKiBAcGFyYW0gaHVlIGh1ZSBuYW1lXG4gKiBAcGFyYW0gc2hhZCBzaGFkZSBuYW1lXG4gKiBAcmV0dXJuIGNvbG91ciBvYmplY3QsIGdldCBoZXggc3RyaW5nIHdpdGggaGV4IHByb3BlcnR5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDKCBodWU6IHN0cmluZywgc2hhZDogc3RyaW5nICk6IENvbG91ck9iajtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEMoIGFyZzE6IHN0cmluZyB8IGh1ZXMsIGFyZzI/OiBzdHJpbmcgfCBzaGFkZXMgKTogQ29sb3VyT2JqIHtcbiAgbGV0IGh1ZTtcbiAgbGV0IHNoYWQ7XG4gIGlmICggdHlwZW9mIGFyZzEgPT09ICdzdHJpbmcnICYmIGFyZzIgPT09IG51bGwgKSB7XG4gICAgZm9yICggY29uc3QgdiBvZiBQYWxsZXRlQXJyYXkgKSB7XG4gICAgICBmb3IgKCBjb25zdCBjIG9mIHYgKSB7XG4gICAgICAgIGlmICggYy5uYW1lID09PSBhcmcxICkge1xuICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvciggXCJjYW4ndCBmaW5kIGNvbG91clwiICk7XG4gIH0gZWxzZSBpZiAoIHR5cGVvZiBhcmcxID09PSAnbnVtYmVyJyAmJiBhcmcyID09PSBudWxsICkge1xuICAgIHRocm93IG5ldyBFcnJvciggJ2ludmFsaWQnICk7XG4gIH1cbiAgaWYgKCB0eXBlb2YgYXJnMSA9PT0gJ251bWJlcicgKSB7XG4gICAgaHVlID0gYXJnMTtcbiAgfVxuICBpZiAoIHR5cGVvZiBhcmcyID09PSAnbnVtYmVyJyApIHtcbiAgICBzaGFkID0gYXJnMjtcbiAgfVxuICBpZiAoIHR5cGVvZiBhcmcxID09PSAnc3RyaW5nJyAmJiBhcmcyICE9PSBudWxsICkge1xuICAgIGh1ZSA9IGh1ZXNbYXJnMV07XG4gIH1cbiAgaWYgKCB0eXBlb2YgYXJnMiA9PT0gJ3N0cmluZycgKSB7XG4gICAgc2hhZCA9IHNoYWRlc1thcmcyXTtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBQYWxsZXRlQXJyYXlbaHVlXVtzaGFkXTtcbiAgfSBjYXRjaCAoIGVycm9yICkge1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9