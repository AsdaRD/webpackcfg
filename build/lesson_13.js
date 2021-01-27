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
/******/ 	return __webpack_require__(__webpack_require__.s = 377);
/******/ })
/************************************************************************/
/******/ ({

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(378);


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(379);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fruites = ['oranges', 'bananas', 'apples'];

fruites.push('tomatoes');
fruites.pop();

// // es6

var Persone = function () {
    function Persone(firstName, secondName, email, age) {
        _classCallCheck(this, Persone);

        this.firstName = firstName;
        this.secondName = secondName;
        this.email = email;
        this.newField = 'humans';
        this.age = age;
    }

    _createClass(Persone, [{
        key: 'greet',
        value: function greet() {
            return this._createGreetPhrase();
        }
    }, {
        key: '_createGreetPhrase',
        value: function _createGreetPhrase() {
            return 'Hello my name is ' + this.firstname + ' ' + this.secondName;
        }
    }]);

    return Persone;
}();

var Developer = function (_Persone) {
    _inherits(Developer, _Persone);

    function Developer(firstName, secondName, email, age, lang) {
        _classCallCheck(this, Developer);

        var _this = _possibleConstructorReturn(this, (Developer.__proto__ || Object.getPrototypeOf(Developer)).call(this, firstName, secondName, email, age));

        _this.lang = lang;
        return _this;
    }

    _createClass(Developer, [{
        key: 'code',
        value: function code() {
            console.log('Write code on' + this.lang);
        }
    }]);

    return Developer;
}(Persone);

// Object


var users = [new Persone('Vasya', 'Ivanov', 'vasya@gmail.com', 20), new Developer('Jack', 'Daniel', 'vasya@gmail.com', 20, 'js'), new Persone('John', 'Snow', 'vasya@gmail.com', 20), new Developer('Tony', 'Smith', 'vasya@gmail.com', 20)];

console.log(users[0]);

window.user = users[0];
window.user1 = users[1];

var body = document.querySelector('body');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = users[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var user = _step.value;

        var div = document.createElement('div');
        div.innerHTML = '<h4>' + user.greet() + '</span>';
        body.appendChild(div);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });