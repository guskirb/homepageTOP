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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

body {
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  background: linear-gradient(170deg, #087abd 25.5%, #ffffff 25.6%);
  font-family: "Roboto", sans-serif;
}

.upperContainer {
  display: flex;
  width: 70%;
  margin: 100px;
  align-items: center;
  justify-content: space-between;
}

.upperContainer > h1 {
  position: absolute;
  left: 450px;
  top: 500px;
  color: white;
  font-size: 4em;
  z-index: 1;
  font-weight: 100;
  text-shadow: 3px 3px 5px #0000007e;
}

.mainImage {
  height: 600px;
  width: 600px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 1;
}

.upperText {
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  padding: 40px;
  height: 100%;
  font-size: 2.2em;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.upperText > h2 {
  margin: 0;
}

.upperText > p {
  font-weight: 100;
}

.upperText > div {
  margin-left: auto;
}

.logo {
  height: 40px;
  margin: 0 10px 0 10px;
}

.midContainer {
  width: 70%;
  margin: 50px 0 120px 0;
}

.midContainer > h3 {
  font-size: 2.5em;
  margin: 0;
  margin-bottom: 25px;
}

.workContainer {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 50px;
}

.workContainer > div {
  height: 475px;
  background-color: rgb(255, 244, 143);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  display: grid;
  grid-template-rows: 2fr 1fr;
}

.workContainer > div > h4 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  margin: 0;
  text-align: center;
  padding: 30px;
}

.projectText {
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  background-color: #ffffff;
  margin: 0;
  padding: 10px 30px 30px 30px;
}

.projectText > div {
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1.5em;
  height: 60px;
}

.projectText > div > img {
  height: 30px;
  margin-left: auto;
}

.projectText > div > svg {
  height: 30px;
}

.footerContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #087abd;
}

footer {
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 50px;
  font-size: 2em;
}

.footerText{
  padding-right: 30px;
}

.footerText > h4 {
  margin: 10px 0 10px 0;
  font-size: 1.2em;
}

