import './style.css';
import { createContainer, createGameBoardUI, updateHeader, restartUI } from './domManip.js';
import { shipFactory, player, computer, gameBoardFactory } from './factories';
import { userPlace, } from './playerPlace';
const initGame = () => {
    const player1 = player();
    const computer1 = computer();

    const playerSub = shipFactory("submarine", 3);
    const playerCarrier = shipFactory("carrier", 5);
    const playerBattleship = shipFactory('battleship', 4);
    const playerCruiser = shipFactory('cruiser', 3);
    const playerDestroyer = shipFactory('destroyer', 2);
    const playerPatrol = shipFactory('patrol', 1);

    const computerSub = shipFactory("submarine", 3);
    const computerCarrier = shipFactory("carrier", 5);
    const computerBattleship = shipFactory('battleship', 4);
    const computerCruiser = shipFactory('cruiser', 3);
    const computerDestroyer = shipFactory('destroyer', 2);
    const computerPatrol = shipFactory('patrol', 1);

    let playerShips = [playerSub, playerCarrier, playerBattleship, playerCruiser, playerDestroyer,playerPatrol]
   
    createContainer();
    createGameBoardUI(player1.playerBoard.arrayGetter(), computer1.computerBoard.arrayGetter());
    const restartBtn = document.getElementById('restartBtn');
    restartBtn.addEventListener('click', restartGame)
    userPlace(playerShips, player1, computer1, playerSub)


    CPUplace(computer1, computerSub);
    CPUplace(computer1, computerCarrier);
    CPUplace(computer1, computerBattleship);
    CPUplace(computer1, computerCruiser);
    CPUplace(computer1, computerDestroyer);
    CPUplace(computer1, computerPatrol);

    updateGameboard(player1, computer1);
    const computerGameboardDiv = document.getElementById('computerGameboard');
    computerGameboardDiv.addEventListener('click', e => {
        playGame(player1, computer1, e)
    })
}

const CPUplace = (computer, ship) => {
    let randomOrientation = Math.floor(Math.random() * 2);
    const intersectCheck = (computer, ship, r, c, orient) => {
        if (orient === 'vertical') {
            for (let i = 0; i < ship.length; i++) {
                if (computer.computerBoard.arrayGetter()[r + i][c] !== '') {
                    return false
                }
            }
            return true
        }
        else {
            for (let i = 0; i < ship.length; i++) {
                if (computer.computerBoard.arrayGetter()[r][c + i] !== '') {
                    return false
                }
            }
            return true
        }
    }

    if (randomOrientation === 1) {
        let r = Math.floor(Math.random() * (10 - ship.length));
        let c = Math.floor(Math.random() * 10);
        if (intersectCheck(computer, ship, r, c, 'vertical')) {
            computer.computerBoard.place(ship, r, c, 'vertical');
        }
        else { CPUplace(computer, ship) }

    } else {
        let r = Math.floor(Math.random() * 10);
        let c = Math.floor(Math.random() * (10 - ship.length));

        if (intersectCheck(computer, ship, r, c, 'horizontal')) {
            computer.computerBoard.place(ship, r, c, 'horizontal')
        }
        else { CPUplace(computer, ship) }
    }
}

const playGame = (player1, computer1, e) => {
    if (!gameOver(player1, computer1)) {
        player1.playerAttack(computer1.computerBoard, e)
        computer1.attack(player1.playerBoard)
    }
    updateGameboard(player1, computer1);
}

const gameOver = (player, computer) => {

    if (computer.computerBoard.shipsAliveGetter().length === 0 || player.playerBoard.shipsAliveGetter().length === 0) {
        updateHeader('Game Over! Press Restart to play again!')
        return true
    }
    return false
}

const updateGameboard = (player1, computer1) => {
    for (let i = 0; i < (player1.playerBoard.arrayGetter().length); i++) {
        for (let j = 0; j < (player1.playerBoard.arrayGetter()[i].length); j++) {

            let gameCell = document.getElementById(`${i}${j}`)
            if (typeof player1.playerBoard.arrayGetter()[i][j] === 'object') {
                let name = player1.playerBoard.arrayGetter()[i][j].name
                gameCell.classList.add(name)
            }
            else if (player1.playerBoard.arrayGetter()[i][j] === 'x') {
                gameCell.classList.add('empty')
            }
            else if (player1.playerBoard.arrayGetter()[i][j] === 'X') {
                gameCell.classList.add('hit')
            }
        }
    }
    for (let i = 0; i < (computer1.computerBoard.arrayGetter().length); i++) {
        for (let j = 0; j < (computer1.computerBoard.arrayGetter()[i].length); j++) {
            let gameCell = document.getElementById(`${i}${j}computer`)
            if (computer1.computerBoard.arrayGetter()[i][j] === 'x') {
                gameCell.classList.add('empty')
            }
            else if (computer1.computerBoard.arrayGetter()[i][j] === 'X') {
                gameCell.classList.add('hit')
            }
        }
    }
};

const restartGame = () => {
    restartUI();
    initGame();

}

initGame()

export { shipFactory, gameBoardFactory, player, computer, updateGameboard };