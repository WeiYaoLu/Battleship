/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computer": () => (/* binding */ computer),
/* harmony export */   "gameBoardFactory": () => (/* binding */ gameBoardFactory),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });


const shipFactory = (name, length) => {
    const health = [];
    let isPlaced = false;
    const isPlacedSetter = (arg) => isPlaced = arg;
    const isPlacedGetter = () => isPlaced;

    const hit = () => {
        health.push('x')
        return health;
    }

    const isSunk = () => {
        if (health.length === length) {
            return true
        }
        return false
    }

    return { name, length, hit, isSunk, isPlacedGetter, isPlacedSetter }
}


const gameBoardFactory = () => {
    let gameArray = [];

    const startGame = () => {
        gameArray = [
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', ''],
            ['', '', '', '', '', '', '', '', '', '']
        ]
    }

    let shipsAlive = [];
    const shipsAliveGetter = () => shipsAlive;
    const place = (ship, r, c, orient) => {
        const canPlace = () => {
            let empty = true
            if (orient === 'horizontal') {
                for (let i = c; i < (c + ship.length); i++) {
                    if (gameArray[r][i] !== '') {
                        empty = false
                    }
                }
            } else if (orient === 'vertical') {
                for (let i = r; i < (r + ship.length); i++) {
                    if (gameArray[i][c] !== '') {
                        empty = false
                    }
                }
            }
            return empty
        };
        
        if (orient === 'horizontal' && canPlace()) {
            for (let i = c; i < (c + ship.length); i++) {
                gameArray[r][i] = ship;
            }
            shipsAlive.push(ship.name)
        } else if (orient === 'vertical' && canPlace()) {
            for (let i = r; i < ((ship.length + r)); i++) {
                gameArray[i][c] = ship;
            }
            shipsAlive.push(ship.name)
        }
        return gameArray;
    }

    const recieveAttack = (r, c) => {
        if (gameArray[r][c] === '') {
            gameArray[r][c] = 'x'
        } else {
            gameArray[r][c].hit();
            if (gameArray[r][c].isSunk()) {
                shipsAlive.pop(gameArray[r][c].name)
            }
            gameArray[r][c] = 'X';
        }
        return gameArray
    }

    const arrayGetter = () => gameArray;
    return { startGame, place, recieveAttack, arrayGetter, shipsAliveGetter }
}

const player = () => {
    let playerBoard = gameBoardFactory();
    playerBoard.startGame();
    const playerPlace = (ship, r, c, orient) => {
        return playerBoard.place(ship, r, c, orient);
    }

    const playerAttack = (computerBoard, e) => {
        const r = parseInt(e.target.id[0])
        const c = parseInt(e.target.id[1])
        computerBoard.recieveAttack(r, c);
        return true
    }

    return { playerBoard, playerPlace, playerAttack }
}

