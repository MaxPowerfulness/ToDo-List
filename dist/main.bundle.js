/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../MicroFLF.ttf */ "./MicroFLF.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'micro';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* CSS reset and general rules */\n* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: 'micro', sans-serif, 'Times New Roman', Times, serif;\n    color: rgb(39, 39, 39);\n}\n\nhtml, body {\n    height: 100%;\n    background: var(--rose-quartz);\n}\n\nul {\n    list-style: none;\n}\n\nbutton {\n    background-color: var(--misty-rose);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--brown);\n    padding: 2px 5px;\n}\n\nbutton:hover,\n.nav-filters li:hover,\n.new-project:hover,\ntbody:hover,\n.new-task,\n.task-icon:hover {\n    cursor: grab;\n}\n\n/* Custom variables */\n:root {\n    --section-space: 15px;\n    --small-spacing: 10px;\n    --med-spacing: 25px;\n    --large-spacing: 40px;\n    --border-radius: 10px;\n    --misty-rose: #ffdbda;\n    --grey: #9da3a4;\n    --french-grey: #D5C5C8;\n    --lighter-french: #E5DCDD;\n    --pink: #DB7F8E;\n    --rose-quartz: #C3ACAC;\n    --brown: #604D53;\n    --light-brown: rgb(96, 77, 83, 0.7);\n}\n\n/* Header */\nheader {\n    display: flex;\n    align-items: center;\n    background-color: var(--pink);\n    height: 10%;\n    border-bottom: 2px solid rgba(0,0,0,0.7);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n\nheader img {\n    width: 60px;\n    height: 60px;\n    margin-left: var(--med-spacing);\n}\n\n/* Nav Bar */\nnav {\n    position: fixed;\n    background-color: var(--french-grey);\n    width: 16.5%;\n    height: 90vh;\n    border-right: 2px solid rgba(0,0,0,0.7);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n    padding: var(--small-spacing);\n}\n\n.nav-filters {\n    padding: var(--med-spacing) 0px var(--med-spacing) var(--section-space);\n}\n\n.nav-filters li {\n    margin-bottom: var(--section-space);\n    background-color: var(--rose-quartz);\n    padding: var(--small-spacing);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--brown);\n    transition: background-color 0.2s linear, border-color 0.2s linear;\n}\n\n.project-header {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px black solid;\n    padding: 0px var(--section-space) 0px var(--section-space);\n}\n\n\n#projectTable {\n    border-collapse: separate;\n    display: block;\n    border-spacing: 0 10px;\n    padding: 0px 0px var(--med-spacing) var(--section-space);\n    height: 400px;\n    overflow: auto;\n}\n\ntbody {\n    background-color: var(--rose-quartz);\n    transition: background-color 0.2s linear;\n}\n\n#projectTable tbody > tr > td {\n    transition: border-color 0.2s linear;\n    padding: 5px;\n}\n\n#projectTable tbody:hover > tr > td {\n    border-color: aqua;\n}\n\n#projectTable td {\n    border-top: 1px solid var(--brown);\n    border-bottom: 1px solid var(--brown);\n}\n\n#projectTable td:first-child {\n    border-left: 1px solid var(--brown);\n    border-top-left-radius: var(--border-radius); \n    border-bottom-left-radius: var(--border-radius); \n    width: 65%;\n}\n\n#projectTable td:last-child {\n    border-right: 1px solid var(--brown);\n    border-bottom-right-radius: var(--border-radius); \n    border-top-right-radius: var(--border-radius);\n}\n\n/* Main */\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 83.5%;\n    margin-left: 15%;\n}\n\nmain h1 {\n    padding-top: var(--section-space);\n}\n\n.task-bar{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: var(--section-space);\n    border-bottom: 1px grey solid;\n    width: 70%;\n}\n\n.new-task {\n    display: none;\n}\n\n#taskTable {\n    width: 70%;\n    padding-top: 5px;\n}\n\n\n#taskTable td {\n    padding: 5px;\n}\n\n#taskTable td:not(:first-child) {\n    width: 40px;\n    height: 40px;\n}\n\n/* Forms and Task View */\n@keyframes popup {\n    from {\n        transform: scale(0);\n    }\n    to {\n        transform: scale(1.5);\n    }\n}\n\n.form-container {\n    display: none;\n}\n\n#taskItemFormContainer,\n#projectFormContainer {\n    position: fixed;\n    top: 30%;\n    border: 2px solid var(--brown);\n    animation-name: popup;\n    animation-duration: 0.5s;\n    transform: scale(1.5);\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    background-color: var(--pink);\n    padding: var(--small-spacing);\n    border-radius: var(--border-radius);\n}\n\n#taskItemFormContainer {\n    z-index: 2;\n    width: 20%;\n    margin-left: -10%;  \n    left: 50%;\n}\n\n#projectFormContainer {\n    z-index: 3;\n    width: 15%;\n    margin-left: -7.5%;  \n    left: 50%;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: var(--section-space);\n}\n\ninput[type=text] {\n    padding-left: 2px;\n}\n\nlabel textarea {\n    vertical-align: middle;\n}\n\n\n.view-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--med-spacing); \n    padding: var(--med-spacing) var(--section-space) var(--section-space) var(--section-space);\n    position: fixed;\n    left: 50%;\n    top: 30%;\n    margin-left: -7.5%;   \n    width: 350px;\n    height: 400px;\n    z-index: 2;\n    background-color: var(--pink);\n    border: 3px solid var(--brown);\n    border-radius: var(--border-radius);\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.task-item {\n    width: 200px;\n}\n\n.task-label {\n    width: 100px;\n}\n\n.task-info-container {\n    display: flex;\n    height: 50px;\n    gap: var(--large-spacing);\n    padding-bottom: var(--section-space);\n    border-bottom: 1px solid var(--light-brown);\n}\n\n.task-info-container textarea {\n    height: 42px;\n    width: 160px;\n}\n\n.view-container button {\n    width: 15%;\n    align-self: flex-end;\n}\n\n.description {\n    height: 70px;\n}\n\n.description .task-item {\n    overflow-y: scroll;\n    font-size: 12px;\n    height: 60px;\n}\n\n.overlay {\n    display: block;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%;\n    background: rgba(255, 255, 255, 0.8);\n    z-index: 1;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'micro';\n    src: url('../MicroFLF.ttf');\n}\n\n/* CSS reset and general rules */\n* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: 'micro', sans-serif, 'Times New Roman', Times, serif;\n    color: rgb(39, 39, 39);\n}\n\nhtml, body {\n    height: 100%;\n    background: var(--rose-quartz);\n}\n\nul {\n    list-style: none;\n}\n\nbutton {\n    background-color: var(--misty-rose);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--brown);\n    padding: 2px 5px;\n}\n\nbutton:hover,\n.nav-filters li:hover,\n.new-project:hover,\ntbody:hover,\n.new-task,\n.task-icon:hover {\n    cursor: grab;\n}\n\n/* Custom variables */\n:root {\n    --section-space: 15px;\n    --small-spacing: 10px;\n    --med-spacing: 25px;\n    --large-spacing: 40px;\n    --border-radius: 10px;\n    --misty-rose: #ffdbda;\n    --grey: #9da3a4;\n    --french-grey: #D5C5C8;\n    --lighter-french: #E5DCDD;\n    --pink: #DB7F8E;\n    --rose-quartz: #C3ACAC;\n    --brown: #604D53;\n    --light-brown: rgb(96, 77, 83, 0.7);\n}\n\n/* Header */\nheader {\n    display: flex;\n    align-items: center;\n    background-color: var(--pink);\n    height: 10%;\n    border-bottom: 2px solid rgba(0,0,0,0.7);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n}\n\nheader img {\n    width: 60px;\n    height: 60px;\n    margin-left: var(--med-spacing);\n}\n\n/* Nav Bar */\nnav {\n    position: fixed;\n    background-color: var(--french-grey);\n    width: 16.5%;\n    height: 90vh;\n    border-right: 2px solid rgba(0,0,0,0.7);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n    padding: var(--small-spacing);\n}\n\n.nav-filters {\n    padding: var(--med-spacing) 0px var(--med-spacing) var(--section-space);\n}\n\n.nav-filters li {\n    margin-bottom: var(--section-space);\n    background-color: var(--rose-quartz);\n    padding: var(--small-spacing);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--brown);\n    transition: background-color 0.2s linear, border-color 0.2s linear;\n}\n\n.project-header {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px black solid;\n    padding: 0px var(--section-space) 0px var(--section-space);\n}\n\n\n#projectTable {\n    border-collapse: separate;\n    display: block;\n    border-spacing: 0 10px;\n    padding: 0px 0px var(--med-spacing) var(--section-space);\n    height: 400px;\n    overflow: auto;\n}\n\ntbody {\n    background-color: var(--rose-quartz);\n    transition: background-color 0.2s linear;\n}\n\n#projectTable tbody > tr > td {\n    transition: border-color 0.2s linear;\n    padding: 5px;\n}\n\n#projectTable tbody:hover > tr > td {\n    border-color: aqua;\n}\n\n#projectTable td {\n    border-top: 1px solid var(--brown);\n    border-bottom: 1px solid var(--brown);\n}\n\n#projectTable td:first-child {\n    border-left: 1px solid var(--brown);\n    border-top-left-radius: var(--border-radius); \n    border-bottom-left-radius: var(--border-radius); \n    width: 65%;\n}\n\n#projectTable td:last-child {\n    border-right: 1px solid var(--brown);\n    border-bottom-right-radius: var(--border-radius); \n    border-top-right-radius: var(--border-radius);\n}\n\n/* Main */\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 83.5%;\n    margin-left: 15%;\n}\n\nmain h1 {\n    padding-top: var(--section-space);\n}\n\n.task-bar{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: var(--section-space);\n    border-bottom: 1px grey solid;\n    width: 70%;\n}\n\n.new-task {\n    display: none;\n}\n\n#taskTable {\n    width: 70%;\n    padding-top: 5px;\n}\n\n\n#taskTable td {\n    padding: 5px;\n}\n\n#taskTable td:not(:first-child) {\n    width: 40px;\n    height: 40px;\n}\n\n/* Forms and Task View */\n@keyframes popup {\n    from {\n        transform: scale(0);\n    }\n    to {\n        transform: scale(1.5);\n    }\n}\n\n.form-container {\n    display: none;\n}\n\n#taskItemFormContainer,\n#projectFormContainer {\n    position: fixed;\n    top: 30%;\n    border: 2px solid var(--brown);\n    animation-name: popup;\n    animation-duration: 0.5s;\n    transform: scale(1.5);\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    background-color: var(--pink);\n    padding: var(--small-spacing);\n    border-radius: var(--border-radius);\n}\n\n#taskItemFormContainer {\n    z-index: 2;\n    width: 20%;\n    margin-left: -10%;  \n    left: 50%;\n}\n\n#projectFormContainer {\n    z-index: 3;\n    width: 15%;\n    margin-left: -7.5%;  \n    left: 50%;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: var(--section-space);\n}\n\ninput[type=text] {\n    padding-left: 2px;\n}\n\nlabel textarea {\n    vertical-align: middle;\n}\n\n\n.view-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--med-spacing); \n    padding: var(--med-spacing) var(--section-space) var(--section-space) var(--section-space);\n    position: fixed;\n    left: 50%;\n    top: 30%;\n    margin-left: -7.5%;   \n    width: 350px;\n    height: 400px;\n    z-index: 2;\n    background-color: var(--pink);\n    border: 3px solid var(--brown);\n    border-radius: var(--border-radius);\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.task-item {\n    width: 200px;\n}\n\n.task-label {\n    width: 100px;\n}\n\n.task-info-container {\n    display: flex;\n    height: 50px;\n    gap: var(--large-spacing);\n    padding-bottom: var(--section-space);\n    border-bottom: 1px solid var(--light-brown);\n}\n\n.task-info-container textarea {\n    height: 42px;\n    width: 160px;\n}\n\n.view-container button {\n    width: 15%;\n    align-self: flex-end;\n}\n\n.description {\n    height: 70px;\n}\n\n.description .task-item {\n    overflow-y: scroll;\n    font-size: 12px;\n    height: 60px;\n}\n\n.overlay {\n    display: block;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%;\n    background: rgba(255, 255, 255, 0.8);\n    z-index: 1;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayAllTasks": () => (/* binding */ displayAllTasks)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_items_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-items.js */ "./src/task-items.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _task_sort_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-sort.js */ "./src/task-sort.js");





