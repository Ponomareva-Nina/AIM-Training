const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const board = document.querySelector('#board');
let time = 20;
let timeCounter = document.querySelector('#time');


startBtn.addEventListener('click', () => {
    screens[0].classList.add('up');
})

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        screens[1].classList.add('up');
        time = parseInt(event.target.getAttribute('data-time'));
        startGame();
    }
})

//DEBUG
startGame();

function startGame() {
    setInterval(decreaseTime, 1000);
    timeCounter.innerHTML = `00:${time}`;
    createRandomCircle();

}

function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        timeCounter.innerHTML = `00:${current}`;
    }
}

function finishGame() {

}

function createRandomCircle() {
    let circle = document.createElement('div');

    let size = getRandomNumber(10, 60);

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}