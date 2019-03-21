module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(6)

var Component = __webpack_require__(4)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(5),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".hsy-dialog{display:none;font:10px Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;position:absolute;top:0;left:0}.hsy-dialog .mask{width:100%;height:100%}.hsy-dialog .main{position:absolute;margin:0 auto;top:20%;box-shadow:0 0 5px rgba(0,0,0,.2);background:#fff;border-radius:3px;font-size:1.2em}.hsy-dialog .main>div{margin:0 auto;padding:20px}.hsy-dialog .main .title{position:relative;color:#0e3569;height:40px;line-height:40px;overflow:hidden}.hsy-dialog .main .title .content>*{width:80%;min-width:85px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hsy-dialog .main .title .content{font-size:1.8em;min-height:20px;vertical-align:middle}.hsy-dialog .main .title .btnClose{width:20px;height:20px;background:url(" + __webpack_require__(3) + ") no-repeat 50%;float:right;cursor:pointer;position:absolute;right:0;top:50%;transform:translateY(-50%)}.hsy-dialog .main .body{max-width:46vw;color:#6a7288;font-size:1.2em;border-top:1px solid #eee;margin-top:5px;padding-top:15px}.hsy-dialog.animated,.hsy-dialog .animated{animation-duration:.35s;animation-fill-mode:both}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-30%,0);transform:translate3d(0,-30%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.hsy-dialog.fadeInDown,.hsy-dialog .fadeInDown{animation-name:fadeInDown}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.hsy-dialog.fadeOut,.hsy-dialog .fadeOut{animation-name:fadeOut}", ""]);

