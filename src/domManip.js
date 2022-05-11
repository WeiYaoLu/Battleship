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

export { createElement, createContainer, createGameBoardUI, updateHeader, restartUI };