const computer = () => {
    let computerBoard = gameBoardFactory();
    computerBoard.startGame();
    const attack = (playerBoard) => {
        let randomChoice = () => {
            let randomr = Math.floor(Math.random() * 10)
            let randomc = Math.floor(Math.random() * 10)
            return [randomr, randomc]
        }
        let random = randomChoice();
        let r = random[0];
        let c = random[1];
        if ((playerBoard.arrayGetter()[r][c] === 'x') || (playerBoard.arrayGetter()[r][c] === 'X')) {
            attack(playerBoard)
        } else {

            playerBoard.recieveAttack(r, c);
            return playerBoard.arrayGetter();
        }

    }

    return { computerBoard, attack }
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx1QkFBdUI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsZ0NBQWdDLHVCQUF1QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDViw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxyXG5cclxuY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFsdGggPSBbXTtcclxuICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaXNQbGFjZWRTZXR0ZXIgPSAoYXJnKSA9PiBpc1BsYWNlZCA9IGFyZztcclxuICAgIGNvbnN0IGlzUGxhY2VkR2V0dGVyID0gKCkgPT4gaXNQbGFjZWQ7XHJcblxyXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGhlYWx0aC5wdXNoKCd4JylcclxuICAgICAgICByZXR1cm4gaGVhbHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGVhbHRoLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IG5hbWUsIGxlbmd0aCwgaGl0LCBpc1N1bmssIGlzUGxhY2VkR2V0dGVyLCBpc1BsYWNlZFNldHRlciB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBnYW1lQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xyXG4gICAgbGV0IGdhbWVBcnJheSA9IFtdO1xyXG5cclxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgICAgICBnYW1lQXJyYXkgPSBbXHJcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ10sXHJcbiAgICAgICAgICAgIFsnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJ11cclxuICAgICAgICBdXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHNoaXBzQWxpdmUgPSBbXTtcclxuICAgIGNvbnN0IHNoaXBzQWxpdmVHZXR0ZXIgPSAoKSA9PiBzaGlwc0FsaXZlO1xyXG4gICAgY29uc3QgcGxhY2UgPSAoc2hpcCwgciwgYywgb3JpZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgY2FuUGxhY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBlbXB0eSA9IHRydWVcclxuICAgICAgICAgICAgaWYgKG9yaWVudCA9PT0gJ2hvcml6b250YWwnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gYzsgaSA8IChjICsgc2hpcC5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZUFycmF5W3JdW2ldICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudCA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHI7IGkgPCAociArIHNoaXAubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVBcnJheVtpXVtjXSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHkgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChvcmllbnQgPT09ICdob3Jpem9udGFsJyAmJiBjYW5QbGFjZSgpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjOyBpIDwgKGMgKyBzaGlwLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZ2FtZUFycmF5W3JdW2ldID0gc2hpcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzaGlwc0FsaXZlLnB1c2goc2hpcC5uYW1lKVxyXG4gICAgICAgIH0gZWxzZSBpZiAob3JpZW50ID09PSAndmVydGljYWwnICYmIGNhblBsYWNlKCkpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHI7IGkgPCAoKHNoaXAubGVuZ3RoICsgcikpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGdhbWVBcnJheVtpXVtjXSA9IHNoaXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2hpcHNBbGl2ZS5wdXNoKHNoaXAubmFtZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdhbWVBcnJheTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHIsIGMpID0+IHtcclxuICAgICAgICBpZiAoZ2FtZUFycmF5W3JdW2NdID09PSAnJykge1xyXG4gICAgICAgICAgICBnYW1lQXJyYXlbcl1bY10gPSAneCdcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnYW1lQXJyYXlbcl1bY10uaGl0KCk7XHJcbiAgICAgICAgICAgIGlmIChnYW1lQXJyYXlbcl1bY10uaXNTdW5rKCkpIHtcclxuICAgICAgICAgICAgICAgIHNoaXBzQWxpdmUucG9wKGdhbWVBcnJheVtyXVtjXS5uYW1lKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdhbWVBcnJheVtyXVtjXSA9ICdYJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdhbWVBcnJheVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFycmF5R2V0dGVyID0gKCkgPT4gZ2FtZUFycmF5O1xyXG4gICAgcmV0dXJuIHsgc3RhcnRHYW1lLCBwbGFjZSwgcmVjaWV2ZUF0dGFjaywgYXJyYXlHZXR0ZXIsIHNoaXBzQWxpdmVHZXR0ZXIgfVxyXG59XHJcblxyXG5jb25zdCBwbGF5ZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XHJcbiAgICBwbGF5ZXJCb2FyZC5zdGFydEdhbWUoKTtcclxuICAgIGNvbnN0IHBsYXllclBsYWNlID0gKHNoaXAsIHIsIGMsIG9yaWVudCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5wbGFjZShzaGlwLCByLCBjLCBvcmllbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBsYXllckF0dGFjayA9IChjb21wdXRlckJvYXJkLCBlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgciA9IHBhcnNlSW50KGUudGFyZ2V0LmlkWzBdKVxyXG4gICAgICAgIGNvbnN0IGMgPSBwYXJzZUludChlLnRhcmdldC5pZFsxXSlcclxuICAgICAgICBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2sociwgYyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBwbGF5ZXJCb2FyZCwgcGxheWVyUGxhY2UsIHBsYXllckF0dGFjayB9XHJcbn1cclxuXHJcbmNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XHJcbiAgICBjb21wdXRlckJvYXJkLnN0YXJ0R2FtZSgpO1xyXG4gICAgY29uc3QgYXR0YWNrID0gKHBsYXllckJvYXJkKSA9PiB7XHJcbiAgICAgICAgbGV0IHJhbmRvbUNob2ljZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICAgICAgbGV0IHJhbmRvbWMgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcclxuICAgICAgICAgICAgcmV0dXJuIFtyYW5kb21yLCByYW5kb21jXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmFuZG9tID0gcmFuZG9tQ2hvaWNlKCk7XHJcbiAgICAgICAgbGV0IHIgPSByYW5kb21bMF07XHJcbiAgICAgICAgbGV0IGMgPSByYW5kb21bMV07XHJcbiAgICAgICAgaWYgKChwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW3JdW2NdID09PSAneCcpIHx8IChwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW3JdW2NdID09PSAnWCcpKSB7XHJcbiAgICAgICAgICAgIGF0dGFjayhwbGF5ZXJCb2FyZClcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgcGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhyLCBjKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkLmFycmF5R2V0dGVyKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBjb21wdXRlckJvYXJkLCBhdHRhY2sgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgc2hpcEZhY3RvcnksIGdhbWVCb2FyZEZhY3RvcnksIHBsYXllciwgY29tcHV0ZXIgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==