.footerImg {
  height: 500px;
  width: 600px;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

@media (min-width: 840px) and (max-width: 1800px) {
  body {
    background: linear-gradient(170deg, #087abd 15%, #ffffff 15.1%);
  }

  .upperContainer {
    display: inline-block;
    width: 80%;
    margin: 50px;
    height: 100%;
    margin-top: 150px;
  }

  .upperContainer > h1 {
    position: absolute;
    left: 58%;
    top: 20px;
  }

  .mainImage {
    height: 360px;
    width: 360px;
    transform-origin: bottom right;
    transform: scale(1.2);
    object-fit: cover;
    float: left;
    margin: 20px;
  }

  .upperText {
    display: block;
    justify-content: center;
    height: 100%;
    border: none;
  }

  .upperText > div {
    display: none;
  }

  .midContainer {
    width: 80%;
  }

  footer {
    width: 80%;
    font-size: 1.8em;
  }

  .footerImg {
    width: 370px;
    height: 450px;
  }
}

@media (max-width: 840px) {
  body {
    background: linear-gradient(165deg, #087abd 9%, #ffffff 9.1%);
  }

  .upperContainer {
    width: 90%;
    margin: 30px 0 40px 0;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .mainImage {
    height: 500px;
    width: 100%;
    object-fit: cover;
    margin: 10px;
  }

  .upperContainer > h1 {
    position: absolute;
    left: 20px;
    right: 0;
    top: 380px;
    text-align: center;
  }

  .upperText {
    background-color: transparent;
    align-items: center;
    border: none;
    height: 100%;
    margin: 50px 0 0 0;
    box-shadow: none;
    padding: 0;
  }

  .upperText > div {
    margin-left: 0;
  }

  .midContainer {
    width: 90%;
  }

  footer {
    margin: 0;
    width: 100%;
    flex-flow: column;
  }

  .footerText {
    width: 90%;
    display: flex;
    flex-flow: column;
    margin: 50px 0 50px 0;
  }

  .footerText > div {
    align-self: center;
  }

  .footerImg {
    width: 100%;
    transform-origin: top;
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[".roboto-regular {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\nbody {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n  background: linear-gradient(170deg, #087abd 25.5%, #ffffff 25.6%);\n  font-family: \"Roboto\", sans-serif;\n}\n\n.upperContainer {\n  display: flex;\n  width: 70%;\n  margin: 100px;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.upperContainer > h1 {\n  position: absolute;\n  left: 450px;\n  top: 500px;\n  color: white;\n  font-size: 4em;\n  z-index: 1;\n  font-weight: 100;\n  text-shadow: 3px 3px 5px #0000007e;\n}\n\n.mainImage {\n  height: 600px;\n  width: 600px;\n  object-fit: cover;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  z-index: 1;\n}\n\n.upperText {\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n  padding: 40px;\n  height: 100%;\n  font-size: 2.2em;\n  background-color: #ffffff;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n.upperText > h2 {\n  margin: 0;\n}\n\n.upperText > p {\n  font-weight: 100;\n}\n\n.upperText > div {\n  margin-left: auto;\n}\n\n.logo {\n  height: 40px;\n  margin: 0 10px 0 10px;\n}\n\n.midContainer {\n  width: 70%;\n  margin: 50px 0 120px 0;\n}\n\n.midContainer > h3 {\n  font-size: 2.5em;\n  margin: 0;\n  margin-bottom: 25px;\n}\n\n.workContainer {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 50px;\n}\n\n.workContainer > div {\n  height: 475px;\n  background-color: rgb(255, 244, 143);\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n  display: grid;\n  grid-template-rows: 2fr 1fr;\n}\n\n.workContainer > div > h4 {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.5em;\n  margin: 0;\n  text-align: center;\n  padding: 30px;\n}\n\n.projectText {\n  display: flex;\n  flex-flow: column;\n  align-items: flex-start;\n  background-color: #ffffff;\n  margin: 0;\n  padding: 10px 30px 30px 30px;\n}\n\n.projectText > div {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  font-size: 1.5em;\n  height: 60px;\n}\n\n.projectText > div > img {\n  height: 30px;\n  margin-left: auto;\n}\n\n.projectText > div > svg {\n  height: 30px;\n}\n\n.footerContainer {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  background-color: #087abd;\n}\n\nfooter {\n  width: 70%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 50px;\n  font-size: 2em;\n}\n\n.footerText{\n  padding-right: 30px;\n}\n\n.footerText > h4 {\n  margin: 10px 0 10px 0;\n  font-size: 1.2em;\n}\n\n.footerImg {\n  height: 500px;\n  width: 600px;\n  object-fit: cover;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n}\n\n@media (min-width: 840px) and (max-width: 1800px) {\n  body {\n    background: linear-gradient(170deg, #087abd 15%, #ffffff 15.1%);\n  }\n\n  .upperContainer {\n    display: inline-block;\n    width: 80%;\n    margin: 50px;\n    height: 100%;\n    margin-top: 150px;\n  }\n\n  .upperContainer > h1 {\n    position: absolute;\n    left: 58%;\n    top: 20px;\n  }\n\n  .mainImage {\n    height: 360px;\n    width: 360px;\n    transform-origin: bottom right;\n    transform: scale(1.2);\n    object-fit: cover;\n    float: left;\n    margin: 20px;\n  }\n\n  .upperText {\n    display: block;\n    justify-content: center;\n    height: 100%;\n    border: none;\n  }\n\n  .upperText > div {\n    display: none;\n  }\n\n  .midContainer {\n    width: 80%;\n  }\n\n  footer {\n    width: 80%;\n    font-size: 1.8em;\n  }\n\n  .footerImg {\n    width: 370px;\n    height: 450px;\n  }\n}\n\n@media (max-width: 840px) {\n  body {\n    background: linear-gradient(165deg, #087abd 9%, #ffffff 9.1%);\n  }\n\n  .upperContainer {\n    width: 90%;\n    margin: 30px 0 40px 0;\n    flex-wrap: wrap;\n    flex-direction: column;\n  }\n\n  .mainImage {\n    height: 500px;\n    width: 100%;\n    object-fit: cover;\n    margin: 10px;\n  }\n\n  .upperContainer > h1 {\n    position: absolute;\n    left: 20px;\n    right: 0;\n    top: 380px;\n    text-align: center;\n  }\n\n  .upperText {\n    background-color: transparent;\n    align-items: center;\n    border: none;\n    height: 100%;\n    margin: 50px 0 0 0;\n    box-shadow: none;\n    padding: 0;\n  }\n\n  .upperText > div {\n    margin-left: 0;\n  }\n\n  .midContainer {\n    width: 90%;\n  }\n\n  footer {\n    margin: 0;\n    width: 100%;\n    flex-flow: column;\n  }\n\n  .footerText {\n    width: 90%;\n    display: flex;\n    flex-flow: column;\n    margin: 50px 0 50px 0;\n  }\n\n  .footerText > div {\n    align-self: center;\n  }\n\n  .footerImg {\n    width: 100%;\n    transform-origin: top;\n  }\n}\n"],"sourceRoot":""}]);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

console.log("hi");
})();

/******/ })()
;
//# sourceMappingURL=bundle202f3fcc6a34d9bb2753.js.map