//Global Varibales
const newTask = document.querySelector('.new-task');
const newProject = document.querySelector('.new-project');
const taskFormContainer = document.getElementById('taskItemFormContainer');
const projectFormContainer = document.getElementById('projectFormContainer');
const taskItemForm = document.getElementById('taskItemForm');
const projectForm = document.getElementById('projectForm');
const taskCancelBtn = document.querySelector('.task-cancel');
const projectCancelBtn = document.querySelector('.project-cancel');
const overlay = document.getElementById('backdrop');
const projectHeader = document.querySelector('.project-name');
const all = document.querySelector('.all');
const today = document.querySelector('.today');
const thisWeek = document.querySelector('.week');
const thisMonth = document.querySelector('.month');
const priorityView = document.querySelector('.priority');
const taskFilters = document.querySelectorAll('.nav-filters li');


// Task view Event Listeners
// Filter tasks based on due date or priority

all.addEventListener('click', () => {
    taskFilters.forEach(filter => {
        filter.style.backgroundColor = '#C3ACAC';
        filter.style.borderColor = '#604D53';
    });
    newTask.style.display = 'none';
    document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
    document.querySelectorAll('tbody td').forEach(project => project.style.cssText = "border-color: #604D53;");
    displayAllTasks();
});

today.addEventListener('click', () => {
    taskFilters.forEach(filter => {
        filter.style.backgroundColor = '#C3ACAC';
        filter.style.borderColor = '#604D53';
    });
    newTask.style.display = 'none';
    today.style.backgroundColor = '#DB7F8E'
    today.style.borderColor = '#ffdbda';
    document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
    document.querySelectorAll('tbody td').forEach(project => project.style.cssText = "border-color: #604D53;");
    const allTasks = createMergedTaskList();
    document.getElementById('taskTable').innerHTML = '';
    (0,_task_sort_js__WEBPACK_IMPORTED_MODULE_3__.displayTodayTasks)(allTasks).forEach(task => (0,_task_items_js__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(task.title, task.description, task.date, task.time, task.priority));
    projectHeader.textContent = "Today";
});

thisWeek.addEventListener('click', () => {
    taskFilters.forEach(filter => {
        filter.style.backgroundColor = '#C3ACAC';
        filter.style.borderColor = '#604D53';
    });
    newTask.style.display = 'none';
    thisWeek.style.backgroundColor = '#DB7F8E';
    thisWeek.style.borderColor = '#ffdbda';
    document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
    document.querySelectorAll('tbody td').forEach(project => project.style.cssText = "border-color: #604D53;");
    const allTasks = createMergedTaskList();
    document.getElementById('taskTable').innerHTML = '';
    (0,_task_sort_js__WEBPACK_IMPORTED_MODULE_3__.displayWeekTasks)(allTasks).forEach(task => (0,_task_items_js__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(task.title, task.description, task.date, task.time, task.priority));
    projectHeader.textContent = "This Week";
});

thisMonth.addEventListener('click', () => {
    taskFilters.forEach(filter => {
        filter.style.backgroundColor = '#C3ACAC';
        filter.style.borderColor = '#604D53';
    });
    newTask.style.display = 'none';
    thisMonth.style.backgroundColor = '#DB7F8E';
    thisMonth.style.borderColor = '#ffdbda';
    document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
    document.querySelectorAll('tbody td').forEach(project => project.style.cssText = "border-color: #604D53;");
    const allTasks = createMergedTaskList();
    document.getElementById('taskTable').innerHTML = '';
    (0,_task_sort_js__WEBPACK_IMPORTED_MODULE_3__.displayMonthTasks)(allTasks).forEach(task => (0,_task_items_js__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(task.title, task.description, task.date, task.time, task.priority));
    projectHeader.textContent = "This Month";
});

priorityView.addEventListener('click', () => {
    taskFilters.forEach(filter => {
        filter.style.backgroundColor = '#C3ACAC';
        filter.style.borderColor = '#604D53';
    });
    newTask.style.display = 'none';
    priorityView.style.backgroundColor = '#DB7F8E';
    priorityView.style.borderColor = '#ffdbda';
    document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
    document.querySelectorAll('tbody td').forEach(project => project.style.cssText = "border-color: #604D53;");
    const allTasks = createMergedTaskList();
    (0,_task_sort_js__WEBPACK_IMPORTED_MODULE_3__.sortAllTasksByDate)(allTasks);
    document.getElementById('taskTable').innerHTML = '';
    (0,_task_sort_js__WEBPACK_IMPORTED_MODULE_3__.displayByPriority)(allTasks).forEach(task => (0,_task_items_js__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(task.title, task.description, task.date, task.time, task.priority));
    projectHeader.textContent = "Priority";
});


// Task table Event Listeners

// Opens new task form when new task button is selected
newTask.addEventListener('click', () => {
    taskFormContainer.style.display = 'block';
    overlay.classList.toggle('overlay');
});

// Closes task form when cancel is clicked
taskCancelBtn.addEventListener('click', () => {
    taskFormContainer.style.display = 'none';
    overlay.classList.toggle('overlay');
});

// Creates a new row (task item) in the task table and adds functionality to task buttons on form submit
taskItemForm.addEventListener('submit', (event) => {
    event.preventDefault();
    taskFormContainer.style.display = 'none';
    (0,_task_items_js__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('date').value, document.getElementById('time').value, document.getElementById('priority').value);
    document.querySelectorAll('tbody').forEach(project => {
        if (project.style.backgroundColor == "rgb(219, 127, 142)") { // Selects the currently highlighted project (key) and saves the task to it as an object in an array (value)
            let storedProject = JSON.parse(localStorage.getItem(`${project.firstElementChild.firstElementChild.textContent}`));
            let task = {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                date: document.getElementById('date').value,
                time: document.getElementById('time').value,
                priority: document.getElementById('priority').value
            };
            storedProject.push(task);
            localStorage.setItem(`${project.firstElementChild.firstElementChild.textContent}`, JSON.stringify(storedProject));
        };
    });
    [document.getElementById('title'), document.getElementById('description'), document.getElementById('date'), document.getElementById('time'), document.getElementById('priority')].forEach(input => input.value = ""); // Clears form on submit
    overlay.classList.toggle('overlay');
});


// Project Event Listeners

// Opens new project form when new task button is selected
newProject.addEventListener('click', () => {
    overlay.classList.toggle('overlay');
    projectFormContainer.style.display = 'block';
});

// Closes project form when cancel is clicked
projectCancelBtn.addEventListener('click', () => {
    projectFormContainer.style.display = 'none';
    overlay.classList.toggle('overlay');
});

projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    projectFormContainer.style.display = 'none';
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectFactory)(document.getElementById('projectName').value);
    document.getElementById('projectName').value = "";
    overlay.classList.toggle('overlay');
});

// Removes overlay from card view and removes card from DOM
overlay.addEventListener('click', () => {
    overlay.classList.toggle('overlay');
    taskFormContainer.style.display = 'none';
    projectFormContainer.style.display = 'none';
    document.body.removeChild(document.querySelector('.view-container'));
})


// Functions

// Creates a default task to give users an example
function initialize() {
    ;(0,_task_items_js__WEBPACK_IMPORTED_MODULE_1__.taskFactory)('Test Task', 'Test Description', '11-11-11', '11:00 AM', 'High');
    const projectsFromLocal = Object.keys(localStorage);
    projectsFromLocal.forEach(project => (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectFactory)(project, 'init')); // Grabs all projects saved in local storage and loads them in the project sidebar
};

// Displays all the tasks saved in the local storage and displays them on the dashboard
function displayAllTasks() {
    const allTasks = createMergedTaskList()
    ;(0,_task_sort_js__WEBPACK_IMPORTED_MODULE_3__.sortAllTasksByDate)(allTasks);
    document.getElementById('taskTable').innerHTML = '';
    all.style.backgroundColor = '#DB7F8E';
    all.style.borderColor = '#ffdbda';
    allTasks.forEach(task => (0,_task_items_js__WEBPACK_IMPORTED_MODULE_1__.taskFactory)(task.title, task.description, task.date, task.time, task.priority));
    projectHeader.textContent = "All";
};

// Creates a list of all tasks saved in the local storage and returns it
function createMergedTaskList() {
    const tasksFromLocal = Object.values(localStorage);
    let tasks = [];
    for (let i = 0; i < tasksFromLocal.length; i++) {
        tasks = tasks.concat(JSON.parse(tasksFromLocal[i]));
    };
    const mergedTasks = tasks.flat(1);

    return mergedTasks;
}

initialize();



/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory)
/* harmony export */ });
/* harmony import */ var _task_items_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-items.js */ "./src/task-items.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./src/index.js");



//Global variables
const taskFilters = document.querySelectorAll('.nav-filters li');
const newTask = document.querySelector('.new-task');

const projectFactory = (name, init) => {
// Saving project to local storage
if (!init) { // Prevents local storage from being overridden when called upon page refresh to load project side table
    localStorage.setItem(`${name}`, JSON.stringify([]));
};
// Adding project to table

    const table = document.getElementById('projectTable');
    const projectHeader = document.querySelector('.project-name');
    const newBody = document.createElement('tbody');
    const newRow = document.createElement('tr');
    const projectName = document.createElement('td');

    projectHeader.textContent = name;
    projectName.textContent = name;
    newBody.appendChild(newRow);
    newRow.appendChild(projectName);

    // Creates project specific functions and adds functionality (edit name and remove)
    const addProjectOptions = () => {
        let projectOptions = ['./images/edit.svg', './images/icons8-trash-30.png'];
        let iconNames = [`edit`, `trash`];

        for (let i = 0; i < 2; i++) {
            const newCell = document.createElement('td');
            const img = document.createElement('img');
            img.src = projectOptions[i];
            if (iconNames[i] === 'edit') {
                newCell.addEventListener('click', () => editProjectName());
            } else {
                newCell.addEventListener('click', () => {
                    removeProject();
                    if (document.querySelectorAll('tbody').length === 0) { // Defaults to display all tasks if no projects are present
                        (0,_index_js__WEBPACK_IMPORTED_MODULE_1__.displayAllTasks)();
                        newTask.style.display = 'none';
                    } else { // Selects the next project in the table if current project is deleted
                        document.querySelectorAll('tbody')[0].style.backgroundColor = "#DB7F8E";
                        document.querySelectorAll('tbody')[0].querySelectorAll('td').forEach(cell => cell.style.borderColor = "#ffdbda");
                        projectHeader.textContent = document.querySelectorAll('tbody')[0].querySelector('tr > td').textContent;
                        displayTask(document.querySelectorAll('tbody')[0].textContent);
                    };
                });
            };
            newCell.appendChild(img);
            newRow.appendChild(newCell);
        };
    };
    addProjectOptions();
    selectProject();
    displayTask(name);
    table.insertBefore(newBody, table.firstElementChild);
    

// Methods

    // Clears the task table and loads in project specific tasks
    function displayTask(name) {
        let taskArray = JSON.parse(localStorage.getItem(name));
        document.getElementById('taskTable').innerHTML = '';
        taskArray.forEach(task => (0,_task_items_js__WEBPACK_IMPORTED_MODULE_0__.taskFactory)(task.title, task.description, task.date, task.time, task.priority));
    };

    // Allows the user to change the current name of the project once it has been created
    function editProjectName() {
        // Replaces element with input element and adds a save button used to push the name change
        const editableName = document.createElement('input');
        const saveName = document.createElement('button');
        saveName.textContent = 'Save';
        projectName.replaceWith(editableName);
        editableName.parentNode.insertBefore(saveName, editableName.nextSibling)

        saveName.addEventListener('click', () => {
            projectName.textContent = editableName.value;
            document.querySelector('.project-name').textContent = editableName.value
            editableName.replaceWith(projectName);
            saveName.parentNode.removeChild(saveName);
            changeKeyName(editableName.value);
        });
    };

    // Removes the project from the project table and in local storage
    function removeProject() {
        table.removeChild(newBody);
        localStorage.removeItem(`${name}`); // Removes project from local storage
    };

    // Changes the name of the project in local storage
    function changeKeyName(newName) {
        let projectTasks = JSON.parse(localStorage.getItem(`${name}`));
        localStorage.setItem(`${newName}`, JSON.stringify(projectTasks));
        localStorage.removeItem(`${name}`);
        name = newName;
    };

    // Highlights the project on the project table and changes the project name header
    function selectProject() {
        document.querySelectorAll('tbody').forEach(project => project.style.cssText = "background-color: #C3ACAC;");
        newBody.style.cssText = "background-color: #DB7F8E;"
        newTask.style.display = 'block';
        document.querySelectorAll('td').forEach(cell => cell.style.borderColor = "#604D53");
        newBody.querySelectorAll('td').forEach(cell => cell.style.borderColor = "#ffdbda");
        projectHeader.textContent = name;
    }

// Event Listeners

    // Changes background color of row to indicate which project is being selected and displays the project's tasks
    projectName.addEventListener('click', () => {
        taskFilters.forEach(filter => {
            filter.style.backgroundColor = '#C3ACAC';
            filter.style.borderColor = '#604D53';
        });
        selectProject();
        displayTask(name);
    });

    return {editProjectName};
};





