import { updateGameboard } from "./index";
import { updateHeader } from "./domManip"

let currentShip;
const hover = (event) => {
    let beginIndex = parseInt(event.target.id);
    let orientationBtn = document.getElementById('orientBtn');
    if (orientationBtn.textContent === 'Horizontal') {
        if (beginIndex % 10 > (beginIndex + currentShip.length) % 10 && (beginIndex + currentShip.length) % 10 !== 0) {
        }
        else {
            for (let i = 0; i < currentShip.length; i++) {
                let index = beginIndex + i;
                if (index < 10) {
                    index = '0' + index;
                }
                let currentTar = document.getElementById(`${index}`);

                currentTar.classList.add('selected');
            }
        }
    } else {
        if ((beginIndex + currentShip.length * 10) > 110);
        else {
            for (let i = 0; i < currentShip.length * 10; i += 10) {
                let index = beginIndex + i;
                if (index < 10) {
                    index = '0' + index;
                }
                let currentTar = document.getElementById(`${index}`);

                currentTar.classList.add('selected');
            }
        }
    }

}
const orientBtn = () => {
    console.log('orient')
    let orientationBtn = document.getElementById('orientBtn');
    let playerBoard = document.getElementById('playerGameboard');
    if (orientationBtn.textContent === 'Horizontal') {
        orientationBtn.textContent = 'Vertical';
    } else {
        orientationBtn.textContent = 'Horizontal';
    }
    playerBoard.removeEventListener('mouseout', playerExit);
    playerBoard.removeEventListener('mouseover', hover);
    playerBoard.addEventListener('mouseover', hover);
    playerBoard.addEventListener('mouseout', playerExit);

}
const playerExit = (event) => {
    let beginIndex = parseInt(event.target.id);
    let orientationBtn = document.getElementById('orientBtn');
    if (orientationBtn.textContent === 'Horizontal') {
        for (let i = 0; i < currentShip.length; i++) {
            let index = beginIndex + i;
            if (index < 10) {
                index = '0' + index
            }
            let currentTar = document.getElementById(`${index}`);

            currentTar.classList.remove('selected');
        }
    } else {
        for (let i = 0; i < currentShip.length * 10; i += 10) {
            let index = beginIndex + i;

            if (index < 10) {
                index = '0' + index
                console.log(index);
            }
            let currentTar = document.getElementById(`${index}`);

            currentTar.classList.remove('selected');
        }
    }
}

const userPlace = (ships, player, computer, ship) => {
    const playerBoard = document.getElementById('playerGameboard');
    const orientationBtn = document.getElementById('orientBtn');
    currentShip = ship;

    playerBoard.removeEventListener('mouseout', playerExit);
    playerBoard.removeEventListener('mouseover', hover);
    playerBoard.addEventListener('mouseover', hover);
    playerBoard.addEventListener('mouseout', playerExit);
    orientationBtn.addEventListener('click', orientBtn);

    playerBoard.addEventListener('click', function (event) {
        let element = event.target.id;
        player.playerPlace(ship, parseInt(element[0]), parseInt(element[1]), orientationBtn.textContent.toLowerCase());
        updateGameboard(player, computer);
        ship.isPlacedSetter(true);
        playerExit(event)
        if (isShipPlaced(ships) !== true && player.playerBoard.shipsAliveGetter().includes(ship.name)) {
            userPlace(ships, player, computer, isShipPlaced(ships))
            updateHeader(`Place your ${isShipPlaced(ships).name} anywhere on the player board`)
        } else if (player.playerBoard.shipsAliveGetter().length < 5) {
            userPlace(ships, player, computer, ship)
        } else if (isShipPlaced(ships)) {
            let container = document.getElementById('btnContainer')
            container.removeChild(orientationBtn)
            playerBoard.removeEventListener('mouseout', playerExit);
            playerBoard.removeEventListener('mouseover', hover);
            updateHeader('Click on the computer board to attack!')
        }
    }, { once: true })
}

const isShipPlaced = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].isPlacedGetter()) {

            return arr[i]
        }
    }
    return true
}



export { hover, playerExit, userPlace, isShipPlaced }