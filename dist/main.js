/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/toastify-js/src/toastify.js":
/*!**************************************************!*\
  !*** ./node_modules/toastify-js/src/toastify.js ***!
  \**************************************************/
/***/ (function(module) {

eval("/*!\n * Toastify js 1.12.0\n * https://github.com/apvarun/toastify-js\n * @license MIT licensed\n *\n * Copyright (C) 2018 Varun A P\n */\n(function(root, factory) {\n  if ( true && module.exports) {\n    module.exports = factory();\n  } else {\n    root.Toastify = factory();\n  }\n})(this, function(global) {\n  // Object initialization\n  var Toastify = function(options) {\n      // Returning a new init object\n      return new Toastify.lib.init(options);\n    },\n    // Library version\n    version = \"1.12.0\";\n\n  // Set the default global options\n  Toastify.defaults = {\n    oldestFirst: true,\n    text: \"Toastify is awesome!\",\n    node: undefined,\n    duration: 3000,\n    selector: undefined,\n    callback: function () {\n    },\n    destination: undefined,\n    newWindow: false,\n    close: false,\n    gravity: \"toastify-top\",\n    positionLeft: false,\n    position: '',\n    backgroundColor: '',\n    avatar: \"\",\n    className: \"\",\n    stopOnFocus: true,\n    onClick: function () {\n    },\n    offset: {x: 0, y: 0},\n    escapeMarkup: true,\n    ariaLive: 'polite',\n    style: {background: ''}\n  };\n\n  // Defining the prototype of the object\n  Toastify.lib = Toastify.prototype = {\n    toastify: version,\n\n    constructor: Toastify,\n\n    // Initializing the object with required parameters\n    init: function(options) {\n      // Verifying and validating the input object\n      if (!options) {\n        options = {};\n      }\n\n      // Creating the options object\n      this.options = {};\n\n      this.toastElement = null;\n\n      // Validating the options\n      this.options.text = options.text || Toastify.defaults.text; // Display message\n      this.options.node = options.node || Toastify.defaults.node;  // Display content as node\n      this.options.duration = options.duration === 0 ? 0 : options.duration || Toastify.defaults.duration; // Display duration\n      this.options.selector = options.selector || Toastify.defaults.selector; // Parent selector\n      this.options.callback = options.callback || Toastify.defaults.callback; // Callback after display\n      this.options.destination = options.destination || Toastify.defaults.destination; // On-click destination\n      this.options.newWindow = options.newWindow || Toastify.defaults.newWindow; // Open destination in new window\n      this.options.close = options.close || Toastify.defaults.close; // Show toast close icon\n      this.options.gravity = options.gravity === \"bottom\" ? \"toastify-bottom\" : Toastify.defaults.gravity; // toast position - top or bottom\n      this.options.positionLeft = options.positionLeft || Toastify.defaults.positionLeft; // toast position - left or right\n      this.options.position = options.position || Toastify.defaults.position; // toast position - left or right\n      this.options.backgroundColor = options.backgroundColor || Toastify.defaults.backgroundColor; // toast background color\n      this.options.avatar = options.avatar || Toastify.defaults.avatar; // img element src - url or a path\n      this.options.className = options.className || Toastify.defaults.className; // additional class names for the toast\n      this.options.stopOnFocus = options.stopOnFocus === undefined ? Toastify.defaults.stopOnFocus : options.stopOnFocus; // stop timeout on focus\n      this.options.onClick = options.onClick || Toastify.defaults.onClick; // Callback after click\n      this.options.offset = options.offset || Toastify.defaults.offset; // toast offset\n      this.options.escapeMarkup = options.escapeMarkup !== undefined ? options.escapeMarkup : Toastify.defaults.escapeMarkup;\n      this.options.ariaLive = options.ariaLive || Toastify.defaults.ariaLive;\n      this.options.style = options.style || Toastify.defaults.style;\n      if(options.backgroundColor) {\n        this.options.style.background = options.backgroundColor;\n      }\n\n      // Returning the current object for chaining functions\n      return this;\n    },\n\n    // Building the DOM element\n    buildToast: function() {\n      // Validating if the options are defined\n      if (!this.options) {\n        throw \"Toastify is not initialized\";\n      }\n\n      // Creating the DOM object\n      var divElement = document.createElement(\"div\");\n      divElement.className = \"toastify on \" + this.options.className;\n\n      // Positioning toast to left or right or center\n      if (!!this.options.position) {\n        divElement.className += \" toastify-\" + this.options.position;\n      } else {\n        // To be depreciated in further versions\n        if (this.options.positionLeft === true) {\n          divElement.className += \" toastify-left\";\n          console.warn('Property `positionLeft` will be depreciated in further versions. Please use `position` instead.')\n        } else {\n          // Default position\n          divElement.className += \" toastify-right\";\n        }\n      }\n\n      // Assigning gravity of element\n      divElement.className += \" \" + this.options.gravity;\n\n      if (this.options.backgroundColor) {\n        // This is being deprecated in favor of using the style HTML DOM property\n        console.warn('DEPRECATION NOTICE: \"backgroundColor\" is being deprecated. Please use the \"style.background\" property.');\n      }\n\n      // Loop through our style object and apply styles to divElement\n      for (var property in this.options.style) {\n        divElement.style[property] = this.options.style[property];\n      }\n\n      // Announce the toast to screen readers\n      if (this.options.ariaLive) {\n        divElement.setAttribute('aria-live', this.options.ariaLive)\n      }\n\n      // Adding the toast message/node\n      if (this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE) {\n        // If we have a valid node, we insert it\n        divElement.appendChild(this.options.node)\n      } else {\n        if (this.options.escapeMarkup) {\n          divElement.innerText = this.options.text;\n        } else {\n          divElement.innerHTML = this.options.text;\n        }\n\n        if (this.options.avatar !== \"\") {\n          var avatarElement = document.createElement(\"img\");\n          avatarElement.src = this.options.avatar;\n\n          avatarElement.className = \"toastify-avatar\";\n\n          if (this.options.position == \"left\" || this.options.positionLeft === true) {\n            // Adding close icon on the left of content\n            divElement.appendChild(avatarElement);\n          } else {\n            // Adding close icon on the right of content\n            divElement.insertAdjacentElement(\"afterbegin\", avatarElement);\n          }\n        }\n      }\n\n      // Adding a close icon to the toast\n      if (this.options.close === true) {\n        // Create a span for close element\n        var closeElement = document.createElement(\"button\");\n        closeElement.type = \"button\";\n        closeElement.setAttribute(\"aria-label\", \"Close\");\n        closeElement.className = \"toast-close\";\n        closeElement.innerHTML = \"&#10006;\";\n\n        // Triggering the removal of toast from DOM on close click\n        closeElement.addEventListener(\n          \"click\",\n          function(event) {\n            event.stopPropagation();\n            this.removeElement(this.toastElement);\n            window.clearTimeout(this.toastElement.timeOutValue);\n          }.bind(this)\n        );\n\n        //Calculating screen width\n        var width = window.innerWidth > 0 ? window.innerWidth : screen.width;\n\n        // Adding the close icon to the toast element\n        // Display on the right if screen width is less than or equal to 360px\n        if ((this.options.position == \"left\" || this.options.positionLeft === true) && width > 360) {\n          // Adding close icon on the left of content\n          divElement.insertAdjacentElement(\"afterbegin\", closeElement);\n        } else {\n          // Adding close icon on the right of content\n          divElement.appendChild(closeElement);\n        }\n      }\n\n      // Clear timeout while toast is focused\n      if (this.options.stopOnFocus && this.options.duration > 0) {\n        var self = this;\n        // stop countdown\n        divElement.addEventListener(\n          \"mouseover\",\n          function(event) {\n            window.clearTimeout(divElement.timeOutValue);\n          }\n        )\n        // add back the timeout\n        divElement.addEventListener(\n          \"mouseleave\",\n          function() {\n            divElement.timeOutValue = window.setTimeout(\n              function() {\n                // Remove the toast from DOM\n                self.removeElement(divElement);\n              },\n              self.options.duration\n            )\n          }\n        )\n      }\n\n      // Adding an on-click destination path\n      if (typeof this.options.destination !== \"undefined\") {\n        divElement.addEventListener(\n          \"click\",\n          function(event) {\n            event.stopPropagation();\n            if (this.options.newWindow === true) {\n              window.open(this.options.destination, \"_blank\");\n            } else {\n              window.location = this.options.destination;\n            }\n          }.bind(this)\n        );\n      }\n\n      if (typeof this.options.onClick === \"function\" && typeof this.options.destination === \"undefined\") {\n        divElement.addEventListener(\n          \"click\",\n          function(event) {\n            event.stopPropagation();\n            this.options.onClick();\n          }.bind(this)\n        );\n      }\n\n      // Adding offset\n      if(typeof this.options.offset === \"object\") {\n\n        var x = getAxisOffsetAValue(\"x\", this.options);\n        var y = getAxisOffsetAValue(\"y\", this.options);\n\n        var xOffset = this.options.position == \"left\" ? x : \"-\" + x;\n        var yOffset = this.options.gravity == \"toastify-top\" ? y : \"-\" + y;\n\n        divElement.style.transform = \"translate(\" + xOffset + \",\" + yOffset + \")\";\n\n      }\n\n      // Returning the generated element\n      return divElement;\n    },\n\n    // Displaying the toast\n    showToast: function() {\n      // Creating the DOM object for the toast\n      this.toastElement = this.buildToast();\n\n      // Getting the root element to with the toast needs to be added\n      var rootElement;\n      if (typeof this.options.selector === \"string\") {\n        rootElement = document.getElementById(this.options.selector);\n      } else if (this.options.selector instanceof HTMLElement || (typeof ShadowRoot !== 'undefined' && this.options.selector instanceof ShadowRoot)) {\n        rootElement = this.options.selector;\n      } else {\n        rootElement = document.body;\n      }\n\n      // Validating if root element is present in DOM\n      if (!rootElement) {\n        throw \"Root element is not defined\";\n      }\n\n      // Adding the DOM element\n      var elementToInsert = Toastify.defaults.oldestFirst ? rootElement.firstChild : rootElement.lastChild;\n      rootElement.insertBefore(this.toastElement, elementToInsert);\n\n      // Repositioning the toasts in case multiple toasts are present\n      Toastify.reposition();\n\n      if (this.options.duration > 0) {\n        this.toastElement.timeOutValue = window.setTimeout(\n          function() {\n            // Remove the toast from DOM\n            this.removeElement(this.toastElement);\n          }.bind(this),\n          this.options.duration\n        ); // Binding `this` for function invocation\n      }\n\n      // Supporting function chaining\n      return this;\n    },\n\n    hideToast: function() {\n      if (this.toastElement.timeOutValue) {\n        clearTimeout(this.toastElement.timeOutValue);\n      }\n      this.removeElement(this.toastElement);\n    },\n\n    // Removing the element from the DOM\n    removeElement: function(toastElement) {\n      // Hiding the element\n      // toastElement.classList.remove(\"on\");\n      toastElement.className = toastElement.className.replace(\" on\", \"\");\n\n      // Removing the element from DOM after transition end\n      window.setTimeout(\n        function() {\n          // remove options node if any\n          if (this.options.node && this.options.node.parentNode) {\n            this.options.node.parentNode.removeChild(this.options.node);\n          }\n\n          // Remove the element from the DOM, only when the parent node was not removed before.\n          if (toastElement.parentNode) {\n            toastElement.parentNode.removeChild(toastElement);\n          }\n\n          // Calling the callback function\n          this.options.callback.call(toastElement);\n\n          // Repositioning the toasts again\n          Toastify.reposition();\n        }.bind(this),\n        400\n      ); // Binding `this` for function invocation\n    },\n  };\n\n  // Positioning the toasts on the DOM\n  Toastify.reposition = function() {\n\n    // Top margins with gravity\n    var topLeftOffsetSize = {\n      top: 15,\n      bottom: 15,\n    };\n    var topRightOffsetSize = {\n      top: 15,\n      bottom: 15,\n    };\n    var offsetSize = {\n      top: 15,\n      bottom: 15,\n    };\n\n    // Get all toast messages on the DOM\n    var allToasts = document.getElementsByClassName(\"toastify\");\n\n    var classUsed;\n\n    // Modifying the position of each toast element\n    for (var i = 0; i < allToasts.length; i++) {\n      // Getting the applied gravity\n      if (containsClass(allToasts[i], \"toastify-top\") === true) {\n        classUsed = \"toastify-top\";\n      } else {\n        classUsed = \"toastify-bottom\";\n      }\n\n      var height = allToasts[i].offsetHeight;\n      classUsed = classUsed.substr(9, classUsed.length-1)\n      // Spacing between toasts\n      var offset = 15;\n\n      var width = window.innerWidth > 0 ? window.innerWidth : screen.width;\n\n      // Show toast in center if screen with less than or equal to 360px\n      if (width <= 360) {\n        // Setting the position\n        allToasts[i].style[classUsed] = offsetSize[classUsed] + \"px\";\n\n        offsetSize[classUsed] += height + offset;\n      } else {\n        if (containsClass(allToasts[i], \"toastify-left\") === true) {\n          // Setting the position\n          allToasts[i].style[classUsed] = topLeftOffsetSize[classUsed] + \"px\";\n\n          topLeftOffsetSize[classUsed] += height + offset;\n        } else {\n          // Setting the position\n          allToasts[i].style[classUsed] = topRightOffsetSize[classUsed] + \"px\";\n\n          topRightOffsetSize[classUsed] += height + offset;\n        }\n      }\n    }\n\n    // Supporting function chaining\n    return this;\n  };\n\n  // Helper function to get offset.\n  function getAxisOffsetAValue(axis, options) {\n\n    if(options.offset[axis]) {\n      if(isNaN(options.offset[axis])) {\n        return options.offset[axis];\n      }\n      else {\n        return options.offset[axis] + 'px';\n      }\n    }\n\n    return '0px';\n\n  }\n\n  function containsClass(elem, yourClass) {\n    if (!elem || typeof yourClass !== \"string\") {\n      return false;\n    } else if (\n      elem.className &&\n      elem.className\n        .trim()\n        .split(/\\s+/gi)\n        .indexOf(yourClass) > -1\n    ) {\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  // Setting up the prototype for the init object\n  Toastify.lib.init.prototype = Toastify.lib;\n\n  // Returning the Toastify function to be assigned to the window object/module\n  return Toastify;\n});\n\n\n//# sourceURL=webpack://toastify-test/./node_modules/toastify-js/src/toastify.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! toastify-js */ \"./node_modules/toastify-js/src/toastify.js\");\n/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\nbtn = document.querySelector('#toaster');\r\n\r\nfunction toastIt(){\r\n    toastify_js__WEBPACK_IMPORTED_MODULE_0___default()({\r\n        text: \"This is a toast\",\r\n        duration: 3000}).showToast();\r\n}\r\nbtn.addEventListener('click',toastIt);\n\n//# sourceURL=webpack://toastify-test/./src/index.js?");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;