/***/ }),

/***/ "./src/task-items.js":
/*!***************************!*\
  !*** ./src/task-items.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskFactory": () => (/* binding */ taskFactory)
/* harmony export */ });
// Globabl varibales
const overlay = document.getElementById('backdrop');
const taskLabels = ['Title:', 'Description:', 'Date:', 'Time:', 'Priority:'];

// Factory function usesd to create and append new tasks to the task table. 
const taskFactory = (title, description, dueDate, dueTime, priority) => {
    const table = document.getElementById('taskTable');
    const newRow = document.createElement('tr');
    const taskInfo = document.createElement('td');
    taskInfo.innerHTML = `${title} <br> ${dueTime} ${dueDate}`;

// Adding task to table

    // Sets border color to indiciate priority level of a task item
    switch (priority) {
        case 'High':
            taskInfo.style.cssText = 'border-left: 3px solid #e62a00;';
            break
        case 'Medium':
            taskInfo.style.cssText = 'border-left: 3px solid #ffaf00;';
            break
        case 'Low':
            taskInfo.style.cssText = 'border-left: 3px solid #00e62a;';
            break
    };

    // Adds icons/features present in all task items
    const addTaskOptions = () => {
        let taskOptions = ['./images/edit.svg', './images/icons8-trash-30.png', './images/icons8-eye-30.png'];
        let iconNames = ['edit', 'trash', 'view'];
        for (let i = 0; i <= 2; i++) { // Adds event listeners for icon function specific to the task
            const newCell = document.createElement('td');
            const img = document.createElement('img');
            img.classList.add('task-icon');
            img.src=taskOptions[i];
            if (iconNames[i] === 'edit') {
                img.addEventListener('click', (event) => {
                    viewTask(title, description, dueDate, dueTime, priority, event);
                    overlay.classList.toggle('overlay');
                });
            } else if (iconNames[i] === 'trash') {
                img.addEventListener('click', () => deleteTableRow());
            } else {
                img.addEventListener('click', () => {
                    viewTask(title, description, dueDate, dueTime, priority);
                    overlay.classList.toggle('overlay');
                });
            };
            newCell.appendChild(img);
            newRow.appendChild(newCell);
        };
    };
    
    newRow.appendChild(taskInfo);
    addTaskOptions();
    table.appendChild(newRow);

// Methods

    // Allows user to view the task information in a card format.
    function viewTask(title, description, dueDate, dueTime, priority, event) {
        const viewContainer = document.createElement('div');
        viewContainer.classList.add('view-container');
        const taskName = document.createElement('p');
        const taskDescription = document.createElement('p');
        const taskDueDate = document.createElement('p');
        const taskDueTime = document.createElement('p');
        const taskPriority = document.createElement('p');
        const closeBtn = document.createElement('button'); 

        let taskItems = [taskName, taskDescription, taskDueDate, taskDueTime, taskPriority, closeBtn]; // List for appending task elements into viewContainer
        taskItems.forEach(task => task.classList.add('task-item'));

        taskName.textContent = title;
        taskDescription.textContent = description;
        taskDueDate.textContent = dueDate;
        taskDueTime.textContent = dueTime;
        taskPriority.textContent = priority;
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', () => {
            viewContainer.style.display = 'none';
            overlay.classList.toggle('overlay');
        });
        
        const editables = editTask(taskName, taskItems); // List of editable input elements corresponding to each task component

        for (let i = 0; i < taskItems.length; i++) {
            const taskInfoContainer = document.createElement('div');
            taskInfoContainer.classList.add('task-info-container');
            if (taskItems[i] === taskDescription) {
                taskInfoContainer.classList.add('description');
            };

            const taskLabel = document.createElement('p');
            taskLabel.classList.add('task-label');
            taskLabel.textContent = taskLabels[i];
            
            if (event) {
                taskInfoContainer.append(taskLabel, editables[i]);
            } else {
                taskInfoContainer.append(taskLabel, taskItems[i]);
            }
            viewContainer.appendChild(taskInfoContainer);
        };
        document.body.insertBefore(viewContainer, document.getElementById('backdrop'));
    };

    // Allows users to edit task information once they are already created. Takes in the name of the task being edited and a list of each task component and returns a list of editable input elements for each task component
    function editTask(taskName, taskItemList) {
        // Creates select element that is avialable when user wants to edit priority level from card view
        let priorityLevel = ['High', 'Medium', 'Low'];
        const editablePriority = document.createElement('select');
        for (let i = 0; i < 3; i++) {
            const option = document.createElement('option');
            option.setAttribute('value', priorityLevel[i]);
            option.textContent = priorityLevel[i];
            editablePriority.appendChild(option);
        }

        // Creates new input elements that users can enter information to edit task information
        const editableName = document.createElement('input');
        editableName.setAttribute('value', title);
        const editableDescription = document.createElement('textArea');
        editableDescription.value = `${description}`;
        const editableDueDate = document.createElement('input');
        editableDueDate.setAttribute('value', dueDate);
        editableDueDate.setAttribute('type', 'date');
        const editableDueTime = document.createElement('input');
        editableDueTime.setAttribute('value', dueTime);
        editableDueTime.setAttribute('type', 'time');
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save';
        
        let editableList = [editableName, editableDescription, editableDueDate, editableDueTime, editablePriority, saveBtn]; // For appending editable elements into view card
        
        // Saves changes
        saveBtn.addEventListener('click', () => {
            // Updates local storage
            document.querySelectorAll('tbody').forEach(project => { // Looks for project in storage
                if (project.style.backgroundColor == "#DB7F8E") {
                    let storedProject = JSON.parse(localStorage.getItem(`${project.firstElementChild.firstElementChild.textContent}`));
                    storedProject.forEach(task => {
                        if (task.title == taskName.textContent) { // Iterates through the task and updates each property
                            for (let i = 0; i < Object.keys(task).length; i++) {
                                if (Object.keys(task)[i] == 'title') {
                                    task.title = editableName.value;
                                } else if (Object.keys(task)[i] == 'description') {
                                    task.description = editableDescription.value;
                                } else if (Object.keys(task)[i] == 'date') {
                                    task.date = editableDueDate.value;
                                } else if (Object.keys(task)[i] == 'time') {
                                    task.time = editableDueTime.value;
                                } else if (Object.keys(task)[i] == 'priority') {
                                    task.priority = editablePriority.value;
                                };
                            };
                        };
                    });

                    localStorage.setItem(`${project.firstElementChild.firstElementChild.textContent}`, JSON.stringify(storedProject)); // Saves changes in local storages
                    
                    document.getElementById('taskTable').innerHTML = '';  // Clears and updates task table to reflect changes
                    storedProject.forEach(task => taskFactory(task.title, task.description, task.date, task.time, task.priority));
                    taskItemList.forEach((task, index) => task.textContent = `${editableList[index].value}`);
                    
                };
            });
            // Closes task view
            overlay.classList.toggle('overlay');
            document.body.removeChild(document.querySelector('.view-container'));
        });

        return editableList
    };

    // Removes a row from table
    function deleteTableRow() {
        table.removeChild(newRow);
        document.querySelectorAll('tbody').forEach(project => { // Removes task from local storage
            if (project.style.backgroundColor == "#DB7F8E") {
                let storedProject = JSON.parse(localStorage.getItem(`${project.firstElementChild.firstElementChild.textContent}`));
                storedProject.forEach(task => {
                    if (task.title == `${title}`) {
                        JSON.stringify(storedProject.splice(storedProject.indexOf(task), 1));
                        localStorage.setItem(`${project.firstElementChild.firstElementChild.textContent}` , JSON.stringify(storedProject));
                    };
                });
            };
        });
    };
};



/***/ }),

/***/ "./src/task-sort.js":
/*!**************************!*\
  !*** ./src/task-sort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayByPriority": () => (/* binding */ displayByPriority),
/* harmony export */   "displayMonthTasks": () => (/* binding */ displayMonthTasks),
/* harmony export */   "displayTodayTasks": () => (/* binding */ displayTodayTasks),
/* harmony export */   "displayWeekTasks": () => (/* binding */ displayWeekTasks),
/* harmony export */   "sortAllTasksByDate": () => (/* binding */ sortAllTasksByDate)
/* harmony export */ });
//Global Variables
const tasks = Object.values(localStorage);

//Functions

// Takes in a list of tasks and sorts them in order by date ascending
function sortAllTasksByDate(list) {
    list.sort((a, b) => {
        if (a.date > b.date) {
            return 1;
        } else if (a.date === b.date) {
            if (a.time > b.time) {
                return 1;
            } else {return -1}
        } else {return -1}
    });
};

// Takes in a list and returns a list of tasks that have due dates that match the current date
function displayTodayTasks(list) {
    let currentDate = new Date().toJSON().slice(0, 10);
    let todaysTasks = [];
    list.forEach(task => {
        if (task.date == currentDate) {
            todaysTasks.push(task);
        };
    });

    return todaysTasks;
};

// Takes in a list and returns a list of tasks that have due dates within a week from the current date
function displayWeekTasks(list) {
    let weekTasks = [];
    let weekOutDates = [];

    for (let i = 0; i < 8; i++) { // To get all dates a week from the current date
        weekOutDates.push(new Date(Date.now() + i * 24 * 60 * 60 * 1000).toJSON().slice(0, 10) )
    };
    list.forEach(task => { // Checks if a task's date is within a week of the current date by comparing the task date to each date 7 days out
        for (let i = 0; i < weekOutDates.length; i++) {
            if (task.date == weekOutDates[i]) {weekTasks.push(task)};
        };
    });

    return weekTasks;
};

// Takes in a list and returns a list of tasks that have due dates within a month from the current date
function displayMonthTasks(list) {
    let monthTasks = [];
    let monthOutDates = [];
    for (let i = 0; i < 32; i++) { // To get all dates a month from the current date
        monthOutDates.push(new Date(Date.now() + i * 24 * 60 * 60 * 1000).toJSON().slice(0, 10) )
    };
    list.forEach(task => {
        for (let i = 0; i < monthOutDates.length; i++) {
            if (task.date == monthOutDates[i]) {monthTasks.push(task)};
        };
    });

    return monthTasks;
};

// Takes in a list and returns a list of tasks are ordered by highest to lowest priorirty
function displayByPriority(list) {
    let priorityTasks = [];
    const priorityLevels = ['High', 'Medium', 'Low'];
    for (let i = 0; i < priorityLevels.length; i++) {
        list.forEach(task => { // Iterates through task list and appends tasks with highest priority first followed by medium and low
            if (task.priority === priorityLevels[i]) {
                priorityTasks.push(task);
            };
        });
    };

    return priorityTasks;
};









/***/ }),

