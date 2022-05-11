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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbURBQW1ELElBQUk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDLHdCQUF3Qix5QkFBeUI7QUFDakQsc0RBQXNELEVBQUUsRUFBRSxFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDLHdCQUF3QiwyQkFBMkI7QUFDbkQsc0RBQXNELEVBQUUsRUFBRSxFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tTWFuaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjcmVhdGVFbGVtZW50ID0ge1xyXG4gICAgY3JlYXRlU2VjdGlvbjogZnVuY3Rpb24gKGlkTmFtZSkge1xyXG4gICAgICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgaWROYW1lKTtcclxuICAgICAgICByZXR1cm4gc2VjdGlvbjtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVEaXY6IGZ1bmN0aW9uIChpZE5hbWUpIHtcclxuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsIGlkTmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIGRpdjtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVQYXJhOiBmdW5jdGlvbiAodGV4dCkge1xyXG4gICAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XHJcbiAgICAgICAgcmV0dXJuIHBhcmE7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlTGk6IGZ1bmN0aW9uICh1bCwgYXJyKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBhcnJbaV07XHJcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdWw7XHJcbiAgICB9LFxyXG4gICAgY3JlYXRlSDogZnVuY3Rpb24gKG51bSwgdGV4dCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoJHtudW19YCk7XHJcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHJldHVybiBoZWFkaW5nXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+IHtcclxuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignbWFpbkNvbnRhaW5lcicpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGNyZWF0ZUdhbWVCb2FyZFVJID0gKHBsYXllcjEsIGNvbXB1dGVyMSkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMSwgXCJCYXR0bGVzaGlwXCIpO1xyXG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDEsIFwiUGxhY2UgeW91ciBzdWJtYXJpbmUgYW55d2hlcmUgb24gdGhlIHBsYXllciBib2FyZFwiKTtcclxuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hlYWRlcicpO1xyXG5cclxuICAgIGNvbnN0IGdhbWVib2FyZHMgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignZ2FtZWJvYXJkcycpO1xyXG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ3BsYXllckdhbWVib2FyZCcpO1xyXG4gICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignY29tcHV0ZXJHYW1lYm9hcmQnKTtcclxuXHJcbiAgICBjb25zdCBwbGF5ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwgJ1BsYXllcicpO1xyXG4gICAgcGxheWVySGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncGxheWVySGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3QgY29tcHV0ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwgJ0FJJyk7XHJcbiAgICBjb21wdXRlckhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXB1dGVySGVhZGVyJyk7XHJcblxyXG4gICAgY29uc3Qgb3JpZW50YXRpb25CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG9yaWVudGF0aW9uQnRuLmlubmVyVGV4dCA9ICdIb3Jpem9udGFsJ1xyXG4gICAgb3JpZW50YXRpb25CdG4uc2V0QXR0cmlidXRlKCdpZCcsICdvcmllbnRCdG4nKVxyXG5cclxuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIHJlc3RhcnRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdyZXN0YXJ0QnRuJyk7XHJcbiAgICByZXN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnXHJcblxyXG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ2J0bkNvbnRhaW5lcicpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKHBsYXllcjEubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAocGxheWVyMVtpXS5sZW5ndGgpOyBqKyspIHtcclxuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoYCR7aX0ke2p9YClcclxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5hcHBlbmRDaGlsZChnYW1lQ2VsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGNvbXB1dGVyMS5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IChjb21wdXRlcjFbaV0ubGVuZ3RoKTsgaisrKSB7XHJcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KGAke2l9JHtqfWNvbXB1dGVyYClcclxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XHJcbiAgICAgICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKGdhbWVDZWxsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpXHJcbiAgICBidG5Db250YWluZXIuYXBwZW5kKG9yaWVudGF0aW9uQnRuLCByZXN0YXJ0QnRuKVxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVib2FyZHMpXHJcbiAgICBnYW1lYm9hcmRzLmFwcGVuZChwbGF5ZXJIZWFkZXIsIHBsYXllckdhbWVib2FyZCwgY29tcHV0ZXJIZWFkZXIsIGNvbXB1dGVyR2FtZWJvYXJkKVxyXG59XHJcblxyXG5jb25zdCB1cGRhdGVIZWFkZXIgPSAodGV4dCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcclxufVxyXG5cclxuY29uc3QgcmVzdGFydFVJID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XHJcbiAgICBtYWluLmlubmVySFRNTCA9ICcnXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZUNvbnRhaW5lciwgY3JlYXRlR2FtZUJvYXJkVUksIHVwZGF0ZUhlYWRlciwgcmVzdGFydFVJIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9