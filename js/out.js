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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction Player() {\n    this.x = 0;\n    this.y = 0;\n    this.direction = 'right';\n}\n\nfunction Ball() {\n    this.x = Math.floor(Math.random() * 10);\n    this.y = Math.floor(Math.random() * 10);\n}\n\nfunction Game() {\n    this.board = document.querySelectorAll('#board div');\n    this.player = new Player();\n    this.ball = new Ball();\n    this.score = 0;\n    this.index = function (x, y) {\n        return x + y * 10;\n    };\n    this.showPlayer = function () {\n        this.hideVisiblePlayer();\n        this.board[this.index(this.player.x, this.player.y)].classList.add('player');\n    };\n    this.showBall = function () {\n        this.board[this.index(this.ball.x, this.ball.y)].classList.add('ball');\n    };\n    this.hideBall = function () {\n        this.board[this.index(this.ball.x, this.ball.y)].classList.remove('ball');\n    };\n    this.startGame = function () {\n        var self = this;\n        this.idSetInterval = setInterval(function () {\n            self.movePlayer();\n        }, 250);\n    };\n    this.hideVisiblePlayer = function () {\n        var presentPlayer = document.querySelector('div.player');\n        if (presentPlayer) {\n            presentPlayer.classList.remove('player');\n        }\n    };\n    this.turnPlayer = function (event) {\n\n        switch (event.which) {\n            case 37:\n                this.player.direction = 'left';\n                break;\n            case 38:\n                this.player.direction = 'top';\n                break;\n            case 39:\n                this.player.direction = 'right';\n                break;\n            case 40:\n                this.player.direction = 'down';\n                break;\n        }\n    };\n    this.movePlayer = function () {\n        if (this.player.direction === \"right\") {\n            this.player.x = this.player.x + 1;\n        } else if (this.player.direction === \"left\") {\n            this.player.x = this.player.x - 1;\n        } else if (this.player.direction === \"top\") {\n            this.player.y = this.player.y - 1;\n        } else if (this.player.direction === \"down\") {\n            this.player.y = this.player.y + 1;\n        };\n\n        this.checkBallCollision();\n        this.gameOver();\n        this.showPlayer();\n    };\n    this.checkBallCollision = function () {\n        if (this.player.x == this.ball.x && this.player.y == this.ball.y) {\n            this.hideBall();\n            this.score++;\n            document.querySelector('strong').innerText = this.score;\n            this.ball = new Ball();\n            this.showBall();\n        }\n    };\n    this.gameOver = function () {\n        if (this.player.x < 0 || this.player.x > 9 || this.player.y < 0 || this.player.y > 9) {\n            clearInterval(this.idSetInterval);\n            this.hideVisiblePlayer();\n            alert('Game over. Score: ' + this.score);\n        }\n    };\n}\n\nvar newGame = new Game();\nnewGame.showPlayer();\nnewGame.showBall();\nnewGame.startGame();\n\ndocument.addEventListener('keydown', function (event) {\n    newGame.turnPlayer(event);\n});\n\n//# sourceURL=webpack:///./js/app.js?");

/***/ })

/******/ });