/***/ "./MicroFLF.ttf":
/*!**********************!*\
  !*** ./MicroFLF.ttf ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a516fab645766dd6b89.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLGdGQUFnRixZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxVQUFVLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLHFDQUFxQywyQkFBMkIsa0NBQWtDLEdBQUcsMENBQTBDLGtCQUFrQixtQkFBbUIsNkJBQTZCLHdFQUF3RSw2QkFBNkIsR0FBRyxnQkFBZ0IsbUJBQW1CLHFDQUFxQyxHQUFHLFFBQVEsdUJBQXVCLEdBQUcsWUFBWSwwQ0FBMEMsMENBQTBDLHFDQUFxQyx1QkFBdUIsR0FBRyw0R0FBNEcsbUJBQW1CLEdBQUcsbUNBQW1DLDRCQUE0Qiw0QkFBNEIsMEJBQTBCLDRCQUE0Qiw0QkFBNEIsNEJBQTRCLHNCQUFzQiw2QkFBNkIsZ0NBQWdDLHNCQUFzQiw2QkFBNkIsdUJBQXVCLDBDQUEwQyxHQUFHLDBCQUEwQixvQkFBb0IsMEJBQTBCLG9DQUFvQyxrQkFBa0IsK0NBQStDLG1GQUFtRixHQUFHLGdCQUFnQixrQkFBa0IsbUJBQW1CLHNDQUFzQyxHQUFHLHdCQUF3QixzQkFBc0IsMkNBQTJDLG1CQUFtQixtQkFBbUIsOENBQThDLG1GQUFtRixvQ0FBb0MsR0FBRyxrQkFBa0IsOEVBQThFLEdBQUcscUJBQXFCLDBDQUEwQywyQ0FBMkMsb0NBQW9DLDBDQUEwQyxxQ0FBcUMseUVBQXlFLEdBQUcscUJBQXFCLG9CQUFvQixxQ0FBcUMscUNBQXFDLGlFQUFpRSxHQUFHLHFCQUFxQixnQ0FBZ0MscUJBQXFCLDZCQUE2QiwrREFBK0Qsb0JBQW9CLHFCQUFxQixHQUFHLFdBQVcsMkNBQTJDLCtDQUErQyxHQUFHLG1DQUFtQywyQ0FBMkMsbUJBQW1CLEdBQUcseUNBQXlDLHlCQUF5QixHQUFHLHNCQUFzQix5Q0FBeUMsNENBQTRDLEdBQUcsa0NBQWtDLDBDQUEwQyxvREFBb0QsdURBQXVELGlCQUFpQixHQUFHLGlDQUFpQywyQ0FBMkMsd0RBQXdELG9EQUFvRCxHQUFHLHNCQUFzQixvQkFBb0IsNkJBQTZCLDBCQUEwQixtQkFBbUIsdUJBQXVCLEdBQUcsYUFBYSx3Q0FBd0MsR0FBRyxjQUFjLG9CQUFvQixxQ0FBcUMsMEJBQTBCLHlDQUF5QyxvQ0FBb0MsaUJBQWlCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxnQkFBZ0IsaUJBQWlCLHVCQUF1QixHQUFHLHFCQUFxQixtQkFBbUIsR0FBRyxxQ0FBcUMsa0JBQWtCLG1CQUFtQixHQUFHLGlEQUFpRCxZQUFZLDhCQUE4QixPQUFPLFVBQVUsZ0NBQWdDLE9BQU8sR0FBRyxxQkFBcUIsb0JBQW9CLEdBQUcsb0RBQW9ELHNCQUFzQixlQUFlLHFDQUFxQyw0QkFBNEIsK0JBQStCLDRCQUE0Qiw0RUFBNEUsb0NBQW9DLG9DQUFvQywwQ0FBMEMsR0FBRyw0QkFBNEIsaUJBQWlCLGlCQUFpQiwwQkFBMEIsZ0JBQWdCLEdBQUcsMkJBQTJCLGlCQUFpQixpQkFBaUIsMkJBQTJCLGdCQUFnQixHQUFHLFVBQVUsb0JBQW9CLDZCQUE2QixnQ0FBZ0MsR0FBRyxzQkFBc0Isd0JBQXdCLEdBQUcsb0JBQW9CLDZCQUE2QixHQUFHLHVCQUF1QixvQkFBb0IsNkJBQTZCLCtCQUErQixpR0FBaUcsc0JBQXNCLGdCQUFnQixlQUFlLDRCQUE0QixtQkFBbUIsb0JBQW9CLGlCQUFpQixvQ0FBb0MscUNBQXFDLDBDQUEwQyw4TEFBOEwsR0FBRyxnQkFBZ0IsbUJBQW1CLEdBQUcsaUJBQWlCLG1CQUFtQixHQUFHLDBCQUEwQixvQkFBb0IsbUJBQW1CLGdDQUFnQywyQ0FBMkMsa0RBQWtELEdBQUcsbUNBQW1DLG1CQUFtQixtQkFBbUIsR0FBRyw0QkFBNEIsaUJBQWlCLDJCQUEyQixHQUFHLGtCQUFrQixtQkFBbUIsR0FBRyw2QkFBNkIseUJBQXlCLHNCQUFzQixtQkFBbUIsR0FBRyxjQUFjLHFCQUFxQixzQkFBc0IsZUFBZSxnQkFBZ0IsbUJBQW1CLGtCQUFrQiwyQ0FBMkMsaUJBQWlCLEdBQUcsbUJBQW1CO0FBQ3Q1ZDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1YxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnFCO0FBQ3VCO0FBQ0M7QUFDZ0Y7O0FBRTdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSw2R0FBNkc7QUFDN0csNEdBQTRHO0FBQzVHO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2R0FBNkc7QUFDN0csNEdBQTRHO0FBQzVHO0FBQ0E7QUFDQSxJQUFJLGdFQUFpQiwyQkFBMkIsMkRBQVc7QUFDM0Q7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RztBQUM3Ryw0R0FBNEc7QUFDNUc7QUFDQTtBQUNBLElBQUksK0RBQWdCLDJCQUEyQiwyREFBVztBQUMxRDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsNkdBQTZHO0FBQzdHLDRHQUE0RztBQUM1RztBQUNBO0FBQ0EsSUFBSSxnRUFBaUIsMkJBQTJCLDJEQUFXO0FBQzNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSw2R0FBNkc7QUFDN0csNEdBQTRHO0FBQzVHO0FBQ0EsSUFBSSxpRUFBa0I7QUFDdEI7QUFDQSxJQUFJLGdFQUFpQiwyQkFBMkIsMkRBQVc7QUFDM0Q7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBVztBQUNmO0FBQ0EscUVBQXFFO0FBQ3JFLG1FQUFtRSx3REFBd0Q7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx3REFBd0Q7QUFDNUY7QUFDQSxLQUFLO0FBQ0wsME5BQTBOO0FBQzFOO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLDREQUFjO0FBQ2xCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEOztBQUVBO0FBQ0E7QUFDQSxJQUFJLDREQUFXO0FBQ2Y7QUFDQSx5Q0FBeUMsNERBQWMsb0JBQW9CO0FBQzNFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0VBQWtCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyREFBVztBQUN4QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN000QztBQUNEOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYiw0QkFBNEIsS0FBSztBQUNqQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLE9BQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFLHdCQUF3QiwwREFBZTtBQUN2QztBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsMkRBQVc7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLEtBQUssSUFBSTtBQUM1Qzs7QUFFQTtBQUNBO0FBQ0EsOERBQThELEtBQUs7QUFDbkUsZ0NBQWdDLFFBQVE7QUFDeEMsbUNBQW1DLEtBQUs7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUhBQWlIO0FBQ2pILDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7O0FBRUwsWUFBWTtBQUNaOztBQUV1Qjs7Ozs7Ozs7Ozs7Ozs7OztBQzlIdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsT0FBTyxPQUFPLFNBQVMsRUFBRSxRQUFROztBQUU3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxRUFBcUU7QUFDckU7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsUUFBUSxPQUFPO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsY0FBYztBQUNkO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUdBQXVHO0FBQ3ZHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHlEQUF5RDs7QUFFekQsd0JBQXdCLHNCQUFzQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsWUFBWTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2SEFBNkg7QUFDN0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEU7QUFDQSwyRUFBMkUsd0RBQXdEO0FBQ25JO0FBQ0Esa0VBQWtFO0FBQ2xFLDRDQUE0Qyw4QkFBOEI7QUFDMUU7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLGtDQUFrQztBQUNsQztBQUNBLGtDQUFrQztBQUNsQztBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckIsNENBQTRDLHdEQUF3RCxtQ0FBbUM7QUFDdkk7QUFDQSwwRUFBMEU7QUFDMUU7QUFDQSxnRkFBZ0YsMEJBQTBCO0FBQzFHO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBLHVFQUF1RSx3REFBd0Q7QUFDL0g7QUFDQSx5Q0FBeUMsTUFBTTtBQUMvQztBQUNBLGdEQUFnRCx3REFBd0Q7QUFDeEc7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5TEE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsVUFBVSxNQUFNO0FBQ2hCLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixPQUFPLE9BQU87QUFDbEM7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQix3QkFBd0IseUJBQXlCO0FBQ2pELCtDQUErQztBQUMvQztBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixRQUFRLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDBCQUEwQjtBQUNsRCxnREFBZ0Q7QUFDaEQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7O0FBR3VHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNoRnZHO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay1pdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2stc29ydC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vTWljcm9GTEYudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWljcm8nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi8qIENTUyByZXNldCBhbmQgZ2VuZXJhbCBydWxlcyAqL1xcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ21pY3JvJywgc2Fucy1zZXJpZiwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcm9zZS1xdWFydHopO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3R5LXJvc2UpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuLm5hdi1maWx0ZXJzIGxpOmhvdmVyLFxcbi5uZXctcHJvamVjdDpob3ZlcixcXG50Ym9keTpob3ZlcixcXG4ubmV3LXRhc2ssXFxuLnRhc2staWNvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLyogQ3VzdG9tIHZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gICAgLS1zZWN0aW9uLXNwYWNlOiAxNXB4O1xcbiAgICAtLXNtYWxsLXNwYWNpbmc6IDEwcHg7XFxuICAgIC0tbWVkLXNwYWNpbmc6IDI1cHg7XFxuICAgIC0tbGFyZ2Utc3BhY2luZzogNDBweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAtLW1pc3R5LXJvc2U6ICNmZmRiZGE7XFxuICAgIC0tZ3JleTogIzlkYTNhNDtcXG4gICAgLS1mcmVuY2gtZ3JleTogI0Q1QzVDODtcXG4gICAgLS1saWdodGVyLWZyZW5jaDogI0U1RENERDtcXG4gICAgLS1waW5rOiAjREI3RjhFO1xcbiAgICAtLXJvc2UtcXVhcnR6OiAjQzNBQ0FDO1xcbiAgICAtLWJyb3duOiAjNjA0RDUzO1xcbiAgICAtLWxpZ2h0LWJyb3duOiByZ2IoOTYsIDc3LCA4MywgMC43KTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLDAsMCwwLjcpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1lZC1zcGFjaW5nKTtcXG59XFxuXFxuLyogTmF2IEJhciAqL1xcbm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJlbmNoLWdyZXkpO1xcbiAgICB3aWR0aDogMTYuNSU7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgwLDAsMCwwLjcpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1zcGFjaW5nKTtcXG59XFxuXFxuLm5hdi1maWx0ZXJzIHtcXG4gICAgcGFkZGluZzogdmFyKC0tbWVkLXNwYWNpbmcpIDBweCB2YXIoLS1tZWQtc3BhY2luZykgdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxufVxcblxcbi5uYXYtZmlsdGVycyBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXF1YXJ0eik7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNtYWxsLXNwYWNpbmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgbGluZWFyLCBib3JkZXItY29sb3IgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tc2VjdGlvbi1zcGFjZSkgMHB4IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbn1cXG5cXG5cXG4jcHJvamVjdFRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwIDEwcHg7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggdmFyKC0tbWVkLXNwYWNpbmcpIHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxudGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXF1YXJ0eik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXI7XFxufVxcblxcbiNwcm9qZWN0VGFibGUgdGJvZHkgPiB0ciA+IHRkIHtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgbGluZWFyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0VGFibGUgdGJvZHk6aG92ZXIgPiB0ciA+IHRkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4jcHJvamVjdFRhYmxlIHRkIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXG59XFxuXFxuI3Byb2plY3RUYWJsZSB0ZDpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTsgXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpOyBcXG4gICAgd2lkdGg6IDY1JTtcXG59XFxuXFxuI3Byb2plY3RUYWJsZSB0ZDpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7IFxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDgzLjUlO1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbn1cXG5cXG5tYWluIGgxIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbn1cXG5cXG4udGFzay1iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zZWN0aW9uLXNwYWNlKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGdyZXkgc29saWQ7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbi5uZXctdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0YXNrVGFibGUge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG5cXG4jdGFza1RhYmxlIHRkIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jdGFza1RhYmxlIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLyogRm9ybXMgYW5kIFRhc2sgVmlldyAqL1xcbkBrZXlmcmFtZXMgcG9wdXAge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICB9XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0YXNrSXRlbUZvcm1Db250YWluZXIsXFxuI3Byb2plY3RGb3JtQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBhbmltYXRpb24tbmFtZTogcG9wdXA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1zcGFjaW5nKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiN0YXNrSXRlbUZvcm1Db250YWluZXIge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwJTsgIFxcbiAgICBsZWZ0OiA1MCU7XFxufVxcblxcbiNwcm9qZWN0Rm9ybUNvbnRhaW5lciB7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNy41JTsgIFxcbiAgICBsZWZ0OiA1MCU7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxufVxcblxcbmxhYmVsIHRleHRhcmVhIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuXFxuLnZpZXctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1tZWQtc3BhY2luZyk7IFxcbiAgICBwYWRkaW5nOiB2YXIoLS1tZWQtc3BhY2luZykgdmFyKC0tc2VjdGlvbi1zcGFjZSkgdmFyKC0tc2VjdGlvbi1zcGFjZSkgdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC03LjUlOyAgIFxcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1icm93bik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi50YXNrLWxhYmVsIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZ2FwOiB2YXIoLS1sYXJnZS1zcGFjaW5nKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQtYnJvd24pO1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbn1cXG5cXG4udmlldy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIC50YXNrLWl0ZW0ge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgei1pbmRleDogMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVz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QUNJLFVBQVU7SUFDVixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDBGQUEwRjtJQUMxRixlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLDhCQUE4QjtJQUM5QixtQ0FBbUM7SUFDbkMsdUxBQXVMO0FBQzNMOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osV0FBVztJQUNYLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWljcm8nO1xcbiAgICBzcmM6IHVybCgnLi4vTWljcm9GTEYudHRmJyk7XFxufVxcblxcbi8qIENTUyByZXNldCBhbmQgZ2VuZXJhbCBydWxlcyAqL1xcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ21pY3JvJywgc2Fucy1zZXJpZiwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcm9zZS1xdWFydHopO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3R5LXJvc2UpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuLm5hdi1maWx0ZXJzIGxpOmhvdmVyLFxcbi5uZXctcHJvamVjdDpob3ZlcixcXG50Ym9keTpob3ZlcixcXG4ubmV3LXRhc2ssXFxuLnRhc2staWNvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLyogQ3VzdG9tIHZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gICAgLS1zZWN0aW9uLXNwYWNlOiAxNXB4O1xcbiAgICAtLXNtYWxsLXNwYWNpbmc6IDEwcHg7XFxuICAgIC0tbWVkLXNwYWNpbmc6IDI1cHg7XFxuICAgIC0tbGFyZ2Utc3BhY2luZzogNDBweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAtLW1pc3R5LXJvc2U6ICNmZmRiZGE7XFxuICAgIC0tZ3JleTogIzlkYTNhNDtcXG4gICAgLS1mcmVuY2gtZ3JleTogI0Q1QzVDODtcXG4gICAgLS1saWdodGVyLWZyZW5jaDogI0U1RENERDtcXG4gICAgLS1waW5rOiAjREI3RjhFO1xcbiAgICAtLXJvc2UtcXVhcnR6OiAjQzNBQ0FDO1xcbiAgICAtLWJyb3duOiAjNjA0RDUzO1xcbiAgICAtLWxpZ2h0LWJyb3duOiByZ2IoOTYsIDc3LCA4MywgMC43KTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLDAsMCwwLjcpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbn1cXG5cXG5oZWFkZXIgaW1nIHtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLW1lZC1zcGFjaW5nKTtcXG59XFxuXFxuLyogTmF2IEJhciAqL1xcbm5hdiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZnJlbmNoLWdyZXkpO1xcbiAgICB3aWR0aDogMTYuNSU7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgwLDAsMCwwLjcpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1zcGFjaW5nKTtcXG59XFxuXFxuLm5hdi1maWx0ZXJzIHtcXG4gICAgcGFkZGluZzogdmFyKC0tbWVkLXNwYWNpbmcpIDBweCB2YXIoLS1tZWQtc3BhY2luZykgdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxufVxcblxcbi5uYXYtZmlsdGVycyBsaSB7XFxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXF1YXJ0eik7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNtYWxsLXNwYWNpbmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgbGluZWFyLCBib3JkZXItY29sb3IgMC4ycyBsaW5lYXI7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xcbiAgICBwYWRkaW5nOiAwcHggdmFyKC0tc2VjdGlvbi1zcGFjZSkgMHB4IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbn1cXG5cXG5cXG4jcHJvamVjdFRhYmxlIHtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGJvcmRlci1zcGFjaW5nOiAwIDEwcHg7XFxuICAgIHBhZGRpbmc6IDBweCAwcHggdmFyKC0tbWVkLXNwYWNpbmcpIHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxudGJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yb3NlLXF1YXJ0eik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXI7XFxufVxcblxcbiNwcm9qZWN0VGFibGUgdGJvZHkgPiB0ciA+IHRkIHtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgbGluZWFyO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0VGFibGUgdGJvZHk6aG92ZXIgPiB0ciA+IHRkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBhcXVhO1xcbn1cXG5cXG4jcHJvamVjdFRhYmxlIHRkIHtcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXG59XFxuXFxuI3Byb2plY3RUYWJsZSB0ZDpmaXJzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTsgXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpOyBcXG4gICAgd2lkdGg6IDY1JTtcXG59XFxuXFxuI3Byb2plY3RUYWJsZSB0ZDpsYXN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7IFxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi8qIE1haW4gKi9cXG5tYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDgzLjUlO1xcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xcbn1cXG5cXG5tYWluIGgxIHtcXG4gICAgcGFkZGluZy10b3A6IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbn1cXG5cXG4udGFzay1iYXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zZWN0aW9uLXNwYWNlKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IGdyZXkgc29saWQ7XFxuICAgIHdpZHRoOiA3MCU7XFxufVxcblxcbi5uZXctdGFzayB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0YXNrVGFibGUge1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG5cXG5cXG4jdGFza1RhYmxlIHRkIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jdGFza1RhYmxlIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLyogRm9ybXMgYW5kIFRhc2sgVmlldyAqL1xcbkBrZXlmcmFtZXMgcG9wdXAge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICB9XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0YXNrSXRlbUZvcm1Db250YWluZXIsXFxuI3Byb2plY3RGb3JtQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBhbmltYXRpb24tbmFtZTogcG9wdXA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1zcGFjaW5nKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiN0YXNrSXRlbUZvcm1Db250YWluZXIge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwJTsgIFxcbiAgICBsZWZ0OiA1MCU7XFxufVxcblxcbiNwcm9qZWN0Rm9ybUNvbnRhaW5lciB7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNy41JTsgIFxcbiAgICBsZWZ0OiA1MCU7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxufVxcblxcbmxhYmVsIHRleHRhcmVhIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuXFxuLnZpZXctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1tZWQtc3BhY2luZyk7IFxcbiAgICBwYWRkaW5nOiB2YXIoLS1tZWQtc3BhY2luZykgdmFyKC0tc2VjdGlvbi1zcGFjZSkgdmFyKC0tc2VjdGlvbi1zcGFjZSkgdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC03LjUlOyAgIFxcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1icm93bik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi50YXNrLWxhYmVsIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZ2FwOiB2YXIoLS1sYXJnZS1zcGFjaW5nKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQtYnJvd24pO1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbn1cXG5cXG4udmlldy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIC50YXNrLWl0ZW0ge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgei1pbmRleDogMTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7dGFza0ZhY3Rvcnl9IGZyb20gJy4vdGFzay1pdGVtcy5qcyc7XG5pbXBvcnQge3Byb2plY3RGYWN0b3J5fSBmcm9tICcuL3Byb2plY3RzLmpzJztcbmltcG9ydCB7c29ydEFsbFRhc2tzQnlEYXRlLCBkaXNwbGF5VG9kYXlUYXNrcywgZGlzcGxheVdlZWtUYXNrcywgZGlzcGxheU1vbnRoVGFza3MsIGRpc3BsYXlCeVByaW9yaXR5fSBmcm9tICcuL3Rhc2stc29ydC5qcyc7XG5cbi8vR2xvYmFsIFZhcmliYWxlc1xuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0l0ZW1Gb3JtQ29udGFpbmVyJyk7XG5jb25zdCBwcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Rm9ybUNvbnRhaW5lcicpO1xuY29uc3QgdGFza0l0ZW1Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tJdGVtRm9ybScpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEZvcm0nKTtcbmNvbnN0IHRhc2tDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1jYW5jZWwnKTtcbmNvbnN0IHByb2plY3RDYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1jYW5jZWwnKTtcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2Ryb3AnKTtcbmNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJyk7XG5jb25zdCBhbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsJyk7XG5jb25zdCB0b2RheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RheScpO1xuY29uc3QgdGhpc1dlZWsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VlaycpO1xuY29uc3QgdGhpc01vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vbnRoJyk7XG5jb25zdCBwcmlvcml0eVZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpb3JpdHknKTtcbmNvbnN0IHRhc2tGaWx0ZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1maWx0ZXJzIGxpJyk7XG5cblxuLy8gVGFzayB2aWV3IEV2ZW50IExpc3RlbmVyc1xuLy8gRmlsdGVyIHRhc2tzIGJhc2VkIG9uIGR1ZSBkYXRlIG9yIHByaW9yaXR5XG5cbmFsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGZpbHRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MzQUNBQyc7XG4gICAgICAgIGZpbHRlci5zdHlsZS5ib3JkZXJDb2xvciA9ICcjNjA0RDUzJztcbiAgICB9KTtcbiAgICBuZXdUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKS5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5zdHlsZS5jc3NUZXh0ID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiAjQzNBQ0FDO1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0ZCcpLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci1jb2xvcjogIzYwNEQ1MztcIik7XG4gICAgZGlzcGxheUFsbFRhc2tzKCk7XG59KTtcblxudG9kYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0ZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBmaWx0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNDM0FDQUMnO1xuICAgICAgICBmaWx0ZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzYwNEQ1Myc7XG4gICAgfSk7XG4gICAgbmV3VGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRvZGF5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjREI3RjhFJ1xuICAgIHRvZGF5LnN0eWxlLmJvcmRlckNvbG9yID0gJyNmZmRiZGEnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5JykuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3Quc3R5bGUuY3NzVGV4dCA9IFwiYmFja2dyb3VuZC1jb2xvcjogI0MzQUNBQztcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdGQnKS5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItY29sb3I6ICM2MDRENTM7XCIpO1xuICAgIGNvbnN0IGFsbFRhc2tzID0gY3JlYXRlTWVyZ2VkVGFza0xpc3QoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RhYmxlJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZGlzcGxheVRvZGF5VGFza3MoYWxsVGFza3MpLmZvckVhY2godGFzayA9PiB0YXNrRmFjdG9yeSh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmRhdGUsIHRhc2sudGltZSwgdGFzay5wcmlvcml0eSkpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG59KTtcblxudGhpc1dlZWsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0ZpbHRlcnMuZm9yRWFjaChmaWx0ZXIgPT4ge1xuICAgICAgICBmaWx0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNDM0FDQUMnO1xuICAgICAgICBmaWx0ZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzYwNEQ1Myc7XG4gICAgfSk7XG4gICAgbmV3VGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXNXZWVrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjREI3RjhFJztcbiAgICB0aGlzV2Vlay5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmZkYmRhJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keScpLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnN0eWxlLmNzc1RleHQgPSBcImJhY2tncm91bmQtY29sb3I6ICNDM0FDQUM7XCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRkJykuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3Quc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWNvbG9yOiAjNjA0RDUzO1wiKTtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGNyZWF0ZU1lcmdlZFRhc2tMaXN0KCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUYWJsZScpLmlubmVySFRNTCA9ICcnO1xuICAgIGRpc3BsYXlXZWVrVGFza3MoYWxsVGFza3MpLmZvckVhY2godGFzayA9PiB0YXNrRmFjdG9yeSh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmRhdGUsIHRhc2sudGltZSwgdGFzay5wcmlvcml0eSkpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xufSk7XG5cbnRoaXNNb250aC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGZpbHRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MzQUNBQyc7XG4gICAgICAgIGZpbHRlci5zdHlsZS5ib3JkZXJDb2xvciA9ICcjNjA0RDUzJztcbiAgICB9KTtcbiAgICBuZXdUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpc01vbnRoLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjREI3RjhFJztcbiAgICB0aGlzTW9udGguc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2ZmZGJkYSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKS5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5zdHlsZS5jc3NUZXh0ID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiAjQzNBQ0FDO1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0ZCcpLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci1jb2xvcjogIzYwNEQ1MztcIik7XG4gICAgY29uc3QgYWxsVGFza3MgPSBjcmVhdGVNZXJnZWRUYXNrTGlzdCgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGFibGUnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5TW9udGhUYXNrcyhhbGxUYXNrcykuZm9yRWFjaCh0YXNrID0+IHRhc2tGYWN0b3J5KHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZGF0ZSwgdGFzay50aW1lLCB0YXNrLnByaW9yaXR5KSk7XG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiVGhpcyBNb250aFwiO1xufSk7XG5cbnByaW9yaXR5Vmlldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGZpbHRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MzQUNBQyc7XG4gICAgICAgIGZpbHRlci5zdHlsZS5ib3JkZXJDb2xvciA9ICcjNjA0RDUzJztcbiAgICB9KTtcbiAgICBuZXdUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcHJpb3JpdHlWaWV3LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjREI3RjhFJztcbiAgICBwcmlvcml0eVZpZXcuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2ZmZGJkYSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKS5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5zdHlsZS5jc3NUZXh0ID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiAjQzNBQ0FDO1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0ZCcpLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci1jb2xvcjogIzYwNEQ1MztcIik7XG4gICAgY29uc3QgYWxsVGFza3MgPSBjcmVhdGVNZXJnZWRUYXNrTGlzdCgpO1xuICAgIHNvcnRBbGxUYXNrc0J5RGF0ZShhbGxUYXNrcyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUYWJsZScpLmlubmVySFRNTCA9ICcnO1xuICAgIGRpc3BsYXlCeVByaW9yaXR5KGFsbFRhc2tzKS5mb3JFYWNoKHRhc2sgPT4gdGFza0ZhY3RvcnkodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kYXRlLCB0YXNrLnRpbWUsIHRhc2sucHJpb3JpdHkpKTtcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xufSk7XG5cblxuLy8gVGFzayB0YWJsZSBFdmVudCBMaXN0ZW5lcnNcblxuLy8gT3BlbnMgbmV3IHRhc2sgZm9ybSB3aGVuIG5ldyB0YXNrIGJ1dHRvbiBpcyBzZWxlY3RlZFxubmV3VGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXknKTtcbn0pO1xuXG4vLyBDbG9zZXMgdGFzayBmb3JtIHdoZW4gY2FuY2VsIGlzIGNsaWNrZWRcbnRhc2tDYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXknKTtcbn0pO1xuXG4vLyBDcmVhdGVzIGEgbmV3IHJvdyAodGFzayBpdGVtKSBpbiB0aGUgdGFzayB0YWJsZSBhbmQgYWRkcyBmdW5jdGlvbmFsaXR5IHRvIHRhc2sgYnV0dG9ucyBvbiBmb3JtIHN1Ym1pdFxudGFza0l0ZW1Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0YXNrRmFjdG9yeShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWUsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keScpLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGlmIChwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSBcInJnYigyMTksIDEyNywgMTQyKVwiKSB7IC8vIFNlbGVjdHMgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBwcm9qZWN0IChrZXkpIGFuZCBzYXZlcyB0aGUgdGFzayB0byBpdCBhcyBhbiBvYmplY3QgaW4gYW4gYXJyYXkgKHZhbHVlKVxuICAgICAgICAgICAgbGV0IHN0b3JlZFByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGAke3Byb2plY3QuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnR9YCkpO1xuICAgICAgICAgICAgbGV0IHRhc2sgPSB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSxcbiAgICAgICAgICAgICAgICBkYXRlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlLFxuICAgICAgICAgICAgICAgIHRpbWU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aW1lJykudmFsdWUsXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc3RvcmVkUHJvamVjdC5wdXNoKHRhc2spO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJvamVjdC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudH1gLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0KSk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JyldLmZvckVhY2goaW5wdXQgPT4gaW5wdXQudmFsdWUgPSBcIlwiKTsgLy8gQ2xlYXJzIGZvcm0gb24gc3VibWl0XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XG59KTtcblxuXG4vLyBQcm9qZWN0IEV2ZW50IExpc3RlbmVyc1xuXG4vLyBPcGVucyBuZXcgcHJvamVjdCBmb3JtIHdoZW4gbmV3IHRhc2sgYnV0dG9uIGlzIHNlbGVjdGVkXG5uZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG5cbi8vIENsb3NlcyBwcm9qZWN0IGZvcm0gd2hlbiBjYW5jZWwgaXMgY2xpY2tlZFxucHJvamVjdENhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xufSk7XG5cbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwcm9qZWN0RmFjdG9yeShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKS52YWx1ZSk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3ROYW1lJykudmFsdWUgPSBcIlwiO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xufSk7XG5cbi8vIFJlbW92ZXMgb3ZlcmxheSBmcm9tIGNhcmQgdmlldyBhbmQgcmVtb3ZlcyBjYXJkIGZyb20gRE9NXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWNvbnRhaW5lcicpKTtcbn0pXG5cblxuLy8gRnVuY3Rpb25zXG5cbi8vIENyZWF0ZXMgYSBkZWZhdWx0IHRhc2sgdG8gZ2l2ZSB1c2VycyBhbiBleGFtcGxlXG5mdW5jdGlvbiBpbml0aWFsaXplKCkge1xuICAgIHRhc2tGYWN0b3J5KCdUZXN0IFRhc2snLCAnVGVzdCBEZXNjcmlwdGlvbicsICcxMS0xMS0xMScsICcxMTowMCBBTScsICdIaWdoJyk7XG4gICAgY29uc3QgcHJvamVjdHNGcm9tTG9jYWwgPSBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpO1xuICAgIHByb2plY3RzRnJvbUxvY2FsLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0RmFjdG9yeShwcm9qZWN0LCAnaW5pdCcpKTsgLy8gR3JhYnMgYWxsIHByb2plY3RzIHNhdmVkIGluIGxvY2FsIHN0b3JhZ2UgYW5kIGxvYWRzIHRoZW0gaW4gdGhlIHByb2plY3Qgc2lkZWJhclxufTtcblxuLy8gRGlzcGxheXMgYWxsIHRoZSB0YXNrcyBzYXZlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgZGlzcGxheXMgdGhlbSBvbiB0aGUgZGFzaGJvYXJkXG5mdW5jdGlvbiBkaXNwbGF5QWxsVGFza3MoKSB7XG4gICAgY29uc3QgYWxsVGFza3MgPSBjcmVhdGVNZXJnZWRUYXNrTGlzdCgpXG4gICAgc29ydEFsbFRhc2tzQnlEYXRlKGFsbFRhc2tzKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RhYmxlJykuaW5uZXJIVE1MID0gJyc7XG4gICAgYWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjREI3RjhFJztcbiAgICBhbGwuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2ZmZGJkYSc7XG4gICAgYWxsVGFza3MuZm9yRWFjaCh0YXNrID0+IHRhc2tGYWN0b3J5KHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZGF0ZSwgdGFzay50aW1lLCB0YXNrLnByaW9yaXR5KSk7XG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQWxsXCI7XG59O1xuXG4vLyBDcmVhdGVzIGEgbGlzdCBvZiBhbGwgdGFza3Mgc2F2ZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2UgYW5kIHJldHVybnMgaXRcbmZ1bmN0aW9uIGNyZWF0ZU1lcmdlZFRhc2tMaXN0KCkge1xuICAgIGNvbnN0IHRhc2tzRnJvbUxvY2FsID0gT2JqZWN0LnZhbHVlcyhsb2NhbFN0b3JhZ2UpO1xuICAgIGxldCB0YXNrcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NGcm9tTG9jYWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdGFza3MgPSB0YXNrcy5jb25jYXQoSlNPTi5wYXJzZSh0YXNrc0Zyb21Mb2NhbFtpXSkpO1xuICAgIH07XG4gICAgY29uc3QgbWVyZ2VkVGFza3MgPSB0YXNrcy5mbGF0KDEpO1xuXG4gICAgcmV0dXJuIG1lcmdlZFRhc2tzO1xufVxuXG5pbml0aWFsaXplKCk7XG5cbmV4cG9ydCB7ZGlzcGxheUFsbFRhc2tzfSIsImltcG9ydCB7dGFza0ZhY3Rvcnl9IGZyb20gJy4vdGFzay1pdGVtcy5qcyc7XG5pbXBvcnQge2Rpc3BsYXlBbGxUYXNrc30gZnJvbSAnLi9pbmRleC5qcyc7XG5cbi8vR2xvYmFsIHZhcmlhYmxlc1xuY29uc3QgdGFza0ZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWZpbHRlcnMgbGknKTtcbmNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcblxuY29uc3QgcHJvamVjdEZhY3RvcnkgPSAobmFtZSwgaW5pdCkgPT4ge1xuLy8gU2F2aW5nIHByb2plY3QgdG8gbG9jYWwgc3RvcmFnZVxuaWYgKCFpbml0KSB7IC8vIFByZXZlbnRzIGxvY2FsIHN0b3JhZ2UgZnJvbSBiZWluZyBvdmVycmlkZGVuIHdoZW4gY2FsbGVkIHVwb24gcGFnZSByZWZyZXNoIHRvIGxvYWQgcHJvamVjdCBzaWRlIHRhYmxlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7bmFtZX1gLCBKU09OLnN0cmluZ2lmeShbXSkpO1xufTtcbi8vIEFkZGluZyBwcm9qZWN0IHRvIHRhYmxlXG5cbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0VGFibGUnKTtcbiAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpO1xuICAgIGNvbnN0IG5ld0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgIGNvbnN0IG5ld1JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuXG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIG5ld0JvZHkuYXBwZW5kQ2hpbGQobmV3Um93KTtcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgLy8gQ3JlYXRlcyBwcm9qZWN0IHNwZWNpZmljIGZ1bmN0aW9ucyBhbmQgYWRkcyBmdW5jdGlvbmFsaXR5IChlZGl0IG5hbWUgYW5kIHJlbW92ZSlcbiAgICBjb25zdCBhZGRQcm9qZWN0T3B0aW9ucyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3RPcHRpb25zID0gWycuL2ltYWdlcy9lZGl0LnN2ZycsICcuL2ltYWdlcy9pY29uczgtdHJhc2gtMzAucG5nJ107XG4gICAgICAgIGxldCBpY29uTmFtZXMgPSBbYGVkaXRgLCBgdHJhc2hgXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5zcmMgPSBwcm9qZWN0T3B0aW9uc1tpXTtcbiAgICAgICAgICAgIGlmIChpY29uTmFtZXNbaV0gPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBlZGl0UHJvamVjdE5hbWUoKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5ld0NlbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb2plY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5JykubGVuZ3RoID09PSAwKSB7IC8vIERlZmF1bHRzIHRvIGRpc3BsYXkgYWxsIHRhc2tzIGlmIG5vIHByb2plY3RzIGFyZSBwcmVzZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5QWxsVGFza3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1Rhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gU2VsZWN0cyB0aGUgbmV4dCBwcm9qZWN0IGluIHRoZSB0YWJsZSBpZiBjdXJyZW50IHByb2plY3QgaXMgZGVsZXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKVswXS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNEQjdGOEVcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5JylbMF0ucXVlcnlTZWxlY3RvckFsbCgndGQnKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiI2ZmZGJkYVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keScpWzBdLnF1ZXJ5U2VsZWN0b3IoJ3RyID4gdGQnKS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlUYXNrKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5JylbMF0udGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5ld0NlbGwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChuZXdDZWxsKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGFkZFByb2plY3RPcHRpb25zKCk7XG4gICAgc2VsZWN0UHJvamVjdCgpO1xuICAgIGRpc3BsYXlUYXNrKG5hbWUpO1xuICAgIHRhYmxlLmluc2VydEJlZm9yZShuZXdCb2R5LCB0YWJsZS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgXG5cbi8vIE1ldGhvZHNcblxuICAgIC8vIENsZWFycyB0aGUgdGFzayB0YWJsZSBhbmQgbG9hZHMgaW4gcHJvamVjdCBzcGVjaWZpYyB0YXNrc1xuICAgIGZ1bmN0aW9uIGRpc3BsYXlUYXNrKG5hbWUpIHtcbiAgICAgICAgbGV0IHRhc2tBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSkpO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RhYmxlJykuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIHRhc2tBcnJheS5mb3JFYWNoKHRhc2sgPT4gdGFza0ZhY3RvcnkodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kYXRlLCB0YXNrLnRpbWUsIHRhc2sucHJpb3JpdHkpKTtcbiAgICB9O1xuXG4gICAgLy8gQWxsb3dzIHRoZSB1c2VyIHRvIGNoYW5nZSB0aGUgY3VycmVudCBuYW1lIG9mIHRoZSBwcm9qZWN0IG9uY2UgaXQgaGFzIGJlZW4gY3JlYXRlZFxuICAgIGZ1bmN0aW9uIGVkaXRQcm9qZWN0TmFtZSgpIHtcbiAgICAgICAgLy8gUmVwbGFjZXMgZWxlbWVudCB3aXRoIGlucHV0IGVsZW1lbnQgYW5kIGFkZHMgYSBzYXZlIGJ1dHRvbiB1c2VkIHRvIHB1c2ggdGhlIG5hbWUgY2hhbmdlXG4gICAgICAgIGNvbnN0IGVkaXRhYmxlTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNvbnN0IHNhdmVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVOYW1lLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgICAgICBwcm9qZWN0TmFtZS5yZXBsYWNlV2l0aChlZGl0YWJsZU5hbWUpO1xuICAgICAgICBlZGl0YWJsZU5hbWUucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2F2ZU5hbWUsIGVkaXRhYmxlTmFtZS5uZXh0U2libGluZylcblxuICAgICAgICBzYXZlTmFtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gZWRpdGFibGVOYW1lLnZhbHVlO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZScpLnRleHRDb250ZW50ID0gZWRpdGFibGVOYW1lLnZhbHVlXG4gICAgICAgICAgICBlZGl0YWJsZU5hbWUucmVwbGFjZVdpdGgocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgc2F2ZU5hbWUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzYXZlTmFtZSk7XG4gICAgICAgICAgICBjaGFuZ2VLZXlOYW1lKGVkaXRhYmxlTmFtZS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBSZW1vdmVzIHRoZSBwcm9qZWN0IGZyb20gdGhlIHByb2plY3QgdGFibGUgYW5kIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KCkge1xuICAgICAgICB0YWJsZS5yZW1vdmVDaGlsZChuZXdCb2R5KTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7bmFtZX1gKTsgLy8gUmVtb3ZlcyBwcm9qZWN0IGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIH07XG5cbiAgICAvLyBDaGFuZ2VzIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0IGluIGxvY2FsIHN0b3JhZ2VcbiAgICBmdW5jdGlvbiBjaGFuZ2VLZXlOYW1lKG5ld05hbWUpIHtcbiAgICAgICAgbGV0IHByb2plY3RUYXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7bmFtZX1gKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke25ld05hbWV9YCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdFRhc2tzKSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGAke25hbWV9YCk7XG4gICAgICAgIG5hbWUgPSBuZXdOYW1lO1xuICAgIH07XG5cbiAgICAvLyBIaWdobGlnaHRzIHRoZSBwcm9qZWN0IG9uIHRoZSBwcm9qZWN0IHRhYmxlIGFuZCBjaGFuZ2VzIHRoZSBwcm9qZWN0IG5hbWUgaGVhZGVyXG4gICAgZnVuY3Rpb24gc2VsZWN0UHJvamVjdCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKS5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5zdHlsZS5jc3NUZXh0ID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiAjQzNBQ0FDO1wiKTtcbiAgICAgICAgbmV3Qm9keS5zdHlsZS5jc3NUZXh0ID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiAjREI3RjhFO1wiXG4gICAgICAgIG5ld1Rhc2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJykuZm9yRWFjaChjZWxsID0+IGNlbGwuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiM2MDRENTNcIik7XG4gICAgICAgIG5ld0JvZHkucXVlcnlTZWxlY3RvckFsbCgndGQnKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiI2ZmZGJkYVwiKTtcbiAgICAgICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgfVxuXG4vLyBFdmVudCBMaXN0ZW5lcnNcblxuICAgIC8vIENoYW5nZXMgYmFja2dyb3VuZCBjb2xvciBvZiByb3cgdG8gaW5kaWNhdGUgd2hpY2ggcHJvamVjdCBpcyBiZWluZyBzZWxlY3RlZCBhbmQgZGlzcGxheXMgdGhlIHByb2plY3QncyB0YXNrc1xuICAgIHByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgICAgICBmaWx0ZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNDM0FDQUMnO1xuICAgICAgICAgICAgZmlsdGVyLnN0eWxlLmJvcmRlckNvbG9yID0gJyM2MDRENTMnO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZWN0UHJvamVjdCgpO1xuICAgICAgICBkaXNwbGF5VGFzayhuYW1lKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7ZWRpdFByb2plY3ROYW1lfTtcbn07XG5cbmV4cG9ydCB7cHJvamVjdEZhY3Rvcnl9XG5cbiIsIi8vIEdsb2JhYmwgdmFyaWJhbGVzXG5jb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tkcm9wJyk7XG5jb25zdCB0YXNrTGFiZWxzID0gWydUaXRsZTonLCAnRGVzY3JpcHRpb246JywgJ0RhdGU6JywgJ1RpbWU6JywgJ1ByaW9yaXR5OiddO1xuXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIHVzZXNkIHRvIGNyZWF0ZSBhbmQgYXBwZW5kIG5ldyB0YXNrcyB0byB0aGUgdGFzayB0YWJsZS4gXG5jb25zdCB0YXNrRmFjdG9yeSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5KSA9PiB7XG4gICAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RhYmxlJyk7XG4gICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCB0YXNrSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgdGFza0luZm8uaW5uZXJIVE1MID0gYCR7dGl0bGV9IDxicj4gJHtkdWVUaW1lfSAke2R1ZURhdGV9YDtcblxuLy8gQWRkaW5nIHRhc2sgdG8gdGFibGVcblxuICAgIC8vIFNldHMgYm9yZGVyIGNvbG9yIHRvIGluZGljaWF0ZSBwcmlvcml0eSBsZXZlbCBvZiBhIHRhc2sgaXRlbVxuICAgIHN3aXRjaCAocHJpb3JpdHkpIHtcbiAgICAgICAgY2FzZSAnSGlnaCc6XG4gICAgICAgICAgICB0YXNrSW5mby5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1sZWZ0OiAzcHggc29saWQgI2U2MmEwMDsnO1xuICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgY2FzZSAnTWVkaXVtJzpcbiAgICAgICAgICAgIHRhc2tJbmZvLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZmZhZjAwOyc7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdMb3cnOlxuICAgICAgICAgICAgdGFza0luZm8uc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItbGVmdDogM3B4IHNvbGlkICMwMGU2MmE7JztcbiAgICAgICAgICAgIGJyZWFrXG4gICAgfTtcblxuICAgIC8vIEFkZHMgaWNvbnMvZmVhdHVyZXMgcHJlc2VudCBpbiBhbGwgdGFzayBpdGVtc1xuICAgIGNvbnN0IGFkZFRhc2tPcHRpb25zID0gKCkgPT4ge1xuICAgICAgICBsZXQgdGFza09wdGlvbnMgPSBbJy4vaW1hZ2VzL2VkaXQuc3ZnJywgJy4vaW1hZ2VzL2ljb25zOC10cmFzaC0zMC5wbmcnLCAnLi9pbWFnZXMvaWNvbnM4LWV5ZS0zMC5wbmcnXTtcbiAgICAgICAgbGV0IGljb25OYW1lcyA9IFsnZWRpdCcsICd0cmFzaCcsICd2aWV3J107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDI7IGkrKykgeyAvLyBBZGRzIGV2ZW50IGxpc3RlbmVycyBmb3IgaWNvbiBmdW5jdGlvbiBzcGVjaWZpYyB0byB0aGUgdGFza1xuICAgICAgICAgICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCd0YXNrLWljb24nKTtcbiAgICAgICAgICAgIGltZy5zcmM9dGFza09wdGlvbnNbaV07XG4gICAgICAgICAgICBpZiAoaWNvbk5hbWVzW2ldID09PSAnZWRpdCcpIHtcbiAgICAgICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmlld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXknKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaWNvbk5hbWVzW2ldID09PSAndHJhc2gnKSB7XG4gICAgICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGVsZXRlVGFibGVSb3coKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmlld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG5ld0NlbGwuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChuZXdDZWxsKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZCh0YXNrSW5mbyk7XG4gICAgYWRkVGFza09wdGlvbnMoKTtcbiAgICB0YWJsZS5hcHBlbmRDaGlsZChuZXdSb3cpO1xuXG4vLyBNZXRob2RzXG5cbiAgICAvLyBBbGxvd3MgdXNlciB0byB2aWV3IHRoZSB0YXNrIGluZm9ybWF0aW9uIGluIGEgY2FyZCBmb3JtYXQuXG4gICAgZnVuY3Rpb24gdmlld1Rhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBkdWVUaW1lLCBwcmlvcml0eSwgZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgdmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2aWV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3ZpZXctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrRHVlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpOyBcblxuICAgICAgICBsZXQgdGFza0l0ZW1zID0gW3Rhc2tOYW1lLCB0YXNrRGVzY3JpcHRpb24sIHRhc2tEdWVEYXRlLCB0YXNrRHVlVGltZSwgdGFza1ByaW9yaXR5LCBjbG9zZUJ0bl07IC8vIExpc3QgZm9yIGFwcGVuZGluZyB0YXNrIGVsZW1lbnRzIGludG8gdmlld0NvbnRhaW5lclxuICAgICAgICB0YXNrSXRlbXMuZm9yRWFjaCh0YXNrID0+IHRhc2suY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJykpO1xuXG4gICAgICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0YXNrRHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIHRhc2tEdWVUaW1lLnRleHRDb250ZW50ID0gZHVlVGltZTtcbiAgICAgICAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG4gICAgICAgIGNsb3NlQnRuLnRleHRDb250ZW50ID0gJ0Nsb3NlJztcbiAgICAgICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXknKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlZGl0YWJsZXMgPSBlZGl0VGFzayh0YXNrTmFtZSwgdGFza0l0ZW1zKTsgLy8gTGlzdCBvZiBlZGl0YWJsZSBpbnB1dCBlbGVtZW50cyBjb3JyZXNwb25kaW5nIHRvIGVhY2ggdGFzayBjb21wb25lbnRcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGFza0luZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mby1jb250YWluZXInKTtcbiAgICAgICAgICAgIGlmICh0YXNrSXRlbXNbaV0gPT09IHRhc2tEZXNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICB0YXNrTGFiZWwuY2xhc3NMaXN0LmFkZCgndGFzay1sYWJlbCcpO1xuICAgICAgICAgICAgdGFza0xhYmVsLnRleHRDb250ZW50ID0gdGFza0xhYmVsc1tpXTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdGFza0luZm9Db250YWluZXIuYXBwZW5kKHRhc2tMYWJlbCwgZWRpdGFibGVzW2ldKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFza0luZm9Db250YWluZXIuYXBwZW5kKHRhc2tMYWJlbCwgdGFza0l0ZW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZpZXdDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0luZm9Db250YWluZXIpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZSh2aWV3Q29udGFpbmVyLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2Ryb3AnKSk7XG4gICAgfTtcblxuICAgIC8vIEFsbG93cyB1c2VycyB0byBlZGl0IHRhc2sgaW5mb3JtYXRpb24gb25jZSB0aGV5IGFyZSBhbHJlYWR5IGNyZWF0ZWQuIFRha2VzIGluIHRoZSBuYW1lIG9mIHRoZSB0YXNrIGJlaW5nIGVkaXRlZCBhbmQgYSBsaXN0IG9mIGVhY2ggdGFzayBjb21wb25lbnQgYW5kIHJldHVybnMgYSBsaXN0IG9mIGVkaXRhYmxlIGlucHV0IGVsZW1lbnRzIGZvciBlYWNoIHRhc2sgY29tcG9uZW50XG4gICAgZnVuY3Rpb24gZWRpdFRhc2sodGFza05hbWUsIHRhc2tJdGVtTGlzdCkge1xuICAgICAgICAvLyBDcmVhdGVzIHNlbGVjdCBlbGVtZW50IHRoYXQgaXMgYXZpYWxhYmxlIHdoZW4gdXNlciB3YW50cyB0byBlZGl0IHByaW9yaXR5IGxldmVsIGZyb20gY2FyZCB2aWV3XG4gICAgICAgIGxldCBwcmlvcml0eUxldmVsID0gWydIaWdoJywgJ01lZGl1bScsICdMb3cnXTtcbiAgICAgICAgY29uc3QgZWRpdGFibGVQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIHByaW9yaXR5TGV2ZWxbaV0pO1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHlMZXZlbFtpXTtcbiAgICAgICAgICAgIGVkaXRhYmxlUHJpb3JpdHkuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZXMgbmV3IGlucHV0IGVsZW1lbnRzIHRoYXQgdXNlcnMgY2FuIGVudGVyIGluZm9ybWF0aW9uIHRvIGVkaXQgdGFzayBpbmZvcm1hdGlvblxuICAgICAgICBjb25zdCBlZGl0YWJsZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBlZGl0YWJsZU5hbWUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHRpdGxlKTtcbiAgICAgICAgY29uc3QgZWRpdGFibGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRBcmVhJyk7XG4gICAgICAgIGVkaXRhYmxlRGVzY3JpcHRpb24udmFsdWUgPSBgJHtkZXNjcmlwdGlvbn1gO1xuICAgICAgICBjb25zdCBlZGl0YWJsZUR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBlZGl0YWJsZUR1ZURhdGUuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGR1ZURhdGUpO1xuICAgICAgICBlZGl0YWJsZUR1ZURhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcbiAgICAgICAgY29uc3QgZWRpdGFibGVEdWVUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZWRpdGFibGVEdWVUaW1lLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkdWVUaW1lKTtcbiAgICAgICAgZWRpdGFibGVEdWVUaW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0aW1lJyk7XG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICAgICAgXG4gICAgICAgIGxldCBlZGl0YWJsZUxpc3QgPSBbZWRpdGFibGVOYW1lLCBlZGl0YWJsZURlc2NyaXB0aW9uLCBlZGl0YWJsZUR1ZURhdGUsIGVkaXRhYmxlRHVlVGltZSwgZWRpdGFibGVQcmlvcml0eSwgc2F2ZUJ0bl07IC8vIEZvciBhcHBlbmRpbmcgZWRpdGFibGUgZWxlbWVudHMgaW50byB2aWV3IGNhcmRcbiAgICAgICAgXG4gICAgICAgIC8vIFNhdmVzIGNoYW5nZXNcbiAgICAgICAgc2F2ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZXMgbG9jYWwgc3RvcmFnZVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKS5mb3JFYWNoKHByb2plY3QgPT4geyAvLyBMb29rcyBmb3IgcHJvamVjdCBpbiBzdG9yYWdlXG4gICAgICAgICAgICAgICAgaWYgKHByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID09IFwiI0RCN0Y4RVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzdG9yZWRQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtwcm9qZWN0LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50fWApKTtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVkUHJvamVjdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2sudGl0bGUgPT0gdGFza05hbWUudGV4dENvbnRlbnQpIHsgLy8gSXRlcmF0ZXMgdGhyb3VnaCB0aGUgdGFzayBhbmQgdXBkYXRlcyBlYWNoIHByb3BlcnR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBPYmplY3Qua2V5cyh0YXNrKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGFzaylbaV0gPT0gJ3RpdGxlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay50aXRsZSA9IGVkaXRhYmxlTmFtZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyh0YXNrKVtpXSA9PSAnZGVzY3JpcHRpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZWRpdGFibGVEZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyh0YXNrKVtpXSA9PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGF0ZSA9IGVkaXRhYmxlRHVlRGF0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyh0YXNrKVtpXSA9PSAndGltZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sudGltZSA9IGVkaXRhYmxlRHVlVGltZS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyh0YXNrKVtpXSA9PSAncHJpb3JpdHknKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gZWRpdGFibGVQcmlvcml0eS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJvamVjdC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudH1gLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0KSk7IC8vIFNhdmVzIGNoYW5nZXMgaW4gbG9jYWwgc3RvcmFnZXNcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGFibGUnKS5pbm5lckhUTUwgPSAnJzsgIC8vIENsZWFycyBhbmQgdXBkYXRlcyB0YXNrIHRhYmxlIHRvIHJlZmxlY3QgY2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICBzdG9yZWRQcm9qZWN0LmZvckVhY2godGFzayA9PiB0YXNrRmFjdG9yeSh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmRhdGUsIHRhc2sudGltZSwgdGFzay5wcmlvcml0eSkpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrSXRlbUxpc3QuZm9yRWFjaCgodGFzaywgaW5kZXgpID0+IHRhc2sudGV4dENvbnRlbnQgPSBgJHtlZGl0YWJsZUxpc3RbaW5kZXhdLnZhbHVlfWApO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBDbG9zZXMgdGFzayB2aWV3XG4gICAgICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXknKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctY29udGFpbmVyJykpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWRpdGFibGVMaXN0XG4gICAgfTtcblxuICAgIC8vIFJlbW92ZXMgYSByb3cgZnJvbSB0YWJsZVxuICAgIGZ1bmN0aW9uIGRlbGV0ZVRhYmxlUm93KCkge1xuICAgICAgICB0YWJsZS5yZW1vdmVDaGlsZChuZXdSb3cpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keScpLmZvckVhY2gocHJvamVjdCA9PiB7IC8vIFJlbW92ZXMgdGFzayBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGlmIChwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSBcIiNEQjdGOEVcIikge1xuICAgICAgICAgICAgICAgIGxldCBzdG9yZWRQcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtwcm9qZWN0LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50fWApKTtcbiAgICAgICAgICAgICAgICBzdG9yZWRQcm9qZWN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnRpdGxlID09IGAke3RpdGxlfWApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHN0b3JlZFByb2plY3Quc3BsaWNlKHN0b3JlZFByb2plY3QuaW5kZXhPZih0YXNrKSwgMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7cHJvamVjdC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudH1gICwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkUHJvamVjdCkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn07XG5cbmV4cG9ydCB7dGFza0ZhY3Rvcnl9OyIsIi8vR2xvYmFsIFZhcmlhYmxlc1xuY29uc3QgdGFza3MgPSBPYmplY3QudmFsdWVzKGxvY2FsU3RvcmFnZSk7XG5cbi8vRnVuY3Rpb25zXG5cbi8vIFRha2VzIGluIGEgbGlzdCBvZiB0YXNrcyBhbmQgc29ydHMgdGhlbSBpbiBvcmRlciBieSBkYXRlIGFzY2VuZGluZ1xuZnVuY3Rpb24gc29ydEFsbFRhc2tzQnlEYXRlKGxpc3QpIHtcbiAgICBsaXN0LnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEuZGF0ZSA+IGIuZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSBpZiAoYS5kYXRlID09PSBiLmRhdGUpIHtcbiAgICAgICAgICAgIGlmIChhLnRpbWUgPiBiLnRpbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7cmV0dXJuIC0xfVxuICAgICAgICB9IGVsc2Uge3JldHVybiAtMX1cbiAgICB9KTtcbn07XG5cbi8vIFRha2VzIGluIGEgbGlzdCBhbmQgcmV0dXJucyBhIGxpc3Qgb2YgdGFza3MgdGhhdCBoYXZlIGR1ZSBkYXRlcyB0aGF0IG1hdGNoIHRoZSBjdXJyZW50IGRhdGVcbmZ1bmN0aW9uIGRpc3BsYXlUb2RheVRhc2tzKGxpc3QpIHtcbiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDEwKTtcbiAgICBsZXQgdG9kYXlzVGFza3MgPSBbXTtcbiAgICBsaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGlmICh0YXNrLmRhdGUgPT0gY3VycmVudERhdGUpIHtcbiAgICAgICAgICAgIHRvZGF5c1Rhc2tzLnB1c2godGFzayk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdG9kYXlzVGFza3M7XG59O1xuXG4vLyBUYWtlcyBpbiBhIGxpc3QgYW5kIHJldHVybnMgYSBsaXN0IG9mIHRhc2tzIHRoYXQgaGF2ZSBkdWUgZGF0ZXMgd2l0aGluIGEgd2VlayBmcm9tIHRoZSBjdXJyZW50IGRhdGVcbmZ1bmN0aW9uIGRpc3BsYXlXZWVrVGFza3MobGlzdCkge1xuICAgIGxldCB3ZWVrVGFza3MgPSBbXTtcbiAgICBsZXQgd2Vla091dERhdGVzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7IGkrKykgeyAvLyBUbyBnZXQgYWxsIGRhdGVzIGEgd2VlayBmcm9tIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgICAgd2Vla091dERhdGVzLnB1c2gobmV3IERhdGUoRGF0ZS5ub3coKSArIGkgKiAyNCAqIDYwICogNjAgKiAxMDAwKS50b0pTT04oKS5zbGljZSgwLCAxMCkgKVxuICAgIH07XG4gICAgbGlzdC5mb3JFYWNoKHRhc2sgPT4geyAvLyBDaGVja3MgaWYgYSB0YXNrJ3MgZGF0ZSBpcyB3aXRoaW4gYSB3ZWVrIG9mIHRoZSBjdXJyZW50IGRhdGUgYnkgY29tcGFyaW5nIHRoZSB0YXNrIGRhdGUgdG8gZWFjaCBkYXRlIDcgZGF5cyBvdXRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWVrT3V0RGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0YXNrLmRhdGUgPT0gd2Vla091dERhdGVzW2ldKSB7d2Vla1Rhc2tzLnB1c2godGFzayl9O1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHdlZWtUYXNrcztcbn07XG5cbi8vIFRha2VzIGluIGEgbGlzdCBhbmQgcmV0dXJucyBhIGxpc3Qgb2YgdGFza3MgdGhhdCBoYXZlIGR1ZSBkYXRlcyB3aXRoaW4gYSBtb250aCBmcm9tIHRoZSBjdXJyZW50IGRhdGVcbmZ1bmN0aW9uIGRpc3BsYXlNb250aFRhc2tzKGxpc3QpIHtcbiAgICBsZXQgbW9udGhUYXNrcyA9IFtdO1xuICAgIGxldCBtb250aE91dERhdGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7IC8vIFRvIGdldCBhbGwgZGF0ZXMgYSBtb250aCBmcm9tIHRoZSBjdXJyZW50IGRhdGVcbiAgICAgICAgbW9udGhPdXREYXRlcy5wdXNoKG5ldyBEYXRlKERhdGUubm93KCkgKyBpICogMjQgKiA2MCAqIDYwICogMTAwMCkudG9KU09OKCkuc2xpY2UoMCwgMTApIClcbiAgICB9O1xuICAgIGxpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb250aE91dERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFzay5kYXRlID09IG1vbnRoT3V0RGF0ZXNbaV0pIHttb250aFRhc2tzLnB1c2godGFzayl9O1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG1vbnRoVGFza3M7XG59O1xuXG4vLyBUYWtlcyBpbiBhIGxpc3QgYW5kIHJldHVybnMgYSBsaXN0IG9mIHRhc2tzIGFyZSBvcmRlcmVkIGJ5IGhpZ2hlc3QgdG8gbG93ZXN0IHByaW9yaXJ0eVxuZnVuY3Rpb24gZGlzcGxheUJ5UHJpb3JpdHkobGlzdCkge1xuICAgIGxldCBwcmlvcml0eVRhc2tzID0gW107XG4gICAgY29uc3QgcHJpb3JpdHlMZXZlbHMgPSBbJ0hpZ2gnLCAnTWVkaXVtJywgJ0xvdyddO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJpb3JpdHlMZXZlbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlzdC5mb3JFYWNoKHRhc2sgPT4geyAvLyBJdGVyYXRlcyB0aHJvdWdoIHRhc2sgbGlzdCBhbmQgYXBwZW5kcyB0YXNrcyB3aXRoIGhpZ2hlc3QgcHJpb3JpdHkgZmlyc3QgZm9sbG93ZWQgYnkgbWVkaXVtIGFuZCBsb3dcbiAgICAgICAgICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSBwcmlvcml0eUxldmVsc1tpXSkge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5VGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gcHJpb3JpdHlUYXNrcztcbn07XG5cblxuZXhwb3J0IHtzb3J0QWxsVGFza3NCeURhdGUsIGRpc3BsYXlUb2RheVRhc2tzLCBkaXNwbGF5V2Vla1Rhc2tzLCBkaXNwbGF5TW9udGhUYXNrcywgZGlzcGxheUJ5UHJpb3JpdHl9O1xuXG5cblxuXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9