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
    let board = [];

    const startGame = () => {
        board = [
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
                    if (board[r][i] !== '') {
                        empty = false
                    }
                }
            } else if (orient === 'vertical') {
                for (let i = r; i < (r + ship.length); i++) {
                    if (board[i][c] !== '') {
                        empty = false
                    }
                }
            }
            return empty
        };

        if (orient === 'horizontal' && canPlace()) {
            for (let i = c; i < (c + ship.length); i++) {
                board[r][i] = ship;
            }
            shipsAlive.push(ship.name)
        } else if (orient === 'vertical' && canPlace()) {
            for (let i = r; i < ((ship.length + r)); i++) {
                board[i][c] = ship;
            }
            shipsAlive.push(ship.name)
        }
        return board;
    }

    const recieveAttack = (r, c) => {
        if (board[r][c] === '') {
            board[r][c] = 'x'
        } else {
            board[r][c].hit();
            if (board[r][c].isSunk()) {
                shipsAlive.pop(board[r][c].name)
            }
            board[r][c] = 'X';
        }
        return board
    }

    const arrayGetter = () => board;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHVCQUF1QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZCxnQ0FBZ0MsdUJBQXVCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSwgbGVuZ3RoKSA9PiB7XHJcbiAgICBjb25zdCBoZWFsdGggPSBbXTtcclxuICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgaXNQbGFjZWRTZXR0ZXIgPSAoYXJnKSA9PiBpc1BsYWNlZCA9IGFyZztcclxuICAgIGNvbnN0IGlzUGxhY2VkR2V0dGVyID0gKCkgPT4gaXNQbGFjZWQ7XHJcblxyXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xyXG4gICAgICAgIGhlYWx0aC5wdXNoKCd4JylcclxuICAgICAgICByZXR1cm4gaGVhbHRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGVhbHRoLmxlbmd0aCA9PT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IG5hbWUsIGxlbmd0aCwgaGl0LCBpc1N1bmssIGlzUGxhY2VkR2V0dGVyLCBpc1BsYWNlZFNldHRlciB9XHJcbn1cclxuXHJcblxyXG5jb25zdCBnYW1lQm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xyXG4gICAgbGV0IGJvYXJkID0gW107XHJcblxyXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIGJvYXJkID0gW1xyXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddLFxyXG4gICAgICAgICAgICBbJycsICcnLCAnJywgJycsICcnLCAnJywgJycsICcnLCAnJywgJyddXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBzaGlwc0FsaXZlID0gW107XHJcbiAgICBjb25zdCBzaGlwc0FsaXZlR2V0dGVyID0gKCkgPT4gc2hpcHNBbGl2ZTtcclxuICAgIGNvbnN0IHBsYWNlID0gKHNoaXAsIHIsIGMsIG9yaWVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhblBsYWNlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZW1wdHkgPSB0cnVlXHJcbiAgICAgICAgICAgIGlmIChvcmllbnQgPT09ICdob3Jpem9udGFsJykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGM7IGkgPCAoYyArIHNoaXAubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkW3JdW2ldICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9yaWVudCA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHI7IGkgPCAociArIHNoaXAubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJvYXJkW2ldW2NdICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChvcmllbnQgPT09ICdob3Jpem9udGFsJyAmJiBjYW5QbGFjZSgpKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBjOyBpIDwgKGMgKyBzaGlwLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbcl1baV0gPSBzaGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNoaXBzQWxpdmUucHVzaChzaGlwLm5hbWUpXHJcbiAgICAgICAgfSBlbHNlIGlmIChvcmllbnQgPT09ICd2ZXJ0aWNhbCcgJiYgY2FuUGxhY2UoKSkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcjsgaSA8ICgoc2hpcC5sZW5ndGggKyByKSk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgYm9hcmRbaV1bY10gPSBzaGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNoaXBzQWxpdmUucHVzaChzaGlwLm5hbWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2FyZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHIsIGMpID0+IHtcclxuICAgICAgICBpZiAoYm9hcmRbcl1bY10gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIGJvYXJkW3JdW2NdID0gJ3gnXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYm9hcmRbcl1bY10uaGl0KCk7XHJcbiAgICAgICAgICAgIGlmIChib2FyZFtyXVtjXS5pc1N1bmsoKSkge1xyXG4gICAgICAgICAgICAgICAgc2hpcHNBbGl2ZS5wb3AoYm9hcmRbcl1bY10ubmFtZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBib2FyZFtyXVtjXSA9ICdYJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvYXJkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYXJyYXlHZXR0ZXIgPSAoKSA9PiBib2FyZDtcclxuICAgIHJldHVybiB7IHN0YXJ0R2FtZSwgcGxhY2UsIHJlY2lldmVBdHRhY2ssIGFycmF5R2V0dGVyLCBzaGlwc0FsaXZlR2V0dGVyIH1cclxufVxyXG5cclxuY29uc3QgcGxheWVyID0gKCkgPT4ge1xyXG4gICAgbGV0IHBsYXllckJvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xyXG4gICAgcGxheWVyQm9hcmQuc3RhcnRHYW1lKCk7XHJcbiAgICBjb25zdCBwbGF5ZXJQbGFjZSA9IChzaGlwLCByLCBjLCBvcmllbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQucGxhY2Uoc2hpcCwgciwgYywgb3JpZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSAoY29tcHV0ZXJCb2FyZCwgZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHIgPSBwYXJzZUludChlLnRhcmdldC5pZFswXSlcclxuICAgICAgICBjb25zdCBjID0gcGFyc2VJbnQoZS50YXJnZXQuaWRbMV0pXHJcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKHIsIGMpO1xyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgcGxheWVyQm9hcmQsIHBsYXllclBsYWNlLCBwbGF5ZXJBdHRhY2sgfVxyXG59XHJcblxyXG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcclxuICAgIGxldCBjb21wdXRlckJvYXJkID0gZ2FtZUJvYXJkRmFjdG9yeSgpO1xyXG4gICAgY29tcHV0ZXJCb2FyZC5zdGFydEdhbWUoKTtcclxuICAgIGNvbnN0IGF0dGFjayA9IChwbGF5ZXJCb2FyZCkgPT4ge1xyXG4gICAgICAgIGxldCByYW5kb21DaG9pY2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21yID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIGxldCByYW5kb21jID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXHJcbiAgICAgICAgICAgIHJldHVybiBbcmFuZG9tciwgcmFuZG9tY11cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IHJhbmRvbUNob2ljZSgpO1xyXG4gICAgICAgIGxldCByID0gcmFuZG9tWzBdO1xyXG4gICAgICAgIGxldCBjID0gcmFuZG9tWzFdO1xyXG4gICAgICAgIGlmICgocGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyXVtjXSA9PT0gJ3gnKSB8fCAocGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyXVtjXSA9PT0gJ1gnKSkge1xyXG4gICAgICAgICAgICBhdHRhY2socGxheWVyQm9hcmQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlY2lldmVBdHRhY2sociwgYyk7XHJcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHsgY29tcHV0ZXJCb2FyZCwgYXR0YWNrIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCB7IHNoaXBGYWN0b3J5LCBnYW1lQm9hcmRGYWN0b3J5LCBwbGF5ZXIsIGNvbXB1dGVyIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=