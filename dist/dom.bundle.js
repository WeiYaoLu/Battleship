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
/*!*************************!*\
  !*** ./src/domManip.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createGameBoardUI": () => (/* binding */ createGameBoardUI),
/* harmony export */   "restartUI": () => (/* binding */ restartUI),
/* harmony export */   "updateHeader": () => (/* binding */ updateHeader)
/* harmony export */ });
const createElement = {
    createSection: function (idName) {
        let section = document.createElement("section");
        section.setAttribute('id', idName);
        return section;
    },
    createDiv: function (idName) {
        let div = document.createElement("div");
        div.setAttribute('id', idName);
        return div;
    },
    createPara: function (text) {
        let para = document.createElement("p");
        para.textContent = text;
        return para;
    },
    createLi: function (ul, arr) {
        for (let i = 0; i < arr.length; i++) {
            let li = document.createElement("li");
            li.innerHTML = arr[i];
            ul.appendChild(li)
        }
        return ul;
    },
    createH: function (num, text) {
        const heading = document.createElement(`h${num}`);
        heading.innerText = text;
        return heading
    }
}

const createContainer = () => {
    const main = createElement.createDiv('mainContainer');
    document.body.appendChild(main);
}

const createGameBoardUI = (player1, computer1) => {
    const main = document.getElementById('mainContainer');

    const title = createElement.createH(1, "Battleship");
    main.appendChild(title);

    const header = createElement.createH(1, "Place your submarine anywhere on the player board");
    header.setAttribute('id', 'header');

    const gameboards = createElement.createDiv('gameboards');
    const playerGameboard = createElement.createDiv('playerGameboard');
    const computerGameboard = createElement.createDiv('computerGameboard');

    const playerHeader = createElement.createH(2, 'Player');
    playerHeader.setAttribute('id', 'playerHeader');

    const computerHeader = createElement.createH(2, 'AI');
    computerHeader.setAttribute('id', 'computerHeader');

    const orientationBtn = document.createElement('button');
    orientationBtn.innerText = 'Horizontal'
    orientationBtn.setAttribute('id', 'orientBtn')

    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('id', 'restartBtn');
    restartBtn.textContent = 'Restart'

    const btnContainer = createElement.createDiv('btnContainer');

    for (let i = 0; i < (player1.length); i++) {
        for (let j = 0; j < (player1[i].length); j++) {
            let gameCell = createElement.createDiv(`${i}${j}`)
            gameCell.classList.add("cell");
            playerGameboard.appendChild(gameCell);
        }
    }

    for (let i = 0; i < (computer1.length); i++) {
        for (let j = 0; j < (computer1[i].length); j++) {
            let gameCell = createElement.createDiv(`${i}${j}computer`)
            gameCell.classList.add("cell");
            computerGameboard.appendChild(gameCell);
        }
    }

    main.appendChild(header)
    btnContainer.append(orientationBtn, restartBtn)
    main.appendChild(btnContainer)
    main.appendChild(gameboards)
    gameboards.append(playerHeader, playerGameboard, computerHeader, computerGameboard)
}

const updateHeader = (text) => {
    const header = document.getElementById('header');
    header.textContent = text;
}

const restartUI = () => {
    const main = document.getElementById('mainContainer');
    main.innerHTML = ''
}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbURBQW1ELElBQUk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQyx3QkFBd0IseUJBQXlCO0FBQ2pELHNEQUFzRCxFQUFFLEVBQUUsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1Qyx3QkFBd0IsMkJBQTJCO0FBQ25ELHNEQUFzRCxFQUFFLEVBQUUsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbU1hbmlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY3JlYXRlRWxlbWVudCA9IHtcclxuICAgIGNyZWF0ZVNlY3Rpb246IGZ1bmN0aW9uIChpZE5hbWUpIHtcclxuICAgICAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gICAgICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlRGl2OiBmdW5jdGlvbiAoaWROYW1lKSB7XHJcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLCBpZE5hbWUpO1xyXG4gICAgICAgIHJldHVybiBkaXY7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlUGFyYTogZnVuY3Rpb24gKHRleHQpIHtcclxuICAgICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIHJldHVybiBwYXJhO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUxpOiBmdW5jdGlvbiAodWwsIGFycikge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYXJyW2ldO1xyXG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVsO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZUg6IGZ1bmN0aW9uIChudW0sIHRleHQpIHtcclxuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7bnVtfWApO1xyXG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gdGV4dDtcclxuICAgICAgICByZXR1cm4gaGVhZGluZ1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ21haW5Db250YWluZXInKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUdhbWVCb2FyZFVJID0gKHBsYXllcjEsIGNvbXB1dGVyMSkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMSwgXCJCYXR0bGVzaGlwXCIpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDEsIFwiUGxhY2UgeW91ciBzdWJtYXJpbmUgYW55d2hlcmUgb24gdGhlIHBsYXllciBib2FyZFwiKTtcclxuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xyXG5cclxuICAgIGNvbnN0IGdhbWVib2FyZHMgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignZ2FtZWJvYXJkcycpO1xyXG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ3BsYXllckdhbWVib2FyZCcpO1xyXG4gICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignY29tcHV0ZXJHYW1lYm9hcmQnKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwgJ1BsYXllcicpO1xyXG4gICAgcGxheWVySGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVySGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgY29tcHV0ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwgJ0FJJyk7XHJcbiAgICBjb21wdXRlckhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXB1dGVySGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3Qgb3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG9yaWVudGF0aW9uQnRuLmlubmVyVGV4dCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgb3JpZW50YXRpb25CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdvcmllbnRCdG4nKVxyXG5cclxuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlc3RhcnRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0YXJ0QnRuJyk7XHJcbiAgICByZXN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnXHJcblxyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ2J0bkNvbnRhaW5lcicpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHBsYXllcjEubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAocGxheWVyMVtpXS5sZW5ndGgpOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoYCR7aX0ke2p9YClcclxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5hcHBlbmRDaGlsZChnYW1lQ2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGNvbXB1dGVyMS5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IChjb21wdXRlcjFbaV0ubGVuZ3RoKTsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KGAke2l9JHtqfWNvbXB1dGVyYClcclxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKGdhbWVDZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpXHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kKG9yaWVudGF0aW9uQnRuLCByZXN0YXJ0QnRuKVxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVib2FyZHMpXHJcbiAgICBnYW1lYm9hcmRzLmFwcGVuZChwbGF5ZXJIZWFkZXIsIHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJIZWFkZXIsIGNvbXB1dGVyR2FtZWJvYXJkKVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVIZWFkZXIgPSAodGV4dCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcclxufVxyXG5cclxuY29uc3QgcmVzdGFydFVJID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XHJcbiAgICBtYWluLmlubmVySFRNTCA9ICcnXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUNvbnRhaW5lciwgY3JlYXRlR2FtZUJvYXJkVUksIHVwZGF0ZUhlYWRlciwgcmVzdGFydFVJIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9