// exports


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4IiB2aWV3Qm94PSIwIDAgMTYgMTYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODYxLjAwMDAwMCwgLTE2OS4wMDAwMDApIiBmaWxsPSIjN0Q4NjlBIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUzOC4wMDAwMDAsIDEyMi4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC05IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMTQuMDAwMDAwLCAzOC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTUuODIzNTI5NCwxNS44MjM1Mjk0IEw4LjE3NjQyMzc3LDE1LjgyMzUyOTQgQzcuNTM0OTUxNjksMTUuODIzNTI5NCA3LDE2LjM1MDI1MzIgNywxNyBDNywxNy42NTQyNzY3IDcuNTI2NzAyODYsMTguMTc2NDcwNiA4LjE3NjQyMzc3LDE4LjE3NjQ3MDYgTDE1LjgyMzUyOTQsMTguMTc2NDcwNiBMMTUuODIzNTI5NCwyNS44MjM1NzYyIEMxNS44MjM1Mjk0LDI2LjQ2NTA0ODMgMTYuMzUwMjUzMiwyNyAxNywyNyBDMTcuNjU0Mjc2NywyNyAxOC4xNzY0NzA2LDI2LjQ3MzI5NzEgMTguMTc2NDcwNiwyNS44MjM1NzYyIEwxOC4xNzY0NzA2LDE4LjE3NjQ3MDYgTDI1LjgyMzU3NjIsMTguMTc2NDcwNiBDMjYuNDY1MDQ4MywxOC4xNzY0NzA2IDI3LDE3LjY0OTc0NjggMjcsMTcgQzI3LDE2LjM0NTcyMzMgMjYuNDczMjk3MSwxNS44MjM1Mjk0IDI1LjgyMzU3NjIsMTUuODIzNTI5NCBMMTguMTc2NDcwNiwxNS44MjM1Mjk0IEwxOC4xNzY0NzA2LDguMTc2NDIzNzcgQzE4LjE3NjQ3MDYsNy41MzQ5NTE2OSAxNy42NDk3NDY4LDcgMTcsNyBDMTYuMzQ1NzIzMyw3IDE1LjgyMzUyOTQsNy41MjY3MDI4NiAxNS44MjM1Mjk0LDguMTc2NDIzNzcgTDE1LjgyMzUyOTQsMTUuODIzNTI5NCBaIiBpZD0iQ29tYmluZWQtU2hhcGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3LjAwMDAwMCwgMTcuMDAwMDAwKSByb3RhdGUoLTMxNS4wMDAwMDApIHRyYW5zbGF0ZSgtMTcuMDAwMDAwLCAtMTcuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "hsy-dialog"
  }, [_c('div', {
    staticClass: "mask",
    style: ({
      backgroundColor: _vm.maskColor
    }),
    on: {
      "click": _vm.maskClicked
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "inner"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._t("title")], 2), _vm._v(" "), (_vm.closeButton) ? _c('div', {
    staticClass: "btnClose",
    on: {
      "click": _vm.hide
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "body"
  }, [_vm._t("body")], 2)])])])
},staticRenderFns: []}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("f57c5a7a", content, true);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!./../node_modules/.0.23.1@css-loader/index.js?minimize!./../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7bd6f475!./../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Dialog.vue", function() {
     var newContent = require("!!./../node_modules/.0.23.1@css-loader/index.js?minimize!./../node_modules/.10.3.0@vue-loader/lib/style-rewriter.js?id=data-v-7bd6f475!./../node_modules/.10.3.0@vue-loader/lib/selector.js?type=styles&index=0!./Dialog.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(8)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = { css: css, media: media, sourceMap: sourceMap }
    if (!newStyles[id]) {
      part.id = parentId + ':0'
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      part.id = parentId + ':' + newStyles[id].parts.length
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
  var hasSSR = styleElement != null

  // if in production mode and style is already provided by SSR,
  // simply do nothing.
  if (hasSSR && isProduction) {
    return noop
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = styleElement || createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (!hasSSR) {
    update(obj)
  }

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var ANIME_EVENTS = ['webkitAnimationEnd', 'mozAnimationEnd', 'MSAnimationEnd', 'oanimationend', 'animationend'];

exports.default = {
  name: 'HsyDialog',

  data: function data() {
    return {
      msg: 'hello vue-component!',
      width: '',
      height: '',
      parentOverflowX: '',
      parentOverflowY: '',
      isHidden: true
    };
  },

  props: {
    maskColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.3)'
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    clickMask2Close: {
      type: Boolean,
      default: true
    },
    wholeWindow: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    mainEl: function mainEl() {
      return this.$el.querySelector('.main');
    },
    parentEl: function parentEl() {
      var parent = this.$el.parentNode;
      while (parent) {
        if (parent === document.body) {
          break;
        }
        var style = window.getComputedStyle(parent);
        var position = style.getPropertyValue('position');
        if (position === 'relative' || position === 'absolute') {
          break;
        }
        parent = parent.parentNode;
      }
      return parent;
    },

    parentSize: {
      cache: false,
      get: function get() {
        if (this.wholeWindow) {
          var width = document.documentElement.clientWidth;
          var height = document.documentElement.clientHeight;
          return {
            width: width,
            height: height
          };
        }
        return this.parentEl.getBoundingClientRect();
      }
    }
  },
  watch: {
    value: function value(val) {
      if (val) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  methods: {
    rect: function rect(el) {
      var rect = el.getBoundingClientRect();
      if (rect.width !== 0 || rect.height !== 0) {
        return rect;
      }

      var style = window.getComputedStyle(el);
      var display = style.getPropertyValue('display');
      var top = style.getPropertyValue('top');
      var left = style.getPropertyValue('left');

      el.style.top = '-1000px';
      el.style.left = '-1000px';
      el.style.display = 'inline-block';
      rect = el.getBoundingClientRect();

      el.style.display = display;
      el.style.top = top;
      el.style.left = left;

      return rect;
    },
    updateContainerSize: function updateContainerSize() {
      var size = this.parentSize;
      this.$el.style.width = size.width + 'px';
      this.$el.style.height = size.height + 'px';
      this.$el.style.top = window.scrollY + 'px';
    },
    updateMainSize: function updateMainSize() {
      var mainEl = this.$el.querySelector('.main');
      var mainElRect = this.rect(mainEl);
      mainEl.style.width = mainElRect.width + 'px';
      mainEl.style.left = '0px';
      mainEl.style.right = '0px';
    },
    captureParentOverflow: function captureParentOverflow() {
      var style = window.getComputedStyle(this.parentEl);
      this.parentOverflowX = style.getPropertyValue('overflowX');
      this.parentOverflowY = style.getPropertyValue('overflowY');
    },
    forceParentOverflow: function forceParentOverflow() {
      this.parentEl.style.overflow = 'hidden';
    },
    resumeParentOverflow: function resumeParentOverflow() {
      this.parentEl.style.overflowX = this.parentOverflowX;
      this.parentEl.style.overflowY = this.parentOverflowY;
    },
    addCssClass: function addCssClass(el, cls) {
      var clsList = el.className.split(' ');
      if (clsList.indexOf(cls) === -1) {
        clsList.push(cls);
        el.className = clsList.join(' ');
      }
    },
    removeCssClass: function removeCssClass(el, cls) {
      var clsList = el.className.split(' ');
      if (clsList.indexOf(cls) !== -1) {
        el.className = clsList.filter(function (c) {
          return c !== cls;
        }).join(' ');
      }
    },
    anime: function anime(el, cls) {
      var _this = this;

      return new Promise(function (resolve) {
        ANIME_EVENTS.forEach(function (e) {
          el.addEventListener(e, function () {
            _this.removeCssClass(el, 'animated');
            _this.removeCssClass(el, cls);
            resolve();
          });
          _this.addCssClass(el, 'animated');
          _this.addCssClass(el, cls);
        });
      });
    },
    show: function show() {
      this.$el.style.display = 'block';
      this.captureParentOverflow();
      this.forceParentOverflow();
      this.updateContainerSize();
      this.updateMainSize();
      this.anime(this.mainEl, 'fadeInDown');

      this.isHidden = false;
    },
    hide: function hide() {
      var _this2 = this;

      if (this.isHidden) return;
      this.anime(this.$el, 'fadeOut').then(function () {
        _this2.$el.style.display = 'none';
        _this2.resumeParentOverflow();
        _this2.$emit('input', false);
        _this2.isHidden = true;
      });
    },
    maskClicked: function maskClicked() {
      if (!this.clickMask2Close) return;
      this.hide();
    }
  },
  mounted: function mounted() {
    if (this.wholeWindow) {
      this.$el.parentNode.removeChild(this.$el);
      document.body.appendChild(this.$el);
    }
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dialog = __webpack_require__(0);

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var install = function install(Vue) {
  Vue.component(_Dialog2.default.name, _Dialog2.default);
};

exports.default = {
  version: '0.0.1',
  install: install
};

/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map