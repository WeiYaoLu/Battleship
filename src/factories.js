

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


export { shipFactory, gameBoardFactory, player, computer }