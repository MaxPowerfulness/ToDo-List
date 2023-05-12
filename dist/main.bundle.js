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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'micro';\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\n/* CSS reset and general rules */\n* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: 'micro', sans-serif, 'Times New Roman', Times, serif;\n    color: rgb(39, 39, 39);\n}\n\nhtml, body {\n    height: 100%;\n    background: var(--rose-quartz);\n}\n\nul {\n    list-style: none;\n}\n\nbutton {\n    background-color: var(--misty-rose);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--brown);\n    padding: 2px 5px;\n}\n\nbutton:hover,\n.nav-filters li:hover,\n.new-project:hover,\ntbody:hover,\n.new-task,\n.task-icon:hover,\ntr:hover {\n    cursor: grab;\n}\n\n/* Custom variables */\n:root {\n    --section-space: 15px;\n    --small-spacing: 10px;\n    --med-spacing: 25px;\n    --large-spacing: 40px;\n    --border-radius: 10px;\n    --misty-rose: #ffdbda;\n    --grey: #9da3a4;\n    --french-grey: #D5C5C8;\n    --lighter-french: #E5DCDD;\n    --pink: #DB7F8E;\n    --rose-quartz: #C3ACAC;\n    --brown: #604D53;\n    --light-brown: rgb(96, 77, 83, 0.7);\n}\n\n/* Header */\nheader {\n    display: flex;\n    align-items: center;\n    background-color: var(--pink);\n    height: 10%;\n    border-bottom: 2px solid rgba(0,0,0,0.7);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n    gap: var(--small-spacing)\n}\n\nheader img {\n    width: 60px;\n    height: 60px;\n    margin-left: var(--med-spacing);\n}\n\nheader strong {\n    font-size: 40px;\n    color: rgb(0, 0, 0);\n}\n\n/* Nav Bar */\nnav {\n    position: fixed;\n    background-color: var(--french-grey);\n    width: 16.5%;\n    height: 90vh;\n    border-right: 2px solid rgba(0,0,0,0.7);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n    padding: var(--small-spacing);\n}\n\n.nav-filters {\n    padding: var(--med-spacing) 0px var(--med-spacing) var(--section-space);\n}\n\n.nav-filters li {\n    margin-bottom: var(--section-space);\n    background-color: var(--rose-quartz);\n    padding: var(--small-spacing);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--brown);\n    transition: background-color 0.2s linear, border-color 0.2s linear;\n}\n\n.project-header {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px black solid;\n    padding: 0px var(--section-space) 0px var(--section-space);\n}\n\n\n#projectTable {\n    border-collapse: separate;\n    display: block;\n    border-spacing: 0 10px;\n    padding: 0px 0px var(--med-spacing) var(--section-space);\n    height: 400px;\n    overflow: auto;\n}\n\ntbody {\n    background-color: var(--rose-quartz);\n    transition: background-color 0.2s linear;\n}\n\n#projectTable tbody > tr > td {\n    transition: border-color 0.2s linear;\n    padding: 5px;\n}\n\n#projectTable tbody:hover > tr > td {\n    border-color: aqua;\n}\n\n#projectTable td {\n    border-top: 1px solid var(--brown);\n    border-bottom: 1px solid var(--brown);\n}\n\n#projectTable td:first-child {\n    border-left: 1px solid var(--brown);\n    border-top-left-radius: var(--border-radius); \n    border-bottom-left-radius: var(--border-radius); \n    width: 65%;\n}\n\n#projectTable td:last-child {\n    border-right: 1px solid var(--brown);\n    border-bottom-right-radius: var(--border-radius); \n    border-top-right-radius: var(--border-radius);\n}\n\n/* Main */\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 83.5%;\n    margin-left: 15%;\n}\n\nmain h1 {\n    padding-top: var(--section-space);\n}\n\n.task-bar{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: var(--section-space);\n    border-bottom: 1px grey solid;\n    width: 70%;\n}\n\n.new-task {\n    display: none;\n}\n\n#taskTable {\n    width: 70%;\n    padding-top: 5px;\n    border-collapse: collapse;\n}\n\n\n#taskTable td {\n    padding: 5px;\n    position: relative;\n}\n\n#taskTable td:not(:first-child) {\n    width: 40px;\n    height: 40px;\n}\n\n.strike td:before {\n    content: \" \";\n    position: absolute;\n    top: 50%;\n    left: 0;\n    border-bottom: 1px solid #111;\n    width: 100%;\n}\n\n.strike td {\n    background-color: rgb(255, 255, 255, 0.1);\n}\n\n\n/* Forms and Task View */\n@keyframes popup {\n    from {\n        transform: scale(0);\n    }\n    to {\n        transform: scale(1.5);\n    }\n}\n\n.form-container {\n    display: none;\n}\n\n#taskItemFormContainer,\n#projectFormContainer {\n    position: fixed;\n    top: 30%;\n    border: 2px solid var(--brown);\n    animation-name: popup;\n    animation-duration: 0.5s;\n    transform: scale(1.5);\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    background-color: var(--pink);\n    padding: var(--small-spacing);\n    border-radius: var(--border-radius);\n}\n\n#taskItemFormContainer {\n    z-index: 2;\n    width: 20%;\n    margin-left: -10%;  \n    left: 50%;\n}\n\n#projectFormContainer {\n    z-index: 3;\n    width: 15%;\n    margin-left: -7.5%;  \n    left: 50%;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: var(--section-space);\n}\n\ninput[type=text] {\n    padding-left: 2px;\n}\n\nlabel textarea {\n    vertical-align: middle;\n}\n\n\n.view-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--med-spacing); \n    padding: var(--med-spacing) var(--section-space) var(--section-space) var(--section-space);\n    position: fixed;\n    left: 50%;\n    top: 30%;\n    margin-left: -7.5%;   \n    width: 350px;\n    height: 400px;\n    z-index: 2;\n    background-color: var(--pink);\n    border: 3px solid var(--brown);\n    border-radius: var(--border-radius);\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.task-item {\n    width: 200px;\n}\n\n.task-label {\n    width: 100px;\n}\n\n.task-info-container {\n    display: flex;\n    height: 50px;\n    gap: var(--large-spacing);\n    padding-bottom: var(--section-space);\n    border-bottom: 1px solid var(--light-brown);\n}\n\n.task-info-container textarea {\n    height: 42px;\n    width: 160px;\n}\n\n.view-container button {\n    width: 15%;\n    align-self: flex-end;\n}\n\n.description {\n    height: 70px;\n}\n\n.description .task-item {\n    overflow-y: scroll;\n    font-size: 12px;\n    height: 60px;\n}\n\n.overlay {\n    display: block;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%;\n    background: rgba(255, 255, 255, 0.8);\n    z-index: 1;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n    font-family: 'micro';\n    src: url('../MicroFLF.ttf');\n}\n\n/* CSS reset and general rules */\n* {\n    margin: 0px;\n    padding: 0px;\n    box-sizing: border-box;\n    font-family: 'micro', sans-serif, 'Times New Roman', Times, serif;\n    color: rgb(39, 39, 39);\n}\n\nhtml, body {\n    height: 100%;\n    background: var(--rose-quartz);\n}\n\nul {\n    list-style: none;\n}\n\nbutton {\n    background-color: var(--misty-rose);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--brown);\n    padding: 2px 5px;\n}\n\nbutton:hover,\n.nav-filters li:hover,\n.new-project:hover,\ntbody:hover,\n.new-task,\n.task-icon:hover,\ntr:hover {\n    cursor: grab;\n}\n\n/* Custom variables */\n:root {\n    --section-space: 15px;\n    --small-spacing: 10px;\n    --med-spacing: 25px;\n    --large-spacing: 40px;\n    --border-radius: 10px;\n    --misty-rose: #ffdbda;\n    --grey: #9da3a4;\n    --french-grey: #D5C5C8;\n    --lighter-french: #E5DCDD;\n    --pink: #DB7F8E;\n    --rose-quartz: #C3ACAC;\n    --brown: #604D53;\n    --light-brown: rgb(96, 77, 83, 0.7);\n}\n\n/* Header */\nheader {\n    display: flex;\n    align-items: center;\n    background-color: var(--pink);\n    height: 10%;\n    border-bottom: 2px solid rgba(0,0,0,0.7);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n    gap: var(--small-spacing)\n}\n\nheader img {\n    width: 60px;\n    height: 60px;\n    margin-left: var(--med-spacing);\n}\n\nheader strong {\n    font-size: 40px;\n    color: rgb(0, 0, 0);\n}\n\n/* Nav Bar */\nnav {\n    position: fixed;\n    background-color: var(--french-grey);\n    width: 16.5%;\n    height: 90vh;\n    border-right: 2px solid rgba(0,0,0,0.7);\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n    padding: var(--small-spacing);\n}\n\n.nav-filters {\n    padding: var(--med-spacing) 0px var(--med-spacing) var(--section-space);\n}\n\n.nav-filters li {\n    margin-bottom: var(--section-space);\n    background-color: var(--rose-quartz);\n    padding: var(--small-spacing);\n    border-radius: var(--border-radius);\n    border: 1px solid var(--brown);\n    transition: background-color 0.2s linear, border-color 0.2s linear;\n}\n\n.project-header {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px black solid;\n    padding: 0px var(--section-space) 0px var(--section-space);\n}\n\n\n#projectTable {\n    border-collapse: separate;\n    display: block;\n    border-spacing: 0 10px;\n    padding: 0px 0px var(--med-spacing) var(--section-space);\n    height: 400px;\n    overflow: auto;\n}\n\ntbody {\n    background-color: var(--rose-quartz);\n    transition: background-color 0.2s linear;\n}\n\n#projectTable tbody > tr > td {\n    transition: border-color 0.2s linear;\n    padding: 5px;\n}\n\n#projectTable tbody:hover > tr > td {\n    border-color: aqua;\n}\n\n#projectTable td {\n    border-top: 1px solid var(--brown);\n    border-bottom: 1px solid var(--brown);\n}\n\n#projectTable td:first-child {\n    border-left: 1px solid var(--brown);\n    border-top-left-radius: var(--border-radius); \n    border-bottom-left-radius: var(--border-radius); \n    width: 65%;\n}\n\n#projectTable td:last-child {\n    border-right: 1px solid var(--brown);\n    border-bottom-right-radius: var(--border-radius); \n    border-top-right-radius: var(--border-radius);\n}\n\n/* Main */\nmain {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 83.5%;\n    margin-left: 15%;\n}\n\nmain h1 {\n    padding-top: var(--section-space);\n}\n\n.task-bar{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: var(--section-space);\n    border-bottom: 1px grey solid;\n    width: 70%;\n}\n\n.new-task {\n    display: none;\n}\n\n#taskTable {\n    width: 70%;\n    padding-top: 5px;\n    border-collapse: collapse;\n}\n\n\n#taskTable td {\n    padding: 5px;\n    position: relative;\n}\n\n#taskTable td:not(:first-child) {\n    width: 40px;\n    height: 40px;\n}\n\n.strike td:before {\n    content: \" \";\n    position: absolute;\n    top: 50%;\n    left: 0;\n    border-bottom: 1px solid #111;\n    width: 100%;\n}\n\n.strike td {\n    background-color: rgb(255, 255, 255, 0.1);\n}\n\n\n/* Forms and Task View */\n@keyframes popup {\n    from {\n        transform: scale(0);\n    }\n    to {\n        transform: scale(1.5);\n    }\n}\n\n.form-container {\n    display: none;\n}\n\n#taskItemFormContainer,\n#projectFormContainer {\n    position: fixed;\n    top: 30%;\n    border: 2px solid var(--brown);\n    animation-name: popup;\n    animation-duration: 0.5s;\n    transform: scale(1.5);\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);\n    background-color: var(--pink);\n    padding: var(--small-spacing);\n    border-radius: var(--border-radius);\n}\n\n#taskItemFormContainer {\n    z-index: 2;\n    width: 20%;\n    margin-left: -10%;  \n    left: 50%;\n}\n\n#projectFormContainer {\n    z-index: 3;\n    width: 15%;\n    margin-left: -7.5%;  \n    left: 50%;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: var(--section-space);\n}\n\ninput[type=text] {\n    padding-left: 2px;\n}\n\nlabel textarea {\n    vertical-align: middle;\n}\n\n\n.view-container {\n    display: flex;\n    flex-direction: column;\n    gap: var(--med-spacing); \n    padding: var(--med-spacing) var(--section-space) var(--section-space) var(--section-space);\n    position: fixed;\n    left: 50%;\n    top: 30%;\n    margin-left: -7.5%;   \n    width: 350px;\n    height: 400px;\n    z-index: 2;\n    background-color: var(--pink);\n    border: 3px solid var(--brown);\n    border-radius: var(--border-radius);\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.task-item {\n    width: 200px;\n}\n\n.task-label {\n    width: 100px;\n}\n\n.task-info-container {\n    display: flex;\n    height: 50px;\n    gap: var(--large-spacing);\n    padding-bottom: var(--section-space);\n    border-bottom: 1px solid var(--light-brown);\n}\n\n.task-info-container textarea {\n    height: 42px;\n    width: 160px;\n}\n\n.view-container button {\n    width: 15%;\n    align-self: flex-end;\n}\n\n.description {\n    height: 70px;\n}\n\n.description .task-item {\n    overflow-y: scroll;\n    font-size: 12px;\n    height: 60px;\n}\n\n.overlay {\n    display: block;\n    position: fixed;\n    top: 0px;\n    left: 0px;\n    height: 100%;\n    width: 100%;\n    background: rgba(255, 255, 255, 0.8);\n    z-index: 1;\n}"],"sourceRoot":""}]);
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
    
    // Adds line through task to indicate completion
    newRow.addEventListener('click', () => newRow.classList.toggle('strike'));
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay1pdGVtcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2stc29ydC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vTWljcm9GTEYudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWljcm8nO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxufVxcblxcbi8qIENTUyByZXNldCBhbmQgZ2VuZXJhbCBydWxlcyAqL1xcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBmb250LWZhbWlseTogJ21pY3JvJywgc2Fucy1zZXJpZiwgJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZjtcXG4gICAgY29sb3I6IHJnYigzOSwgMzksIDM5KTtcXG59XFxuXFxuaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcm9zZS1xdWFydHopO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pc3R5LXJvc2UpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBwYWRkaW5nOiAycHggNXB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIsXFxuLm5hdi1maWx0ZXJzIGxpOmhvdmVyLFxcbi5uZXctcHJvamVjdDpob3ZlcixcXG50Ym9keTpob3ZlcixcXG4ubmV3LXRhc2ssXFxuLnRhc2staWNvbjpob3ZlcixcXG50cjpob3ZlciB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLyogQ3VzdG9tIHZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gICAgLS1zZWN0aW9uLXNwYWNlOiAxNXB4O1xcbiAgICAtLXNtYWxsLXNwYWNpbmc6IDEwcHg7XFxuICAgIC0tbWVkLXNwYWNpbmc6IDI1cHg7XFxuICAgIC0tbGFyZ2Utc3BhY2luZzogNDBweDtcXG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAtLW1pc3R5LXJvc2U6ICNmZmRiZGE7XFxuICAgIC0tZ3JleTogIzlkYTNhNDtcXG4gICAgLS1mcmVuY2gtZ3JleTogI0Q1QzVDODtcXG4gICAgLS1saWdodGVyLWZyZW5jaDogI0U1RENERDtcXG4gICAgLS1waW5rOiAjREI3RjhFO1xcbiAgICAtLXJvc2UtcXVhcnR6OiAjQzNBQ0FDO1xcbiAgICAtLWJyb3duOiAjNjA0RDUzO1xcbiAgICAtLWxpZ2h0LWJyb3duOiByZ2IoOTYsIDc3LCA4MywgMC43KTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmdiYSgwLDAsMCwwLjcpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcbiAgICBnYXA6IHZhcigtLXNtYWxsLXNwYWNpbmcpXFxufVxcblxcbmhlYWRlciBpbWcge1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tbWVkLXNwYWNpbmcpO1xcbn1cXG5cXG5oZWFkZXIgc3Ryb25nIHtcXG4gICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xcbn1cXG5cXG4vKiBOYXYgQmFyICovXFxubmF2IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mcmVuY2gtZ3JleSk7XFxuICAgIHdpZHRoOiAxNi41JTtcXG4gICAgaGVpZ2h0OiA5MHZoO1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDAsMCwwLDAuNyk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNtYWxsLXNwYWNpbmcpO1xcbn1cXG5cXG4ubmF2LWZpbHRlcnMge1xcbiAgICBwYWRkaW5nOiB2YXIoLS1tZWQtc3BhY2luZykgMHB4IHZhcigtLW1lZC1zcGFjaW5nKSB2YXIoLS1zZWN0aW9uLXNwYWNlKTtcXG59XFxuXFxuLm5hdi1maWx0ZXJzIGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvc2UtcXVhcnR6KTtcXG4gICAgcGFkZGluZzogdmFyKC0tc21hbGwtc3BhY2luZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBsaW5lYXIsIGJvcmRlci1jb2xvciAwLjJzIGxpbmVhcjtcXG59XFxuXFxuLnByb2plY3QtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XFxuICAgIHBhZGRpbmc6IDBweCB2YXIoLS1zZWN0aW9uLXNwYWNlKSAwcHggdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxufVxcblxcblxcbiNwcm9qZWN0VGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDAgMTBweDtcXG4gICAgcGFkZGluZzogMHB4IDBweCB2YXIoLS1tZWQtc3BhY2luZykgdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG50Ym9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJvc2UtcXVhcnR6KTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhcjtcXG59XFxuXFxuI3Byb2plY3RUYWJsZSB0Ym9keSA+IHRyID4gdGQge1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBsaW5lYXI7XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3Byb2plY3RUYWJsZSB0Ym9keTpob3ZlciA+IHRyID4gdGQge1xcbiAgICBib3JkZXItY29sb3I6IGFxdWE7XFxufVxcblxcbiNwcm9qZWN0VGFibGUgdGQge1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYnJvd24pO1xcbn1cXG5cXG4jcHJvamVjdFRhYmxlIHRkOmZpcnN0LWNoaWxkIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpOyBcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7IFxcbiAgICB3aWR0aDogNjUlO1xcbn1cXG5cXG4jcHJvamVjdFRhYmxlIHRkOmxhc3QtY2hpbGQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTsgXFxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuLyogTWFpbiAqL1xcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogODMuNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XFxufVxcblxcbm1haW4gaDEge1xcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxufVxcblxcbi50YXNrLWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggZ3JleSBzb2xpZDtcXG4gICAgd2lkdGg6IDcwJTtcXG59XFxuXFxuLm5ldy10YXNrIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2tUYWJsZSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHBhZGRpbmctdG9wOiA1cHg7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcblxcbiN0YXNrVGFibGUgdGQge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuI3Rhc2tUYWJsZSB0ZDpub3QoOmZpcnN0LWNoaWxkKSB7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5zdHJpa2UgdGQ6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIiBcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzExMTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zdHJpa2UgdGQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC4xKTtcXG59XFxuXFxuXFxuLyogRm9ybXMgYW5kIFRhc2sgVmlldyAqL1xcbkBrZXlmcmFtZXMgcG9wdXAge1xcbiAgICBmcm9tIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICB9XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiN0YXNrSXRlbUZvcm1Db250YWluZXIsXFxuI3Byb2plY3RGb3JtQ29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYnJvd24pO1xcbiAgICBhbmltYXRpb24tbmFtZTogcG9wdXA7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMiksMCA2cHggMjBweCAwIHJnYmEoMCwwLDAsMC4xOSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1zcGFjaW5nKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbiN0YXNrSXRlbUZvcm1Db250YWluZXIge1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB3aWR0aDogMjAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwJTsgIFxcbiAgICBsZWZ0OiA1MCU7XFxufVxcblxcbiNwcm9qZWN0Rm9ybUNvbnRhaW5lciB7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIHdpZHRoOiAxNSU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNy41JTsgIFxcbiAgICBsZWZ0OiA1MCU7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XFxufVxcblxcbmxhYmVsIHRleHRhcmVhIHtcXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG59XFxuXFxuXFxuLnZpZXctY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiB2YXIoLS1tZWQtc3BhY2luZyk7IFxcbiAgICBwYWRkaW5nOiB2YXIoLS1tZWQtc3BhY2luZykgdmFyKC0tc2VjdGlvbi1zcGFjZSkgdmFyKC0tc2VjdGlvbi1zcGFjZSkgdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDMwJTtcXG4gICAgbWFyZ2luLWxlZnQ6IC03LjUlOyAgIFxcbiAgICB3aWR0aDogMzUwcHg7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBpbmspO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1icm93bik7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IC0xMnB4IDMwcHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxufVxcblxcbi50YXNrLWl0ZW0ge1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi50YXNrLWxhYmVsIHtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZ2FwOiB2YXIoLS1sYXJnZS1zcGFjaW5nKTtcXG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tbGlnaHQtYnJvd24pO1xcbn1cXG5cXG4udGFzay1pbmZvLWNvbnRhaW5lciB0ZXh0YXJlYSB7XFxuICAgIGhlaWdodDogNDJweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbn1cXG5cXG4udmlldy1jb250YWluZXIgYnV0dG9uIHtcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICAgIGhlaWdodDogNzBweDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIC50YXNrLWl0ZW0ge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMHB4O1xcbiAgICBsZWZ0OiAwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcXG4gICAgei1pbmRleDogMTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLG9CQUFvQjtJQUNwQiw0Q0FBMkI7QUFDL0I7O0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUVBQWlFO0lBQ2pFLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlB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UztBQUNiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMEZBQTBGO0lBQzFGLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IsOEJBQThCO0lBQzlCLG1DQUFtQztJQUNuQyx1TEFBdUw7QUFDM0w7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQywyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsb0NBQW9DO0lBQ3BDLFVBQVU7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdtaWNybyc7XFxuICAgIHNyYzogdXJsKCcuLi9NaWNyb0ZMRi50dGYnKTtcXG59XFxuXFxuLyogQ1NTIHJlc2V0IGFuZCBnZW5lcmFsIHJ1bGVzICovXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiAnbWljcm8nLCBzYW5zLXNlcmlmLCAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xcbiAgICBjb2xvcjogcmdiKDM5LCAzOSwgMzkpO1xcbn1cXG5cXG5odG1sLCBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yb3NlLXF1YXJ0eik7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWlzdHktcm9zZSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxuICAgIHBhZGRpbmc6IDJweCA1cHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlcixcXG4ubmF2LWZpbHRlcnMgbGk6aG92ZXIsXFxuLm5ldy1wcm9qZWN0OmhvdmVyLFxcbnRib2R5OmhvdmVyLFxcbi5uZXctdGFzayxcXG4udGFzay1pY29uOmhvdmVyLFxcbnRyOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4vKiBDdXN0b20gdmFyaWFibGVzICovXFxuOnJvb3Qge1xcbiAgICAtLXNlY3Rpb24tc3BhY2U6IDE1cHg7XFxuICAgIC0tc21hbGwtc3BhY2luZzogMTBweDtcXG4gICAgLS1tZWQtc3BhY2luZzogMjVweDtcXG4gICAgLS1sYXJnZS1zcGFjaW5nOiA0MHB4O1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC0tbWlzdHktcm9zZTogI2ZmZGJkYTtcXG4gICAgLS1ncmV5OiAjOWRhM2E0O1xcbiAgICAtLWZyZW5jaC1ncmV5OiAjRDVDNUM4O1xcbiAgICAtLWxpZ2h0ZXItZnJlbmNoOiAjRTVEQ0REO1xcbiAgICAtLXBpbms6ICNEQjdGOEU7XFxuICAgIC0tcm9zZS1xdWFydHo6ICNDM0FDQUM7XFxuICAgIC0tYnJvd246ICM2MDRENTM7XFxuICAgIC0tbGlnaHQtYnJvd246IHJnYig5NiwgNzcsIDgzLCAwLjcpO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1waW5rKTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDAsMCwwLDAuNyk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDNweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4yMykgMHB4IDNweCA2cHg7XFxuICAgIGdhcDogdmFyKC0tc21hbGwtc3BhY2luZylcXG59XFxuXFxuaGVhZGVyIGltZyB7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1tZWQtc3BhY2luZyk7XFxufVxcblxcbmhlYWRlciBzdHJvbmcge1xcbiAgICBmb250LXNpemU6IDQwcHg7XFxuICAgIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxufVxcblxcbi8qIE5hdiBCYXIgKi9cXG5uYXYge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZyZW5jaC1ncmV5KTtcXG4gICAgd2lkdGg6IDE2LjUlO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHJnYmEoMCwwLDAsMC43KTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXG4gICAgcGFkZGluZzogdmFyKC0tc21hbGwtc3BhY2luZyk7XFxufVxcblxcbi5uYXYtZmlsdGVycyB7XFxuICAgIHBhZGRpbmc6IHZhcigtLW1lZC1zcGFjaW5nKSAwcHggdmFyKC0tbWVkLXNwYWNpbmcpIHZhcigtLXNlY3Rpb24tc3BhY2UpO1xcbn1cXG5cXG4ubmF2LWZpbHRlcnMgbGkge1xcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zZWN0aW9uLXNwYWNlKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZS1xdWFydHopO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1zbWFsbC1zcGFjaW5nKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGxpbmVhciwgYm9yZGVyLWNvbG9yIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBibGFjayBzb2xpZDtcXG4gICAgcGFkZGluZzogMHB4IHZhcigtLXNlY3Rpb24tc3BhY2UpIDBweCB2YXIoLS1zZWN0aW9uLXNwYWNlKTtcXG59XFxuXFxuXFxuI3Byb2plY3RUYWJsZSB7XFxuICAgIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBib3JkZXItc3BhY2luZzogMCAxMHB4O1xcbiAgICBwYWRkaW5nOiAwcHggMHB4IHZhcigtLW1lZC1zcGFjaW5nKSB2YXIoLS1zZWN0aW9uLXNwYWNlKTtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbnRib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcm9zZS1xdWFydHopO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgbGluZWFyO1xcbn1cXG5cXG4jcHJvamVjdFRhYmxlIHRib2R5ID4gdHIgPiB0ZCB7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGxpbmVhcjtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jcHJvamVjdFRhYmxlIHRib2R5OmhvdmVyID4gdHIgPiB0ZCB7XFxuICAgIGJvcmRlci1jb2xvcjogYXF1YTtcXG59XFxuXFxuI3Byb2plY3RUYWJsZSB0ZCB7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1icm93bik7XFxufVxcblxcbiNwcm9qZWN0VGFibGUgdGQ6Zmlyc3QtY2hpbGQge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7IFxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTsgXFxuICAgIHdpZHRoOiA2NSU7XFxufVxcblxcbiNwcm9qZWN0VGFibGUgdGQ6bGFzdC1jaGlsZCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJyb3duKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpOyBcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4vKiBNYWluICovXFxubWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA4My41JTtcXG4gICAgbWFyZ2luLWxlZnQ6IDE1JTtcXG59XFxuXFxubWFpbiBoMSB7XFxuICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zZWN0aW9uLXNwYWNlKTtcXG59XFxuXFxuLnRhc2stYmFye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBncmV5IHNvbGlkO1xcbiAgICB3aWR0aDogNzAlO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jdGFza1RhYmxlIHtcXG4gICAgd2lkdGg6IDcwJTtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuXFxuI3Rhc2tUYWJsZSB0ZCB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4jdGFza1RhYmxlIHRkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG59XFxuXFxuLnN0cmlrZSB0ZDpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiIFxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTExO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnN0cmlrZSB0ZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1LCAwLjEpO1xcbn1cXG5cXG5cXG4vKiBGb3JtcyBhbmQgVGFzayBWaWV3ICovXFxuQGtleWZyYW1lcyBwb3B1cCB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgfVxcbiAgICB0byB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIH1cXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuI3Rhc2tJdGVtRm9ybUNvbnRhaW5lcixcXG4jcHJvamVjdEZvcm1Db250YWluZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMzAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1icm93bik7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBwb3B1cDtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XFxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwwLDAsMC4yKSwwIDZweCAyMHB4IDAgcmdiYSgwLDAsMCwwLjE5KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNtYWxsLXNwYWNpbmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG59XFxuXFxuI3Rhc2tJdGVtRm9ybUNvbnRhaW5lciB7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIHdpZHRoOiAyMCU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTAlOyAgXFxuICAgIGxlZnQ6IDUwJTtcXG59XFxuXFxuI3Byb2plY3RGb3JtQ29udGFpbmVyIHtcXG4gICAgei1pbmRleDogMztcXG4gICAgd2lkdGg6IDE1JTtcXG4gICAgbWFyZ2luLWxlZnQ6IC03LjUlOyAgXFxuICAgIGxlZnQ6IDUwJTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDJweDtcXG59XFxuXFxubGFiZWwgdGV4dGFyZWEge1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG5cXG5cXG4udmlldy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IHZhcigtLW1lZC1zcGFjaW5nKTsgXFxuICAgIHBhZGRpbmc6IHZhcigtLW1lZC1zcGFjaW5nKSB2YXIoLS1zZWN0aW9uLXNwYWNlKSB2YXIoLS1zZWN0aW9uLXNwYWNlKSB2YXIoLS1zZWN0aW9uLXNwYWNlKTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRvcDogMzAlO1xcbiAgICBtYXJnaW4tbGVmdDogLTcuNSU7ICAgXFxuICAgIHdpZHRoOiAzNTBweDtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGluayk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJyb3duKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDU0cHggNTVweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggLTEycHggMzBweCwgcmdiYSgwLCAwLCAwLCAwLjEyKSAwcHggNHB4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjE3KSAwcHggMTJweCAxM3B4LCByZ2JhKDAsIDAsIDAsIDAuMDkpIDBweCAtM3B4IDVweDtcXG59XFxuXFxuLnRhc2staXRlbSB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnRhc2stbGFiZWwge1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVxcblxcbi50YXNrLWluZm8tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBnYXA6IHZhcigtLWxhcmdlLXNwYWNpbmcpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc2VjdGlvbi1zcGFjZSk7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1saWdodC1icm93bik7XFxufVxcblxcbi50YXNrLWluZm8tY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbiAgICB3aWR0aDogMTYwcHg7XFxufVxcblxcbi52aWV3LWNvbnRhaW5lciBidXR0b24ge1xcbiAgICB3aWR0aDogMTUlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gICAgaGVpZ2h0OiA3MHB4O1xcbn1cXG5cXG4uZGVzY3JpcHRpb24gLnRhc2staXRlbSB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxufVxcblxcbi5vdmVybGF5IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIGxlZnQ6IDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHt0YXNrRmFjdG9yeX0gZnJvbSAnLi90YXNrLWl0ZW1zLmpzJztcbmltcG9ydCB7cHJvamVjdEZhY3Rvcnl9IGZyb20gJy4vcHJvamVjdHMuanMnO1xuaW1wb3J0IHtzb3J0QWxsVGFza3NCeURhdGUsIGRpc3BsYXlUb2RheVRhc2tzLCBkaXNwbGF5V2Vla1Rhc2tzLCBkaXNwbGF5TW9udGhUYXNrcywgZGlzcGxheUJ5UHJpb3JpdHl9IGZyb20gJy4vdGFzay1zb3J0LmpzJztcblxuLy9HbG9iYWwgVmFyaWJhbGVzXG5jb25zdCBuZXdUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJyk7XG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG5jb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrSXRlbUZvcm1Db250YWluZXInKTtcbmNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RGb3JtQ29udGFpbmVyJyk7XG5jb25zdCB0YXNrSXRlbUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza0l0ZW1Gb3JtJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0Rm9ybScpO1xuY29uc3QgdGFza0NhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWNhbmNlbCcpO1xuY29uc3QgcHJvamVjdENhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWNhbmNlbCcpO1xuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZHJvcCcpO1xuY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUnKTtcbmNvbnN0IGFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwnKTtcbmNvbnN0IHRvZGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZGF5Jyk7XG5jb25zdCB0aGlzV2VlayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrJyk7XG5jb25zdCB0aGlzTW9udGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9udGgnKTtcbmNvbnN0IHByaW9yaXR5VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpO1xuY29uc3QgdGFza0ZpbHRlcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWZpbHRlcnMgbGknKTtcblxuXG4vLyBUYXNrIHZpZXcgRXZlbnQgTGlzdGVuZXJzXG4vLyBGaWx0ZXIgdGFza3MgYmFzZWQgb24gZHVlIGRhdGUgb3IgcHJpb3JpdHlcblxuYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgZmlsdGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjQzNBQ0FDJztcbiAgICAgICAgZmlsdGVyLnN0eWxlLmJvcmRlckNvbG9yID0gJyM2MDRENTMnO1xuICAgIH0pO1xuICAgIG5ld1Rhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keScpLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnN0eWxlLmNzc1RleHQgPSBcImJhY2tncm91bmQtY29sb3I6ICNDM0FDQUM7XCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRkJykuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3Quc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWNvbG9yOiAjNjA0RDUzO1wiKTtcbiAgICBkaXNwbGF5QWxsVGFza3MoKTtcbn0pO1xuXG50b2RheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGZpbHRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MzQUNBQyc7XG4gICAgICAgIGZpbHRlci5zdHlsZS5ib3JkZXJDb2xvciA9ICcjNjA0RDUzJztcbiAgICB9KTtcbiAgICBuZXdUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdG9kYXkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNEQjdGOEUnXG4gICAgdG9kYXkuc3R5bGUuYm9yZGVyQ29sb3IgPSAnI2ZmZGJkYSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKS5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5zdHlsZS5jc3NUZXh0ID0gXCJiYWNrZ3JvdW5kLWNvbG9yOiAjQzNBQ0FDO1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0ZCcpLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci1jb2xvcjogIzYwNEQ1MztcIik7XG4gICAgY29uc3QgYWxsVGFza3MgPSBjcmVhdGVNZXJnZWRUYXNrTGlzdCgpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGFibGUnKS5pbm5lckhUTUwgPSAnJztcbiAgICBkaXNwbGF5VG9kYXlUYXNrcyhhbGxUYXNrcykuZm9yRWFjaCh0YXNrID0+IHRhc2tGYWN0b3J5KHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZGF0ZSwgdGFzay50aW1lLCB0YXNrLnByaW9yaXR5KSk7XG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbn0pO1xuXG50aGlzV2Vlay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRmlsdGVycy5mb3JFYWNoKGZpbHRlciA9PiB7XG4gICAgICAgIGZpbHRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MzQUNBQyc7XG4gICAgICAgIGZpbHRlci5zdHlsZS5ib3JkZXJDb2xvciA9ICcjNjA0RDUzJztcbiAgICB9KTtcbiAgICBuZXdUYXNrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpc1dlZWsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNEQjdGOEUnO1xuICAgIHRoaXNXZWVrLnN0eWxlLmJvcmRlckNvbG9yID0gJyNmZmRiZGEnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5JykuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3Quc3R5bGUuY3NzVGV4dCA9IFwiYmFja2dyb3VuZC1jb2xvcjogI0MzQUNBQztcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdGQnKS5mb3JFYWNoKHByb2plY3QgPT4gcHJvamVjdC5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItY29sb3I6ICM2MDRENTM7XCIpO1xuICAgIGNvbnN0IGFsbFRhc2tzID0gY3JlYXRlTWVyZ2VkVGFza0xpc3QoKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RhYmxlJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZGlzcGxheVdlZWtUYXNrcyhhbGxUYXNrcykuZm9yRWFjaCh0YXNrID0+IHRhc2tGYWN0b3J5KHRhc2sudGl0bGUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZGF0ZSwgdGFzay50aW1lLCB0YXNrLnByaW9yaXR5KSk7XG4gICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IFwiVGhpcyBXZWVrXCI7XG59KTtcblxudGhpc01vbnRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgZmlsdGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjQzNBQ0FDJztcbiAgICAgICAgZmlsdGVyLnN0eWxlLmJvcmRlckNvbG9yID0gJyM2MDRENTMnO1xuICAgIH0pO1xuICAgIG5ld1Rhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB0aGlzTW9udGguc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNEQjdGOEUnO1xuICAgIHRoaXNNb250aC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmZkYmRhJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keScpLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnN0eWxlLmNzc1RleHQgPSBcImJhY2tncm91bmQtY29sb3I6ICNDM0FDQUM7XCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRkJykuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3Quc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWNvbG9yOiAjNjA0RDUzO1wiKTtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGNyZWF0ZU1lcmdlZFRhc2tMaXN0KCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tUYWJsZScpLmlubmVySFRNTCA9ICcnO1xuICAgIGRpc3BsYXlNb250aFRhc2tzKGFsbFRhc2tzKS5mb3JFYWNoKHRhc2sgPT4gdGFza0ZhY3RvcnkodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kYXRlLCB0YXNrLnRpbWUsIHRhc2sucHJpb3JpdHkpKTtcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJUaGlzIE1vbnRoXCI7XG59KTtcblxucHJpb3JpdHlWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgZmlsdGVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjQzNBQ0FDJztcbiAgICAgICAgZmlsdGVyLnN0eWxlLmJvcmRlckNvbG9yID0gJyM2MDRENTMnO1xuICAgIH0pO1xuICAgIG5ld1Rhc2suc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwcmlvcml0eVZpZXcuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNEQjdGOEUnO1xuICAgIHByaW9yaXR5Vmlldy5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmZkYmRhJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keScpLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnN0eWxlLmNzc1RleHQgPSBcImJhY2tncm91bmQtY29sb3I6ICNDM0FDQUM7XCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRkJykuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3Quc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWNvbG9yOiAjNjA0RDUzO1wiKTtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGNyZWF0ZU1lcmdlZFRhc2tMaXN0KCk7XG4gICAgc29ydEFsbFRhc2tzQnlEYXRlKGFsbFRhc2tzKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RhYmxlJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZGlzcGxheUJ5UHJpb3JpdHkoYWxsVGFza3MpLmZvckVhY2godGFzayA9PiB0YXNrRmFjdG9yeSh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmRhdGUsIHRhc2sudGltZSwgdGFzay5wcmlvcml0eSkpO1xuICAgIHByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG59KTtcblxuXG4vLyBUYXNrIHRhYmxlIEV2ZW50IExpc3RlbmVyc1xuXG4vLyBPcGVucyBuZXcgdGFzayBmb3JtIHdoZW4gbmV3IHRhc2sgYnV0dG9uIGlzIHNlbGVjdGVkXG5uZXdUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRhc2tGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xufSk7XG5cbi8vIENsb3NlcyB0YXNrIGZvcm0gd2hlbiBjYW5jZWwgaXMgY2xpY2tlZFxudGFza0NhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xufSk7XG5cbi8vIENyZWF0ZXMgYSBuZXcgcm93ICh0YXNrIGl0ZW0pIGluIHRoZSB0YXNrIHRhYmxlIGFuZCBhZGRzIGZ1bmN0aW9uYWxpdHkgdG8gdGFzayBidXR0b25zIG9uIGZvcm0gc3VibWl0XG50YXNrSXRlbUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRhc2tGYWN0b3J5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGUnKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS52YWx1ZSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5JykuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYgKHByb2plY3Quc3R5bGUuYmFja2dyb3VuZENvbG9yID09IFwicmdiKDIxOSwgMTI3LCAxNDIpXCIpIHsgLy8gU2VsZWN0cyB0aGUgY3VycmVudGx5IGhpZ2hsaWdodGVkIHByb2plY3QgKGtleSkgYW5kIHNhdmVzIHRoZSB0YXNrIHRvIGl0IGFzIGFuIG9iamVjdCBpbiBhbiBhcnJheSAodmFsdWUpXG4gICAgICAgICAgICBsZXQgc3RvcmVkUHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJvamVjdC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudH1gKSk7XG4gICAgICAgICAgICBsZXQgdGFzayA9IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykudmFsdWUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRhdGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWUsXG4gICAgICAgICAgICAgICAgdGltZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpbWUnKS52YWx1ZSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzdG9yZWRQcm9qZWN0LnB1c2godGFzayk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtwcm9qZWN0LmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLnRleHRDb250ZW50fWAsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFByb2plY3QpKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGltZScpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKV0uZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9IFwiXCIpOyAvLyBDbGVhcnMgZm9ybSBvbiBzdWJtaXRcbiAgICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ292ZXJsYXknKTtcbn0pO1xuXG5cbi8vIFByb2plY3QgRXZlbnQgTGlzdGVuZXJzXG5cbi8vIE9wZW5zIG5ldyBwcm9qZWN0IGZvcm0gd2hlbiBuZXcgdGFzayBidXR0b24gaXMgc2VsZWN0ZWRcbm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XG4gICAgcHJvamVjdEZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG59KTtcblxuLy8gQ2xvc2VzIHByb2plY3QgZm9ybSB3aGVuIGNhbmNlbCBpcyBjbGlja2VkXG5wcm9qZWN0Q2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RGb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XG59KTtcblxucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHByb2plY3RGYWN0b3J5KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TmFtZScpLnZhbHVlKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdE5hbWUnKS52YWx1ZSA9IFwiXCI7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XG59KTtcblxuLy8gUmVtb3ZlcyBvdmVybGF5IGZyb20gY2FyZCB2aWV3IGFuZCByZW1vdmVzIGNhcmQgZnJvbSBET01cbm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XG4gICAgdGFza0Zvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBwcm9qZWN0Rm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpZXctY29udGFpbmVyJykpO1xufSlcblxuXG4vLyBGdW5jdGlvbnNcblxuLy8gQ3JlYXRlcyBhIGRlZmF1bHQgdGFzayB0byBnaXZlIHVzZXJzIGFuIGV4YW1wbGVcbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gICAgdGFza0ZhY3RvcnkoJ1Rlc3QgVGFzaycsICdUZXN0IERlc2NyaXB0aW9uJywgJzExLTExLTExJywgJzExOjAwIEFNJywgJ0hpZ2gnKTtcbiAgICBjb25zdCBwcm9qZWN0c0Zyb21Mb2NhbCA9IE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSk7XG4gICAgcHJvamVjdHNGcm9tTG9jYWwuZm9yRWFjaChwcm9qZWN0ID0+IHByb2plY3RGYWN0b3J5KHByb2plY3QsICdpbml0JykpOyAvLyBHcmFicyBhbGwgcHJvamVjdHMgc2F2ZWQgaW4gbG9jYWwgc3RvcmFnZSBhbmQgbG9hZHMgdGhlbSBpbiB0aGUgcHJvamVjdCBzaWRlYmFyXG59O1xuXG4vLyBEaXNwbGF5cyBhbGwgdGhlIHRhc2tzIHNhdmVkIGluIHRoZSBsb2NhbCBzdG9yYWdlIGFuZCBkaXNwbGF5cyB0aGVtIG9uIHRoZSBkYXNoYm9hcmRcbmZ1bmN0aW9uIGRpc3BsYXlBbGxUYXNrcygpIHtcbiAgICBjb25zdCBhbGxUYXNrcyA9IGNyZWF0ZU1lcmdlZFRhc2tMaXN0KClcbiAgICBzb3J0QWxsVGFza3NCeURhdGUoYWxsVGFza3MpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGFibGUnKS5pbm5lckhUTUwgPSAnJztcbiAgICBhbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNEQjdGOEUnO1xuICAgIGFsbC5zdHlsZS5ib3JkZXJDb2xvciA9ICcjZmZkYmRhJztcbiAgICBhbGxUYXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFza0ZhY3RvcnkodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kYXRlLCB0YXNrLnRpbWUsIHRhc2sucHJpb3JpdHkpKTtcbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gXCJBbGxcIjtcbn07XG5cbi8vIENyZWF0ZXMgYSBsaXN0IG9mIGFsbCB0YXNrcyBzYXZlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZSBhbmQgcmV0dXJucyBpdFxuZnVuY3Rpb24gY3JlYXRlTWVyZ2VkVGFza0xpc3QoKSB7XG4gICAgY29uc3QgdGFza3NGcm9tTG9jYWwgPSBPYmplY3QudmFsdWVzKGxvY2FsU3RvcmFnZSk7XG4gICAgbGV0IHRhc2tzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrc0Zyb21Mb2NhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICB0YXNrcyA9IHRhc2tzLmNvbmNhdChKU09OLnBhcnNlKHRhc2tzRnJvbUxvY2FsW2ldKSk7XG4gICAgfTtcbiAgICBjb25zdCBtZXJnZWRUYXNrcyA9IHRhc2tzLmZsYXQoMSk7XG5cbiAgICByZXR1cm4gbWVyZ2VkVGFza3M7XG59XG5cbmluaXRpYWxpemUoKTtcblxuZXhwb3J0IHtkaXNwbGF5QWxsVGFza3N9IiwiaW1wb3J0IHt0YXNrRmFjdG9yeX0gZnJvbSAnLi90YXNrLWl0ZW1zLmpzJztcbmltcG9ydCB7ZGlzcGxheUFsbFRhc2tzfSBmcm9tICcuL2luZGV4LmpzJztcblxuLy9HbG9iYWwgdmFyaWFibGVzXG5jb25zdCB0YXNrRmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtZmlsdGVycyBsaScpO1xuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuXG5jb25zdCBwcm9qZWN0RmFjdG9yeSA9IChuYW1lLCBpbml0KSA9PiB7XG4vLyBTYXZpbmcgcHJvamVjdCB0byBsb2NhbCBzdG9yYWdlXG5pZiAoIWluaXQpIHsgLy8gUHJldmVudHMgbG9jYWwgc3RvcmFnZSBmcm9tIGJlaW5nIG92ZXJyaWRkZW4gd2hlbiBjYWxsZWQgdXBvbiBwYWdlIHJlZnJlc2ggdG8gbG9hZCBwcm9qZWN0IHNpZGUgdGFibGVcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtuYW1lfWAsIEpTT04uc3RyaW5naWZ5KFtdKSk7XG59O1xuLy8gQWRkaW5nIHByb2plY3QgdG8gdGFibGVcblxuICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RUYWJsZScpO1xuICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJyk7XG4gICAgY29uc3QgbmV3Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgY29uc3QgbmV3Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG5cbiAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgbmV3Qm9keS5hcHBlbmRDaGlsZChuZXdSb3cpO1xuICAgIG5ld1Jvdy5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG5cbiAgICAvLyBDcmVhdGVzIHByb2plY3Qgc3BlY2lmaWMgZnVuY3Rpb25zIGFuZCBhZGRzIGZ1bmN0aW9uYWxpdHkgKGVkaXQgbmFtZSBhbmQgcmVtb3ZlKVxuICAgIGNvbnN0IGFkZFByb2plY3RPcHRpb25zID0gKCkgPT4ge1xuICAgICAgICBsZXQgcHJvamVjdE9wdGlvbnMgPSBbJy4vaW1hZ2VzL2VkaXQuc3ZnJywgJy4vaW1hZ2VzL2ljb25zOC10cmFzaC0zMC5wbmcnXTtcbiAgICAgICAgbGV0IGljb25OYW1lcyA9IFtgZWRpdGAsIGB0cmFzaGBdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLnNyYyA9IHByb2plY3RPcHRpb25zW2ldO1xuICAgICAgICAgICAgaWYgKGljb25OYW1lc1tpXSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGVkaXRQcm9qZWN0TmFtZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3Q2VsbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKS5sZW5ndGggPT09IDApIHsgLy8gRGVmYXVsdHMgdG8gZGlzcGxheSBhbGwgdGFza3MgaWYgbm8gcHJvamVjdHMgYXJlIHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlBbGxUYXNrcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFzay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBTZWxlY3RzIHRoZSBuZXh0IHByb2plY3QgaW4gdGhlIHRhYmxlIGlmIGN1cnJlbnQgcHJvamVjdCBpcyBkZWxldGVkXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keScpWzBdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0RCN0Y4RVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKVswXS5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpLmZvckVhY2goY2VsbCA9PiBjZWxsLnN0eWxlLmJvcmRlckNvbG9yID0gXCIjZmZkYmRhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdEhlYWRlci50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5JylbMF0ucXVlcnlTZWxlY3RvcigndHIgPiB0ZCcpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheVRhc2soZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKVswXS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmV3Q2VsbC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld0NlbGwpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgYWRkUHJvamVjdE9wdGlvbnMoKTtcbiAgICBzZWxlY3RQcm9qZWN0KCk7XG4gICAgZGlzcGxheVRhc2sobmFtZSk7XG4gICAgdGFibGUuaW5zZXJ0QmVmb3JlKG5ld0JvZHksIHRhYmxlLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICBcblxuLy8gTWV0aG9kc1xuXG4gICAgLy8gQ2xlYXJzIHRoZSB0YXNrIHRhYmxlIGFuZCBsb2FkcyBpbiBwcm9qZWN0IHNwZWNpZmljIHRhc2tzXG4gICAgZnVuY3Rpb24gZGlzcGxheVRhc2sobmFtZSkge1xuICAgICAgICBsZXQgdGFza0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKSk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGFibGUnKS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgdGFza0FycmF5LmZvckVhY2godGFzayA9PiB0YXNrRmFjdG9yeSh0YXNrLnRpdGxlLCB0YXNrLmRlc2NyaXB0aW9uLCB0YXNrLmRhdGUsIHRhc2sudGltZSwgdGFzay5wcmlvcml0eSkpO1xuICAgIH07XG5cbiAgICAvLyBBbGxvd3MgdGhlIHVzZXIgdG8gY2hhbmdlIHRoZSBjdXJyZW50IG5hbWUgb2YgdGhlIHByb2plY3Qgb25jZSBpdCBoYXMgYmVlbiBjcmVhdGVkXG4gICAgZnVuY3Rpb24gZWRpdFByb2plY3ROYW1lKCkge1xuICAgICAgICAvLyBSZXBsYWNlcyBlbGVtZW50IHdpdGggaW5wdXQgZWxlbWVudCBhbmQgYWRkcyBhIHNhdmUgYnV0dG9uIHVzZWQgdG8gcHVzaCB0aGUgbmFtZSBjaGFuZ2VcbiAgICAgICAgY29uc3QgZWRpdGFibGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3Qgc2F2ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc2F2ZU5hbWUudGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgICAgIHByb2plY3ROYW1lLnJlcGxhY2VXaXRoKGVkaXRhYmxlTmFtZSk7XG4gICAgICAgIGVkaXRhYmxlTmFtZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzYXZlTmFtZSwgZWRpdGFibGVOYW1lLm5leHRTaWJsaW5nKVxuXG4gICAgICAgIHNhdmVOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBlZGl0YWJsZU5hbWUudmFsdWU7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1uYW1lJykudGV4dENvbnRlbnQgPSBlZGl0YWJsZU5hbWUudmFsdWVcbiAgICAgICAgICAgIGVkaXRhYmxlTmFtZS5yZXBsYWNlV2l0aChwcm9qZWN0TmFtZSk7XG4gICAgICAgICAgICBzYXZlTmFtZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNhdmVOYW1lKTtcbiAgICAgICAgICAgIGNoYW5nZUtleU5hbWUoZWRpdGFibGVOYW1lLnZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIC8vIFJlbW92ZXMgdGhlIHByb2plY3QgZnJvbSB0aGUgcHJvamVjdCB0YWJsZSBhbmQgaW4gbG9jYWwgc3RvcmFnZVxuICAgIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoKSB7XG4gICAgICAgIHRhYmxlLnJlbW92ZUNoaWxkKG5ld0JvZHkpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgJHtuYW1lfWApOyAvLyBSZW1vdmVzIHByb2plY3QgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgfTtcblxuICAgIC8vIENoYW5nZXMgdGhlIG5hbWUgb2YgdGhlIHByb2plY3QgaW4gbG9jYWwgc3RvcmFnZVxuICAgIGZ1bmN0aW9uIGNoYW5nZUtleU5hbWUobmV3TmFtZSkge1xuICAgICAgICBsZXQgcHJvamVjdFRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgJHtuYW1lfWApKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7bmV3TmFtZX1gLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0VGFza3MpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYCR7bmFtZX1gKTtcbiAgICAgICAgbmFtZSA9IG5ld05hbWU7XG4gICAgfTtcblxuICAgIC8vIEhpZ2hsaWdodHMgdGhlIHByb2plY3Qgb24gdGhlIHByb2plY3QgdGFibGUgYW5kIGNoYW5nZXMgdGhlIHByb2plY3QgbmFtZSBoZWFkZXJcbiAgICBmdW5jdGlvbiBzZWxlY3RQcm9qZWN0KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keScpLmZvckVhY2gocHJvamVjdCA9PiBwcm9qZWN0LnN0eWxlLmNzc1RleHQgPSBcImJhY2tncm91bmQtY29sb3I6ICNDM0FDQUM7XCIpO1xuICAgICAgICBuZXdCb2R5LnN0eWxlLmNzc1RleHQgPSBcImJhY2tncm91bmQtY29sb3I6ICNEQjdGOEU7XCJcbiAgICAgICAgbmV3VGFzay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGQnKS5mb3JFYWNoKGNlbGwgPT4gY2VsbC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiIzYwNEQ1M1wiKTtcbiAgICAgICAgbmV3Qm9keS5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpLmZvckVhY2goY2VsbCA9PiBjZWxsLnN0eWxlLmJvcmRlckNvbG9yID0gXCIjZmZkYmRhXCIpO1xuICAgICAgICBwcm9qZWN0SGVhZGVyLnRleHRDb250ZW50ID0gbmFtZTtcbiAgICB9XG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuXG4gICAgLy8gQ2hhbmdlcyBiYWNrZ3JvdW5kIGNvbG9yIG9mIHJvdyB0byBpbmRpY2F0ZSB3aGljaCBwcm9qZWN0IGlzIGJlaW5nIHNlbGVjdGVkIGFuZCBkaXNwbGF5cyB0aGUgcHJvamVjdCdzIHRhc2tzXG4gICAgcHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tGaWx0ZXJzLmZvckVhY2goZmlsdGVyID0+IHtcbiAgICAgICAgICAgIGZpbHRlci5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI0MzQUNBQyc7XG4gICAgICAgICAgICBmaWx0ZXIuc3R5bGUuYm9yZGVyQ29sb3IgPSAnIzYwNEQ1Myc7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxlY3RQcm9qZWN0KCk7XG4gICAgICAgIGRpc3BsYXlUYXNrKG5hbWUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHtlZGl0UHJvamVjdE5hbWV9O1xufTtcblxuZXhwb3J0IHtwcm9qZWN0RmFjdG9yeX1cblxuIiwiLy8gR2xvYmFibCB2YXJpYmFsZXNcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2Ryb3AnKTtcbmNvbnN0IHRhc2tMYWJlbHMgPSBbJ1RpdGxlOicsICdEZXNjcmlwdGlvbjonLCAnRGF0ZTonLCAnVGltZTonLCAnUHJpb3JpdHk6J107XG5cbi8vIEZhY3RvcnkgZnVuY3Rpb24gdXNlc2QgdG8gY3JlYXRlIGFuZCBhcHBlbmQgbmV3IHRhc2tzIHRvIHRoZSB0YXNrIHRhYmxlLiBcbmNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHkpID0+IHtcbiAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrVGFibGUnKTtcbiAgICBjb25zdCBuZXdSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgIGNvbnN0IHRhc2tJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICB0YXNrSW5mby5pbm5lckhUTUwgPSBgJHt0aXRsZX0gPGJyPiAke2R1ZVRpbWV9ICR7ZHVlRGF0ZX1gO1xuXG4vLyBBZGRpbmcgdGFzayB0byB0YWJsZVxuXG4gICAgLy8gU2V0cyBib3JkZXIgY29sb3IgdG8gaW5kaWNpYXRlIHByaW9yaXR5IGxldmVsIG9mIGEgdGFzayBpdGVtXG4gICAgc3dpdGNoIChwcmlvcml0eSkge1xuICAgICAgICBjYXNlICdIaWdoJzpcbiAgICAgICAgICAgIHRhc2tJbmZvLnN0eWxlLmNzc1RleHQgPSAnYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjZTYyYTAwOyc7XG4gICAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlICdNZWRpdW0nOlxuICAgICAgICAgICAgdGFza0luZm8uc3R5bGUuY3NzVGV4dCA9ICdib3JkZXItbGVmdDogM3B4IHNvbGlkICNmZmFmMDA7JztcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgJ0xvdyc6XG4gICAgICAgICAgICB0YXNrSW5mby5zdHlsZS5jc3NUZXh0ID0gJ2JvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwZTYyYTsnO1xuICAgICAgICAgICAgYnJlYWtcbiAgICB9O1xuXG4gICAgLy8gQWRkcyBpY29ucy9mZWF0dXJlcyBwcmVzZW50IGluIGFsbCB0YXNrIGl0ZW1zXG4gICAgY29uc3QgYWRkVGFza09wdGlvbnMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB0YXNrT3B0aW9ucyA9IFsnLi9pbWFnZXMvZWRpdC5zdmcnLCAnLi9pbWFnZXMvaWNvbnM4LXRyYXNoLTMwLnBuZycsICcuL2ltYWdlcy9pY29uczgtZXllLTMwLnBuZyddO1xuICAgICAgICBsZXQgaWNvbk5hbWVzID0gWydlZGl0JywgJ3RyYXNoJywgJ3ZpZXcnXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gMjsgaSsrKSB7IC8vIEFkZHMgZXZlbnQgbGlzdGVuZXJzIGZvciBpY29uIGZ1bmN0aW9uIHNwZWNpZmljIHRvIHRoZSB0YXNrXG4gICAgICAgICAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ3Rhc2staWNvbicpO1xuICAgICAgICAgICAgaW1nLnNyYz10YXNrT3B0aW9uc1tpXTtcbiAgICAgICAgICAgIGlmIChpY29uTmFtZXNbaV0gPT09ICdlZGl0Jykge1xuICAgICAgICAgICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2aWV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5LCBldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnRvZ2dsZSgnb3ZlcmxheScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpY29uTmFtZXNbaV0gPT09ICd0cmFzaCcpIHtcbiAgICAgICAgICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBkZWxldGVUYWJsZVJvdygpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2aWV3VGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGR1ZVRpbWUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbmV3Q2VsbC5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICAgICAgbmV3Um93LmFwcGVuZENoaWxkKG5ld0NlbGwpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgXG4gICAgLy8gQWRkcyBsaW5lIHRocm91Z2ggdGFzayB0byBpbmRpY2F0ZSBjb21wbGV0aW9uXG4gICAgbmV3Um93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbmV3Um93LmNsYXNzTGlzdC50b2dnbGUoJ3N0cmlrZScpKTtcbiAgICBcbiAgICBuZXdSb3cuYXBwZW5kQ2hpbGQodGFza0luZm8pO1xuICAgIGFkZFRhc2tPcHRpb25zKCk7XG4gICAgdGFibGUuYXBwZW5kQ2hpbGQobmV3Um93KTtcblxuLy8gTWV0aG9kc1xuXG4gICAgLy8gQWxsb3dzIHVzZXIgdG8gdmlldyB0aGUgdGFzayBpbmZvcm1hdGlvbiBpbiBhIGNhcmQgZm9ybWF0LlxuICAgIGZ1bmN0aW9uIHZpZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgZHVlVGltZSwgcHJpb3JpdHksIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHZpZXdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdmlld0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd2aWV3LWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgdGFza0R1ZVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgY2xvc2VCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTsgXG5cbiAgICAgICAgbGV0IHRhc2tJdGVtcyA9IFt0YXNrTmFtZSwgdGFza0Rlc2NyaXB0aW9uLCB0YXNrRHVlRGF0ZSwgdGFza0R1ZVRpbWUsIHRhc2tQcmlvcml0eSwgY2xvc2VCdG5dOyAvLyBMaXN0IGZvciBhcHBlbmRpbmcgdGFzayBlbGVtZW50cyBpbnRvIHZpZXdDb250YWluZXJcbiAgICAgICAgdGFza0l0ZW1zLmZvckVhY2godGFzayA9PiB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpKTtcblxuICAgICAgICB0YXNrTmFtZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGFza0R1ZURhdGUudGV4dENvbnRlbnQgPSBkdWVEYXRlO1xuICAgICAgICB0YXNrRHVlVGltZS50ZXh0Q29udGVudCA9IGR1ZVRpbWU7XG4gICAgICAgIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuICAgICAgICBjbG9zZUJ0bi50ZXh0Q29udGVudCA9ICdDbG9zZSc7XG4gICAgICAgIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdmlld0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZWRpdGFibGVzID0gZWRpdFRhc2sodGFza05hbWUsIHRhc2tJdGVtcyk7IC8vIExpc3Qgb2YgZWRpdGFibGUgaW5wdXQgZWxlbWVudHMgY29ycmVzcG9uZGluZyB0byBlYWNoIHRhc2sgY29tcG9uZW50XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tJbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8tY29udGFpbmVyJyk7XG4gICAgICAgICAgICBpZiAodGFza0l0ZW1zW2ldID09PSB0YXNrRGVzY3JpcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0YXNrSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgdGFza0xhYmVsLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGFiZWwnKTtcbiAgICAgICAgICAgIHRhc2tMYWJlbC50ZXh0Q29udGVudCA9IHRhc2tMYWJlbHNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLmFwcGVuZCh0YXNrTGFiZWwsIGVkaXRhYmxlc1tpXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhc2tJbmZvQ29udGFpbmVyLmFwcGVuZCh0YXNrTGFiZWwsIHRhc2tJdGVtc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJbmZvQ29udGFpbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUodmlld0NvbnRhaW5lciwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tkcm9wJykpO1xuICAgIH07XG5cbiAgICAvLyBBbGxvd3MgdXNlcnMgdG8gZWRpdCB0YXNrIGluZm9ybWF0aW9uIG9uY2UgdGhleSBhcmUgYWxyZWFkeSBjcmVhdGVkLiBUYWtlcyBpbiB0aGUgbmFtZSBvZiB0aGUgdGFzayBiZWluZyBlZGl0ZWQgYW5kIGEgbGlzdCBvZiBlYWNoIHRhc2sgY29tcG9uZW50IGFuZCByZXR1cm5zIGEgbGlzdCBvZiBlZGl0YWJsZSBpbnB1dCBlbGVtZW50cyBmb3IgZWFjaCB0YXNrIGNvbXBvbmVudFxuICAgIGZ1bmN0aW9uIGVkaXRUYXNrKHRhc2tOYW1lLCB0YXNrSXRlbUxpc3QpIHtcbiAgICAgICAgLy8gQ3JlYXRlcyBzZWxlY3QgZWxlbWVudCB0aGF0IGlzIGF2aWFsYWJsZSB3aGVuIHVzZXIgd2FudHMgdG8gZWRpdCBwcmlvcml0eSBsZXZlbCBmcm9tIGNhcmQgdmlld1xuICAgICAgICBsZXQgcHJpb3JpdHlMZXZlbCA9IFsnSGlnaCcsICdNZWRpdW0nLCAnTG93J107XG4gICAgICAgIGNvbnN0IGVkaXRhYmxlUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBwcmlvcml0eUxldmVsW2ldKTtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5TGV2ZWxbaV07XG4gICAgICAgICAgICBlZGl0YWJsZVByaW9yaXR5LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGVzIG5ldyBpbnB1dCBlbGVtZW50cyB0aGF0IHVzZXJzIGNhbiBlbnRlciBpbmZvcm1hdGlvbiB0byBlZGl0IHRhc2sgaW5mb3JtYXRpb25cbiAgICAgICAgY29uc3QgZWRpdGFibGVOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZWRpdGFibGVOYW1lLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0aXRsZSk7XG4gICAgICAgIGNvbnN0IGVkaXRhYmxlRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0QXJlYScpO1xuICAgICAgICBlZGl0YWJsZURlc2NyaXB0aW9uLnZhbHVlID0gYCR7ZGVzY3JpcHRpb259YDtcbiAgICAgICAgY29uc3QgZWRpdGFibGVEdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZWRpdGFibGVEdWVEYXRlLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBkdWVEYXRlKTtcbiAgICAgICAgZWRpdGFibGVEdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJyk7XG4gICAgICAgIGNvbnN0IGVkaXRhYmxlRHVlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGVkaXRhYmxlRHVlVGltZS5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgZHVlVGltZSk7XG4gICAgICAgIGVkaXRhYmxlRHVlVGltZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGltZScpO1xuICAgICAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgICAgIFxuICAgICAgICBsZXQgZWRpdGFibGVMaXN0ID0gW2VkaXRhYmxlTmFtZSwgZWRpdGFibGVEZXNjcmlwdGlvbiwgZWRpdGFibGVEdWVEYXRlLCBlZGl0YWJsZUR1ZVRpbWUsIGVkaXRhYmxlUHJpb3JpdHksIHNhdmVCdG5dOyAvLyBGb3IgYXBwZW5kaW5nIGVkaXRhYmxlIGVsZW1lbnRzIGludG8gdmlldyBjYXJkXG4gICAgICAgIFxuICAgICAgICAvLyBTYXZlcyBjaGFuZ2VzXG4gICAgICAgIHNhdmVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBVcGRhdGVzIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5JykuZm9yRWFjaChwcm9qZWN0ID0+IHsgLy8gTG9va3MgZm9yIHByb2plY3QgaW4gc3RvcmFnZVxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9PSBcIiNEQjdGOEVcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3RvcmVkUHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJvamVjdC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudH1gKSk7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlZFByb2plY3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXNrLnRpdGxlID09IHRhc2tOYW1lLnRleHRDb250ZW50KSB7IC8vIEl0ZXJhdGVzIHRocm91Z2ggdGhlIHRhc2sgYW5kIHVwZGF0ZXMgZWFjaCBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXModGFzaykubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRhc2spW2ldID09ICd0aXRsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sudGl0bGUgPSBlZGl0YWJsZU5hbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModGFzaylbaV0gPT0gJ2Rlc2NyaXB0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiA9IGVkaXRhYmxlRGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModGFzaylbaV0gPT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRhdGUgPSBlZGl0YWJsZUR1ZURhdGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModGFzaylbaV0gPT0gJ3RpbWUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnRpbWUgPSBlZGl0YWJsZUR1ZVRpbWUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXModGFzaylbaV0gPT0gJ3ByaW9yaXR5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IGVkaXRhYmxlUHJpb3JpdHkudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Byb2plY3QuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnR9YCwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkUHJvamVjdCkpOyAvLyBTYXZlcyBjaGFuZ2VzIGluIGxvY2FsIHN0b3JhZ2VzXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFza1RhYmxlJykuaW5uZXJIVE1MID0gJyc7ICAvLyBDbGVhcnMgYW5kIHVwZGF0ZXMgdGFzayB0YWJsZSB0byByZWZsZWN0IGNoYW5nZXNcbiAgICAgICAgICAgICAgICAgICAgc3RvcmVkUHJvamVjdC5mb3JFYWNoKHRhc2sgPT4gdGFza0ZhY3RvcnkodGFzay50aXRsZSwgdGFzay5kZXNjcmlwdGlvbiwgdGFzay5kYXRlLCB0YXNrLnRpbWUsIHRhc2sucHJpb3JpdHkpKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0l0ZW1MaXN0LmZvckVhY2goKHRhc2ssIGluZGV4KSA9PiB0YXNrLnRleHRDb250ZW50ID0gYCR7ZWRpdGFibGVMaXN0W2luZGV4XS52YWx1ZX1gKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gQ2xvc2VzIHRhc2sgdmlld1xuICAgICAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QudG9nZ2xlKCdvdmVybGF5Jyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52aWV3LWNvbnRhaW5lcicpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVkaXRhYmxlTGlzdFxuICAgIH07XG5cbiAgICAvLyBSZW1vdmVzIGEgcm93IGZyb20gdGFibGVcbiAgICBmdW5jdGlvbiBkZWxldGVUYWJsZVJvdygpIHtcbiAgICAgICAgdGFibGUucmVtb3ZlQ2hpbGQobmV3Um93KTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgndGJvZHknKS5mb3JFYWNoKHByb2plY3QgPT4geyAvLyBSZW1vdmVzIHRhc2sgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgICAgICAgICBpZiAocHJvamVjdC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPT0gXCIjREI3RjhFXCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RvcmVkUHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYCR7cHJvamVjdC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudH1gKSk7XG4gICAgICAgICAgICAgICAgc3RvcmVkUHJvamVjdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFzay50aXRsZSA9PSBgJHt0aXRsZX1gKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0LnNwbGljZShzdG9yZWRQcm9qZWN0LmluZGV4T2YodGFzayksIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGAke3Byb2plY3QuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnR9YCAsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFByb2plY3QpKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG59O1xuXG5leHBvcnQge3Rhc2tGYWN0b3J5fTsiLCIvL0dsb2JhbCBWYXJpYWJsZXNcbmNvbnN0IHRhc2tzID0gT2JqZWN0LnZhbHVlcyhsb2NhbFN0b3JhZ2UpO1xuXG4vL0Z1bmN0aW9uc1xuXG4vLyBUYWtlcyBpbiBhIGxpc3Qgb2YgdGFza3MgYW5kIHNvcnRzIHRoZW0gaW4gb3JkZXIgYnkgZGF0ZSBhc2NlbmRpbmdcbmZ1bmN0aW9uIHNvcnRBbGxUYXNrc0J5RGF0ZShsaXN0KSB7XG4gICAgbGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLmRhdGUgPiBiLmRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2UgaWYgKGEuZGF0ZSA9PT0gYi5kYXRlKSB7XG4gICAgICAgICAgICBpZiAoYS50aW1lID4gYi50aW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9IGVsc2Uge3JldHVybiAtMX1cbiAgICAgICAgfSBlbHNlIHtyZXR1cm4gLTF9XG4gICAgfSk7XG59O1xuXG4vLyBUYWtlcyBpbiBhIGxpc3QgYW5kIHJldHVybnMgYSBsaXN0IG9mIHRhc2tzIHRoYXQgaGF2ZSBkdWUgZGF0ZXMgdGhhdCBtYXRjaCB0aGUgY3VycmVudCBkYXRlXG5mdW5jdGlvbiBkaXNwbGF5VG9kYXlUYXNrcyhsaXN0KSB7XG4gICAgbGV0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKS50b0pTT04oKS5zbGljZSgwLCAxMCk7XG4gICAgbGV0IHRvZGF5c1Rhc2tzID0gW107XG4gICAgbGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBpZiAodGFzay5kYXRlID09IGN1cnJlbnREYXRlKSB7XG4gICAgICAgICAgICB0b2RheXNUYXNrcy5wdXNoKHRhc2spO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRvZGF5c1Rhc2tzO1xufTtcblxuLy8gVGFrZXMgaW4gYSBsaXN0IGFuZCByZXR1cm5zIGEgbGlzdCBvZiB0YXNrcyB0aGF0IGhhdmUgZHVlIGRhdGVzIHdpdGhpbiBhIHdlZWsgZnJvbSB0aGUgY3VycmVudCBkYXRlXG5mdW5jdGlvbiBkaXNwbGF5V2Vla1Rhc2tzKGxpc3QpIHtcbiAgICBsZXQgd2Vla1Rhc2tzID0gW107XG4gICAgbGV0IHdlZWtPdXREYXRlcyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4OyBpKyspIHsgLy8gVG8gZ2V0IGFsbCBkYXRlcyBhIHdlZWsgZnJvbSB0aGUgY3VycmVudCBkYXRlXG4gICAgICAgIHdlZWtPdXREYXRlcy5wdXNoKG5ldyBEYXRlKERhdGUubm93KCkgKyBpICogMjQgKiA2MCAqIDYwICogMTAwMCkudG9KU09OKCkuc2xpY2UoMCwgMTApIClcbiAgICB9O1xuICAgIGxpc3QuZm9yRWFjaCh0YXNrID0+IHsgLy8gQ2hlY2tzIGlmIGEgdGFzaydzIGRhdGUgaXMgd2l0aGluIGEgd2VlayBvZiB0aGUgY3VycmVudCBkYXRlIGJ5IGNvbXBhcmluZyB0aGUgdGFzayBkYXRlIHRvIGVhY2ggZGF0ZSA3IGRheXMgb3V0XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2Vla091dERhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGFzay5kYXRlID09IHdlZWtPdXREYXRlc1tpXSkge3dlZWtUYXNrcy5wdXNoKHRhc2spfTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiB3ZWVrVGFza3M7XG59O1xuXG4vLyBUYWtlcyBpbiBhIGxpc3QgYW5kIHJldHVybnMgYSBsaXN0IG9mIHRhc2tzIHRoYXQgaGF2ZSBkdWUgZGF0ZXMgd2l0aGluIGEgbW9udGggZnJvbSB0aGUgY3VycmVudCBkYXRlXG5mdW5jdGlvbiBkaXNwbGF5TW9udGhUYXNrcyhsaXN0KSB7XG4gICAgbGV0IG1vbnRoVGFza3MgPSBbXTtcbiAgICBsZXQgbW9udGhPdXREYXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzI7IGkrKykgeyAvLyBUbyBnZXQgYWxsIGRhdGVzIGEgbW9udGggZnJvbSB0aGUgY3VycmVudCBkYXRlXG4gICAgICAgIG1vbnRoT3V0RGF0ZXMucHVzaChuZXcgRGF0ZShEYXRlLm5vdygpICsgaSAqIDI0ICogNjAgKiA2MCAqIDEwMDApLnRvSlNPTigpLnNsaWNlKDAsIDEwKSApXG4gICAgfTtcbiAgICBsaXN0LmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9udGhPdXREYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRhc2suZGF0ZSA9PSBtb250aE91dERhdGVzW2ldKSB7bW9udGhUYXNrcy5wdXNoKHRhc2spfTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiBtb250aFRhc2tzO1xufTtcblxuLy8gVGFrZXMgaW4gYSBsaXN0IGFuZCByZXR1cm5zIGEgbGlzdCBvZiB0YXNrcyBhcmUgb3JkZXJlZCBieSBoaWdoZXN0IHRvIGxvd2VzdCBwcmlvcmlydHlcbmZ1bmN0aW9uIGRpc3BsYXlCeVByaW9yaXR5KGxpc3QpIHtcbiAgICBsZXQgcHJpb3JpdHlUYXNrcyA9IFtdO1xuICAgIGNvbnN0IHByaW9yaXR5TGV2ZWxzID0gWydIaWdoJywgJ01lZGl1bScsICdMb3cnXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByaW9yaXR5TGV2ZWxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxpc3QuZm9yRWFjaCh0YXNrID0+IHsgLy8gSXRlcmF0ZXMgdGhyb3VnaCB0YXNrIGxpc3QgYW5kIGFwcGVuZHMgdGFza3Mgd2l0aCBoaWdoZXN0IHByaW9yaXR5IGZpcnN0IGZvbGxvd2VkIGJ5IG1lZGl1bSBhbmQgbG93XG4gICAgICAgICAgICBpZiAodGFzay5wcmlvcml0eSA9PT0gcHJpb3JpdHlMZXZlbHNbaV0pIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eVRhc2tzLnB1c2godGFzayk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHByaW9yaXR5VGFza3M7XG59O1xuXG5cbmV4cG9ydCB7c29ydEFsbFRhc2tzQnlEYXRlLCBkaXNwbGF5VG9kYXlUYXNrcywgZGlzcGxheVdlZWtUYXNrcywgZGlzcGxheU1vbnRoVGFza3MsIGRpc3BsYXlCeVByaW9yaXR5fTtcblxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==