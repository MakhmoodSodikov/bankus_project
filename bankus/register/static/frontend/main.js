/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./register/Register.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./register/Register.js":
/*!******************************!*\
  !*** ./register/Register.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /home/makhmood/PycharmProjects/bankus/register/Register.js: Unexpected token (57:0)\\n\\n\\u001b[0m \\u001b[90m 55 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 56 | \\u001b[39m\\u001b[36mexport\\u001b[39m \\u001b[36mdefault\\u001b[39m \\u001b[33mFormContainer\\u001b[39m\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 57 | \\u001b[39m}\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n    at Object.raise (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:7013:17)\\n    at Object.unexpected (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:8384:16)\\n    at Object.parseExprAtom (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:9639:20)\\n    at Object.parseExprAtom (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:4116:20)\\n    at Object.parseExprSubscripts (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:9219:23)\\n    at Object.parseMaybeUnary (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:9199:21)\\n    at Object.parseExprOps (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:9067:23)\\n    at Object.parseMaybeConditional (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:9040:23)\\n    at Object.parseMaybeAssign (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:9000:21)\\n    at Object.parseExpression (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:8950:23)\\n    at Object.parseStatementContent (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:10787:23)\\n    at Object.parseStatement (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:10658:17)\\n    at Object.parseBlockOrModuleBlockBody (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:11234:25)\\n    at Object.parseBlockBody (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:11221:10)\\n    at Object.parseTopLevel (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:10589:10)\\n    at Object.parse (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:12192:10)\\n    at parse (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/parser/lib/index.js:12243:38)\\n    at parser (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/core/lib/parser/index.js:54:34)\\n    at parser.next (<anonymous>)\\n    at normalizeFile (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/core/lib/transformation/normalize-file.js:93:38)\\n    at normalizeFile.next (<anonymous>)\\n    at run (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/core/lib/transformation/index.js:31:50)\\n    at run.next (<anonymous>)\\n    at Function.transform (/home/makhmood/PycharmProjects/bankus/node_modules/@babel/core/lib/transform.js:27:41)\\n    at transform.next (<anonymous>)\\n    at step (/home/makhmood/PycharmProjects/bankus/node_modules/gensync/index.js:254:32)\\n    at gen.next (/home/makhmood/PycharmProjects/bankus/node_modules/gensync/index.js:266:13)\\n    at async.call.value (/home/makhmood/PycharmProjects/bankus/node_modules/gensync/index.js:216:11)\\n    at <anonymous>\");\n\n//# sourceURL=webpack:///./register/Register.js?");

/***/ })

/******/ });